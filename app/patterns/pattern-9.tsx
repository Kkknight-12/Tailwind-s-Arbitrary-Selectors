import { BeforeAfter } from "@/components/BeforeAfter";
import { CodeExample } from "@/components/CodeExample";
import { DemoBlock } from "@/components/DemoBlock";

export function Pattern9() {
  return (
    <DemoBlock
      pattern="[&~element]"
      title="Pattern 9: General Sibling Selector"
      description="Target ALL following siblings, not just the adjacent one. Unlike [&+element] which only targets the immediate next sibling, this targets all siblings that come after."
      useCase="Styling multiple elements that follow a trigger element"
      id="pattern-9"
    >
      <div className="space-y-6">
        <div className="bg-cyan-50 border-2 border-cyan-200 rounded-lg p-4">
          <p className="font-bold text-cyan-800 mb-2">
            Element with selector has this className:
          </p>
          <code className="text-sm bg-cyan-900 text-cyan-100 px-3 py-1 rounded font-mono block">
            className=&ldquo;[&~p]:bg-cyan-100 [&~p]:border-cyan-400&ldquo;
          </code>
          <p className="text-xs text-cyan-700 mt-2">
            Target: ALL <code className="bg-cyan-200 px-1 rounded">p</code>{" "}
            elements that are siblings AFTER this element
          </p>
          <p className="text-xs text-cyan-700 mt-1">
            Styling:{" "}
            <code className="bg-cyan-200 px-1 rounded">bg-cyan-100</code> (cyan
            background) and{" "}
            <code className="bg-cyan-200 px-1 rounded">border-cyan-400</code>
          </p>
          <p className="text-xs text-cyan-700 mt-2 font-semibold">
            Note: <code className="bg-cyan-200 px-1 rounded">~</code> means
            &ldquo;all following siblings&ldquo; (not just the next one!)
          </p>
        </div>

        <CodeExample
          title="HTML Structure:"
          code={`<div className="[&~p]:bg-cyan-100">  ← This element has the selector
  I'm a div (trigger element)
</div>
<p>✅ SELECTED! (1st following sibling)</p>
<p>✅ SELECTED! (2nd following sibling)</p>
<p>✅ SELECTED! (3rd following sibling - ALL siblings after!)</p>

// Targeting: ALL <p> siblings that come AFTER the div
// Styling: bg-cyan-100 (cyan background)

// Compare to [&+p] which only targets the IMMEDIATE next sibling`}
        />

        <div className="border-2 border-purple-400 bg-purple-50 p-6 rounded-lg">
          <p className="text-xs text-purple-700 font-semibold mb-4">
            ⬇️ This purple wrapper contains the demo. The trigger div below has
            the selector.
          </p>

          <div className="[&~p]:bg-cyan-100 [&~p]:border-2 [&~p]:border-cyan-400 [&~p]:px-3 [&~p]:py-2 [&~p]:rounded [&~p]:font-semibold inline-block border-2 border-orange-500 bg-orange-200 px-4 py-2 rounded">
            <span className="text-sm font-mono text-orange-900">
              This div has className=&ldquo;[&~p]:...&ldquo; (ORANGE - NOT
              affected by selector!)
            </span>
          </div>

          <p className="text-lg mt-4">✅ CYAN! (1st sibling after div)</p>
          <p className="text-lg mt-2">✅ CYAN! (2nd sibling after div)</p>
          <p className="text-lg mt-2">✅ CYAN! (all siblings after!)</p>
        </div>

        <BeforeAfter
          before={
            <div className="text-center">
              <p className="font-bold text-gray-700 mb-2">[&+p] - Adjacent</p>
              <p className="text-sm text-gray-600 mb-3">Only immediate next</p>
              <div className="space-y-1 text-sm">
                <div className="text-green-600 font-bold">✅ 1st sibling</div>
                <div className="text-red-600 font-bold">❌ 2nd sibling</div>
                <div className="text-red-600 font-bold">❌ 3rd sibling</div>
              </div>
            </div>
          }
          after={
            <div className="text-center">
              <p className="font-bold text-gray-700 mb-2">[&~p] - General</p>
              <p className="text-sm text-gray-600 mb-3">
                ALL following siblings
              </p>
              <div className="space-y-1 text-sm">
                <div className="text-green-600 font-bold">✅ 1st sibling</div>
                <div className="text-green-600 font-bold">✅ 2nd sibling</div>
                <div className="text-green-600 font-bold">✅ 3rd sibling</div>
              </div>
            </div>
          }
        />
      </div>
    </DemoBlock>
  );
}