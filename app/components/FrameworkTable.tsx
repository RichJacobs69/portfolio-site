'use client';

interface FrameworkRow {
  dimension: string;
  description: string;
  maxPoints: number;
  color?: string;
}

interface FrameworkTableProps {
  rows: FrameworkRow[];
  total?: number;
}

export default function FrameworkTable({ rows, total = 200 }: FrameworkTableProps) {
  const colorMap: Record<string, string> = {
    'User Impact': 'text-orange-400',
    'Adoption': 'text-cyan-400',
    'Company Impact': 'text-blue-400',
    'Natural Ownership': 'text-purple-400',
    'Effort (inverse)': 'text-teal-400',
  };

  return (
    <div className="my-8 overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="text-left py-4 px-4 font-semibold text-gray-300 text-sm">Dimension</th>
            <th className="text-left py-4 px-4 font-semibold text-gray-300 text-sm">Description</th>
            <th className="text-right py-4 px-4 font-semibold text-gray-300 text-sm">Max Points</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => {
            const color = colorMap[row.dimension] || 'text-gray-400';
            const isTotal = row.dimension === 'TOTAL';

            return (
              <tr
                key={idx}
                className={`border-b border-gray-800 ${
                  isTotal ? 'bg-gray-900/30 font-semibold' : 'hover:bg-gray-900/20 transition-colors'
                }`}
              >
                <td className={`py-4 px-4 text-sm ${color}`}>
                  {row.dimension}
                </td>
                <td className="py-4 px-4 text-sm text-gray-400">
                  {row.description}
                </td>
                <td className="py-4 px-4 text-right text-sm text-gray-300">
                  {row.maxPoints}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p className="text-xs text-gray-500 italic mt-4 text-center">
        Note: Higher effort = lower points (inverse scoring)
      </p>
    </div>
  );
}
