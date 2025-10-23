import { cn } from "@/lib/utils";

interface DemoBlockProps {
  pattern: string;
  title: string;
  description: string;
  useCase: string;
  children: React.ReactNode;
  id?: string;
}

export function DemoBlock({
  pattern,
  title,
  description,
  useCase,
  children,
  id,
}: DemoBlockProps) {
  return (
    <div
      className="mb-16 scroll-mt-24 animate-fade-in"
      id={id || title.toLowerCase().replace(/\s+/g, "-")}
    >
      {/* Header with Pattern Badge */}
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-mono rounded-full shadow-lg">
          {pattern}
        </span>
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
      </div>

      {/* Description */}
      <p className="text-gray-700 text-lg mb-3 leading-relaxed">
        {description}
      </p>

      {/* Use Case Badge */}
      <div className="flex items-center gap-2 mb-6">
        <span className="text-sm font-semibold text-gray-600">Use Case:</span>
        <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-md font-medium">
          {useCase}
        </span>
      </div>

      {/* Demo Container with Glow Effect */}
      <div className="relative">
        {/* Subtle glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-200 to-purple-200 rounded-xl blur opacity-20"></div>

        {/* Content */}
        <div className="relative border-2 border-gray-300 rounded-xl p-8 bg-gradient-to-br from-white to-gray-50 shadow-lg">
          {children}
        </div>
      </div>
    </div>
  );
}
