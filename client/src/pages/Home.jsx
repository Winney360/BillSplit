export default function Home() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-16 flex flex-col md:flex-row items-center gap-12">
        {/* Left: Text */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
            No more roommate <span className="text-[--color-primary]">money drama.</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            Track rent, bills, and shared expenses easily with your housemates. The simplest way to keep the peace and the bills paid.
          </p>
          <div className="flex gap-4 mb-6">
            <button className="bg-[--color-primary] text-white px-6 py-3 rounded-lg font-semibold shadow hover:opacity-90 transition">Start Splitting Smarter</button>
            <button className="bg-white border border-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">See How It Works</button>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-400 mt-2">
            <span className="inline-block w-8 h-8 bg-gray-200 rounded-full"></span>
            Joined by 50k+ households
          </div>
        </div>
        {/* Right: Image placeholder */}
        <div className="flex-1 flex justify-center">
          <div className="w-[350px] h-[350px] bg-gray-200 rounded-3xl shadow-lg flex items-center justify-center overflow-hidden">
            {/* Place your hero image here */}
            <span className="text-gray-400 text-lg">[App Preview Image]</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-900">Simplify your household finances</h2>
          <p className="text-center text-gray-500 mb-10">Everything you need to keep the peace and the bills paid on time, every time.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                <span className="text-2xl">📅</span>
              </div>
              <h3 className="font-semibold mb-1">Rent Tracking</h3>
              <p className="text-gray-500 text-sm">Set up recurring rent payments and see who's paid at a glance. Automatic reminders included.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                <span className="text-2xl">🧾</span>
              </div>
              <h3 className="font-semibold mb-1">Shared Bills</h3>
              <p className="text-gray-500 text-sm">Split utilities, groceries, and household supplies instantly with customizable split ratios.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="font-semibold mb-1">Expense History</h3>
              <p className="text-gray-500 text-sm">Keep a transparent record of all shared spending to avoid disputes and see where your money goes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white rounded-xl shadow p-8">
            <div className="text-3xl font-bold text-[--color-primary] mb-1">50,000+</div>
            <div className="text-gray-500 text-sm">Active Households</div>
          </div>
          <div className="bg-white rounded-xl shadow p-8">
            <div className="text-3xl font-bold text-[--color-primary] mb-1">$2.4M+</div>
            <div className="text-gray-500 text-sm">Bills Split Monthly</div>
          </div>
          <div className="bg-white rounded-xl shadow p-8">
            <div className="text-3xl font-bold text-[--color-primary] mb-1">4.9/5</div>
            <div className="text-gray-500 text-sm">User Satisfaction</div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl max-w-6xl mx-auto my-16 px-8 py-12 flex flex-col md:flex-row items-center justify-between shadow-lg">
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to end the money talk?</h2>
          <p className="text-gray-300 text-sm max-w-md">Join thousands of roommates splitting smarter every day. Set up your house in under 2 minutes.</p>
        </div>
        <button className="bg-[--color-primary] text-white px-6 py-3 rounded-lg font-semibold shadow hover:opacity-90 transition">Create Your House</button>
      </section>
    </div>
  );
}
