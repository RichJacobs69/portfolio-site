'use client';

import { useState, useEffect } from 'react';
import type { GlobalFilters as FilterState, JobCountData, ApiResponse } from '@/lib/types/hiring-market';
import CustomSelect from './CustomSelect';

interface GlobalFiltersProps {
  onFiltersChange: (filters: FilterState) => void;
  lastUpdated?: string;
}

export default function GlobalFilters({ onFiltersChange, lastUpdated }: GlobalFiltersProps) {
  const [filters, setFilters] = useState<FilterState>({
    date_range: 30,
    city_code: 'lon',
    job_family: 'data',
  });

  const [jobCount, setJobCount] = useState<number | null>(null);
  const [loadingCount, setLoadingCount] = useState(false);

  // Fetch job count whenever filters change
  useEffect(() => {
    async function fetchCount() {
      setLoadingCount(true);
      try {
        const params = new URLSearchParams();
        if (filters.date_range) params.set('date_range', filters.date_range.toString());
        params.set('city_code', filters.city_code);
        params.set('job_family', filters.job_family);

        const response = await fetch(`/api/hiring-market/count?${params}`);
        const json: ApiResponse<JobCountData> = await response.json();

        if (!json.error) {
          setJobCount(json.data.total);
        }
      } catch (err) {
        console.error('Failed to fetch job count:', err);
      } finally {
        setLoadingCount(false);
      }
    }

    fetchCount();
    onFiltersChange(filters);
  }, [filters, onFiltersChange]);

  const handleFilterChange = <K extends keyof FilterState>(
    key: K,
    value: FilterState[K]
  ) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleReset = () => {
    setFilters({
      date_range: 30,
      city_code: 'lon',
      job_family: 'data',
    });
  };

  // Format relative time
  const getRelativeTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffHours / 24);

    if (diffHours < 1) return 'Less than an hour ago';
    if (diffHours < 24) return `${diffHours} hour${diffHours === 1 ? '' : 's'} ago`;
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="border-b border-gray-800/50 bg-[#0a0a0a]">
      <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-6 py-6">
        {/* Header with title and last updated */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-white">Hiring Market Dashboard</h1>
          {lastUpdated && (
            <div
              className="text-sm text-gray-500"
              title={new Date(lastUpdated).toLocaleString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                timeZoneName: 'short',
              })}
            >
              Last updated: {getRelativeTime(lastUpdated)}
            </div>
          )}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-4">
          {/* Date Range */}
          <CustomSelect
            value={filters.date_range?.toString() ?? 'all'}
            options={[
              { value: '7', label: 'Last 7 days' },
              { value: '30', label: 'Last 30 days' },
              { value: '90', label: 'Last 90 days' },
              { value: 'all', label: 'All time' },
            ]}
            onChange={(value) =>
              handleFilterChange(
                'date_range',
                value === 'all' ? null : Number(value) as 7 | 30 | 90
              )
            }
            className="bg-[#1a1a1a] border border-gray-800 text-white rounded-lg px-4 py-2 text-sm hover:border-gray-700 focus:border-lime-500 focus:outline-none transition-all duration-200 ease-in-out hover:bg-[#222222]"
          />

          {/* City */}
          <CustomSelect
            value={filters.city_code}
            options={[
              { value: 'lon', label: 'London' },
              { value: 'nyc', label: 'New York City' },
              { value: 'den', label: 'Denver' },
            ]}
            onChange={(value) =>
              handleFilterChange('city_code', value as FilterState['city_code'])
            }
            className="bg-[#1a1a1a] border border-gray-800 text-white rounded-lg px-4 py-2 text-sm hover:border-gray-700 focus:border-lime-500 focus:outline-none transition-all duration-200 ease-in-out hover:bg-[#222222]"
          />

          {/* Job Family */}
          <CustomSelect
            value={filters.job_family}
            options={[
              { value: 'data', label: 'Data' },
              { value: 'product', label: 'Product' },
            ]}
            onChange={(value) =>
              handleFilterChange('job_family', value as FilterState['job_family'])
            }
            className="bg-[#1a1a1a] border border-gray-800 text-white rounded-lg px-4 py-2 text-sm hover:border-gray-700 focus:border-lime-500 focus:outline-none transition-all duration-200 ease-in-out hover:bg-[#222222]"
          />

          {/* Reset Button */}
          <button
            onClick={handleReset}
            className="text-sm text-gray-400 hover:text-lime-400 transition-colors duration-200 px-3 py-2"
          >
            Reset Filters
          </button>
        </div>

        {/* Job Count */}
        <div className="text-sm text-gray-400">
          {jobCount !== null ? (
            <span className="inline-flex items-center gap-2">
              <span>
                <span className="font-semibold text-white">{jobCount.toLocaleString()}</span> jobs
              </span>
              {loadingCount && (
                <svg
                  className="animate-spin h-3 w-3 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              )}
              {jobCount === 0 && !loadingCount && (
                <span className="text-amber-400">
                  No jobs found matching these filters
                </span>
              )}
              {jobCount > 0 && jobCount < 30 && !loadingCount && (
                <span className="text-amber-400">Small sample</span>
              )}
            </span>
          ) : (
            loadingCount && <div className="h-5 w-24 bg-gray-800 animate-pulse rounded"></div>
          )}
        </div>
      </div>
    </div>
  );
}
