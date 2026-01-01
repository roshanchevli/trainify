export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">Trainify</h2>
          <p className="mt-3 text-sm text-gray-400">
            Connecting clients with certified fitness trainers for a healthier
            lifestyle.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Trainers</li>
            <li className="hover:text-white cursor-pointer">Programs</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">
              Terms & Conditions
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: support@fitconnect.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Location: India</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>© {new Date().getFullYear()} FitConnect. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Designed & Developed by <span className="text-white">You</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
