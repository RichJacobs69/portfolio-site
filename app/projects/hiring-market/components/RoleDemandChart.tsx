'use client';

import { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import type { ApiResponse, RoleDemandData, GlobalFilters } from '@/lib/types/hiring-market';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface RoleDemandChartProps {
  filters: GlobalFilters;
}

export default function RoleDemandChart({ filters }: RoleDemandChartProps) {
  const [chartData, setChartData] = useState<RoleDemandData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalRecords, setTotalRecords] = useState(0);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);

      try {
        const params = new URLSearchParams();
        if (filters.date_range) params.set('date_range', filters.date_range.toString());
        if (filters.city_code !== 'all') params.set('city_code', filters.city_code);
        if (filters.job_family !== 'all') params.set('job_family', filters.job_family);

        const response = await fetch(`/api/hiring-market/role-demand?${params}`);
        const json: ApiResponse<RoleDemandData[]> = await response.json();

        if (json.error) {
          setError(json.error);
        } else {
          setChartData(json.data);
          setTotalRecords(json.meta.total_records);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch data');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [filters]);

  // Transform data for Chart.js with gradient coloring by count
  const prepareChartData = () => {
    if (chartData.length === 0) return null;

    // Get unique subfamilies (only one city now)
    const subfamilies = Array.from(new Set(chartData.map((d) => d.job_subfamily)));

    // Get counts for each subfamily
    const counts = subfamilies.map((subfamily) => {
      const item = chartData.find((d) => d.job_subfamily === subfamily);
      return item ? item.count : 0;
    });

    // Calculate min and max for gradient
    const maxCount = Math.max(...counts);
    const minCount = Math.min(...counts.filter(c => c > 0));

    // Generate gradient colors using lime at varying intensities
    // Low count: lighter/more transparent lime, High count: more saturated/darker lime
    const getGradientColor = (count: number) => {
      if (count === 0) return 'rgba(156, 163, 175, 0.3)'; // gray for zero

      const ratio = maxCount === minCount ? 1 : (count - minCount) / (maxCount - minCount);

      // Use lime (#84cc16 = rgb(132, 204, 22)) at varying brightness
      // Mix with white for lighter shades (low count) and use pure/darker for high count
      const lightnessAdjust = 0.3 + (ratio * 0.7); // 0.3 to 1.0 range

      const r = Math.round(132 + (255 - 132) * (1 - lightnessAdjust));
      const g = Math.round(204 + (255 - 204) * (1 - lightnessAdjust));
      const b = Math.round(22 + (255 - 22) * (1 - lightnessAdjust));

      return `rgba(${r}, ${g}, ${b}, 0.85)`;
    };

    const getBorderColor = (count: number) => {
      if (count === 0) return 'rgba(156, 163, 175, 0.5)';

      const ratio = maxCount === minCount ? 1 : (count - minCount) / (maxCount - minCount);

      const lightnessAdjust = 0.3 + (ratio * 0.7);
      const r = Math.round(132 + (255 - 132) * (1 - lightnessAdjust));
      const g = Math.round(204 + (255 - 204) * (1 - lightnessAdjust));
      const b = Math.round(22 + (255 - 22) * (1 - lightnessAdjust));

      return `rgb(${r}, ${g}, ${b})`;
    };

    const backgroundColors = counts.map(count => getGradientColor(count));
    const borderColors = counts.map(count => getBorderColor(count));

    return {
      labels: subfamilies,
      datasets: [{
        label: 'Job Postings',
        data: counts,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 2,
      }],
    };
  };

  const data = prepareChartData();

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2,
    plugins: {
      legend: {
        display: false, // Hide legend - colors represent job count gradient
      },
      title: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        titleColor: '#ffffff',
        bodyColor: '#d1d5db',
        borderColor: 'rgba(132, 204, 22, 0.3)',
        borderWidth: 1,
        padding: 12,
        displayColors: true,
        callbacks: {
          title: (context: any) => {
            return context[0].label;
          },
          label: (context: any) => {
            const value = context.parsed.y;
            return `${value} job${value !== 1 ? 's' : ''}`;
          },
          afterLabel: (context: any) => {
            return 'Color intensity represents volume';
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Remove grid lines
        },
        ticks: {
          color: '#9ca3af', // gray-400
          font: {
            family: 'Geist Sans, sans-serif',
            size: 11,
          },
          maxRotation: 45,
          minRotation: 45,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false, // Remove grid lines
        },
        ticks: {
          color: '#9ca3af',
          font: {
            family: 'Geist Sans, sans-serif',
            size: 11,
          },
        },
        title: {
          display: true,
          text: 'Number of Jobs',
          color: '#9ca3af',
          font: {
            family: 'Geist Sans, sans-serif',
            size: 12,
          },
        },
      },
    },
  };

  if (loading) {
    return (
      <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-6">
        <div className="h-96 flex items-center justify-center">
          <div className="flex items-center gap-3 text-gray-400">
            <svg
              className="animate-spin h-5 w-5"
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
            <span>Loading chart data...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-2 text-red-400">Error Loading Chart</h3>
        <p className="text-gray-300 text-sm">{error}</p>
      </div>
    );
  }

  if (!data || chartData.length === 0) {
    return (
      <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-6">
        <div className="h-96 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-400 mb-2">No data available for selected filters</p>
            <p className="text-gray-500 text-sm">Try adjusting your date range or city selection</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-6">
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-white mb-2">Role Demand</h3>
        <p className="text-sm text-gray-400">
          Number of job postings by role in selected city{' '}
          <span className="text-gray-500">• Color intensity indicates volume</span>
        </p>
      </div>

      <div className="relative">
        <Bar data={data} options={options} />
      </div>

      <div className="mt-4 pt-4 border-t border-gray-800">
        <p className="text-xs text-gray-500">
          Based on{' '}
          <span className="font-semibold text-gray-400">{totalRecords.toLocaleString()}</span>{' '}
          job listings (all sources)
        </p>
      </div>
    </div>
  );
}
