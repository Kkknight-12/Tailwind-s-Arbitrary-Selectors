import { CodeExample } from "@/components/CodeExample";
import { DemoBlock } from "@/components/DemoBlock";
import { VisualBox } from "@/components/VisualBox";

export function Pattern8() {
  return (
    <DemoBlock
      pattern="[.parent_&]"
      title="Pattern 8: Parent Selector (Advanced)"
      description="Style an element based on its parent's class. Least common pattern but powerful for theme switching and conditional styling."
      useCase="Child styling based on parent state, theme switching"
      id="pattern-8"
    >
      <div className="space-y-6">
        <div className="bg-violet-50 border-2 border-violet-200 rounded-lg p-4">
          <p className="font-bold text-violet-800 mb-2">
            Child element has this className:
          </p>
          <code className="text-sm bg-violet-900 text-violet-100 px-3 py-1 rounded font-mono block">
            className=&quot;[.parent_&]:text-purple-600 [.parent_&]:font-bold&quot;
          </code>
          <p className="text-xs text-violet-700 mt-2">
            Notice: <code className="bg-violet-200 px-1 rounded">.parent</code>{" "}
            comes BEFORE <code className="bg-violet-200 px-1 rounded">&</code>{" "}
            (different from other patterns!)
          </p>
          <p className="text-xs text-violet-700 mt-1">
            Target: THIS element (
            <code className="bg-violet-200 px-1 rounded">&</code>), but ONLY
            when it&apos;s inside an ancestor with{" "}
            <code className="bg-violet-200 px-1 rounded">class=&quot;parent&quot;</code>
          </p>
          <p className="text-xs text-violet-700 mt-1">
            Styling:{" "}
            <code className="bg-violet-200 px-1 rounded">text-purple-600</code>{" "}
            and <code className="bg-violet-200 px-1 rounded">font-bold</code>
          </p>
        </div>

        <CodeExample
          title="HTML Structure:"
          code={`<div class="parent">  ← Ancestor has class="parent"
  <div>
    <div className="[.parent_&]:text-purple-600">
      ✅ SELECTED! (I'm inside .parent ancestor)
    </div>
  </div>
</div>

<div>  ← NO "parent" class
  <div className="[.parent_&]:text-purple-600">
    ❌ NOT selected (no .parent ancestor)
  </div>
</div>

// Targeting: THIS element (&), when inside .parent
// Styling: text-purple-600 (purple text)`}
        />

        <div className="parent border-2 border-indigo-400 bg-indigo-50 p-6 rounded-lg">
          <p className="text-sm font-mono text-indigo-900 mb-4 font-semibold">
            ⬇️ This is a div with class=&quot;parent&quot; (ancestor) - This label text is
            NOT affected by the selector!
          </p>
          <p className="text-xs text-indigo-700 mb-4">
            The child element below has the className with the selector, NOT the
            parent.
          </p>
          <VisualBox selected={true} label="Child has [.parent_&] selector">
            <div className="[.parent_&]:text-purple-600 [.parent_&]:font-bold [.parent_&]:bg-purple-200 [.parent_&]:px-3 [.parent_&]:py-1 [.parent_&]:rounded text-lg">
              ✅ I&apos;m purple! I have className=&quot;[.parent_&]:...&quot; and I&apos;m inside
              an ancestor with class=&quot;parent&quot;
            </div>
          </VisualBox>
        </div>

        <div className="border-2 border-gray-300 bg-gray-50 p-6 rounded-lg">
          <p className="text-sm font-mono text-gray-600 mb-4 font-semibold">
            ⬇️ This div has NO &quot;parent&quot; class (it&apos;s just a regular div)
          </p>
          <VisualBox selected={false} label="Child has [.parent_&] selector">
            <div className="[.parent_&]:text-purple-600 [.parent_&]:font-bold [.parent_&]:bg-purple-200 [.parent_&]:px-3 [.parent_&]:py-1 [.parent_&]:rounded text-lg">
              ❌ NOT purple - I have className=&quot;[.parent_&]:...&quot; but there&apos;s NO
              ancestor with class=&quot;parent&quot;
            </div>
          </VisualBox>
        </div>

        <div className="bg-violet-50 border border-violet-200 rounded-lg p-4">
          <p className="text-sm font-bold text-violet-800 mb-2">
            💡 Perfect for Theme Switching:
          </p>
          <code className="text-xs bg-violet-900 text-violet-100 p-2 rounded block overflow-x-auto">
            {'<div className="[.dark_&]:bg-gray-800 [.dark_&]:text-white">'}
          </code>
        </div>
      </div>
    </DemoBlock>
  );
}