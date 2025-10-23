import { CodeExample } from "@/components/CodeExample";
import { DemoBlock } from "@/components/DemoBlock";
import { VisualBox } from "@/components/VisualBox";

export function Pattern3() {
  return (
    <DemoBlock
      pattern="[&>div>p]"
      title="Pattern 3: Nested Path Selector"
      description="Targets elements following a specific DOM path. Useful when you need surgical precision in complex layouts."
      useCase="Specific DOM structure styling, complex component layouts"
      id="pattern-3"
    >
      <div className="space-y-6">
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
          <p className="font-bold text-blue-800 mb-2">
            Parent Container has this className:
          </p>
          <code className="text-sm bg-blue-900 text-blue-100 px-3 py-1 rounded font-mono">
            className=&quot;[&{">"}div{">"}p]:text-yellow-700 [&{">"}div{">"}
            p]:font-bold&quot;
          </code>
          <p className="text-xs text-blue-700 mt-2">
            This means: &quot;Select{" "}
            <code className="bg-blue-200 px-1 rounded">p</code> tags that are
            inside a <code className="bg-blue-200 px-1 rounded">div</code> that
            is a direct child of me&quot;
          </p>
        </div>

        <CodeExample
          title="HTML Structure:"
          code={`<div className="[&>div>p]:text-yellow-700">  ← PARENT with selector
  <p>Not selected</p>                          ← Direct child, but no div parent

  <div>                                         ← Direct child div (yellow border)
    <p>✅ SELECTED!</p>                         ← Matches: parent > div > p
  </div>

  <div>                                         ← Direct child div
    <div>                                       ← Nested div
      <p>Not selected</p>                      ← Doesn't match: parent > div > div > p
    </div>
  </div>
</div>`}
        />

        <div className="[&>div>p]:text-yellow-700 [&>div>p]:font-bold border-2 border-purple-400 bg-purple-50 p-6 rounded-lg space-y-4">
          <p className="text-xs text-purple-700 font-semibold mb-4">
            ⬇️ This purple box is the PARENT with className=&quot;[&{">"}div{">"}
            p]:...&quot;
          </p>

          <VisualBox
            selected={false}
            label="Direct <p> child of parent (no div wrapper)"
          >
            <p className="text-lg">
              ❌ Not yellow - I&apos;m a direct child of parent, not inside a div
            </p>
          </VisualBox>

          <div className="border-l-4 border-yellow-400 pl-4 bg-yellow-50 py-3 rounded">
            <p className="text-xs text-yellow-700 font-semibold mb-2">
              ⬅️ Yellow border = Direct child DIV of parent
            </p>
            <VisualBox selected={true} label="<p> inside direct child <div>">
              <p className="text-lg">
                ✅ YELLOW! Path: parent {">"} div {">"} p ✓
              </p>
            </VisualBox>
          </div>

          <div className="border-l-4 border-gray-400 pl-4 bg-gray-100 py-3 rounded">
            <p className="text-xs text-gray-600 font-semibold mb-2">
              ⬅️ Gray border = Direct child DIV of parent
            </p>
            <div className="border-l-2 border-gray-300 pl-4 mt-2">
              <p className="text-xs text-gray-500 mb-2">
                ↑ Nested div inside the gray div
              </p>
              <VisualBox selected={false} label="<p> in nested div">
                <p className="text-lg">
                  ❌ Not yellow - Path: parent {">"} div {">"} div {">"} p ✗
                </p>
              </VisualBox>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-orange-50 border border-orange-200 rounded-lg p-4">
        <p className="text-sm text-orange-800">
          <span className="font-bold">⚠️ Tip:</span> Complex selectors like this
          reduce readability. Use sparingly and add comments when necessary.
        </p>
      </div>
    </DemoBlock>
  );
}