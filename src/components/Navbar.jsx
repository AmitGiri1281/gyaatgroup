import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    navigate('/');
    setIsOpen(false);
  };
  
  const getDashboardLink = () => {
    if (!currentUser) return '/login';
    
    switch (currentUser.role) {
      case 'student': return '/student';
      case 'parent': return '/parent';
      case 'admin': return '/admin';
      default: return '/login';
    }
  };
  
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Logo className="h-8 w-auto" />
              <span className="ml-2 text-xl font-bold text-primary">GreenRide</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 rounded-md font-medium hover:text-primary">
              Home
            </Link>
            <Link to="/subscription" className="px-3 py-2 rounded-md font-medium hover:text-primary">
              Plans
            </Link>
            <Link to="/contact" className="px-3 py-2 rounded-md font-medium hover:text-primary">
              Contact
            </Link>
            
            {currentUser ? (
              <>
                <Link to={getDashboardLink()} className="px-3 py-2 rounded-md font-medium hover:text-primary">
                  Dashboard
                </Link>
                <button 
                  onClick={handleLogout}
                  className="btn btn-primary"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" className="btn btn-primary">
                Login
              </Link>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link 
                to="/" 
                className="block px-3 py-2 rounded-md font-medium hover:bg-secondary"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/subscription" 
                className="block px-3 py-2 rounded-md font-medium hover:bg-secondary"
                onClick={() => setIsOpen(false)}
              >
                Plans
              </Link>
              <Link 
                to="/contact" 
                className="block px-3 py-2 rounded-md font-medium hover:bg-secondary"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              
              {currentUser ? (
                <>
                  <Link 
                    to={getDashboardLink()} 
                    className="block px-3 py-2 rounded-md font-medium hover:bg-secondary"
                    onClick={() => setIsOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="w-full text-left block px-3 py-2 rounded-md font-medium text-primary hover:bg-secondary"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link 
                  to="/login" 
                  className="block px-3 py-2 rounded-md font-medium text-primary hover:bg-secondary"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;