import { NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase';
import type { ApiResponse, JobSourcesData } from '@/lib/types/hiring-market';

export async function GET() {
  try {
    const supabase = getSupabase();

    // Get distinct companies from Greenhouse data source
    const { data: greenhouseData, error: greenhouseError } = await supabase
      .from('enriched_jobs')
      .select('employer_name')
      .eq('data_source', 'greenhouse')
      .not('employer_name', 'is', null);

    if (greenhouseError) {
      throw new Error(`Greenhouse companies query failed: ${greenhouseError.message}`);
    }

    // Count unique Greenhouse companies
    const uniqueGreenhouseCompanies = new Set(greenhouseData?.map(r => r.employer_name) || []);
    const greenhouseSources = uniqueGreenhouseCompanies.size;

    // Adzuna: 1 API source
    const adzunaSources = 1;
    const totalSources = greenhouseSources + adzunaSources;

    const jobSourcesData: JobSourcesData = {
      greenhouse_sources: greenhouseSources,
      adzuna_sources: adzunaSources,
      total_sources: totalSources,
    };

    const response: ApiResponse<JobSourcesData> = {
      data: jobSourcesData,
      meta: {
        last_updated: new Date().toISOString(),
        total_records: totalSources,
        source: 'all',
      },
    };

    return NextResponse.json(response);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';

    console.error('Job sources endpoint error:', errorMessage);

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
