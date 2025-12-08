'use client';

import { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip as ChartJSTooltip,
  Legend as ChartJSLegend,
} from 'chart.js';
import { Bar as ChartJSBar } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ChartJSTooltip,
  ChartJSLegend
);

// Sample data matching your job market schema
const sampleData = [
  { role: 'Data Engineer', london: 145, nyc: 98, denver: 42 },
  { role: 'Data Scientist', london: 112, nyc: 134, denver: 28 },
  { role: 'Analytics Engineer', london: 67, nyc: 45, denver: 31 },
  { role: 'ML Engineer', london: 89, nyc: 76, denver: 19 },
  { role: 'Product Manager', london: 156, nyc: 189, denver: 67 },
];

// Your exact color palette
const colors = {
  lime: '#84cc16',
  emerald: '#10b981',
  cyan: '#06b6d4',
  background: '#0a0a0a',
  card: '#1a1a1a',
  border: '#2a2a2a',
  text: '#ededed',
  textMuted: '#9ca3af',
};

export default function ChartTestPage() {
  const [activeTab, setActiveTab] = useState<'recharts' | 'chartjs'>('recharts');

  // Chart.js configuration
  const chartJSData = {
    labels: sampleData.map((d) => d.role),
    datasets: [
      {
        label: 'London',
        data: sampleData.map((d) => d.london),
        backgroundColor: colors.lime,
        borderColor: colors.lime,
        borderWidth: 0,
        borderRadius: 4,
      },
      {
        label: 'NYC',
        data: sampleData.map((d) => d.nyc),
        backgroundColor: colors.emerald,
        borderColor: colors.emerald,
        borderWidth: 0,
        borderRadius: 4,
      },
      {
        label: 'Denver',
        data: sampleData.map((d) => d.denver),
        backgroundColor: colors.cyan,
        borderColor: colors.cyan,
        borderWidth: 0,
        borderRadius: 4,
      },
    ],
  };

  const chartJSOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: colors.text,
          font: { family: 'var(--font-geist-sans)', size: 12 },
          padding: 20,
        },
      },
      title: {
        display: false,
      },
      tooltip: {
        backgroundColor: colors.card,
        titleColor: colors.text,
        bodyColor: colors.textMuted,
        borderColor: colors.border,
        borderWidth: 1,
        padding: 12,
        cornerRadius: 8,
      },
    },
    scales: {
      x: {
        grid: { color: colors.border, drawBorder: false },
        ticks: { color: colors.textMuted, font: { size: 11 } },
      },
      y: {
        grid: { color: colors.border, drawBorder: false },
        ticks: { color: colors.textMuted, font: { size: 11 } },
      },
    },
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="relative w-full border-b border-gray-800/50">
        <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold mb-4 gradient-text">
            Chart Library POC
          </h1>
          <p className="text-gray-400 text-lg">
            Comparing Recharts vs Chart.js with your exact design system colors.
            <br />
            <span className="text-sm">
              Tremor was excluded (incompatible with React 19).
            </span>
          </p>
        </div>
      </section>

      {/* Color Palette Reference */}
      <section className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-6 py-8">
        <h2 className="text-xl font-semibold mb-4 text-white">Color Palette</h2>
        <div className="flex gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <div
              className="w-6 h-6 rounded"
              style={{ backgroundColor: colors.lime }}
            />
            <span className="text-sm text-gray-400">Lime #84cc16</span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="w-6 h-6 rounded"
              style={{ backgroundColor: colors.emerald }}
            />
            <span className="text-sm text-gray-400">Emerald #10b981</span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="w-6 h-6 rounded"
              style={{ backgroundColor: colors.cyan }}
            />
            <span className="text-sm text-gray-400">Cyan #06b6d4</span>
          </div>
        </div>
      </section>

      {/* Tab Selector */}
      <section className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-6">
        <div className="flex gap-2 border-b border-gray-800">
          <button
            onClick={() => setActiveTab('recharts')}
            className={`px-6 py-3 font-medium transition-colors ${
              activeTab === 'recharts'
                ? 'text-lime-400 border-b-2 border-lime-400'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Recharts
          </button>
          <button
            onClick={() => setActiveTab('chartjs')}
            className={`px-6 py-3 font-medium transition-colors ${
              activeTab === 'chartjs'
                ? 'text-lime-400 border-b-2 border-lime-400'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Chart.js
          </button>
        </div>
      </section>

      {/* Chart Display */}
      <section className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-6 py-8">
        <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-2 text-white">
            Role Demand by City
          </h3>
          <p className="text-sm text-gray-400 mb-6">
            Sample data showing job posting counts by role and city
          </p>

          <div className="h-[400px]">
            {activeTab === 'recharts' ? (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={sampleData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke={colors.border}
                    vertical={false}
                  />
                  <XAxis
                    dataKey="role"
                    tick={{ fill: colors.textMuted, fontSize: 11 }}
                    axisLine={{ stroke: colors.border }}
                    tickLine={{ stroke: colors.border }}
                  />
                  <YAxis
                    tick={{ fill: colors.textMuted, fontSize: 11 }}
                    axisLine={{ stroke: colors.border }}
                    tickLine={{ stroke: colors.border }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: colors.card,
                      border: `1px solid ${colors.border}`,
                      borderRadius: '8px',
                      color: colors.text,
                    }}
                    cursor={{ fill: 'rgba(132, 204, 22, 0.1)' }}
                  />
                  <Legend
                    wrapperStyle={{ paddingTop: '20px' }}
                    formatter={(value) => (
                      <span style={{ color: colors.text }}>{value}</span>
                    )}
                  />
                  <Bar
                    dataKey="london"
                    name="London"
                    fill={colors.lime}
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar
                    dataKey="nyc"
                    name="NYC"
                    fill={colors.emerald}
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar
                    dataKey="denver"
                    name="Denver"
                    fill={colors.cyan}
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <ChartJSBar data={chartJSData} options={chartJSOptions} />
            )}
          </div>
        </div>
      </section>

      {/* Comparison Notes */}
      <section className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-6 py-8">
        <h2 className="text-xl font-semibold mb-6 text-white">
          Comparison Notes
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Recharts */}
          <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4 text-lime-400">
              Recharts
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-lime-400">+</span>
                Declarative, React-native API
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lime-400">+</span>
                Easy to customize with inline styles
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lime-400">+</span>
                Good dark mode support out of box
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lime-400">+</span>
                SVG-based (crisp on all screens)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500">-</span>
                Larger bundle size (~400KB)
              </li>
            </ul>
          </div>

          {/* Chart.js */}
          <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">
              Chart.js
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400">+</span>
                Smaller bundle (~60KB core)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400">+</span>
                Excellent performance with large datasets
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400">+</span>
                Canvas-based (faster rendering)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500">-</span>
                Config-heavy API (less React-like)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500">-</span>
                Tooltip styling more limited
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Recommendation */}
      <section className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-6 py-8 pb-16">
        <div className="bg-lime-500/10 border border-lime-500/20 rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-2 text-lime-400">
            Initial Assessment
          </h3>
          <p className="text-gray-300 text-sm">
            Both integrate well with your dark theme. <strong>Recharts</strong>{' '}
            offers a more React-native experience with easier styling.{' '}
            <strong>Chart.js</strong> is leaner but requires more configuration.
            For a portfolio project prioritizing visual polish, Recharts may
            offer faster iteration. Test both with real data before deciding.
          </p>
        </div>
      </section>
    </main>
  );
}
