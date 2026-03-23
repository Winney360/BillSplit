export default function Solution() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 py-16 flex flex-col md:flex-row items-center gap-12">
        {/* Left: Text */}
        <div className="flex-1">
          <span className="inline-block bg-[--color-primary] text-white text-xs font-bold px-3 py-1 rounded-full mb-4">THE SOLUTION</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">Our Solution</h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            RentSplit makes shared living simple and stress-free. Helps track shared expenses, split bills automatically, and see balances instantly. No more awkward conversations or messy spreadsheets.
          </p>
        </div>
        {/* Right: Image placeholder */}
        <div className="flex-1 flex justify-center">
          <div className="w-[350px] h-[220px] bg-gray-200 rounded-3xl shadow-lg flex items-center justify-center overflow-hidden">
            {/* Place your solution image here */}
            <span className="text-gray-400 text-lg">[Solution Image]</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
              <span className="text-2xl">🧾</span>
            </div>
            <h3 className="font-semibold mb-1">Expense tracking</h3>
            <p className="text-gray-500 text-sm">Log every household purchase instantly with photo receipts and categories.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
              <span className="text-2xl">🔄</span>
            </div>
            <h3 className="font-semibold mb-1">Automatic bill splitting</h3>
            <p className="text-gray-500 text-sm">Our algorithms handle complex splits so you don’t have to do the math.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="font-semibold mb-1">Clear balance summary</h3>
            <p className="text-gray-500 text-sm">Know exactly who owes what at a single glance with real-time updates.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="font-semibold mb-1">Simple interface</h3>
            <p className="text-gray-500 text-sm">Designed for busy people. Add an expense in less than 5 seconds.</p>
          </div>
        </div>
      </section>

      {/* Mission Banner */}
      <section className="bg-[--color-primary] rounded-3xl max-w-6xl mx-auto my-16 px-8 py-12 flex flex-col md:flex-row items-center justify-between shadow-lg">
        <div className="mb-6 md:mb-0">
          <span className="text-xs font-bold text-white tracking-widest mb-2 block">OUR MISSION</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">To make shared living stress-free and financially fair.</h2>
        </div>
        <div className="flex gap-4">
          <button className="bg-white text-[--color-primary] px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition">Join the Waitlist</button>
          <button className="bg-white text-[--color-primary] px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition">Learn More</button>
        </div>
      </section>
    </div>
  );
}
