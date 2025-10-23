import { CodeExample } from "@/components/CodeExample";
import { DemoBlock } from "@/components/DemoBlock";
import { VisualBox } from "@/components/VisualBox";

export function Pattern4() {
  return (
    <DemoBlock
      pattern='[&_[class="name"]] or [&_.classname]'
      title="Pattern 4: Class Targeting (Two Syntaxes!)"
      description="Target elements with specific class names at any depth. TWO ways to do this: bracket notation or dot notation."
      useCase="Library components, legacy code integration"
      id="pattern-4"
    >
      <div className="space-y-6">
        <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-4">
          <p className="font-bold text-purple-800 mb-3">
            Parent Container has this className:
          </p>
          <code className="text-sm bg-purple-900 text-purple-100 px-3 py-1 rounded font-mono block">
            className=&quot;[&_[class=&apos;highlight&apos;]]:bg-yellow-200&quot;
          </code>
          <p className="text-xs text-purple-700 mt-2">
            This means: &quot;Select any element with{" "}
            <code className="bg-purple-200 px-1 rounded">
              class=&quot;highlight&quot;
            </code>{" "}
            at any depth&quot;
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <p className="font-bold text-blue-800 mb-2 text-sm">
              Method 1: Bracket Notation
            </p>
            <code className="text-xs bg-blue-900 text-blue-100 p-2 rounded block">
              [&_[class=&quot;highlight&quot;]]
            </code>
            <p className="text-xs text-blue-700 mt-2">
              ✅ Use for exact class match
            </p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-3">
            <p className="font-bold text-green-800 mb-2 text-sm">
              Method 2: Dot Notation
            </p>
            <code className="text-xs bg-green-900 text-green-100 p-2 rounded block">
              [&_.highlight]
            </code>
            <p className="text-xs text-green-700 mt-2">
              ✅ Shorter, more common
            </p>
          </div>
        </div>

        <CodeExample
          title="HTML Structure:"
          code={`<div className="[&_[class='highlight']]:bg-yellow-200">  ← PARENT
  <span>Normal text</span>                               ← No class
  <span className="highlight">Highlighted!</span>        ← HAS class="highlight" ✓

  <div>
    <span className="highlight">Also highlighted!</span> ← HAS class="highlight" ✓
  </div>
</div>

// Both syntaxes work the same:
className="[&_[class='highlight']]:bg-yellow-200"  ← Bracket notation
className="[&_.highlight]:bg-yellow-200"           ← Dot notation (same result!)`}
        />

        <div className="[&_[class='highlight']]:bg-yellow-200 [&_[class='highlight']]:px-3 [&_[class='highlight']]:py-1 [&_[class='highlight']]:rounded [&_[class='highlight']]:font-bold border-2 border-purple-400 bg-purple-50 p-6 rounded-lg space-y-4">
          <p className="text-xs text-purple-700 font-semibold mb-4">
            ⬇️ This purple box is the PARENT with
            className=&quot;[&_[class=&apos;highlight&apos;]]...&quot;
          </p>

          <VisualBox selected={false} label="<span> (no class)">
            <span className="text-lg">❌ Normal text (no class attribute)</span>
          </VisualBox>

          <VisualBox selected={true} label='<span class="highlight">'>
            <span className="highlight text-lg">
              ✅ Yellow background! (has class=&quot;highlight&quot;)
            </span>
          </VisualBox>

          <div className="border-l-2 border-yellow-400 pl-4 bg-yellow-50 py-2 rounded mt-4">
            <p className="text-xs text-yellow-700 mb-2">Nested inside a div:</p>
            <VisualBox selected={true} label='Nested <span class="highlight">'>
              <span className="highlight text-lg">
                ✅ Also yellow! (works at any depth)
              </span>
            </VisualBox>
          </div>
        </div>

        <div className="bg-indigo-50 border-2 border-indigo-200 rounded-lg p-4">
          <p className="font-bold text-indigo-800 mb-3">
            💡 Real-World: React Select Library
          </p>
          <p className="text-sm text-indigo-700 mb-2">
            React Select generates elements with{" "}
            <code className="bg-indigo-200 px-1 rounded">
              className=&quot;select__control&quot;
            </code>
          </p>
          <code className="text-xs bg-indigo-900 text-indigo-100 p-2 rounded block mb-2">
            {"// Method 1: Bracket notation"}
            <br />
            {
              "<ReactSelect className=\"[&_[class='select__control']]:border-2\" />"
            }
          </code>
          <code className="text-xs bg-indigo-900 text-indigo-100 p-2 rounded block">
            {"// Method 2: Dot notation (PREFERRED - shorter!)"}
            <br />
            {'<ReactSelect className="[&_.select__control]:border-2" />'}
          </code>
          <p className="text-xs text-indigo-600 mt-2">
            ⭐ Most devs use dot notation because it&apos;s cleaner!
          </p>
        </div>
      </div>
    </DemoBlock>
  );
}