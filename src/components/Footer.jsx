import { FaLinkedin, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
// import leanerLogo from "../assets/leaner.png"; 

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-700 border-t py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
    
        <div className="col-span-2 md:col-span-1">
          {/* <img src={leanerLogo} alt="Leaner Logo" className="w-28 mb-3" /> */}
          <p className="text-sm text-gray-500">© 2025 Leaner, Inc.</p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Press</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">Community</a></li>
            <li><a href="#" className="hover:underline">Guides</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:underline">Terms</a></li>
            <li><a href="#" className="hover:underline">Privacy</a></li>
            <li><a href="#" className="hover:underline">Cookies</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-xl text-gray-600">
            <a href="#"><FaLinkedin className="hover:text-gray-900" /></a>
            <a href="#"><FaInstagram className="hover:text-gray-900" /></a>
            <a href="#"><FaFacebookF className="hover:text-gray-900" /></a>
            <a href="#"><FaTwitter className="hover:text-gray-900" /></a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 px-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500 border-t pt-4">
        <p>Built with ❤️ by the Leaner Team</p>
        <div className="flex space-x-3 mt-3 sm:mt-0">
          <select className="bg-gray-100 border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none">
            <option>English</option>
            <option>Hindi</option>
            <option>French</option>
          </select>
        </div>
      </div>
    </footer>
  );
}
