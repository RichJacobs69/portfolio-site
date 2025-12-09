import { NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase';
import type { ApiResponse, TestConnectionData } from '@/lib/types/hiring-market';

export async function GET() {
  try {
    const supabase = getSupabase();

    // Get total enriched jobs count
    const { count: enrichedCount, error: enrichedError } = await supabase
      .from('enriched_jobs')
      .select('*', { count: 'exact', head: true });

    if (enrichedError) {
      throw new Error(`Enriched jobs query failed: ${enrichedError.message}`);
    }

    // Get raw jobs count
    const { count: rawCount, error: rawError } = await supabase
      .from('raw_jobs')
      .select('*', { count: 'exact', head: true });

    if (rawError) {
      throw new Error(`Raw jobs query failed: ${rawError.message}`);
    }

    // Get Greenhouse-only count (high quality data)
    const { count: greenhouseCount, error: greenhouseError } = await supabase
      .from('enriched_jobs')
      .select('*', { count: 'exact', head: true })
      .eq('data_source', 'greenhouse');

    if (greenhouseError) {
      throw new Error(`Greenhouse count query failed: ${greenhouseError.message}`);
    }

    // Get distinct cities
    const { data: citiesData, error: citiesError } = await supabase
      .from('enriched_jobs')
      .select('city_code')
      .not('city_code', 'is', null);

    if (citiesError) {
      throw new Error(`Cities query failed: ${citiesError.message}`);
    }

    const uniqueCities = [...new Set(citiesData?.map(r => r.city_code) || [])];

    // Get last updated timestamp (using last_seen_date which tracks when jobs were last scraped)
    const { data: lastUpdated, error: lastUpdatedError } = await supabase
      .from('enriched_jobs')
      .select('last_seen_date')
      .order('last_seen_date', { ascending: false })
      .limit(1)
      .single();

    if (lastUpdatedError && lastUpdatedError.code !== 'PGRST116') {
      throw new Error(`Last updated query failed: ${lastUpdatedError.message}`);
    }

    const response: ApiResponse<TestConnectionData> = {
      data: {
        enriched_jobs_count: enrichedCount || 0,
        raw_jobs_count: rawCount || 0,
        greenhouse_count: greenhouseCount || 0,
        cities: uniqueCities,
      },
      meta: {
        last_updated: lastUpdated?.last_seen_date || new Date().toISOString(),
        total_records: enrichedCount || 0,
        source: 'all',
      },
    };

    return NextResponse.json(response);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';

    return NextResponse.json(
      {
        data: null,
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
