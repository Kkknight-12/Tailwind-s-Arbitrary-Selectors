interface BeforeAfterProps {
  before: React.ReactNode;
  after: React.ReactNode;
  beforeLabel?: string;
  afterLabel?: string;
}

export function BeforeAfter({
  before,
  after,
  beforeLabel = "❌ Without Selector",
  afterLabel = "✅ With Selector",
}: BeforeAfterProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6 my-8">
      {/* BEFORE */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 mb-4">
          <h4 className="font-bold text-gray-900 text-lg">{beforeLabel}</h4>
        </div>
        <div className="border-2 border-red-300 bg-red-50 rounded-lg p-6 min-h-[120px] flex items-center justify-center">
          {before}
        </div>
      </div>

      {/* AFTER */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 mb-4">
          <h4 className="font-bold text-gray-900 text-lg">{afterLabel}</h4>
        </div>
        <div className="border-2 border-green-300 bg-green-50 rounded-lg p-6 min-h-[120px] flex items-center justify-center">
          {after}
        </div>
      </div>
    </div>
  );
}
