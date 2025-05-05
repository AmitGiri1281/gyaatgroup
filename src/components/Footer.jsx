import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';
import Logo from './Logo';

function Footer() {
  return (
    <footer className="bg-[#1E293B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and about */}
          <div>
            <div className="flex items-center">
              <Logo className="h-8 w-auto text-white" />
              <span className="ml-2 text-xl font-bold text-primary">GreenRide</span>
            </div>
            <p className="mt-4 text-gray-300 text-sm">
              Providing eco-friendly, safe transportation for students with real-time tracking and monitoring.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary">
                <FiTwitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary">Home</Link>
              </li>
              <li>
                <Link to="/subscription" className="text-gray-300 hover:text-primary">Plans</Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-300 hover:text-primary">Login</Link>
              </li>
              <li>
                <Link to="/signup" className="text-gray-300 hover:text-primary">Sign Up</Link>
              </li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-primary">Help Center</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary">FAQ</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FiMapPin className="mr-2 text-primary" />
                <span className="text-gray-300">123 Green Street, Eco City</span>
              </li>
              <li className="flex items-center">
                <FiPhone className="mr-2 text-primary" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <FiMail className="mr-2 text-primary" />
                <span className="text-gray-300">info@greenride.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} GreenRide. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;