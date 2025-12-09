'use client';

import { useEffect, useState } from 'react';
import type { ApiResponse, TestConnectionData } from '@/lib/types/hiring-market';

export default function HiringMarketPage() {
  const [connectionData, setConnectionData] = useState<TestConnectionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchConnectionTest() {
      try {
        const response = await fetch('/api/hiring-market/test-connection');
        const json: ApiResponse<TestConnectionData> = await response.json();

        if (json.error) {
          setError(json.error);
        } else {
          setConnectionData(json.data);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch data');
      } finally {
        setLoading(false);
      }
    }

    fetchConnectionTest();
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full border-b border-gray-800/50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-lime-950/10 via-transparent to-emerald-950/10"></div>
        <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-6 py-16 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Hiring Market Dashboard
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mb-4">
            Real-time insights into job market trends across London, NYC, and Denver.
            Analyzing {connectionData?.enriched_jobs_count.toLocaleString() || '5,600+'} job postings
            to help you understand role demand, skill requirements, and hiring patterns.
          </p>
          <a
            href="/projects/hiring-market/api-docs"
            className="text-lime-400 hover:text-lime-300 text-sm font-medium inline-flex items-center gap-2 transition-colors"
          >
            View API Documentation
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* Data Source Stats */}
      <section className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6 text-white">Data Overview</h2>

        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-standard">
              <h3 className="text-sm font-medium text-gray-400 mb-2">Total Job Postings</h3>
              <p className="text-3xl font-bold text-white mb-1">
                {connectionData.enriched_jobs_count.toLocaleString()}
              </p>
              <p className="text-xs text-gray-500">Across all sources</p>
            </div>

            <div className="card-standard">
              <h3 className="text-sm font-medium text-gray-400 mb-2">Premium Companies</h3>
              <p className="text-3xl font-bold text-white mb-1">
                {connectionData.greenhouse_count.toLocaleString()}
              </p>
              <p className="text-xs text-gray-500">Full Job Taxonomies (high quality)</p>
            </div>

            <div className="card-standard">
              <h3 className="text-sm font-medium text-gray-400 mb-2">Cities Tracked</h3>
              <p className="text-3xl font-bold text-white mb-1">
                {connectionData.cities.length}
              </p>
              <p className="text-xs text-gray-500">
                {connectionData.cities.slice(0, 3).join(', ')}
              </p>
            </div>
          </div>
        )}
      </section>

      {/* Coming Soon Section */}
      <section className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6 text-white">Interactive Visualizations</h2>
        <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-8 text-center">
          <div className="max-w-md mx-auto">
            <div className="w-16 h-16 bg-lime-500/10 border border-lime-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-lime-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">Charts Coming Soon</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Interactive charts for role demand, skills analysis, working arrangements,
              top hiring companies, and experience level distribution will appear here.
            </p>
          </div>
        </div>
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
