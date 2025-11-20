'use client';

interface ProjectScore {
  dimension: string;
  benchmarking: string;
  benchmarkingScore: string;
  sales: string;
  salesScore: string;
}

interface ProjectComparisonProps {
  rows: ProjectScore[];
}

export default function ProjectComparison({ rows }: ProjectComparisonProps) {
  const colorMap: Record<string, string> = {
    'User Impact': 'text-orange-400',
    'Adoption': 'text-cyan-400',
    'Company Impact': 'text-blue-400',
    'Natural Ownership': 'text-purple-400',
    'Effort (inverse)': 'text-teal-400',
  };

  return (
    <div className="my-8 overflow-x-auto">
      <h3 className="text-lg font-semibold text-gray-200 mb-6">Project Comparison: How They Scored</h3>
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="text-left py-4 px-3 font-semibold text-gray-300">Dimension</th>
            <th className="text-left py-4 px-3 font-semibold text-gray-300">Customer Benchmarking Platform</th>
            <th className="text-center py-4 px-3 font-semibold text-gray-300">Score</th>
            <th className="text-left py-4 px-3 font-semibold text-gray-300">Internal Sales Agent</th>
            <th className="text-center py-4 px-3 font-semibold text-gray-300">Score</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => {
            const color = colorMap[row.dimension] || 'text-gray-400';
            const isTotal = row.dimension === 'TOTAL';
            const isDecision = row.dimension === 'Decision';

            return (
              <tr
                key={idx}
                className={`border-b border-gray-800 ${
                  isTotal || isDecision ? 'bg-gray-900/30 font-semibold' : 'hover:bg-gray-900/20 transition-colors'
                }`}
              >
                <td className={`py-4 px-3 ${color}`}>
                  {row.dimension}
                </td>
                <td className="py-4 px-3 text-gray-400">
                  {row.benchmarking}
                </td>
                <td className="py-4 px-3 text-center text-gray-300 font-medium">
                  {row.benchmarkingScore}
                </td>
                <td className="py-4 px-3 text-gray-400">
                  {row.sales}
                </td>
                <td className="py-4 px-3 text-center text-gray-300 font-medium">
                  {row.salesScore}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Decision row with colored badges */}
      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="text-center">
          <p className="text-xs text-gray-500 mb-2">Benchmarking Decision</p>
          <span className="inline-block px-4 py-2 bg-green-900/30 border border-green-700/50 rounded text-green-400 text-sm font-semibold">
            PRIORITIZE
          </span>
        </div>
        <div></div>
        <div className="text-center">
          <p className="text-xs text-gray-500 mb-2">Sales Agent Decision</p>
          <span className="inline-block px-4 py-2 bg-orange-900/30 border border-orange-700/50 rounded text-orange-400 text-sm font-semibold">
            ONE-WEEK EXPERIMENT
          </span>
        </div>
      </div>
    </div>
  );
}
