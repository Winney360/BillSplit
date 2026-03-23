export default function Team() {
  return (
    <div className="bg-gray-50">
      {/* Team Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 py-16">
        <span className="inline-block text-[--color-primary] font-bold text-xs mb-2">OUR EXPERTS</span>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">Meet the Team</h1>
        <p className="text-gray-600 max-w-2xl mb-12">
          The talented people behind RentSplit making co-living easier. We combine technical expertise with a passion for seamless financial harmony.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {/* Team Member 1 */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
            <div className="w-24 h-28 bg-gray-200 rounded-xl mb-4"></div>
            <h3 className="font-semibold text-lg mb-1">Winnie</h3>
            <span className="text-[--color-primary] text-sm font-medium mb-1">Backend Developer</span>
            <p className="text-gray-500 text-xs mb-2">"Expert in Node.js and Databases"</p>
            <div className="flex gap-2 justify-center">
              <span className="w-6 h-6 bg-gray-100 rounded-full"></span>
              <span className="w-6 h-6 bg-gray-100 rounded-full"></span>
            </div>
          </div>
          {/* Team Member 2 */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
            <div className="w-24 h-28 bg-gray-200 rounded-xl mb-4"></div>
            <h3 className="font-semibold text-lg mb-1">Designer</h3>
            <span className="text-[--color-primary] text-sm font-medium mb-1">UI/UX Designer</span>
            <p className="text-gray-500 text-xs mb-2">"Crafting beautiful user experiences"</p>
            <div className="flex gap-2 justify-center">
              <span className="w-6 h-6 bg-gray-100 rounded-full"></span>
              <span className="w-6 h-6 bg-gray-100 rounded-full"></span>
            </div>
          </div>
          {/* Team Member 3 */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
            <div className="w-24 h-28 bg-gray-200 rounded-xl mb-4"></div>
            <h3 className="font-semibold text-lg mb-1">Frontend Developer</h3>
            <span className="text-[--color-primary] text-sm font-medium mb-1">React Developer</span>
            <p className="text-gray-500 text-xs mb-2">"Building responsive interfaces"</p>
            <div className="flex gap-2 justify-center">
              <span className="w-6 h-6 bg-gray-100 rounded-full"></span>
              <span className="w-6 h-6 bg-gray-100 rounded-full"></span>
            </div>
          </div>
          {/* Team Member 4 */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
            <div className="w-24 h-28 bg-gray-200 rounded-xl mb-4"></div>
            <h3 className="font-semibold text-lg mb-1">Project Manager</h3>
            <span className="text-[--color-primary] text-sm font-medium mb-1">Team Lead</span>
            <p className="text-gray-500 text-xs mb-2">"Guiding the product vision"</p>
            <div className="flex gap-2 justify-center">
              <span className="w-6 h-6 bg-gray-100 rounded-full"></span>
              <span className="w-6 h-6 bg-gray-100 rounded-full"></span>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-orange-50 rounded-3xl flex flex-col md:flex-row items-center justify-between p-8 gap-8">
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-2 text-gray-900">Our Mission</h2>
            <p className="text-gray-600 mb-4 max-w-lg">
              At RentSplit, we are dedicated to creating seamless financial harmony for roommates everywhere. Our team combines expertise in fintech and design to solve the complexities of shared living. We believe that technology should remove barriers, not create them.
            </p>
            <button className="bg-[--color-primary] text-white px-6 py-3 rounded-lg font-semibold shadow hover:opacity-90 transition">Learn More</button>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-32 h-32 bg-orange-100 rounded-2xl flex items-center justify-center">
              <span className="text-4xl text-orange-400">🤝</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
