import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // ✅ ADDED SHOP HERE
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Blog', href: '/blog' },
    { label: 'Stories', href: '/stories', highlight: true },
    // { label: 'Shop', href: '/shop' }, // 👈 NEW
    // { label: 'Admin Contacts', href: '/admincontact' }, // 👈 NEW
    { label: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link
              to="/"
              className="flex items-center h-20 transition-transform duration-300 hover:scale-105"
            >
              <img
                src="/thoughtcanva-logo.svg"
                alt="Thought Canva Logo"
                className="h-20 w-60 object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`relative text-sm font-medium transition-colors duration-300 group ${
                    isActive(link.href)
                      ? 'text-black'
                      : link.highlight
                      ? 'text-red-600'
                      : 'text-gray-700 hover:text-black'
                  }`}
                >
                  {link.label}

                  {/* NEW badge for Stories */}
                  {link.label === 'Stories' && (
                    <span className="ml-2 text-[10px] text-red-600 animate-pulse">
                      NEW
                    </span>
                  )}

                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-red-600 transition-all duration-300 ${
                      isActive(link.href)
                        ? 'w-full'
                        : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="hidden md:flex items-center gap-4">
              {isAuthenticated ? (
                <>
                  <Link
                    to="/blog/create"
                    className="btn-primary text-sm py-2.5 px-5"
                  >
                    Write Post
                  </Link>

                  <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                    <img
                      src={user?.avatar || '/hero-portrait.jpg'}
                      alt={user?.fullName}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <button
                      onClick={logout}
                      className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-300"
                    >
                      Sign Out
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <Link to="/contact" className="btn-primary">
                    Get In Touch
                  </Link>
                  <Link
                    to="/login"
                    className="text-sm text-gray-700 hover:text-black transition-colors duration-300"
                  >
                    Sign In
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-transform duration-500 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">

          {isAuthenticated && (
            <div className="flex items-center gap-3 mb-4">
              <img
                src={user?.avatar || '/hero-portrait.jpg'}
                alt={user?.fullName}
                className="w-12 h-12 rounded-full object-cover"
              />
              <span className="text-lg font-medium">
                {user?.fullName}
              </span>
            </div>
          )}

          {navLinks.map((link, index) => (
            <Link
              key={link.label}
              to={link.href}
              className={`text-2xl font-medium transition-colors duration-300 ${
                isActive(link.href)
                  ? 'text-red-600'
                  : link.highlight
                  ? 'text-red-600'
                  : 'text-gray-800 hover:text-red-600'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {link.label}

              {/* Mobile badge */}
              {link.label === 'Stories' && (
                <span className="ml-2 text-sm text-red-500 animate-pulse">
                  NEW
                </span>
              )}
            </Link>
          ))}

          {/* Mobile Actions */}
          <div className="flex flex-col items-center gap-4 mt-8">
            {isAuthenticated ? (
              <>
                <Link to="/blog/create" className="btn-primary">
                  Write Post
                </Link>
                <button
                  onClick={logout}
                  className="text-gray-500 hover:text-gray-700"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link to="/contact" className="btn-primary">
                  Get In Touch
                </Link>
                <Link to="/login" className="flex items-center text-gray-700">
                  <User className="w-4 h-4 mr-2" />
                  Sign In
                </Link>
              </>
            )}
          </div>

        </div>
      </div>
    </>
  );
};

export default Navigation;