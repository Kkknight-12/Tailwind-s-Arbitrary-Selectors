import { CodeExample } from "@/components/CodeExample";
import { DemoBlock } from "@/components/DemoBlock";
import { VisualBox } from "@/components/VisualBox";

export function Pattern11() {
  return (
    <DemoBlock
      pattern="[&_element:first-child] [&_element:last-child]"
      title="Pattern 11: First/Last Child Selector"
      description="Style elements based on their position! Target the first or last child, or use nth-child() for more complex patterns."
      useCase="Special styling for first/last items in lists, cards"
      id="pattern-11"
    >
      <div className="space-y-6">
        <div className="bg-emerald-50 border-2 border-emerald-200 rounded-lg p-4">
          <p className="font-bold text-emerald-800 mb-2">
            Parent Container has this className:
          </p>
          <code className="text-sm bg-emerald-900 text-emerald-100 px-3 py-1 rounded font-mono block mb-2">
            className="[&_p:first-child]:bg-green-100
            [&_p:last-child]:bg-red-100"
          </code>
          <p className="text-xs text-emerald-700 mt-2">
            Target: <code className="bg-emerald-200 px-1 rounded">p</code>{" "}
            elements that are the FIRST child → green, or LAST child → red
          </p>
          <p className="text-xs text-emerald-700 mt-1">
            Styling: First child gets{" "}
            <code className="bg-emerald-200 px-1 rounded">bg-green-100</code>,
            Last child gets{" "}
            <code className="bg-emerald-200 px-1 rounded">bg-red-100</code>
          </p>
          <p className="text-xs text-emerald-700 mt-2 font-semibold">
            Note:{" "}
            <code className="bg-emerald-200 px-1 rounded">:first-child</code>{" "}
            and <code className="bg-emerald-200 px-1 rounded">:last-child</code>{" "}
            are position-based pseudo-classes
          </p>
        </div>

        <CodeExample
          title="HTML Structure:"
          code={`<div className="[&_p:first-child]:bg-green-100 [&_p:last-child]:bg-red-100">  ← PARENT
  <p>First Item</p>      ← :first-child ✓ SELECTED (green)
  <p>Middle Item</p>     ← Neither first nor last ✗
  <p>Another Middle</p>  ← Neither first nor last ✗
  <p>Last Item</p>       ← :last-child ✓ SELECTED (red)
</div>

// Targeting: First <p> gets green, Last <p> gets red
// Middle items: No special styling`}
        />

        <div className="[&_p:first-child]:bg-green-100 [&_p:first-child]:border-green-400 [&_p:first-child]:font-bold [&_p:last-child]:bg-red-100 [&_p:last-child]:border-red-400 [&_p:last-child]:font-bold border-2 border-purple-400 bg-purple-50 p-6 rounded-lg space-y-4">
          <p className="text-xs text-purple-700 font-semibold mb-4">
            ⬇️ This purple box is the PARENT with
            className="[&_p:first-child]:... [&_p:last-child]:..."
          </p>

          <VisualBox selected={true} label="First child">
            <p className="text-lg border-2 px-4 py-2 rounded">
              🥇 First Item (green highlight)
            </p>
          </VisualBox>
          <VisualBox selected={false} label="Middle child">
            <p className="text-lg border-2 px-4 py-2 rounded border-gray-300">
              ⭐ Middle Item (no special styling)
            </p>
          </VisualBox>
          <VisualBox selected={false} label="Middle child">
            <p className="text-lg border-2 px-4 py-2 rounded border-gray-300">
              ⭐ Another Middle Item
            </p>
          </VisualBox>
          <VisualBox selected={true} label="Last child">
            <p className="text-lg border-2 px-4 py-2 rounded">
              🏁 Last Item (red highlight)
            </p>
          </VisualBox>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
          <p className="text-sm font-bold text-emerald-800 mb-3">
            More Position Selectors:
          </p>
          <div className="space-y-2 text-xs">
            <code className="block bg-emerald-900 text-emerald-100 p-2 rounded">
              {"[&_li:nth-child(odd)]:bg-gray-100  // Zebra striping"}
            </code>
            <code className="block bg-emerald-900 text-emerald-100 p-2 rounded">
              {"[&_div:nth-child(3)]:text-blue-600  // 3rd element"}
            </code>
            <code className="block bg-emerald-900 text-emerald-100 p-2 rounded">
              {"[&_p:only-child]:font-bold  // Only if there's just one"}
            </code>
          </div>
        </div>
      </div>
    </DemoBlock>
  );
}