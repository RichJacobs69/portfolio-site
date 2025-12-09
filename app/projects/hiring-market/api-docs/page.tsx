export default function ApiDocsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="relative w-full border-b border-gray-800/50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-lime-950/10 via-transparent to-emerald-950/10"></div>
        <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-6 py-16 relative z-10">
          <a
            href="/projects/hiring-market"
            className="text-gray-400 hover:text-lime-400 text-sm font-medium inline-flex items-center gap-2 transition-colors mb-4"
          >
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Dashboard
          </a>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            API Documentation
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
            REST API for querying job market data. All endpoints return JSON and support
            case-insensitive filtering.
          </p>
        </div>
      </section>

      {/* Base URL */}
      <section className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-6 py-8">
        <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-6">
          <h2 className="text-sm font-semibold text-gray-400 mb-2">Base URL</h2>
          <code className="text-lime-400 font-mono text-sm">
            https://richjacobs.me/api/hiring-market
          </code>
          <p className="text-xs text-gray-500 mt-2">
            Development: <code className="text-gray-400">http://localhost:3000/api/hiring-market</code>
          </p>
        </div>
      </section>

      {/* API Conventions */}
      <section className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold mb-6 text-white">API Conventions</h2>
        <div className="space-y-4">
          <div className="card-standard">
            <h3 className="text-lg font-semibold mb-2 text-lime-400">Parameter Naming</h3>
            <p className="text-gray-300 text-sm">
              All query parameters match database column names exactly (e.g., <code className="text-lime-300 bg-[#0a0a0a] px-2 py-1 rounded">city_code</code>, <code className="text-lime-300 bg-[#0a0a0a] px-2 py-1 rounded">job_family</code>).
            </p>
          </div>

          <div className="card-standard">
            <h3 className="text-lg font-semibold mb-2 text-lime-400">Case Insensitivity</h3>
            <p className="text-gray-300 text-sm mb-2">
              String parameters are case-insensitive. These are equivalent:
            </p>
            <ul className="text-sm text-gray-400 space-y-1 font-mono">
              <li>?job_family=<span className="text-lime-300">product</span></li>
              <li>?job_family=<span className="text-lime-300">Product</span></li>
              <li>?job_family=<span className="text-lime-300">PRODUCT</span></li>
            </ul>
          </div>

          <div className="card-standard">
            <h3 className="text-lg font-semibold mb-2 text-lime-400">Response Format</h3>
            <p className="text-gray-300 text-sm mb-3">
              All endpoints return a consistent JSON envelope:
            </p>
            <pre className="bg-[#0a0a0a] p-4 rounded-lg overflow-x-auto text-xs">
              <code className="text-gray-300">{`{
  "data": [...],           // Response payload
  "meta": {
    "last_updated": "2025-11-14T12:00:00Z",
    "total_records": 42,
    "source": "all"       // "all" | "greenhouse" | "adzuna"
  },
  "error": "..."          // Present only on errors
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Common Parameters */}
      <section className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold mb-6 text-white">Common Query Parameters</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-[#1a1a1a]">
              <tr>
                <th className="border border-gray-800 px-4 py-3 text-left text-sm font-semibold text-white">
                  Parameter
                </th>
                <th className="border border-gray-800 px-4 py-3 text-left text-sm font-semibold text-white">
                  Type
                </th>
                <th className="border border-gray-800 px-4 py-3 text-left text-sm font-semibold text-white">
                  Description
                </th>
                <th className="border border-gray-800 px-4 py-3 text-left text-sm font-semibold text-white">
                  Example
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-[#1a1a1a]/50">
                <td className="border border-gray-800 px-4 py-3 text-sm font-mono text-lime-300">
                  city_code
                </td>
                <td className="border border-gray-800 px-4 py-3 text-sm text-gray-400">
                  string
                </td>
                <td className="border border-gray-800 px-4 py-3 text-sm text-gray-300">
                  Comma-separated city codes
                </td>
                <td className="border border-gray-800 px-4 py-3 text-sm font-mono text-gray-400">
                  lon,nyc,den
                </td>
              </tr>
              <tr className="hover:bg-[#1a1a1a]/50 bg-[#1a1a1a]/30">
                <td className="border border-gray-800 px-4 py-3 text-sm font-mono text-lime-300">
                  job_family
                </td>
                <td className="border border-gray-800 px-4 py-3 text-sm text-gray-400">
                  string
                </td>
                <td className="border border-gray-800 px-4 py-3 text-sm text-gray-300">
                  Job family filter
                </td>
                <td className="border border-gray-800 px-4 py-3 text-sm font-mono text-gray-400">
                  product, data, engineering
                </td>
              </tr>
              <tr className="hover:bg-[#1a1a1a]/50">
                <td className="border border-gray-800 px-4 py-3 text-sm font-mono text-lime-300">
                  seniority
                </td>
                <td className="border border-gray-800 px-4 py-3 text-sm text-gray-400">
                  string
                </td>
                <td className="border border-gray-800 px-4 py-3 text-sm text-gray-300">
                  Seniority level
                </td>
                <td className="border border-gray-800 px-4 py-3 text-sm font-mono text-gray-400">
                  junior, mid, senior, staff
                </td>
              </tr>
              <tr className="hover:bg-[#1a1a1a]/50 bg-[#1a1a1a]/30">
                <td className="border border-gray-800 px-4 py-3 text-sm font-mono text-lime-300">
                  working_arrangement
                </td>
                <td className="border border-gray-800 px-4 py-3 text-sm text-gray-400">
                  string
                </td>
                <td className="border border-gray-800 px-4 py-3 text-sm text-gray-300">
                  Work location type
                </td>
                <td className="border border-gray-800 px-4 py-3 text-sm font-mono text-gray-400">
                  remote, hybrid, onsite
                </td>
              </tr>
              <tr className="hover:bg-[#1a1a1a]/50">
                <td className="border border-gray-800 px-4 py-3 text-sm font-mono text-lime-300">
                  data_source
                </td>
                <td className="border border-gray-800 px-4 py-3 text-sm text-gray-400">
                  string
                </td>
                <td className="border border-gray-800 px-4 py-3 text-sm text-gray-300">
                  Filter by data source
                </td>
                <td className="border border-gray-800 px-4 py-3 text-sm font-mono text-gray-400">
                  adzuna, greenhouse
                </td>
              </tr>
              <tr className="hover:bg-[#1a1a1a]/50 bg-[#1a1a1a]/30">
                <td className="border border-gray-800 px-4 py-3 text-sm font-mono text-lime-300">
                  date_range
                </td>
                <td className="border border-gray-800 px-4 py-3 text-sm text-gray-400">
                  integer
                </td>
                <td className="border border-gray-800 px-4 py-3 text-sm text-gray-300">
                  Filter to last N days
                </td>
                <td className="border border-gray-800 px-4 py-3 text-sm font-mono text-gray-400">
                  30, 60, 90
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Endpoints */}
      <section className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold mb-6 text-white">Endpoints</h2>

        <div className="space-y-8">
          {/* Test Connection */}
          <div className="card-standard">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded text-emerald-400 text-xs font-bold">
                GET
              </span>
              <code className="text-lime-400 font-mono text-sm">/test-connection</code>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Returns database statistics and connection health check.
            </p>
            <div className="bg-[#0a0a0a] p-4 rounded-lg">
              <p className="text-xs text-gray-500 mb-2">Example Response:</p>
              <pre className="text-xs overflow-x-auto">
                <code className="text-gray-300">{`{
  "data": {
    "enriched_jobs_count": 5629,
    "raw_jobs_count": 6842,
    "greenhouse_count": 953,
    "cities": ["lon", "nyc", "den"]
  },
  "meta": {
    "last_updated": "2025-11-14T12:00:00Z",
    "total_records": 5629,
    "source": "all"
  }
}`}</code>
              </pre>
            </div>
          </div>

          {/* Role Demand */}
          <div className="card-standard">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded text-emerald-400 text-xs font-bold">
                GET
              </span>
              <code className="text-lime-400 font-mono text-sm">/role-demand</code>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Returns job posting counts grouped by city and role subfamily.
            </p>

            <div className="mb-4">
              <p className="text-xs text-gray-500 mb-2">Query Parameters:</p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li><code className="text-lime-300 font-mono">city_code</code> - Filter by cities (optional)</li>
                <li><code className="text-lime-300 font-mono">job_family</code> - Filter by job family (optional)</li>
                <li><code className="text-lime-300 font-mono">date_range</code> - Last N days (optional)</li>
              </ul>
            </div>

            <div className="bg-[#0a0a0a] p-4 rounded-lg mb-4">
              <p className="text-xs text-gray-500 mb-2">Example Request:</p>
              <code className="text-lime-400 text-xs break-all">
                GET /api/hiring-market/role-demand?job_family=product&city_code=lon,nyc
              </code>
            </div>

            <div className="bg-[#0a0a0a] p-4 rounded-lg">
              <p className="text-xs text-gray-500 mb-2">Example Response:</p>
              <pre className="text-xs overflow-x-auto">
                <code className="text-gray-300">{`{
  "data": [
    { "city_code": "lon", "job_subfamily": "core_pm", "count": 145 },
    { "city_code": "nyc", "job_subfamily": "core_pm", "count": 189 },
    { "city_code": "lon", "job_subfamily": "technical_pm", "count": 67 }
  ],
  "meta": {
    "last_updated": "2025-11-14T12:00:00Z",
    "total_records": 3,
    "source": "all"
  }
}`}</code>
              </pre>
            </div>
          </div>

          {/* Coming Soon Placeholder */}
          <div className="card-standard opacity-60">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-gray-700/20 border border-gray-700/40 rounded text-gray-400 text-xs font-bold">
                GET
              </span>
              <code className="text-gray-500 font-mono text-sm">/top-skills</code>
              <span className="text-xs text-gray-500 italic">Coming in Phase 2</span>
            </div>
            <p className="text-gray-400 text-sm">
              Returns most frequently listed skills for a given role and city.
            </p>
          </div>

          <div className="card-standard opacity-60">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-gray-700/20 border border-gray-700/40 rounded text-gray-400 text-xs font-bold">
                GET
              </span>
              <code className="text-gray-500 font-mono text-sm">/working-arrangement</code>
              <span className="text-xs text-gray-500 italic">Coming in Phase 3</span>
            </div>
            <p className="text-gray-400 text-sm">
              Returns remote/hybrid/onsite split by role.
            </p>
          </div>

          <div className="card-standard opacity-60">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-gray-700/20 border border-gray-700/40 rounded text-gray-400 text-xs font-bold">
                GET
              </span>
              <code className="text-gray-500 font-mono text-sm">/top-companies</code>
              <span className="text-xs text-gray-500 italic">Coming in Phase 3</span>
            </div>
            <p className="text-gray-400 text-sm">
              Returns top hiring companies by posting count.
            </p>
          </div>

          <div className="card-standard opacity-60">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-gray-700/20 border border-gray-700/40 rounded text-gray-400 text-xs font-bold">
                GET
              </span>
              <code className="text-gray-500 font-mono text-sm">/experience-distribution</code>
              <span className="text-xs text-gray-500 italic">Coming in Phase 3</span>
            </div>
            <p className="text-gray-400 text-sm">
              Returns seniority level distribution by role.
            </p>
          </div>
        </div>
      </section>

      {/* Error Handling */}
      <section className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-6 py-8 pb-16">
        <h2 className="text-2xl font-bold mb-6 text-white">Error Handling</h2>
        <div className="card-standard">
          <p className="text-gray-300 text-sm mb-4">
            All endpoints return HTTP 500 on errors with a descriptive error message:
          </p>
          <div className="bg-[#0a0a0a] p-4 rounded-lg">
            <pre className="text-xs overflow-x-auto">
              <code className="text-gray-300">{`{
  "data": [],
  "meta": {
    "last_updated": "2025-11-14T12:00:00Z",
    "total_records": 0,
    "source": "all"
  },
  "error": "Role demand query failed: connection timeout"
}`}</code>
            </pre>
          </div>
        </div>
      </section>
    </main>
  );
}
