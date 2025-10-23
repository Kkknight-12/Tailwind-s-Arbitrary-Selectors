import { CodeExample } from "@/components/CodeExample";
import { DemoBlock } from "@/components/DemoBlock";
import { VisualBox } from "@/components/VisualBox";

export function Pattern5() {
  return (
    <DemoBlock
      pattern='[&_[attribute="value"]]'
      title="Pattern 5: Attribute Targeting"
      description="Target elements by data attributes, ARIA attributes, or any HTML attribute. Perfect for state-based styling."
      useCase="State-based styling, ARIA attributes, data attributes from APIs"
      id="pattern-5"
    >
      <div className="space-y-6">
        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
          <p className="font-bold text-green-800 mb-2">
            Parent Container has this className:
          </p>
          <code className="text-sm bg-green-900 text-green-100 px-3 py-1 rounded font-mono block">
            className=&quot;[&_[data-active=&apos;true&apos;]]:bg-green-100&quot;
          </code>
          <p className="text-xs text-green-700 mt-2">
            Target: Any{" "}
            <code className="bg-green-200 px-1 rounded">button</code> element
            with{" "}
            <code className="bg-green-200 px-1 rounded">
              data-active=&quot;true&quot;
            </code>{" "}
            attribute
          </p>
          <p className="text-xs text-green-700 mt-1">
            Styling: Give it{" "}
            <code className="bg-green-200 px-1 rounded">bg-green-100</code>{" "}
            background color
          </p>
        </div>

        <CodeExample
          title="HTML Structure:"
          code={`<div className="[&_[data-active='true']]:bg-green-100">  ← PARENT with selector
  <button data-active="false">Inactive</button>        ← data-active="false" ✗
  <button data-active="true">Active</button>           ← data-active="true" ✓ SELECTED!
  <button data-active="false">Another Inactive</button> ← data-active="false" ✗
</div>

// Targeting: buttons with data-active="true"
// Styling: bg-green-100 (light green background)`}
        />

        <div className="[&_[data-active='true']]:bg-green-100 [&_[data-active='true']]:border-green-400 [&_[data-active='true']]:font-bold border-2 border-purple-400 bg-purple-50 p-6 rounded-lg space-y-4">
          <p className="text-xs text-purple-700 font-semibold mb-4">
            ⬇️ This purple box is the PARENT with
            className="[&_[data-active='true']]..."
          </p>

          <VisualBox selected={false} label='<button data-active="false">'>
            <button
              data-active="false"
              className="px-4 py-2 border-2 rounded-lg text-lg"
            >
              ❌ Inactive Button (data-active="false")
            </button>
          </VisualBox>
          <VisualBox selected={true} label='<button data-active="true">'>
            <button
              data-active="true"
              className="px-4 py-2 border-2 rounded-lg text-lg"
            >
              ✅ Active Button (data-active="true" - SELECTED!)
            </button>
          </VisualBox>
          <VisualBox selected={false} label='<button data-active="false">'>
            <button
              data-active="false"
              className="px-4 py-2 border-2 rounded-lg text-lg"
            >
              ❌ Another Inactive (data-active="false")
            </button>
          </VisualBox>
        </div>
      </div>

      <div className="mt-6 grid md:grid-cols-2 gap-4">
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <p className="text-sm font-bold text-purple-800 mb-2">
            ARIA Example:
          </p>
          <code className="text-xs bg-purple-900 text-purple-100 p-2 rounded block">
            {'[&_[aria-selected="true"]]:font-bold'}
          </code>
        </div>
        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
          <p className="text-sm font-bold text-indigo-800 mb-2">
            Role Example:
          </p>
          <code className="text-xs bg-indigo-900 text-indigo-100 p-2 rounded block">
            {'[&_[role="alert"]]:text-red-600'}
          </code>
        </div>
      </div>
    </DemoBlock>
  );
}