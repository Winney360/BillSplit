export default function Problems() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
          The Problem with <span className="text-[--color-primary]">Shared Living</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Living with roommates should be simple, but managing shared expenses often leads to tension. From rent to daily essentials, keeping track of who owes what is a constant struggle that ruins friendships.
        </p>
      </section>

      {/* Common Roommate Frictions */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 pb-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Common Roommate Frictions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
              <span className="text-2xl">📅</span>
            </div>
            <h3 className="font-semibold mb-1">Rent & Bills</h3>
            <p className="text-gray-500 text-sm">Forgetting who paid the monthly landlord transfer or losing track of past payment confirmations.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
              <span className="text-2xl">🛒</span>
            </div>
            <h3 className="font-semibold mb-1">Groceries</h3>
            <p className="text-gray-500 text-sm">Passive-aggressive arguments over who bought the milk, toilet paper, or the organic eggs.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
              <span className="text-2xl">💡</span>
            </div>
            <h3 className="font-semibold mb-1">Utility Disputes</h3>
            <p className="text-gray-500 text-sm">Unequal contributions for high WiFi costs or electricity spikes during the winter months.</p>
          </div>
        </div>
      </section>

      {/* The "Who Owes Whom" Chaos */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 pb-16">
        <div className="bg-gray-900 rounded-3xl shadow-lg p-10 flex flex-col md:flex-row gap-8 items-center">
          {/* Left: Explanation */}
          <div className="flex-1 text-white">
            <h2 className="text-2xl font-bold mb-4">The "Who Owes Whom" Chaos</h2>
            <p className="mb-4 text-gray-200 text-sm">
              It starts small. Then, without a central system, transparency vanishes and "I'll get you next time" becomes a source of resentment.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Lack of transparency leads to "mental accounting" errors.</li>
              <li>Manual tracking in spreadsheets is tedious and often forgotten.</li>
              <li>Awkward conversations about money disrupt the peace at home.</li>
            </ul>
          </div>
          {/* Right: Example List */}
          <div className="flex-1 flex flex-col gap-4">
            <div className="bg-gray-800 rounded-xl p-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">A</div>
              <div className="flex-1">
                <span className="font-semibold text-white">Alex paid WiFi</span>
                <div className="text-gray-400 text-xs">$65.00 – Feb 12</div>
              </div>
              <span className="text-[--color-primary] font-bold text-lg">?</span>
            </div>
            <div className="bg-gray-800 rounded-xl p-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">S</div>
              <div className="flex-1">
                <span className="font-semibold text-white">Sam paid Electricity</span>
                <div className="text-gray-400 text-xs">$142.30 – Feb 15</div>
              </div>
              <span className="text-[--color-primary] font-bold text-lg">?</span>
            </div>
            <div className="bg-gray-800 rounded-xl p-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold">J</div>
              <div className="flex-1">
                <span className="font-semibold text-white">Jordan paid Groceries</span>
                <div className="text-gray-400 text-xs">$89.20 – Feb 16</div>
              </div>
              <span className="text-[--color-primary] font-bold text-lg">?</span>
            </div>
            <div className="bg-[--color-primary] rounded-xl p-4 text-white font-semibold text-center mt-2">
              The Result:<br />
              <span className="font-normal text-gray-100 text-sm italic">"Wait, didn't I pay for the pizza last Tuesday? Or was that you?"</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">Stop guessing. Start splitting.</h2>
        <p className="text-gray-500 mb-6">RentSplit automates the math so you can get back to what matters: enjoying your home.</p>
        <div className="flex justify-center gap-4">
          <button className="bg-[--color-primary] text-white px-6 py-3 rounded-lg font-semibold shadow hover:opacity-90 transition">Get Started Free</button>
          <button className="bg-white border border-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Learn More</button>
        </div>
      </section>
    </div>
  );
}
