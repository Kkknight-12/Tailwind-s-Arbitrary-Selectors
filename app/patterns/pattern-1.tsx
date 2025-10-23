import { CodeExample } from "@/components/CodeExample";
import { DemoBlock } from "@/components/DemoBlock";
import { InteractiveDemo } from "@/components/InteractiveDemo";
import { VisualBox } from "@/components/VisualBox";
import { cn } from "@/lib/utils";

export function Pattern1() {
  return (
    <DemoBlock
      pattern="[&_element]"
      title="Pattern 1: Descendant Selector ⭐"
      description="The most common pattern! Targets ALL matching elements at any depth in the tree. Perfect for styling injected HTML or markdown content."
      useCase="Styling markdown/MDX content, third-party HTML"
      id="pattern-1"
    >
      <div className="space-y-6">
        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
          <p className="font-bold text-green-800 mb-2">
            Parent Container has this className:
          </p>
          <code className="text-sm bg-green-900 text-green-100 px-3 py-1 rounded font-mono block">
            className="[&_p]:text-green-600 [&_p]:font-bold"
          </code>
          <p className="text-xs text-green-700 mt-2">
            Remember: <code className="bg-green-200 px-1 rounded">&</code> =
            this element, <code className="bg-green-200 px-1 rounded">_</code> =
            space (descendant)
          </p>
          <p className="text-xs text-green-700 mt-1">
            This means: "Select ALL{" "}
            <code className="bg-green-200 px-1 rounded">p</code> tags that are
            descendants of me (at ANY depth)"
          </p>
        </div>

        <CodeExample
          title="HTML Structure:"
          code={`<div className="[&_p]:text-green-600">  ← PARENT with selector
  <p>✅ SELECTED! (direct child)</p>

  <div>
    <p>✅ SELECTED! (nested in div)</p>
    <div>
      <p>✅ SELECTED! (deeply nested)</p>
    </div>
  </div>
</div>

// The "_" means "space" = descendant at ANY level!`}
        />

        <InteractiveDemo pattern='className="[&_p]:text-green-600"'>
          {(enabled) => (
            <div
              className={cn(
                "border-2 border-purple-400 bg-purple-50 p-6 rounded-lg",
                enabled && "[&_p]:text-green-600 [&_p]:font-bold",
              )}
            >
              <p className="text-xs text-purple-700 font-semibold mb-4">
                ⬇️ This purple box is the PARENT with className="
                {enabled ? "[&_p]:text-green-600" : "(selector disabled)"}"
              </p>

              <VisualBox selected={enabled} label="Direct child <p>">
                <p className="text-lg">Green when selector is active!</p>
              </VisualBox>
              <div className="mt-4 pl-6 border-l-2 border-gray-300">
                <VisualBox selected={enabled} label="Nested <p> (inside <div>)">
                  <p className="text-lg">Also green - any depth works!</p>
                </VisualBox>
                <div className="mt-4 pl-6 border-l-2 border-gray-200">
                  <VisualBox selected={enabled} label="Deeply nested <p>">
                    <p className="text-lg">
                      Even this - descendants at ANY level!
                    </p>
                  </VisualBox>
                </div>
              </div>
            </div>
          )}
        </InteractiveDemo>
      </div>
    </DemoBlock>
  );
}