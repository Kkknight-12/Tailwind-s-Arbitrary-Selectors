'use client';

import { DemoBlock } from "@/components/DemoBlock";
import { VisualBox } from "@/components/VisualBox";
import { InteractiveDemo } from "@/components/InteractiveDemo";
import { BeforeAfter } from "@/components/BeforeAfter";
import { CodeExample } from "@/components/CodeExample";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden">
        {/* Animated background circles */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-glow"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-glow" style={{animationDelay: '1s'}}></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-glow" style={{animationDelay: '2s'}}></div>

        <div className="relative max-w-4xl mx-auto text-center px-6 py-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-fade-in">
            Mastering Tailwind's
            <br />
            <code className="text-5xl md:text-6xl font-mono">[&_selector]</code>
            <br />
            Syntax
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
            The Visual Guide to Arbitrary Selectors
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.4s'}}>
            Learn how to style third-party HTML, markdown content, and library components
            with Tailwind's powerful arbitrary selector syntax.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* Introduction */}
        <section className="mb-20 animate-fade-in">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            What Are Arbitrary Selectors?
          </h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Arbitrary selectors let you target child elements using CSS selectors directly
            in Tailwind's className. They solve the common problem of styling HTML you
            can't control—like Shiki code blocks, markdown content, or third-party libraries.
          </p>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <p className="text-gray-800 font-semibold mb-2">The Pattern:</p>
            <code className="text-lg font-mono text-purple-700">
              className="[&_selector]:utility-class"
            </code>
          </div>
        </section>

        {/* Symbol Explanation Section */}
        <section className="mb-20 animate-fade-in">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Understanding the Symbols: & and _
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <code className="text-4xl font-bold text-blue-700">&</code>
                <div>
                  <h3 className="text-xl font-bold text-blue-900">The Ampersand</h3>
                  <p className="text-sm text-blue-700">Represents "this element"</p>
                </div>
              </div>
              <p className="text-gray-700 mb-3">
                <code className="bg-blue-200 px-2 py-1 rounded font-mono">&</code> is a placeholder for the current element (the one with the className).
              </p>
              <div className="bg-white border border-blue-200 rounded p-3 text-sm">
                <p className="font-mono text-blue-800 mb-2">className="[&_p]:text-red-600"</p>
                <p className="text-gray-600">Means: "From <span className="font-bold text-blue-700">this element (&)</span>, select p tags"</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-300 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <code className="text-4xl font-bold text-purple-700">_</code>
                <div>
                  <h3 className="text-xl font-bold text-purple-900">The Underscore</h3>
                  <p className="text-sm text-purple-700">Represents a "space" (descendant)</p>
                </div>
              </div>
              <p className="text-gray-700 mb-3">
                <code className="bg-purple-200 px-2 py-1 rounded font-mono">_</code> is Tailwind's way of writing a space (CSS descendant combinator).
              </p>
              <div className="bg-white border border-purple-200 rounded p-3 text-sm">
                <p className="font-mono text-purple-800 mb-2">[&_p] = "& p" in CSS</p>
                <p className="text-gray-600">The underscore becomes a <span className="font-bold text-purple-700">space</span> in the generated CSS</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 border-2 border-pink-300 rounded-xl p-6 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">🔥 Common Patterns Explained:</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <code className="text-lg font-mono bg-blue-100 px-3 py-1 rounded text-blue-800">[&_p]</code>
                    <p className="text-sm text-gray-600 mt-2">
                      <code className="bg-gray-100 px-2 py-0.5 rounded">&</code> (this element) +
                      <code className="bg-gray-100 px-2 py-0.5 rounded mx-1">_</code> (space) +
                      <code className="bg-gray-100 px-2 py-0.5 rounded">p</code> (paragraph)
                    </p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded">
                    <p className="text-sm font-semibold text-blue-900 mb-1">Becomes in CSS:</p>
                    <code className="text-xs bg-blue-900 text-blue-100 px-2 py-1 rounded">.parent p</code>
                    <p className="text-xs text-blue-700 mt-2">= "Select p elements that are descendants of parent"</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <code className="text-lg font-mono bg-green-100 px-3 py-1 rounded text-green-800">[&>p]</code>
                    <p className="text-sm text-gray-600 mt-2">
                      <code className="bg-gray-100 px-2 py-0.5 rounded">&</code> (this element) +
                      <code className="bg-gray-100 px-2 py-0.5 rounded mx-1">></code> (direct child) +
                      <code className="bg-gray-100 px-2 py-0.5 rounded">p</code>
                    </p>
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <p className="text-sm font-semibold text-green-900 mb-1">Becomes in CSS:</p>
                    <code className="text-xs bg-green-900 text-green-100 px-2 py-1 rounded">.parent > p</code>
                    <p className="text-xs text-green-700 mt-2">= "Select p elements that are DIRECT children of parent"</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <code className="text-lg font-mono bg-violet-100 px-3 py-1 rounded text-violet-800">[.parent_&]</code>
                    <p className="text-sm text-gray-600 mt-2">
                      <code className="bg-gray-100 px-2 py-0.5 rounded">.parent</code> (class) +
                      <code className="bg-gray-100 px-2 py-0.5 rounded mx-1">_</code> (space) +
                      <code className="bg-gray-100 px-2 py-0.5 rounded">&</code> (this element)
                    </p>
                  </div>
                  <div className="bg-violet-50 p-3 rounded">
                    <p className="text-sm font-semibold text-violet-900 mb-1">Becomes in CSS:</p>
                    <code className="text-xs bg-violet-900 text-violet-100 px-2 py-1 rounded">.parent .child</code>
                    <p className="text-xs text-violet-700 mt-2">= "Select this element when it's inside a .parent"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
            <h3 className="text-lg font-bold text-yellow-900 mb-3">💡 Key Takeaway:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 font-bold">•</span>
                <span><code className="bg-yellow-100 px-2 py-0.5 rounded font-mono">&</code> = "this element" (the one with the className)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 font-bold">•</span>
                <span><code className="bg-yellow-100 px-2 py-0.5 rounded font-mono">_</code> = "space" in CSS (descendant selector)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 font-bold">•</span>
                <span><code className="bg-yellow-100 px-2 py-0.5 rounded font-mono">&_p</code> = "from this element, select p descendants"</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 font-bold">•</span>
                <span><code className="bg-yellow-100 px-2 py-0.5 rounded font-mono">.parent_&</code> = "select this element when inside .parent"</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Pattern 1: Descendant Selector */}
        <DemoBlock
          pattern="[&_element]"
          title="Pattern 1: Descendant Selector ⭐"
          description="The most common pattern! Targets ALL matching elements at any depth in the tree. Perfect for styling injected HTML or markdown content."
          useCase="Styling markdown/MDX content, third-party HTML"
          id="pattern-1"
        >
          <div className="space-y-6">
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
              <p className="font-bold text-green-800 mb-2">Parent Container has this className:</p>
              <code className="text-sm bg-green-900 text-green-100 px-3 py-1 rounded font-mono block">
                className="[&_p]:text-green-600 [&_p]:font-bold"
              </code>
              <p className="text-xs text-green-700 mt-2">
                Remember: <code className="bg-green-200 px-1 rounded">&</code> = this element, <code className="bg-green-200 px-1 rounded">_</code> = space (descendant)
              </p>
              <p className="text-xs text-green-700 mt-1">
                This means: "Select ALL <code className="bg-green-200 px-1 rounded">p</code> tags that are descendants of me (at ANY depth)"
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
                    enabled && "[&_p]:text-green-600 [&_p]:font-bold"
                  )}
                >
                  <p className="text-xs text-purple-700 font-semibold mb-4">
                    ⬇️ This purple box is the PARENT with className="{enabled ? '[&_p]:text-green-600' : '(selector disabled)'}"
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
                        <p className="text-lg">Even this - descendants at ANY level!</p>
                      </VisualBox>
                    </div>
                  </div>
                </div>
              )}
            </InteractiveDemo>
          </div>
        </DemoBlock>

        {/* Pattern 2: Direct Child Selector */}
        <DemoBlock
          pattern="[&>element]"
          title="Pattern 2: Direct Child Selector"
          description="Targets ONLY immediate children, not grandchildren or deeper descendants. Use when you want precise control over the cascade."
          useCase="Layout-specific styling, preventing cascade to nested elements"
          id="pattern-2"
        >
          <div className="space-y-6">
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
              <p className="font-bold text-red-800 mb-2">Parent Container has this className:</p>
              <code className="text-sm bg-red-900 text-red-100 px-3 py-1 rounded font-mono block">
                className="[&>p]:text-red-600 [&>p]:font-bold"
              </code>
              <p className="text-xs text-red-700 mt-2">
                Notice: <code className="bg-red-200 px-1 rounded">&</code> = this element, <code className="bg-red-200 px-1 rounded">></code> = direct child (NOT <code className="bg-red-200 px-1 rounded">_</code>!)
              </p>
              <p className="text-xs text-red-700 mt-1">
                This means: "Select <code className="bg-red-200 px-1 rounded">p</code> tags that are ONLY direct children (one level deep)"
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
                    enabled && "[&>p]:text-red-600 [&>p]:font-bold"
                  )}
                >
                  <p className="text-xs text-purple-700 font-semibold mb-4">
                    ⬇️ This purple box is the PARENT with className="{enabled ? '[&>p]:text-red-600' : '(selector disabled)'}"
                  </p>

                  <VisualBox selected={enabled} label="Direct child <p>">
                    <p className="text-lg">✅ RED when active (I'm a direct child!)</p>
                  </VisualBox>

                  <div className="mt-4 pl-6 border-l-2 border-gray-400 bg-gray-100 p-4 rounded">
                    <p className="text-xs text-gray-600 mb-2">⬅️ This gray box is a child of parent</p>
                    <VisualBox selected={false} label="Grandchild <p> (inside <div>)">
                      <p className="text-lg">❌ NOT red (I'm a grandchild, not direct!)</p>
                    </VisualBox>
                  </div>
                </div>
              )}
            </InteractiveDemo>

            <div className="mt-8">
              <h3 className="font-bold text-xl mb-4 text-gray-900">
                📊 Visual Comparison: _ vs >
              </h3>
              <BeforeAfter
                beforeLabel="[&_p] with underscore"
                afterLabel="[&>p] with greater-than"
                before={
                  <div className="text-center">
                    <code className="text-lg font-mono bg-blue-100 px-2 py-1 rounded text-blue-800 mb-2 inline-block">[&_p]</code>
                    <p className="text-sm text-gray-600 mb-2">Descendant (space)</p>
                    <div className="mt-3 text-sm">
                      <div className="text-green-600 font-bold">✅ Direct children</div>
                      <div className="text-green-600 font-bold">✅ Grandchildren</div>
                      <div className="text-green-600 font-bold">✅ Any depth</div>
                    </div>
                  </div>
                }
                after={
                  <div className="text-center">
                    <code className="text-lg font-mono bg-red-100 px-2 py-1 rounded text-red-800 mb-2 inline-block">[&>p]</code>
                    <p className="text-sm text-gray-600 mb-2">Direct child (&gt;)</p>
                    <div className="mt-3 text-sm">
                      <div className="text-green-600 font-bold">✅ Direct children</div>
                      <div className="text-red-600 font-bold">❌ Grandchildren</div>
                      <div className="text-red-600 font-bold">❌ Deeper levels</div>
                    </div>
                  </div>
                }
              />
            </div>
          </div>
        </DemoBlock>

        {/* Pattern 3: Nested Path Selector */}
        <DemoBlock
          pattern="[&>div>p]"
          title="Pattern 3: Nested Path Selector"
          description="Targets elements following a specific DOM path. Useful when you need surgical precision in complex layouts."
          useCase="Specific DOM structure styling, complex component layouts"
          id="pattern-3"
        >
          <div className="space-y-6">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
              <p className="font-bold text-blue-800 mb-2">Parent Container has this className:</p>
              <code className="text-sm bg-blue-900 text-blue-100 px-3 py-1 rounded font-mono">
                className="[&>div>p]:text-yellow-700 [&>div>p]:font-bold"
              </code>
              <p className="text-xs text-blue-700 mt-2">
                This means: "Select <code className="bg-blue-200 px-1 rounded">p</code> tags that are inside a <code className="bg-blue-200 px-1 rounded">div</code> that is a direct child of me"
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
                ⬇️ This purple box is the PARENT with className="[&>div>p]:..."
              </p>

              <VisualBox selected={false} label='Direct <p> child of parent (no div wrapper)'>
                <p className="text-lg">❌ Not yellow - I'm a direct child of parent, not inside a div</p>
              </VisualBox>

              <div className="border-l-4 border-yellow-400 pl-4 bg-yellow-50 py-3 rounded">
                <p className="text-xs text-yellow-700 font-semibold mb-2">
                  ⬅️ Yellow border = Direct child DIV of parent
                </p>
                <VisualBox selected={true} label='<p> inside direct child <div>'>
                  <p className="text-lg">✅ YELLOW! Path: parent &gt; div &gt; p ✓</p>
                </VisualBox>
              </div>

              <div className="border-l-4 border-gray-400 pl-4 bg-gray-100 py-3 rounded">
                <p className="text-xs text-gray-600 font-semibold mb-2">
                  ⬅️ Gray border = Direct child DIV of parent
                </p>
                <div className="border-l-2 border-gray-300 pl-4 mt-2">
                  <p className="text-xs text-gray-500 mb-2">↑ Nested div inside the gray div</p>
                  <VisualBox selected={false} label='<p> in nested div'>
                    <p className="text-lg">❌ Not yellow - Path: parent &gt; div &gt; div &gt; p ✗</p>
                  </VisualBox>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-orange-50 border border-orange-200 rounded-lg p-4">
            <p className="text-sm text-orange-800">
              <span className="font-bold">⚠️ Tip:</span> Complex selectors like this reduce
              readability. Use sparingly and add comments when necessary.
            </p>
          </div>
        </DemoBlock>

        {/* Pattern 4: Class Targeting */}
        <DemoBlock
          pattern='[&_[class="name"]] or [&_.classname]'
          title="Pattern 4: Class Targeting (Two Syntaxes!)"
          description="Target elements with specific class names at any depth. TWO ways to do this: bracket notation or dot notation."
          useCase="Library components, legacy code integration"
          id="pattern-4"
        >
          <div className="space-y-6">
            <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-4">
              <p className="font-bold text-purple-800 mb-3">Parent Container has this className:</p>
              <code className="text-sm bg-purple-900 text-purple-100 px-3 py-1 rounded font-mono block">
                className="[&_[class='highlight']]:bg-yellow-200"
              </code>
              <p className="text-xs text-purple-700 mt-2">
                This means: "Select any element with <code className="bg-purple-200 px-1 rounded">class="highlight"</code> at any depth"
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="font-bold text-blue-800 mb-2 text-sm">Method 1: Bracket Notation</p>
                <code className="text-xs bg-blue-900 text-blue-100 p-2 rounded block">
                  [&_[class="highlight"]]
                </code>
                <p className="text-xs text-blue-700 mt-2">
                  ✅ Use for exact class match
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <p className="font-bold text-green-800 mb-2 text-sm">Method 2: Dot Notation</p>
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
                ⬇️ This purple box is the PARENT with className="[&_[class='highlight']]..."
              </p>

              <VisualBox selected={false} label='<span> (no class)'>
                <span className="text-lg">❌ Normal text (no class attribute)</span>
              </VisualBox>

              <VisualBox selected={true} label='<span class="highlight">'>
                <span className="highlight text-lg">✅ Yellow background! (has class="highlight")</span>
              </VisualBox>

              <div className="border-l-2 border-yellow-400 pl-4 bg-yellow-50 py-2 rounded mt-4">
                <p className="text-xs text-yellow-700 mb-2">Nested inside a div:</p>
                <VisualBox selected={true} label='Nested <span class="highlight">'>
                  <span className="highlight text-lg">✅ Also yellow! (works at any depth)</span>
                </VisualBox>
              </div>
            </div>

            <div className="bg-indigo-50 border-2 border-indigo-200 rounded-lg p-4">
              <p className="font-bold text-indigo-800 mb-3">💡 Real-World: React Select Library</p>
              <p className="text-sm text-indigo-700 mb-2">
                React Select generates elements with <code className="bg-indigo-200 px-1 rounded">className="select__control"</code>
              </p>
              <code className="text-xs bg-indigo-900 text-indigo-100 p-2 rounded block mb-2">
                {'// Method 1: Bracket notation'}
                <br/>
                {'<ReactSelect className="[&_[class=\'select__control\']]:border-2" />'}
              </code>
              <code className="text-xs bg-indigo-900 text-indigo-100 p-2 rounded block">
                {'// Method 2: Dot notation (PREFERRED - shorter!)'}
                <br/>
                {'<ReactSelect className="[&_.select__control]:border-2" />'}
              </code>
              <p className="text-xs text-indigo-600 mt-2">
                ⭐ Most devs use dot notation because it's cleaner!
              </p>
            </div>
          </div>
        </DemoBlock>

        {/* Pattern 5: Attribute Targeting */}
        <DemoBlock
          pattern='[&_[attribute="value"]]'
          title="Pattern 5: Attribute Targeting"
          description="Target elements by data attributes, ARIA attributes, or any HTML attribute. Perfect for state-based styling."
          useCase="State-based styling, ARIA attributes, data attributes from APIs"
          id="pattern-5"
        >
          <div className="space-y-6">
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
              <p className="font-bold text-green-800 mb-2">Parent Container has this className:</p>
              <code className="text-sm bg-green-900 text-green-100 px-3 py-1 rounded font-mono block">
                className="[&_[data-active='true']]:bg-green-100"
              </code>
              <p className="text-xs text-green-700 mt-2">
                Target: Any <code className="bg-green-200 px-1 rounded">button</code> element with <code className="bg-green-200 px-1 rounded">data-active="true"</code> attribute
              </p>
              <p className="text-xs text-green-700 mt-1">
                Styling: Give it <code className="bg-green-200 px-1 rounded">bg-green-100</code> background color
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
                ⬇️ This purple box is the PARENT with className="[&_[data-active='true']]..."
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
              <p className="text-sm font-bold text-purple-800 mb-2">ARIA Example:</p>
              <code className="text-xs bg-purple-900 text-purple-100 p-2 rounded block">
                {'[&_[aria-selected="true"]]:font-bold'}
              </code>
            </div>
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
              <p className="text-sm font-bold text-indigo-800 mb-2">Role Example:</p>
              <code className="text-xs bg-indigo-900 text-indigo-100 p-2 rounded block">
                {'[&_[role="alert"]]:text-red-600'}
              </code>
            </div>
          </div>
        </DemoBlock>

        {/* Pattern 6: Combined Selector */}
        <DemoBlock
          pattern='[&>p[class="special"]] or [&>p.special]'
          title="Pattern 6: Combined Selector"
          description="Combine multiple selectors for surgical precision. Match both structure AND attributes/classes simultaneously."
          useCase="Very specific targeting, resolving style conflicts"
          id="pattern-6"
        >
          <div className="space-y-6">
            <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-4">
              <p className="font-bold text-orange-800 mb-2">Parent Container has this className:</p>
              <code className="text-sm bg-orange-900 text-orange-100 px-3 py-1 rounded font-mono block">
                className="[&>p[class='special']]:text-orange-600"
              </code>
              <p className="text-xs text-orange-700 mt-2">
                This means: "Select <code className="bg-orange-200 px-1 rounded">p</code> tags with <code className="bg-orange-200 px-1 rounded">class="special"</code> that are DIRECT children of me"
              </p>
              <p className="text-xs text-orange-700 mt-1 font-semibold">
                ⚠️ BOTH conditions must be true: (1) Direct child AND (2) Has the class
              </p>
            </div>

            <CodeExample
              title="HTML Structure:"
              code={`<div className="[&>p[class='special']]:text-orange-600">  ← PARENT
  <p>No class</p>                                        ← Direct child, but NO class ✗
  <p className="special">✅ SELECTED!</p>               ← Direct child + HAS class ✓

  <div>
    <p className="special">Not selected</p>             ← HAS class, but NOT direct child ✗
  </div>
</div>

// You can also use dot notation (same as Pattern 4):
className="[&>p.special]:text-orange-600"  ← Shorter, same result!`}
            />

            <div className="[&>p[class='special']]:text-orange-600 [&>p[class='special']]:font-bold [&>p[class='special']]:bg-orange-100 [&>p[class='special']]:px-3 [&>p[class='special']]:py-1 [&>p[class='special']]:rounded border-2 border-purple-400 bg-purple-50 p-6 rounded-lg space-y-4">
              <p className="text-xs text-purple-700 font-semibold mb-4">
                ⬇️ This purple box is the PARENT with className="[&>p[class='special']]..."
              </p>

              <VisualBox selected={false} label='<p> (no class)'>
                <p className="text-lg">❌ Not styled - I'm a direct child but have NO class</p>
              </VisualBox>

              <VisualBox selected={true} label='<p class="special"> (direct child of parent)'>
                <p className="special text-lg">✅ ORANGE! I'm a direct child AND have class="special"</p>
              </VisualBox>

              <div className="border-l-4 border-gray-400 pl-4 bg-gray-100 py-3 rounded mt-4">
                <p className="text-xs text-gray-600 font-semibold mb-2">
                  ⬅️ This gray box wraps the next <code className="bg-gray-200 px-1">p</code>
                </p>
                <VisualBox selected={false} label='<p class="special"> (nested in div)'>
                  <p className="special text-lg">❌ Not styled - I have class="special" but I'm NOT a direct child of parent</p>
                </VisualBox>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-sm text-red-800">
              <span className="font-bold">⚠️ Warning:</span> Use combined selectors sparingly.
              They can hurt readability and maintainability. Consider creating a styled
              component instead if the pattern is complex or repeated.
            </p>
          </div>
        </DemoBlock>

        {/* Pattern 7: Adjacent Sibling Selector */}
        <DemoBlock
          pattern="[&+element]"
          title="Pattern 7: Adjacent Sibling Selector"
          description="Target the immediately following sibling element. Useful for spacing and sequential content styling."
          useCase="Spacing between elements, form label + input styling"
          id="pattern-7"
        >
          <div className="space-y-6">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
              <p className="font-bold text-blue-800 mb-2">Element with selector has this className:</p>
              <code className="text-sm bg-blue-900 text-blue-100 px-3 py-1 rounded font-mono block">
                className="[&+p]:text-blue-600 [&+p]:font-bold"
              </code>
              <p className="text-xs text-blue-700 mt-2">
                Target: The <code className="bg-blue-200 px-1 rounded">p</code> element that comes IMMEDIATELY AFTER this element
              </p>
              <p className="text-xs text-blue-700 mt-1">
                Styling: Make it <code className="bg-blue-200 px-1 rounded">text-blue-600</code> (blue text) and <code className="bg-blue-200 px-1 rounded">font-bold</code>
              </p>
              <p className="text-xs text-blue-700 mt-2 font-semibold">
                Note: <code className="bg-blue-200 px-1 rounded">+</code> means "next sibling" (adjacent)
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
                  <p className="text-sm font-mono text-blue-900 font-semibold">This div has className="[&+p]:..."</p>
                </div>
                <VisualBox selected={true} label='Next sibling <p> (adjacent)'>
                  <p className="text-lg mt-4">✅ I'm BLUE! (immediately after the div)</p>
                </VisualBox>
                <VisualBox selected={false} label="Second <p> (not adjacent)">
                  <p className="text-lg">❌ Not blue (not the immediate next sibling)</p>
                </VisualBox>
              </div>

              <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                <p className="text-sm font-bold text-teal-800 mb-3">💡 Common Use Case: Label + Input</p>
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

        {/* Pattern 8: Parent Selector */}
        <DemoBlock
          pattern="[.parent_&]"
          title="Pattern 8: Parent Selector (Advanced)"
          description="Style an element based on its parent's class. Least common pattern but powerful for theme switching and conditional styling."
          useCase="Child styling based on parent state, theme switching"
          id="pattern-8"
        >
          <div className="space-y-6">
            <div className="bg-violet-50 border-2 border-violet-200 rounded-lg p-4">
              <p className="font-bold text-violet-800 mb-2">Child element has this className:</p>
              <code className="text-sm bg-violet-900 text-violet-100 px-3 py-1 rounded font-mono block">
                className="[.parent_&]:text-purple-600 [.parent_&]:font-bold"
              </code>
              <p className="text-xs text-violet-700 mt-2">
                Notice: <code className="bg-violet-200 px-1 rounded">.parent</code> comes BEFORE <code className="bg-violet-200 px-1 rounded">&</code> (different from other patterns!)
              </p>
              <p className="text-xs text-violet-700 mt-1">
                Target: THIS element (<code className="bg-violet-200 px-1 rounded">&</code>), but ONLY when it's inside an ancestor with <code className="bg-violet-200 px-1 rounded">class="parent"</code>
              </p>
              <p className="text-xs text-violet-700 mt-1">
                Styling: <code className="bg-violet-200 px-1 rounded">text-purple-600</code> and <code className="bg-violet-200 px-1 rounded">font-bold</code>
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
                ⬇️ This is a div with class="parent" (ancestor) - This label text is NOT affected by the selector!
              </p>
              <p className="text-xs text-indigo-700 mb-4">
                The child element below has the className with the selector, NOT the parent.
              </p>
              <VisualBox selected={true} label='Child has [.parent_&] selector'>
                <div className="[.parent_&]:text-purple-600 [.parent_&]:font-bold [.parent_&]:bg-purple-200 [.parent_&]:px-3 [.parent_&]:py-1 [.parent_&]:rounded text-lg">
                  ✅ I'm purple! I have className="[.parent_&]:..." and I'm inside an ancestor with class="parent"
                </div>
              </VisualBox>
            </div>

            <div className="border-2 border-gray-300 bg-gray-50 p-6 rounded-lg">
              <p className="text-sm font-mono text-gray-600 mb-4 font-semibold">
                ⬇️ This div has NO "parent" class (it's just a regular div)
              </p>
              <VisualBox selected={false} label='Child has [.parent_&] selector'>
                <div className="[.parent_&]:text-purple-600 [.parent_&]:font-bold [.parent_&]:bg-purple-200 [.parent_&]:px-3 [.parent_&]:py-1 [.parent_&]:rounded text-lg">
                  ❌ NOT purple - I have className="[.parent_&]:..." but there's NO ancestor with class="parent"
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

        {/* Pattern 9: General Sibling Selector */}
        <DemoBlock
          pattern="[&~element]"
          title="Pattern 9: General Sibling Selector"
          description="Target ALL following siblings, not just the adjacent one. Unlike [&+element] which only targets the immediate next sibling, this targets all siblings that come after."
          useCase="Styling multiple elements that follow a trigger element"
          id="pattern-9"
        >
          <div className="space-y-6">
            <div className="bg-cyan-50 border-2 border-cyan-200 rounded-lg p-4">
              <p className="font-bold text-cyan-800 mb-2">Element with selector has this className:</p>
              <code className="text-sm bg-cyan-900 text-cyan-100 px-3 py-1 rounded font-mono block">
                className="[&~p]:bg-cyan-100 [&~p]:border-cyan-400"
              </code>
              <p className="text-xs text-cyan-700 mt-2">
                Target: ALL <code className="bg-cyan-200 px-1 rounded">p</code> elements that are siblings AFTER this element
              </p>
              <p className="text-xs text-cyan-700 mt-1">
                Styling: <code className="bg-cyan-200 px-1 rounded">bg-cyan-100</code> (cyan background) and <code className="bg-cyan-200 px-1 rounded">border-cyan-400</code>
              </p>
              <p className="text-xs text-cyan-700 mt-2 font-semibold">
                Note: <code className="bg-cyan-200 px-1 rounded">~</code> means "all following siblings" (not just the next one!)
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
                ⬇️ This purple wrapper contains the demo. The trigger div below has the selector.
              </p>

              <div className="[&~p]:bg-cyan-100 [&~p]:border-2 [&~p]:border-cyan-400 [&~p]:px-3 [&~p]:py-2 [&~p]:rounded [&~p]:font-semibold inline-block border-2 border-orange-500 bg-orange-200 px-4 py-2 rounded">
                <span className="text-sm font-mono text-orange-900">This div has className="[&~p]:..." (ORANGE - NOT affected by selector!)</span>
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
                  <p className="text-sm text-gray-600 mb-3">ALL following siblings</p>
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

        {/* Pattern 10: Hover State Selector */}
        <DemoBlock
          pattern="[&_element:hover]"
          title="Pattern 10: Hover State Selector 🎨"
          description="Combine arbitrary selectors with pseudo-classes like :hover! Apply hover effects to child elements without adding classes to each one."
          useCase="Interactive effects on injected HTML, markdown links"
          id="pattern-10"
        >
          <div className="space-y-6">
            <div className="bg-pink-50 border-2 border-pink-200 rounded-lg p-4">
              <p className="font-bold text-pink-800 mb-2">Parent Container has this className:</p>
              <code className="text-sm bg-pink-900 text-pink-100 px-3 py-1 rounded font-mono block">
                className="[&_p:hover]:bg-gradient-to-r [&_p:hover]:from-pink-100"
              </code>
              <p className="text-xs text-pink-700 mt-2">
                Target: ALL <code className="bg-pink-200 px-1 rounded">p</code> elements that are descendants, but ONLY when being hovered
              </p>
              <p className="text-xs text-pink-700 mt-1">
                Styling: Gradient background <code className="bg-pink-200 px-1 rounded">bg-gradient-to-r</code> + scale + shadow (on hover!)
              </p>
              <p className="text-xs text-pink-700 mt-2 font-semibold">
                Note: <code className="bg-pink-200 px-1 rounded">:hover</code> is a pseudo-class - styles apply only during hover
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
                ⬇️ This purple box is the PARENT with className="[&_p:hover]:..."
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
                {'[&_a:hover]:text-blue-600'}
              </code>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <p className="text-sm font-bold text-purple-800 mb-2">Button Hover:</p>
              <code className="text-xs bg-purple-900 text-purple-100 p-2 rounded block">
                {'[&_button:hover]:scale-110'}
              </code>
            </div>
          </div>
        </DemoBlock>

        {/* Pattern 11: First/Last Child Selector */}
        <DemoBlock
          pattern="[&_element:first-child] [&_element:last-child]"
          title="Pattern 11: First/Last Child Selector"
          description="Style elements based on their position! Target the first or last child, or use nth-child() for more complex patterns."
          useCase="Special styling for first/last items in lists, cards"
          id="pattern-11"
        >
          <div className="space-y-6">
            <div className="bg-emerald-50 border-2 border-emerald-200 rounded-lg p-4">
              <p className="font-bold text-emerald-800 mb-2">Parent Container has this className:</p>
              <code className="text-sm bg-emerald-900 text-emerald-100 px-3 py-1 rounded font-mono block mb-2">
                className="[&_p:first-child]:bg-green-100 [&_p:last-child]:bg-red-100"
              </code>
              <p className="text-xs text-emerald-700 mt-2">
                Target: <code className="bg-emerald-200 px-1 rounded">p</code> elements that are the FIRST child → green, or LAST child → red
              </p>
              <p className="text-xs text-emerald-700 mt-1">
                Styling: First child gets <code className="bg-emerald-200 px-1 rounded">bg-green-100</code>, Last child gets <code className="bg-emerald-200 px-1 rounded">bg-red-100</code>
              </p>
              <p className="text-xs text-emerald-700 mt-2 font-semibold">
                Note: <code className="bg-emerald-200 px-1 rounded">:first-child</code> and <code className="bg-emerald-200 px-1 rounded">:last-child</code> are position-based pseudo-classes
              </p>
            </div>

            <CodeExample
              title="HTML Structure:"
              code={`<div className="[&_p:first-child]:bg-green-100 [&_p:last-child]:bg-red-100">  ← PARENT
  <p>First Item</p>      ← :first-child ✓ SELECTED (green)
  <p>Middle Item</p>     ← Neither first nor last ✗
  <p>Another Middle</p>  ← Neither first nor last ✗
  <p>Last Item</p>       ← :last-child ✓ SELECTED (red)
</div>

// Targeting: First <p> gets green, Last <p> gets red
// Middle items: No special styling`}
            />

            <div className="[&_p:first-child]:bg-green-100 [&_p:first-child]:border-green-400 [&_p:first-child]:font-bold [&_p:last-child]:bg-red-100 [&_p:last-child]:border-red-400 [&_p:last-child]:font-bold border-2 border-purple-400 bg-purple-50 p-6 rounded-lg space-y-4">
              <p className="text-xs text-purple-700 font-semibold mb-4">
                ⬇️ This purple box is the PARENT with className="[&_p:first-child]:... [&_p:last-child]:..."
              </p>

              <VisualBox selected={true} label="First child">
                <p className="text-lg border-2 px-4 py-2 rounded">
                  🥇 First Item (green highlight)
                </p>
              </VisualBox>
              <VisualBox selected={false} label="Middle child">
                <p className="text-lg border-2 px-4 py-2 rounded border-gray-300">
                  ⭐ Middle Item (no special styling)
                </p>
              </VisualBox>
              <VisualBox selected={false} label="Middle child">
                <p className="text-lg border-2 px-4 py-2 rounded border-gray-300">
                  ⭐ Another Middle Item
                </p>
              </VisualBox>
              <VisualBox selected={true} label="Last child">
                <p className="text-lg border-2 px-4 py-2 rounded">
                  🏁 Last Item (red highlight)
                </p>
              </VisualBox>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <p className="text-sm font-bold text-emerald-800 mb-3">More Position Selectors:</p>
              <div className="space-y-2 text-xs">
                <code className="block bg-emerald-900 text-emerald-100 p-2 rounded">
                  {'[&_li:nth-child(odd)]:bg-gray-100  // Zebra striping'}
                </code>
                <code className="block bg-emerald-900 text-emerald-100 p-2 rounded">
                  {'[&_div:nth-child(3)]:text-blue-600  // 3rd element'}
                </code>
                <code className="block bg-emerald-900 text-emerald-100 p-2 rounded">
                  {'[&_p:only-child]:font-bold  // Only if there\'s just one'}
                </code>
              </div>
            </div>
          </div>
        </DemoBlock>

        {/* Pattern 12: Not Selector (Negation) */}
        <DemoBlock
          pattern="[&_element:not(.class)]"
          title="Pattern 12: Not Selector (Negation) 🚫"
          description="Exclude specific elements from styling! The :not() pseudo-class lets you style everything EXCEPT elements that match a condition."
          useCase="Style all items except specific ones, exclude disabled buttons"
          id="pattern-12"
        >
          <div className="space-y-6">
            <div className="bg-lime-50 border-2 border-lime-200 rounded-lg p-4">
              <p className="font-bold text-lime-800 mb-2">Parent Container has this className:</p>
              <code className="text-sm bg-lime-900 text-lime-100 px-3 py-1 rounded font-mono block">
                className="[&_p:not(.excluded)]:bg-lime-100 [&_p:not(.excluded)]:border-lime-400"
              </code>
              <p className="text-xs text-lime-700 mt-2">
                Target: ALL <code className="bg-lime-200 px-1 rounded">p</code> elements that are descendants, EXCEPT those with <code className="bg-lime-200 px-1 rounded">class="excluded"</code>
              </p>
              <p className="text-xs text-lime-700 mt-1">
                Styling: <code className="bg-lime-200 px-1 rounded">bg-lime-100</code> (lime background) and <code className="bg-lime-200 px-1 rounded">border-lime-400</code>
              </p>
              <p className="text-xs text-lime-700 mt-2 font-semibold">
                Note: <code className="bg-lime-200 px-1 rounded">:not()</code> is a negation pseudo-class - excludes matching elements
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
                ⬇️ This purple box is the PARENT with className="[&_p:not(.excluded)]..."
              </p>

              <VisualBox selected={true} label='Normal <p> (no .excluded class)'>
                <p className="text-lg">✅ Styled (not excluded)</p>
              </VisualBox>
              <VisualBox selected={false} label='<p class="excluded">'>
                <p className="excluded text-lg text-gray-400">
                  ❌ NOT styled (has .excluded class)
                </p>
              </VisualBox>
              <VisualBox selected={true} label='Normal <p>'>
                <p className="text-lg">✅ Styled (not excluded)</p>
              </VisualBox>
              <VisualBox selected={false} label='<p class="excluded">'>
                <p className="excluded text-lg text-gray-400">
                  ❌ NOT styled (excluded)
                </p>
              </VisualBox>
              <VisualBox selected={true} label='Normal <p>'>
                <p className="text-lg">✅ Styled (not excluded)</p>
              </VisualBox>
            </div>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="bg-lime-50 border border-lime-200 rounded-lg p-4">
              <p className="text-sm font-bold text-lime-800 mb-2">Exclude by class:</p>
              <code className="text-xs bg-lime-900 text-lime-100 p-2 rounded block">
                {'[&_a:not(.external)]:underline'}
              </code>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-sm font-bold text-amber-800 mb-2">Exclude disabled:</p>
              <code className="text-xs bg-amber-900 text-amber-100 p-2 rounded block">
                {'[&_button:not(:disabled)]:hover:bg-blue-600'}
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

        {/* Conclusion Section */}
        <section className="mt-20 mb-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 border-2 border-blue-200">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Ready to Use Arbitrary Selectors?
          </h2>
          <div className="space-y-4 text-lg text-gray-700">
            <p>
              <span className="font-bold text-blue-600">✅ Use them for:</span> Third-party HTML,
              markdown content, library components you can't directly modify
            </p>
            <p>
              <span className="font-bold text-red-600">❌ Avoid them when:</span> You control the
              HTML structure—just add classes directly
            </p>
            <p className="pt-4 text-xl font-semibold text-purple-700">
              Start with Pattern 1 ([&_element]) — it solves 80% of use cases!
            </p>
            <div className="mt-8 grid md:grid-cols-2 gap-4 text-base">
              <div className="bg-white p-4 rounded-lg border-2 border-blue-300">
                <p className="font-bold text-blue-700 mb-2">🎯 Most Useful Patterns:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• <code className="text-sm bg-gray-100 px-2 py-0.5 rounded">[&_element]</code> - Descendant (80% of cases)</li>
                  <li>• <code className="text-sm bg-gray-100 px-2 py-0.5 rounded">[&_element:hover]</code> - Hover effects</li>
                  <li>• <code className="text-sm bg-gray-100 px-2 py-0.5 rounded">[&_element:not()]</code> - Exclusions</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg border-2 border-purple-300">
                <p className="font-bold text-purple-700 mb-2">📚 12 Patterns Covered:</p>
                <p className="text-sm text-gray-600">
                  You now know all the essential arbitrary selector patterns to handle any CSS challenge in Tailwind!
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
