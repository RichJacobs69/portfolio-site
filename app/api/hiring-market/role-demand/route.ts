import { NextRequest, NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase';
import { normalizeString, parseCommaSeparatedParam } from '@/lib/api-utils';
import type { ApiResponse, RoleDemandData } from '@/lib/types/hiring-market';

export async function GET(request: NextRequest) {
  try {
    const supabase = getSupabase();
    const searchParams = request.nextUrl.searchParams;

    // Parse query parameters (names match DB schema columns)
    const cityCodeParam = searchParams.get('city_code'); // comma-separated: "lon,nyc,den"
    const jobFamilyParam = searchParams.get('job_family'); // e.g., "product", "data"
    const dateRangeParam = searchParams.get('date_range'); // e.g., "30", "60", "90" (days)

    // Build query
    let query = supabase
      .from('enriched_jobs')
      .select('city_code, job_subfamily, job_family, last_seen_date')
      .not('city_code', 'is', null)
      .not('job_subfamily', 'is', null)
      .not('job_family', 'is', null);

    // Apply city_code filter (always required now - no "all" option)
    if (cityCodeParam) {
      const cityCodes = parseCommaSeparatedParam(cityCodeParam);
      if (cityCodes) {
        query = query.in('city_code', cityCodes);
      }
    }

    // Apply job_family filter (always required now - no "all" option)
    if (jobFamilyParam) {
      const normalizedJobFamily = normalizeString(jobFamilyParam);
      query = query.eq('job_family', normalizedJobFamily);
    }

    // Apply date range filter (last N days)
    if (dateRangeParam) {
      const daysAgo = parseInt(dateRangeParam, 10);
      if (!isNaN(daysAgo) && daysAgo > 0) {
        const cutoffDate = new Date();
        cutoffDate.setDate(cutoffDate.getDate() - daysAgo);
        query = query.gte('last_seen_date', cutoffDate.toISOString());
      }
    }

    // Execute query with pagination to bypass 1,000 row limit
    let allData: any[] = [];
    let offset = 0;
    const pageSize = 1000;
    let hasMore = true;

    while (hasMore) {
      const { data, error } = await query.range(offset, offset + pageSize - 1);

      if (error) {
        throw new Error(`Role demand query failed: ${error.message}`);
      }

      if (data && data.length > 0) {
        allData = allData.concat(data);
        offset += pageSize;
        hasMore = data.length === pageSize; // Continue if we got a full page
      } else {
        hasMore = false;
      }
    }

    // Group and count in JavaScript
    const grouped: Record<string, { job_family: string; count: number }> = {};

    allData.forEach((row) => {
      const key = `${row.city_code}|${row.job_subfamily}`;
      if (!grouped[key]) {
        grouped[key] = { job_family: row.job_family, count: 0 };
      }
      grouped[key].count += 1;
    });

    // Convert to array format
    const roleDemandData: RoleDemandData[] = Object.entries(grouped).map(
      ([key, value]) => {
        const [city_code, job_subfamily] = key.split('|');
        return { city_code, job_subfamily, job_family: value.job_family, count: value.count };
      }
    );

    // Sort by job_family first (data before product), then by count descending within each family
    roleDemandData.sort((a, b) => {
      // Sort by job_family first (data < product alphabetically)
      if (a.job_family !== b.job_family) {
        return a.job_family.localeCompare(b.job_family);
      }
      // Within same family, sort by count descending
      return b.count - a.count;
    });

    // Get last updated timestamp
    const { data: lastUpdated, error: lastUpdatedError } = await supabase
      .from('enriched_jobs')
      .select('last_seen_date')
      .order('last_seen_date', { ascending: false })
      .limit(1)
      .single();

    if (lastUpdatedError && lastUpdatedError.code !== 'PGRST116') {
      throw new Error(`Last updated query failed: ${lastUpdatedError.message}`);
    }

    // Calculate total job count (sum of all counts)
    const totalJobCount = roleDemandData.reduce((sum, item) => sum + item.count, 0);

    const response: ApiResponse<RoleDemandData[]> = {
      data: roleDemandData,
      meta: {
        last_updated: lastUpdated?.last_seen_date || new Date().toISOString(),
        total_records: totalJobCount,
        source: 'all',
      },
    };

    return NextResponse.json(response);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';

    return NextResponse.json(
      {
        data: [],
        meta: {
          last_updated: new Date().toISOString(),
          total_records: 0,
          source: 'all',
        },
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}
