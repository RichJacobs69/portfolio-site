'use client';

import { useEffect, useState } from 'react';
import type { ApiResponse, TestConnectionData, JobSourcesData, GlobalFilters as FilterState } from '@/lib/types/hiring-market';
import GlobalFilters from './components/GlobalFilters';
import RoleDemandChart from './components/RoleDemandChart';

export default function HiringMarketPage() {
  const [connectionData, setConnectionData] = useState<TestConnectionData | null>(null);
  const [jobSources, setJobSources] = useState<JobSourcesData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<FilterState>({
    date_range: 30,
    city_code: 'lon',
    job_family: 'data',
  });
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  const [filteredCount, setFilteredCount] = useState<number>(0);

  useEffect(() => {
    async function fetchConnectionTest() {
      try {
        const [connectionResponse, sourcesResponse] = await Promise.all([
          fetch('/api/hiring-market/test-connection'),
          fetch('/api/hiring-market/job-sources'),
        ]);

        const connectionJson: ApiResponse<TestConnectionData> = await connectionResponse.json();
        const sourcesJson: ApiResponse<JobSourcesData> = await sourcesResponse.json();

        if (connectionJson.error) {
          setError(connectionJson.error);
        } else {
          setConnectionData(connectionJson.data);
          setLastUpdated(connectionJson.meta.last_updated);
        }

        if (!sourcesJson.error && sourcesJson.data) {
          setJobSources(sourcesJson.data);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch data');
      } finally {
        setLoading(false);
      }
    }

    fetchConnectionTest();
  }, []);

  const handleFiltersChange = (newFilters: FilterState) => {
    setFilters(newFilters);

    // Fetch the filtered count
    async function fetchFilteredCount() {
      try {
        const params = new URLSearchParams();
        if (newFilters.date_range) params.set('date_range', newFilters.date_range.toString());
        params.set('city_code', newFilters.city_code);
        params.set('job_family', newFilters.job_family);

        const response = await fetch(`/api/hiring-market/count?${params}`);
        const json: ApiResponse<{ total: number }> = await response.json();

        if (!json.error) {
          setFilteredCount(json.data.total);
        }
      } catch (err) {
        console.error('Failed to fetch filtered count:', err);
      }
    }

    fetchFilteredCount();
    // Charts will re-fetch data based on these filters
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Global Filters */}
      <GlobalFilters
        onFiltersChange={handleFiltersChange}
        lastUpdated={lastUpdated || undefined}
      />

      {/* Data Source Stats */}
      <section className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6 text-white">Data Overview</h2>

        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-6 animate-pulse"
              >
                <div className="h-4 bg-gray-700 rounded w-24 mb-4"></div>
                <div className="h-8 bg-gray-700 rounded w-16 mb-2"></div>
                <div className="h-3 bg-gray-700 rounded w-32"></div>
              </div>
            ))}
          </div>
        )}

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2 text-red-400">Error Loading Data</h3>
            <p className="text-gray-300 text-sm">{error}</p>
          </div>
        )}

        {connectionData && !loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-standard">
              <h3 className="text-sm font-medium text-gray-400 mb-2">Job Count</h3>
              <p className="text-3xl font-bold text-white mb-1">
                {filteredCount.toLocaleString()}
              </p>
              <p className="text-xs text-gray-500">Based on current filter selection</p>
            </div>

            <div className="card-standard">
              <h3 className="text-sm font-medium text-gray-400 mb-2">Total Job Dataset</h3>
              <p className="text-3xl font-bold text-white mb-1">
                {connectionData.enriched_jobs_count.toLocaleString()}
              </p>
              <p className="text-xs text-gray-500">Across all sources (all time, deduped)</p>
            </div>

            <div className="card-standard">
              <h3 className="text-sm font-medium text-gray-400 mb-2">Cities Tracked</h3>
              <p className="text-3xl font-bold text-white mb-1">3</p>
              <p className="text-xs text-gray-500">London, NYC, Denver</p>
            </div>

            <div className="card-standard">
              <h3 className="text-sm font-medium text-gray-400 mb-2">Total Job Sources</h3>
              <p className="text-3xl font-bold text-white mb-1">
                {jobSources ? jobSources.total_sources.toLocaleString() : '-'}
              </p>
              <p className="text-xs text-gray-500">Greenhouse + Adzuna</p>
            </div>
          </div>
        )}
      </section>

      {/* Charts Section */}
      <section className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-6 py-12">
        <RoleDemandChart filters={filters} />
      </section>

      {/* About This Data */}
      <section className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-6 py-12 pb-16">
        <div className="bg-lime-500/5 border border-lime-500/10 rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-3 text-lime-400">About This Data</h3>
          <div className="text-gray-300 text-sm space-y-2 leading-relaxed">
            <p>
              This dashboard dedupes, enriches and aggregates job postings from both direct employer and aggregator sources,
              focusing on data and product roles in major tech hubs. staffing agencies are excluded.
            </p>
            <p className="text-xs text-gray-500">
              Data pipeline: Python + LLM classification → Supabase → Next.js API routes
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
