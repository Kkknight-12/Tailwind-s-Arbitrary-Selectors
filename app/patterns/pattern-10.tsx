import { CodeExample } from "@/components/CodeExample";
import { DemoBlock } from "@/components/DemoBlock";
import { VisualBox } from "@/components/VisualBox";

export function Pattern10() {
  return (
    <DemoBlock
      pattern="[&_element:hover]"
      title="Pattern 10: Hover State Selector 🎨"
      description="Combine arbitrary selectors with pseudo-classes like :hover! Apply hover effects to child elements without adding classes to each one."
      useCase="Interactive effects on injected HTML, markdown links"
      id="pattern-10"
    >
      <div className="space-y-6">
        <div className="bg-pink-50 border-2 border-pink-200 rounded-lg p-4">
          <p className="font-bold text-pink-800 mb-2">
            Parent Container has this className:
          </p>
          <code className="text-sm bg-pink-900 text-pink-100 px-3 py-1 rounded font-mono block">
            className=&quot;[&_p:hover]:bg-gradient-to-r
            [&_p:hover]:from-pink-100&quot;
          </code>
          <p className="text-xs text-pink-700 mt-2">
            Target: ALL <code className="bg-pink-200 px-1 rounded">p</code>{" "}
            elements that are descendants, but ONLY when being hovered
          </p>
          <p className="text-xs text-pink-700 mt-1">
            Styling: Gradient background{" "}
            <code className="bg-pink-200 px-1 rounded">bg-gradient-to-r</code> +
            scale + shadow (on hover!)
          </p>
          <p className="text-xs text-pink-700 mt-2 font-semibold">
            Note: <code className="bg-pink-200 px-1 rounded">:hover</code> is a
            pseudo-class - styles apply only during hover
          </p>
        </div>

        <CodeExample
          title="HTML Structure:"
          code={`<div className="[&_p:hover]:bg-gradient-to-r">  ← PARENT with selector
  <p>Hover me!</p>              ← Descendant p (gets hover effect)

  <div>
    <p>Nested hover works!</p>  ← Nested descendant p (also gets effect)
  </div>
</div>

// Targeting: ALL <p> descendants (at any depth)
// When: Only when the <p> is being hovered
// Styling: Gradient background with scale and shadow`}
        />

        <div className="[&_p:hover]:bg-gradient-to-r [&_p:hover]:from-pink-100 [&_p:hover]:to-purple-100 [&_p:hover]:scale-105 [&_p:hover]:shadow-lg border-2 border-purple-400 bg-purple-50 p-6 rounded-lg space-y-4">
          <p className="text-xs text-purple-700 font-semibold mb-4">
            ⬇️ This purple box is the PARENT with
            className=&quot;[&_p:hover]:...&quot;
          </p>
          <p className="text-sm text-gray-600 mb-4 font-semibold">
            👇 Hover over these paragraphs to see the effect!
          </p>
          <VisualBox selected={true} label="Hover me!">
            <p className="text-lg transition-all duration-200 cursor-pointer px-4 py-3 rounded">
              ✨ Hover me for gradient background!
            </p>
          </VisualBox>
          <VisualBox selected={true} label="Hover me too!">
            <p className="text-lg transition-all duration-200 cursor-pointer px-4 py-3 rounded">
              ✨ I have the same hover effect!
            </p>
          </VisualBox>
          <div className="border-l-2 border-pink-300 pl-4">
            <VisualBox selected={true} label="Nested hover">
              <p className="text-lg transition-all duration-200 cursor-pointer px-4 py-3 rounded">
                ✨ Nested paragraphs work too!
              </p>
            </VisualBox>
          </div>
        </div>
      </div>

      <div className="mt-6 grid md:grid-cols-2 gap-4">
        <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
          <p className="text-sm font-bold text-pink-800 mb-2">Link Hover:</p>
          <code className="text-xs bg-pink-900 text-pink-100 p-2 rounded block">
            {"[&_a:hover]:text-blue-600"}
          </code>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <p className="text-sm font-bold text-purple-800 mb-2">
            Button Hover:
          </p>
          <code className="text-xs bg-purple-900 text-purple-100 p-2 rounded block">
            {"[&_button:hover]:scale-110"}
          </code>
        </div>
      </div>
    </DemoBlock>
  );
}