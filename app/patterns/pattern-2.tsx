import { BeforeAfter } from "@/components/BeforeAfter";
import { CodeExample } from "@/components/CodeExample";
import { DemoBlock } from "@/components/DemoBlock";
import { InteractiveDemo } from "@/components/InteractiveDemo";
import { VisualBox } from "@/components/VisualBox";
import { cn } from "@/lib/utils";

export function Pattern2() {
  return (
    <DemoBlock
      pattern="[&>element]"
      title="Pattern 2: Direct Child Selector"
      description="Targets ONLY immediate children, not grandchildren or deeper descendants. Use when you want precise control over the cascade."
      useCase="Layout-specific styling, preventing cascade to nested elements"
      id="pattern-2"
    >
      <div className="space-y-6">
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
          <p className="font-bold text-red-800 mb-2">
            Parent Container has this className:
          </p>
          <code className="text-sm bg-red-900 text-red-100 px-3 py-1 rounded font-mono block">
            className=&quot;[&{">"}p]:text-red-600 [&{">"}p]:font-bold&quot;
          </code>
          <p className="text-xs text-red-700 mt-2">
            Notice: <code className="bg-red-200 px-1 rounded">&</code> = this
            element, <code className="bg-red-200 px-1 rounded">{">"}</code> =
            direct child (NOT <code className="bg-red-200 px-1 rounded">_</code>
            !)
          </p>
          <p className="text-xs text-red-700 mt-1">
            This means: &quot;Select{" "}
            <code className="bg-red-200 px-1 rounded">p</code> tags that are
            ONLY direct children (one level deep)&quot;
          </p>
        </div>

        <CodeExample
          title="HTML Structure:"
          code={`<div className="[&>p]:text-red-600">  ← PARENT with selector
  <p>✅ SELECTED! (direct child)</p>

  <div>
    <p>❌ NOT selected (grandchild - 2 levels deep)</p>
  </div>
</div>

// The ">" means ONLY direct children (one level)!
// Compare to "_" which means ANY depth`}
        />

        <InteractiveDemo pattern='className="[&>p]:text-red-600"'>
          {(enabled) => (
            <div
              className={cn(
                "border-2 border-purple-400 bg-purple-50 p-6 rounded-lg",
                enabled && "[&>p]:text-red-600 [&>p]:font-bold",
              )}
            >
              <p className="text-xs text-purple-700 font-semibold mb-4">
                ⬇️ This purple box is the PARENT with className=&quot;
                {enabled ? "[&>p]:text-red-600" : "(selector disabled)"}&quot;
              </p>

              <VisualBox selected={enabled} label="Direct child <p>">
                <p className="text-lg">
                  ✅ RED when active (I&apos;m a direct child!)
                </p>
              </VisualBox>

              <div className="mt-4 pl-6 border-l-2 border-gray-400 bg-gray-100 p-4 rounded">
                <p className="text-xs text-gray-600 mb-2">
                  ⬅️ This gray box is a child of parent
                </p>
                <VisualBox
                  selected={false}
                  label="Grandchild <p> (inside <div>)"
                >
                  <p className="text-lg">
                    ❌ NOT red (I&apos;m a grandchild, not direct!)
                  </p>
                </VisualBox>
              </div>
            </div>
          )}
        </InteractiveDemo>

        <div className="mt-8">
          <h3 className="font-bold text-xl mb-4 text-gray-900">
            📊 Visual Comparison: _ vs {">"}
          </h3>
          <BeforeAfter
            beforeLabel="[&_p] with underscore"
            afterLabel="[&>p] with greater-than"
            before={
              <div className="text-center">
                <code className="text-lg font-mono bg-blue-100 px-2 py-1 rounded text-blue-800 mb-2 inline-block">
                  [&_p]
                </code>
                <p className="text-sm text-gray-600 mb-2">Descendant (space)</p>
                <div className="mt-3 text-sm">
                  <div className="text-green-600 font-bold">
                    ✅ Direct children
                  </div>
                  <div className="text-green-600 font-bold">
                    ✅ Grandchildren
                  </div>
                  <div className="text-green-600 font-bold">✅ Any depth</div>
                </div>
              </div>
            }
            after={
              <div className="text-center">
                <code className="text-lg font-mono bg-red-100 px-2 py-1 rounded text-red-800 mb-2 inline-block">
                  [&{">"}p]
                </code>
                <p className="text-sm text-gray-600 mb-2">
                  Direct child ({">"})
                </p>
                <div className="mt-3 text-sm">
                  <div className="text-green-600 font-bold">
                    ✅ Direct children
                  </div>
                  <div className="text-red-600 font-bold">❌ Grandchildren</div>
                  <div className="text-red-600 font-bold">❌ Deeper levels</div>
                </div>
              </div>
            }
          />
        </div>
      </div>
    </DemoBlock>
  );
}