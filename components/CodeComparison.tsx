interface CodeComparisonProps {
  before: string;
  after: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export function CodeComparison({
  before,
  after,
  beforeLabel = "Without Selector",
  afterLabel = "With Selector",
}: CodeComparisonProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6 my-8">
      {/* Before */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-2xl">❌</span>
          <h4 className="font-bold text-gray-700">{beforeLabel}</h4>
        </div>
        <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed">
          {before}
        </pre>
      </div>

      {/* After */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-2xl">✅</span>
          <h4 className="font-bold text-gray-700">{afterLabel}</h4>
        </div>
        <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed">
          {after}
        </pre>
      </div>
    </div>
  );
}
