import { NextRequest, NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase';
import { normalizeString, parseCommaSeparatedParam } from '@/lib/api-utils';
import type { ApiResponse, JobCountData } from '@/lib/types/hiring-market';

export async function GET(request: NextRequest) {
  try {
    const supabase = getSupabase();
    const searchParams = request.nextUrl.searchParams;

    // Parse query parameters (names match DB schema columns)
    const cityCodeParam = searchParams.get('city_code'); // "all" or comma-separated: "lon,nyc,den"
    const jobFamilyParam = searchParams.get('job_family'); // e.g., "all", "product", "data"
    const dateRangeParam = searchParams.get('date_range'); // e.g., "30", "60", "90" (days), or null for all time

    // Build query - start with count
    let query = supabase
      .from('enriched_jobs')
      .select('*', { count: 'exact', head: true });

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

    // Execute query
    const { count, error } = await query;

    if (error) {
      throw new Error(`Count query failed: ${error.message}`);
    }

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

    const response: ApiResponse<JobCountData> = {
      data: {
        total: count || 0,
      },
      meta: {
        last_updated: lastUpdated?.last_seen_date || new Date().toISOString(),
        total_records: count || 0,
        source: 'all',
      },
    };

    return NextResponse.json(response);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';

    return NextResponse.json(
      {
        data: {
          total: 0,
        },
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
