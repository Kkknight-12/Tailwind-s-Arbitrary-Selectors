import { CodeExample } from "@/components/CodeExample";
import { DemoBlock } from "@/components/DemoBlock";
import { VisualBox } from "@/components/VisualBox";

export function Pattern7() {
  return (
    <DemoBlock
      pattern="[&+element]"
      title="Pattern 7: Adjacent Sibling Selector"
      description="Target the immediately following sibling element. Useful for spacing and sequential content styling."
      useCase="Spacing between elements, form label + input styling"
      id="pattern-7"
    >
      <div className="space-y-6">
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
          <p className="font-bold text-blue-800 mb-2">
            Element with selector has this className:
          </p>
          <code className="text-sm bg-blue-900 text-blue-100 px-3 py-1 rounded font-mono block">
            className=&quot;[&+p]:text-blue-600 [&+p]:font-bold&quot;
          </code>
          <p className="text-xs text-blue-700 mt-2">
            Target: The <code className="bg-blue-200 px-1 rounded">p</code>{" "}
            element that comes IMMEDIATELY AFTER this element
          </p>
          <p className="text-xs text-blue-700 mt-1">
            Styling: Make it{" "}
            <code className="bg-blue-200 px-1 rounded">text-blue-600</code>{" "}
            (blue text) and{" "}
            <code className="bg-blue-200 px-1 rounded">font-bold</code>
          </p>
          <p className="text-xs text-blue-700 mt-2 font-semibold">
            Note: <code className="bg-blue-200 px-1 rounded">+</code> means
            &quot;next sibling&quot; (adjacent)
          </p>
        </div>

        <CodeExample
          title="HTML Structure:"
          code={`<div className="[&+p]:text-blue-600">  ← This element has the selector
  I'm a div
</div>
<p>✅ SELECTED! (next sibling - immediately after div)</p>
<p>❌ NOT selected (2nd sibling - not adjacent)</p>

// Targeting: <p> element IMMEDIATELY after the div
// Styling: text-blue-600 (blue text)`}
        />

        <div className="space-y-4">
          <div className="border-2 border-purple-400 bg-purple-50 p-6 rounded-lg">
            <div className="[&+p]:text-blue-600 [&+p]:font-bold [&+p]:bg-blue-100 [&+p]:px-3 [&+p]:py-1 [&+p]:rounded-lg inline-block border-2 border-blue-400 bg-blue-200 px-4 py-2 rounded">
              <p className="text-sm font-mono text-blue-900 font-semibold">
                This div has className=&quot;[&+p]:...&quot;
              </p>
            </div>
            <VisualBox selected={true} label="Next sibling <p> (adjacent)">
              <p className="text-lg mt-4">
                ✅ I&apos;m BLUE! (immediately after the div)
              </p>
            </VisualBox>
            <VisualBox selected={false} label="Second <p> (not adjacent)">
              <p className="text-lg">
                ❌ Not blue (not the immediate next sibling)
              </p>
            </VisualBox>
          </div>

          <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
            <p className="text-sm font-bold text-teal-800 mb-3">
              💡 Common Use Case: Label + Input
            </p>
            <CodeExample
              code={`<label className="[&+input]:border-2">Username:</label>
<input type="text" />  ← This input gets border-2

// Targeting: <input> that comes after <label>
// Styling: border-2 (thick border)`}
            />
            <div className="[&+input]:border-2 [&+input]:border-teal-500 space-y-3 mt-3">
              <label className="block font-semibold text-gray-700">
                Username:
              </label>
              <input
                type="text"
                placeholder="This input has border-2 (follows label)"
                className="px-3 py-2 rounded w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </DemoBlock>
  );
}