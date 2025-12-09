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
      .select('city_code, job_subfamily, last_seen_date')
      .not('city_code', 'is', null)
      .not('job_subfamily', 'is', null);

    // Apply city_code filter (multi-select, case-insensitive)
    const cityCodes = parseCommaSeparatedParam(cityCodeParam);
    if (cityCodes) {
      query = query.in('city_code', cityCodes);
    }

    // Apply job_family filter (case-insensitive)
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

    // Execute query
    const { data, error } = await query;

    if (error) {
      throw new Error(`Role demand query failed: ${error.message}`);
    }

    // Group and count in JavaScript
    const grouped: Record<string, number> = {};

    data?.forEach((row) => {
      const key = `${row.city_code}|${row.job_subfamily}`;
      grouped[key] = (grouped[key] || 0) + 1;
    });

    // Convert to array format
    const roleDemandData: RoleDemandData[] = Object.entries(grouped).map(
      ([key, count]) => {
        const [city_code, job_subfamily] = key.split('|');
        return { city_code, job_subfamily, count };
      }
    );

    // Sort by count descending
    roleDemandData.sort((a, b) => b.count - a.count);

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

    const response: ApiResponse<RoleDemandData[]> = {
      data: roleDemandData,
      meta: {
        last_updated: lastUpdated?.last_seen_date || new Date().toISOString(),
        total_records: roleDemandData.length,
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
