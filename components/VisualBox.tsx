import { cn } from "@/lib/utils";

interface VisualBoxProps {
  selected?: boolean;
  label?: string;
  children: React.ReactNode;
  className?: string;
}

export function VisualBox({
  selected = false,
  label,
  children,
  className,
}: VisualBoxProps) {
  return (
    <div
      className={cn(
        "p-4 rounded-lg border-2 transition-all duration-200",
        selected
          ? [
              "bg-green-100 border-green-400",
              "shadow-md shadow-green-200",
            ]
          : ["bg-gray-50 border-gray-300", "opacity-75"],
        className
      )}
    >
      {label && (
        <div className="text-xs font-mono mb-2 text-gray-600 font-semibold">
          {label}
        </div>
      )}
      <div className="flex items-center gap-2">
        <span className="text-xl">{selected ? "✅" : "❌"}</span>
        <div>{children}</div>
      </div>
    </div>
  );
}
