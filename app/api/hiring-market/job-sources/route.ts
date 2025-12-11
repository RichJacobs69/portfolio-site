import { NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';
import type { ApiResponse, JobSourcesData } from '@/lib/types/hiring-market';

export async function GET() {
  try {
    // Read company mapping from job-analytics config
    const configPath = join(process.cwd(), '..', 'job-analytics', 'config', 'company_ats_mapping.json');
    const configContent = readFileSync(configPath, 'utf-8');
    const config = JSON.parse(configContent);

    // Count Greenhouse companies
    const greenhouseSources = Object.keys(config.greenhouse || {}).length;

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
        source: 'greenhouse',
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
          source: 'greenhouse',
        },
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}
