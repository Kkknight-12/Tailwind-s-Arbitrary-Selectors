import { CodeExample } from "@/components/CodeExample";
import { DemoBlock } from "@/components/DemoBlock";
import { VisualBox } from "@/components/VisualBox";

export function Pattern12(){
  return (
    <DemoBlock
      pattern="[&_element:not(.class)]"
      title="Pattern 12: Not Selector (Negation) 🚫"
      description="Exclude specific elements from styling! The :not() pseudo-class lets you style everything EXCEPT elements that match a condition."
      useCase="Style all items except specific ones, exclude disabled buttons"
      id="pattern-12"
    >
          <div className="space-y-6">
            <div className="bg-lime-50 border-2 border-lime-200 rounded-lg p-4">
              <p className="font-bold text-lime-800 mb-2">
                Parent Container has this className:
              </p>
              <code className="text-sm bg-lime-900 text-lime-100 px-3 py-1 rounded font-mono block">
                className="[&_p:not(.excluded)]:bg-lime-100
                [&_p:not(.excluded)]:border-lime-400"
              </code>
              <p className="text-xs text-lime-700 mt-2">
                Target: ALL <code className="bg-lime-200 px-1 rounded">p</code>{" "}
                elements that are descendants, EXCEPT those with{" "}
                <code className="bg-lime-200 px-1 rounded">
                  class="excluded"
                </code>
              </p>
              <p className="text-xs text-lime-700 mt-1">
                Styling:{" "}
                <code className="bg-lime-200 px-1 rounded">bg-lime-100</code>{" "}
                (lime background) and{" "}
                <code className="bg-lime-200 px-1 rounded">
                  border-lime-400
                </code>
              </p>
              <p className="text-xs text-lime-700 mt-2 font-semibold">
                Note: <code className="bg-lime-200 px-1 rounded">:not()</code>{" "}
                is a negation pseudo-class - excludes matching elements
              </p>
            </div>

            <CodeExample
              title="HTML Structure:"
              code={`<div className="[&_p:not(.excluded)]:bg-lime-100">  ← PARENT with selector
  <p>Normal paragraph</p>                           ← NO "excluded" class ✓ SELECTED!
  <p className="excluded">Excluded</p>              ← HAS "excluded" class ✗ NOT selected
  <p>Another normal</p>                             ← NO "excluded" class ✓ SELECTED!

  <div>
    <p>Nested normal</p>                            ← NO "excluded" class ✓ SELECTED!
    <p className="excluded">Nested excluded</p>     ← HAS "excluded" class ✗ NOT selected
  </div>
</div>

// Targeting: ALL <p> descendants WITHOUT class="excluded"
// Styling: bg-lime-100 (lime background) + border`}
            />

            <div className="[&_p:not(.excluded)]:bg-lime-100 [&_p:not(.excluded)]:border-lime-400 [&_p:not(.excluded)]:border-2 [&_p:not(.excluded)]:px-3 [&_p:not(.excluded)]:py-2 [&_p:not(.excluded)]:rounded [&_p:not(.excluded)]:font-semibold border-2 border-purple-400 bg-purple-50 p-6 rounded-lg space-y-4">
              <p className="text-xs text-purple-700 font-semibold mb-4">
                ⬇️ This purple box is the PARENT with
                className="[&_p:not(.excluded)]..."
              </p>

              <VisualBox
                selected={true}
                label="Normal <p> (no .excluded class)"
              >
                <p className="text-lg">✅ Styled (not excluded)</p>
              </VisualBox>
              <VisualBox selected={false} label='<p class="excluded">'>
                <p className="excluded text-lg text-gray-400">
                  ❌ NOT styled (has .excluded class)
                </p>
              </VisualBox>
              <VisualBox selected={true} label="Normal <p>">
                <p className="text-lg">✅ Styled (not excluded)</p>
              </VisualBox>
              <VisualBox selected={false} label='<p class="excluded">'>
                <p className="excluded text-lg text-gray-400">
                  ❌ NOT styled (excluded)
                </p>
              </VisualBox>
              <VisualBox selected={true} label="Normal <p>">
                <p className="text-lg">✅ Styled (not excluded)</p>
              </VisualBox>
            </div>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="bg-lime-50 border border-lime-200 rounded-lg p-4">
              <p className="text-sm font-bold text-lime-800 mb-2">
                Exclude by class:
              </p>
              <code className="text-xs bg-lime-900 text-lime-100 p-2 rounded block">
                {"[&_a:not(.external)]:underline"}
              </code>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-sm font-bold text-amber-800 mb-2">
                Exclude disabled:
              </p>
              <code className="text-xs bg-amber-900 text-amber-100 p-2 rounded block">
                {"[&_button:not(:disabled)]:hover:bg-blue-600"}
              </code>
            </div>
          </div>

          <div className="mt-6 bg-indigo-50 border border-indigo-200 rounded-lg p-4">
            <p className="text-sm font-bold text-indigo-800 mb-3">
              💡 Real-World Example - Markdown Links:
            </p>
            <code className="text-xs bg-indigo-900 text-indigo-100 p-2 rounded block overflow-x-auto">
              {`// Style all links EXCEPT those with "no-style" class
className="[&_a:not(.no-style)]:text-blue-600 [&_a:not(.no-style)]:underline"`}
            </code>
          </div>
        </DemoBlock>
  )
}