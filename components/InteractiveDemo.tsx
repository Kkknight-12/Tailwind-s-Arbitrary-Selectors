'use client';

import { useState } from 'react';
import { cn } from "@/lib/utils";

interface InteractiveDemoProps {
  pattern: string;
  children: (enabled: boolean) => React.ReactNode;
}

export function InteractiveDemo({ pattern, children }: InteractiveDemoProps) {
  const [enabled, setEnabled] = useState(true);

  return (
    <div className="space-y-4">
      {/* Toggle Button */}
      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={() => setEnabled(!enabled)}
          className={cn(
            "px-6 py-3 rounded-lg font-semibold transition-all shadow-md transform hover:scale-105",
            enabled
              ? "bg-green-500 text-white hover:bg-green-600"
              : "bg-gray-300 text-gray-700 hover:bg-gray-400"
          )}
        >
          {enabled ? "✅ Selector Active" : "❌ Selector Disabled"}
        </button>
        <code className="text-sm bg-gray-800 text-green-400 px-3 py-2 rounded font-mono">
          {pattern}
        </code>
      </div>

      {/* Demo Content */}
      <div className="transition-all duration-300">
        {children(enabled)}
      </div>
    </div>
  );
}
