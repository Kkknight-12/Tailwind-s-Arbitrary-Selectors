"use client";

import {
  Pattern1,
  Pattern2,
  Pattern3,
  Pattern4,
  Pattern5,
  Pattern6,
  Pattern7,
  Pattern8,
  Pattern9,
  Pattern10,
  Pattern11,
  Pattern12,
} from "@/app/patterns/";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden">
        {/* Animated background circles */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-glow"></div>
        <div
          className="absolute top-40 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-glow"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-glow"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="relative max-w-4xl mx-auto text-center px-6 py-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-fade-in">
            Mastering Tailwind&apos;s
            <br />
            <code className="text-5xl md:text-6xl font-mono">[&_selector]</code>
            <br />
            Syntax
          </h1>
          <p
            className="text-xl md:text-2xl text-gray-700 mb-8 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            The Visual Guide to Arbitrary Selectors
          </p>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Learn how to style third-party HTML, markdown content, and library
            components with Tailwind&apos;s powerful arbitrary selector syntax.
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
            Arbitrary selectors let you target child elements using CSS
            selectors directly in Tailwind&apos;s className. They solve the
            common problem of styling HTML you can&apos;t control—like Shiki
            code blocks, markdown content, or third-party libraries.
          </p>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <p className="text-gray-800 font-semibold mb-2">The Pattern:</p>
            <code className="text-lg font-mono text-purple-700">
              className=&quot;[&_selector]:utility-class&quot;
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
                  <h3 className="text-xl font-bold text-blue-900">
                    The Ampersand
                  </h3>
                  <p className="text-sm text-blue-700">
                    Represents &quot;this element&quot;
                  </p>
                </div>
              </div>
              <p className="text-gray-700 mb-3">
                <code className="bg-blue-200 px-2 py-1 rounded font-mono">
                  &
                </code>{" "}
                is a placeholder for the current element (the one with the
                className).
              </p>
              <div className="bg-white border border-blue-200 rounded p-3 text-sm">
                <p className="font-mono text-blue-800 mb-2">
                  className=&quot;[&_p]:text-red-600&quot;
                </p>
                <p className="text-gray-600">
                  Means: &quot;From{" "}
                  <span className="font-bold text-blue-700">
                    this element (&)
                  </span>
                  , select p tags&quot;
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-300 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <code className="text-4xl font-bold text-purple-700">_</code>
                <div>
                  <h3 className="text-xl font-bold text-purple-900">
                    The Underscore
                  </h3>
                  <p className="text-sm text-purple-700">
                    Represents a &quot;space&quot; (descendant)
                  </p>
                </div>
              </div>
              <p className="text-gray-700 mb-3">
                <code className="bg-purple-200 px-2 py-1 rounded font-mono">
                  _
                </code>{" "}
                is Tailwind&apos;s way of writing a space (CSS descendant
                combinator).
              </p>
              <div className="bg-white border border-purple-200 rounded p-3 text-sm">
                <p className="font-mono text-purple-800 mb-2">
                  [&_p] = &quot;& p&quot; in CSS
                </p>
                <p className="text-gray-600">
                  The underscore becomes a{" "}
                  <span className="font-bold text-purple-700">space</span> in
                  the generated CSS
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 border-2 border-pink-300 rounded-xl p-6 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              🔥 Common Patterns Explained:
            </h3>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <code className="text-lg font-mono bg-blue-100 px-3 py-1 rounded text-blue-800">
                      [&_p]
                    </code>
                    <p className="text-sm text-gray-600 mt-2">
                      <code className="bg-gray-100 px-2 py-0.5 rounded">&</code>{" "}
                      (this element) +
                      <code className="bg-gray-100 px-2 py-0.5 rounded mx-1">
                        _
                      </code>{" "}
                      (space) +
                      <code className="bg-gray-100 px-2 py-0.5 rounded">p</code>{" "}
                      (paragraph)
                    </p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded">
                    <p className="text-sm font-semibold text-blue-900 mb-1">
                      Becomes in CSS:
                    </p>
                    <code className="text-xs bg-blue-900 text-blue-100 px-2 py-1 rounded">
                      .parent p
                    </code>
                    <p className="text-xs text-blue-700 mt-2">
                      = &quot;Select p elements that are descendants of
                      parent&quot;
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <code className="text-lg font-mono bg-green-100 px-3 py-1 rounded text-green-800">
                      [&{">"}p]
                    </code>
                    <p className="text-sm text-gray-600 mt-2">
                      <code className="bg-gray-100 px-2 py-0.5 rounded">&</code>{" "}
                      (this element) +
                      <code className="bg-gray-100 px-2 py-0.5 rounded mx-1">
                        {">"}
                      </code>{" "}
                      (direct child) +
                      <code className="bg-gray-100 px-2 py-0.5 rounded">p</code>
                    </p>
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <p className="text-sm font-semibold text-green-900 mb-1">
                      Becomes in CSS:
                    </p>
                    <code className="text-xs bg-green-900 text-green-100 px-2 py-1 rounded">
                      .parent {">"} p
                    </code>
                    <p className="text-xs text-green-700 mt-2">
                      = &quot;Select p elements that are DIRECT children of
                      parent&quot;
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <code className="text-lg font-mono bg-violet-100 px-3 py-1 rounded text-violet-800">
                      [.parent_&]
                    </code>
                    <p className="text-sm text-gray-600 mt-2">
                      <code className="bg-gray-100 px-2 py-0.5 rounded">
                        .parent
                      </code>{" "}
                      (class) +
                      <code className="bg-gray-100 px-2 py-0.5 rounded mx-1">
                        _
                      </code>{" "}
                      (space) +
                      <code className="bg-gray-100 px-2 py-0.5 rounded">&</code>{" "}
                      (this element)
                    </p>
                  </div>
                  <div className="bg-violet-50 p-3 rounded">
                    <p className="text-sm font-semibold text-violet-900 mb-1">
                      Becomes in CSS:
                    </p>
                    <code className="text-xs bg-violet-900 text-violet-100 px-2 py-1 rounded">
                      .parent .child
                    </code>
                    <p className="text-xs text-violet-700 mt-2">
                      = &quot;Select this element when it&apos;s inside a
                      .parent&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
            <h3 className="text-lg font-bold text-yellow-900 mb-3">
              💡 Key Takeaway:
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 font-bold">•</span>
                <span>
                  <code className="bg-yellow-100 px-2 py-0.5 rounded font-mono">
                    &
                  </code>{" "}
                  = &quot;this element&quot; (the one with the className)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 font-bold">•</span>
                <span>
                  <code className="bg-yellow-100 px-2 py-0.5 rounded font-mono">
                    _
                  </code>{" "}
                  = &quot;space&quot; in CSS (descendant selector)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 font-bold">•</span>
                <span>
                  <code className="bg-yellow-100 px-2 py-0.5 rounded font-mono">
                    &_p
                  </code>{" "}
                  = &quot;from this element, select p descendants&quot;
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 font-bold">•</span>
                <span>
                  <code className="bg-yellow-100 px-2 py-0.5 rounded font-mono">
                    .parent_&
                  </code>{" "}
                  = &quot;select this element when inside .parent&quot;
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Pattern 1: Descendant Selector */}
        <Pattern1 />

        {/* Pattern 2: Direct Child Selector */}
        <Pattern2 />

        {/* Pattern 3: Nested Path Selector */}
        <Pattern3 />

        {/* Pattern 4: Class Targeting */}
        <Pattern4 />

        {/* Pattern 5: Attribute Targeting */}
        <Pattern5 />

        {/* Pattern 6: Combined Selector */}
        <Pattern6 />

        {/* Pattern 7: Adjacent Sibling Selector */}
        <Pattern7 />

        {/* Pattern 8: Parent Selector */}
        <Pattern8 />

        {/* Pattern 9: General Sibling Selector */}
        <Pattern9 />

        {/* Pattern 10: Hover State Selector */}
        <Pattern10 />

        {/* Pattern 11: First/Last Child Selector */}
        <Pattern11 />

        {/* Pattern 12: Not Selector (Negation) */}
        <Pattern12 />

        {/* Conclusion Section */}
        <section className="mt-20 mb-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 border-2 border-blue-200">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Ready to Use Arbitrary Selectors?
          </h2>
          <div className="space-y-4 text-lg text-gray-700">
            <p>
              <span className="font-bold text-blue-600">✅ Use them for:</span>{" "}
              Third-party HTML, markdown content, library components you
              can&apos;t directly modify
            </p>
            <p>
              <span className="font-bold text-red-600">
                ❌ Avoid them when:
              </span>{" "}
              You control the HTML structure—just add classes directly
            </p>
            <p className="pt-4 text-xl font-semibold text-purple-700">
              Start with Pattern 1 ([&_element]) — it solves 80% of use cases!
            </p>
            <div className="mt-8 grid md:grid-cols-2 gap-4 text-base">
              <div className="bg-white p-4 rounded-lg border-2 border-blue-300">
                <p className="font-bold text-blue-700 mb-2">
                  🎯 Most Useful Patterns:
                </p>
                <ul className="space-y-1 text-gray-700">
                  <li>
                    •{" "}
                    <code className="text-sm bg-gray-100 px-2 py-0.5 rounded">
                      [&_element]
                    </code>{" "}
                    - Descendant (80% of cases)
                  </li>
                  <li>
                    •{" "}
                    <code className="text-sm bg-gray-100 px-2 py-0.5 rounded">
                      [&_element:hover]
                    </code>{" "}
                    - Hover effects
                  </li>
                  <li>
                    •{" "}
                    <code className="text-sm bg-gray-100 px-2 py-0.5 rounded">
                      [&_element:not()]
                    </code>{" "}
                    - Exclusions
                  </li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg border-2 border-purple-300">
                <p className="font-bold text-purple-700 mb-2">
                  📚 12 Patterns Covered:
                </p>
                <p className="text-sm text-gray-600">
                  You now know all the essential arbitrary selector patterns to
                  handle any CSS challenge in Tailwind!
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}