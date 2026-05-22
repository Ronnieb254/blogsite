import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  //  Linkedin, Twitter, Instagram, 
  ArrowUpRight } from 'lucide-react';

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

  // ✅ UPDATED NAVIGATION (added Stories + Shop)
  const navigationLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Blog', href: '/blog' },
    { label: 'Stories', href: '/stories' }, // 👈 NEW
    // { label: 'Shop', href: '/shop' },       // 👈 NEW
    { label: 'Contact', href: '/contact' },
  ];

  const serviceLinks = [
    { label: 'Brand Strategy', href: '/services' },
    { label: 'Creative Direction', href: '/services' },
    { label: 'Digital Consulting', href: '/services' },
  ];

  // const socialLinks = [
  //   { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', href: '#' },
  //   { icon: <Twitter className="w-5 h-5" />, label: 'Twitter', href: '#' },
  //   { icon: <Instagram className="w-5 h-5" />, label: 'Instagram', href: '#' },
  // ];

  return (
    <footer
      ref={footerRef}
      className="relative bg-black text-white py-16 sm:py-20 lg:py-24"
    >
      <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">

        {/* MAIN CONTENT */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* LOGO */}
          <div
            className={`lg:col-span-1 transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Link
              to="/"
              className="text-3xl font-semibold tracking-tight mb-6 block"
            >
              <img
                src="/thoughtcanva-logo.svg"
                alt="Thought Canva Logo"
                className="mx-auto"
              />
            </Link>

            <p className="text-gray-400 leading-relaxed text-sm">
              Strategic consultancy and creative direction for brands that dare
              to stand out.
            </p>
          </div>

          {/* NAVIGATION */}
          <div
            className={`transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">
              Navigation
            </h4>

            <ul className="space-y-3">
              {navigationLinks.map((link, index) => (
                <li
                  key={link.label}
                  className={`transition-all duration-400 ${
                    isVisible
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 -translate-x-4'
                  }`}
                  style={{ transitionDelay: `${150 + index * 60}ms` }}
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

          {/* SERVICES */}
          <div
            className={`transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">
              Services
            </h4>

            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li
                  key={link.label}
                  className={`transition-all duration-400 ${
                    isVisible
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 -translate-x-4'
                  }`}
                  style={{ transitionDelay: `${250 + index * 60}ms` }}
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

          {/* CONNECT */}
          <div
            className={`transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">
              Connect
            </h4>

            {/* <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-red-600 transition-all duration-300 ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                  }`}
                  style={{ transitionDelay: `${350 + index * 60}ms` }}
                >
                  {social.icon}
                </a>
              ))}
            </div> */}

            <a
              href="mailto:hello@thoughtcanva.com"
              className="inline-flex items-center mt-6 text-gray-400 hover:text-white transition-all duration-300 group"
            >
              hello@thoughtcanva.com
              <ArrowUpRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="h-px bg-white/10 mb-8" />

        {/* BOTTOM */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Thought Canva. All rights reserved.
          </p>

          <div className="flex items-center space-x-6">
            <a href="/privacypolicy" className="text-gray-500 hover:text-white text-sm">
              Privacy Policy
            </a>
            <a href="/termsconditions" className="text-gray-500 hover:text-white text-sm">
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;