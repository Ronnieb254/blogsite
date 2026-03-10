import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Instagram, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '-30px' }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const navigationLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  const serviceLinks = [
    { label: 'Brand Strategy', href: '/services' },
    { label: 'Creative Direction', href: '/services' },
    { label: 'Digital Consulting', href: '/services' },
  ];

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', href: '#' },
    { icon: <Twitter className="w-5 h-5" />, label: 'Twitter', href: '#' },
    { icon: <Instagram className="w-5 h-5" />, label: 'Instagram', href: '#' },
  ];

  return (
    <footer
      ref={footerRef}
      className="relative bg-black text-white py-16 sm:py-20 lg:py-24"
    >
      <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
        {/* Main Footer Content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Logo & Description */}
          <div
            className={`lg:col-span-1 transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              transitionTimingFunction: 'var(--ease-expo-out)',
            }}
          >
            <Link
              to="/"
              className="text-3xl font-semibold tracking-tight mb-6 block"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Alexandra.
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm">
              Strategic consultancy and creative direction for brands that dare
              to stand out.
            </p>
          </div>

          {/* Navigation Links */}
          <div
            className={`transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              transitionDelay: '100ms',
              transitionTimingFunction: 'var(--ease-expo-out)',
            }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navigationLinks.map((link, index) => (
                <li
                  key={link.label}
                  className={`transition-all duration-400 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                  style={{
                    transitionDelay: `${150 + index * 60}ms`,
                    transitionTimingFunction: 'var(--ease-expo-out)',
                  }}
                >
                  <Link
                    to={link.href}
                    className="group inline-flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-red-600 transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div
            className={`transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              transitionDelay: '200ms',
              transitionTimingFunction: 'var(--ease-expo-out)',
            }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li
                  key={link.label}
                  className={`transition-all duration-400 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                  style={{
                    transitionDelay: `${250 + index * 60}ms`,
                    transitionTimingFunction: 'var(--ease-expo-out)',
                  }}
                >
                  <Link
                    to={link.href}
                    className="group inline-flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-red-600 transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div
            className={`transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              transitionDelay: '300ms',
              transitionTimingFunction: 'var(--ease-expo-out)',
            }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">
              Connect
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`w-10 h-10 flex items-center justify-center bg-white/10 rounded-full text-white hover:bg-red-600 transition-all duration-300 hover:-translate-y-1 ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                  }`}
                  style={{
                    transitionDelay: `${350 + index * 60}ms`,
                    transitionTimingFunction: 'var(--ease-spring)',
                  }}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Email CTA */}
            <a
              href="mailto:hello@alexandra.com"
              className={`inline-flex items-center mt-6 text-gray-400 hover:text-white transition-all duration-300 group ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                transitionDelay: '500ms',
                transitionTimingFunction: 'var(--ease-expo-out)',
              }}
            >
              hello@alexandra.com
              <ArrowUpRight className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div
          className={`h-px bg-white/10 mb-8 transition-transform duration-800 origin-left ${
            isVisible ? 'scale-x-100' : 'scale-x-0'
          }`}
          style={{
            transitionDelay: '400ms',
            transitionTimingFunction: 'var(--ease-expo-out)',
          }}
        />

        {/* Bottom Bar */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-between gap-4 transition-all duration-500 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            transitionDelay: '500ms',
            transitionTimingFunction: 'var(--ease-smooth)',
          }}
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Alexandra. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a
              href="#"
              className="text-gray-500 hover:text-white text-sm transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white text-sm transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
