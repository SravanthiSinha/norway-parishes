import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import logo from '../../assets/images/norway-flag.svg'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Map' },
    { path: '/about', label: 'About us' },
    { path: '/resources', label: 'Resources' },
    { path: '/contact', label: 'Contact Us' }
  ];

  return (
    <nav className="bg-brand-primary shadow-md">
      <div className="max-w-full mx-auto px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <img src={logo} className='w-10 h-28 mr-2' alt="Norway flag"/>
            <span className="font-heading text-3xl font-semibold text-brand-text-inverse">
             Norway's Parishes
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-brand-text-inverse hover:text-brand-secondary transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-brand-text-inverse hover:text-brand-secondary focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-brand-primary-dark">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block px-3 py-2 rounded-md text-brand-text-inverse hover:text-brand-secondary hover:bg-brand-primary-light transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)} // Close menu when link is clicked
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;