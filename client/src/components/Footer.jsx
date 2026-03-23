export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 pt-12 pb-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 border-b border-gray-800 pb-8">
          {/* Logo and tagline */}
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-2 font-bold text-2xl text-[--color-primary] mb-2">
              <span className="inline-block w-7 h-7 rounded-full bg-[--color-primary] mr-2"></span>
              RentSplit
            </div>
            <p className="text-gray-400 max-w-xs text-sm">
              Making roommate living simpler, one bill at a time. The world's most trusted household expense tracker.
            </p>
          </div>
          {/* Footer links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1">
            <div>
              <h4 className="font-semibold mb-2">Product</h4>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>Features</li>
                <li>Integrations</li>
                <li>Pricing</li>
                <li>Mobile App</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Company</h4>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>About Us</li>
                <li>Careers</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Support</h4>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Community</li>
                <li>System Status</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Social</h4>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>Email</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-xs text-gray-500 gap-2">
          <span>© 2024 RentSplit Inc. All rights reserved.</span>
          <div className="flex gap-4">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
