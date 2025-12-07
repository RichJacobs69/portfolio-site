import React from 'react';

export interface TimelineItem {
  quarter: string;
  milestone: string;
}

interface TimelineProps {
  items: TimelineItem[];
  title?: string;
}

export default function Timeline({ items, title }: TimelineProps) {
  return (
    <div className="my-8">
      {title && (
        <h3 className="text-2xl font-bold mb-8 gradient-text">{title}</h3>
      )}

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-lime-500/50 via-emerald-500/30 to-transparent"></div>

        {/* Timeline items */}
        <div className="space-y-8">
          {items.map((item, index) => (
            <div key={index} className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              {/* Left/Right content */}
              <div className="w-1/2 px-6">
                <div className={`text-right ${index % 2 === 0 ? '' : 'text-left'}`}>
                  <div className="text-sm font-semibold text-lime-400 mb-2 uppercase tracking-wide">
                    {item.quarter}
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {item.milestone}
                  </p>
                </div>
              </div>

              {/* Center dot */}
              <div className="w-0 flex justify-center relative z-10">
                <div className="w-4 h-4 rounded-full bg-lime-500 border-4 border-[#0a0a0a] shadow-lg shadow-lime-500/50"></div>
              </div>

              {/* Right/Left content (empty for alternating) */}
              <div className="w-1/2 px-6"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
