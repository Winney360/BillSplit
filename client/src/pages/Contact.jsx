export default function Contact() {
  return (
    <div className="bg-orange-50 min-h-screen">
      <section className="max-w-5xl mx-auto px-4 sm:px-8 py-16">
        <span className="inline-block text-[--color-primary] font-bold text-xs mb-2">Get in Touch</span>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">Get in Touch</h1>
        <p className="text-gray-600 max-w-2xl mb-12">
          Have questions or feedback? We'd love to hear from you. Our team typically responds within 24 hours.
        </p>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left: Contact Info */}
          <div className="flex-1 flex flex-col gap-4">
            <div className="bg-white rounded-xl shadow p-6 flex items-center gap-4">
              <span className="bg-orange-100 text-orange-500 rounded-full w-10 h-10 flex items-center justify-center text-2xl">✉️</span>
              <div>
                <div className="text-xs text-gray-400 font-semibold">EMAIL US</div>
                <div className="font-semibold text-[--color-primary]">support@rentsplit.com</div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex items-center gap-4">
              <span className="bg-orange-100 text-orange-500 rounded-full w-10 h-10 flex items-center justify-center text-2xl">💬</span>
              <div>
                <div className="text-xs text-gray-400 font-semibold">LIVE SUPPORT</div>
                <div className="font-semibold text-gray-700">Available Mon-Fri, 9am - 5pm EST</div>
              </div>
            </div>
            <div className="bg-orange-100 rounded-xl p-6 mt-2">
              <div className="font-semibold text-gray-700 mb-1">Help Center</div>
              <span className="text-gray-500 text-sm">Looking for FAQs? <a href="#" className="underline text-[--color-primary]">Visit our documentation</a></span>
            </div>
          </div>
          {/* Right: Contact Form */}
          <div className="flex-1 bg-white rounded-xl shadow p-8">
            <form className="flex flex-col gap-4">
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-1">Name</label>
                <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[--color-primary]" placeholder="Enter your full name" />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-1">Email Address</label>
                <input type="email" className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[--color-primary]" placeholder="yourname@email.com" />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-1">Message</label>
                <textarea className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[--color-primary]" rows="4" placeholder="How can we help you today?"></textarea>
              </div>
              <button type="submit" className="bg-[--color-primary] text-white px-6 py-3 rounded-lg font-semibold shadow hover:opacity-90 transition flex items-center gap-2 justify-center">
                Send Message <span className="text-lg">📨</span>
              </button>
              <div className="text-xs text-gray-400 mt-2">By submitting this form, you agree to our <a href="#" className="underline">Privacy Policy</a>.</div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
