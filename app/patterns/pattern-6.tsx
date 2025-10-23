import { CodeExample } from "@/components/CodeExample";
import { DemoBlock } from "@/components/DemoBlock";
import { VisualBox } from "@/components/VisualBox";

export function Pattern6() {
  return (
    <DemoBlock
      pattern='[&>p[class="special"]] or [&>p.special]'
      title="Pattern 6: Combined Selector"
      description="Combine multiple selectors for surgical precision. Match both structure AND attributes/classes simultaneously."
      useCase="Very specific targeting, resolving style conflicts"
      id="pattern-6"
    >
      <div className="space-y-6">
        <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-4">
          <p className="font-bold text-orange-800 mb-2">
            Parent Container has this className:
          </p>
          <code className="text-sm bg-orange-900 text-orange-100 px-3 py-1 rounded font-mono block">
            className="[&{">"}p[class='special']]:text-orange-600"
          </code>
          <p className="text-xs text-orange-700 mt-2">
            This means: "Select{" "}
            <code className="bg-orange-200 px-1 rounded">p</code> tags with{" "}
            <code className="bg-orange-200 px-1 rounded">class="special"</code>{" "}
            that are DIRECT children of me"
          </p>
          <p className="text-xs text-orange-700 mt-1 font-semibold">
            ⚠️ BOTH conditions must be true: (1) Direct child AND (2) Has the
            class
          </p>
        </div>

        <CodeExample
          title="HTML Structure:"
          code={`<div className="[&>p[class='special']]:text-orange-600">  ← PARENT
  <p>No class</p>                                        ← Direct child, but NO class ✗
  <p className="special">✅ SELECTED!</p>               ← Direct child + HAS class ✓

  <div>
    <p className="special">Not selected</p>             ← HAS class, but NOT direct child ✗
  </div>
</div>

// You can also use dot notation (same as Pattern 4):
className="[&>p.special]:text-orange-600"  ← Shorter, same result!`}
        />

        <div className="[&>p[class='special']]:text-orange-600 [&>p[class='special']]:font-bold [&>p[class='special']]:bg-orange-100 [&>p[class='special']]:px-3 [&>p[class='special']]:py-1 [&>p[class='special']]:rounded border-2 border-purple-400 bg-purple-50 p-6 rounded-lg space-y-4">
          <p className="text-xs text-purple-700 font-semibold mb-4">
            ⬇️ This purple box is the PARENT with className="[&{">"}
            p[class='special']]..."
          </p>

          <VisualBox selected={false} label="<p> (no class)">
            <p className="text-lg">
              ❌ Not styled - I'm a direct child but have NO class
            </p>
          </VisualBox>

          <VisualBox
            selected={true}
            label='<p class="special"> (direct child of parent)'
          >
            <p className="special text-lg">
              ✅ ORANGE! I'm a direct child AND have class="special"
            </p>
          </VisualBox>

          <div className="border-l-4 border-gray-400 pl-4 bg-gray-100 py-3 rounded mt-4">
            <p className="text-xs text-gray-600 font-semibold mb-2">
              ⬅️ This gray box wraps the next{" "}
              <code className="bg-gray-200 px-1">p</code>
            </p>
            <VisualBox
              selected={false}
              label='<p class="special"> (nested in div)'
            >
              <p className="special text-lg">
                ❌ Not styled - I have class="special" but I'm NOT a direct
                child of parent
              </p>
            </VisualBox>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-4">
        <p className="text-sm text-red-800">
          <span className="font-bold">⚠️ Warning:</span> Use combined selectors
          sparingly. They can hurt readability and maintainability. Consider
          creating a styled component instead if the pattern is complex or
          repeated.
        </p>
      </div>
    </DemoBlock>
  );
}