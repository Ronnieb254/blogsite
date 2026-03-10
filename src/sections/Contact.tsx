import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
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
      { threshold: 0.2, rootMargin: '-50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'hello@alexandra.com',
      href: 'mailto:hello@alexandra.com',
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'New York, NY',
      href: '#',
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className={`absolute inset-0 z-0 transition-all duration-1200 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
        }`}
        style={{
          transitionTimingFunction: 'var(--ease-expo-out)',
        }}
      >
        <img
          src="/cta-background.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-800 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            transitionDelay: '300ms',
            transitionTimingFunction: 'var(--ease-smooth)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 sm:px-8 lg:px-16 xl:px-24 py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white mb-6 transition-all duration-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'
            }`}
            style={{
              transitionDelay: '500ms',
              transitionTimingFunction: 'var(--ease-expo-out)',
            }}
          >
            Ready to Transform
            <br />
            Your Brand?
          </h2>

          {/* Subheading */}
          <p
            className={`text-lg sm:text-xl text-white/80 leading-relaxed mb-12 max-w-2xl mx-auto transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{
              transitionDelay: '700ms',
              transitionTimingFunction: 'var(--ease-expo-out)',
            }}
          >
            Let's create something extraordinary together. Your journey to
            exceptional brand presence starts with a conversation.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-600 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
            style={{
              transitionDelay: '900ms',
              transitionTimingFunction: 'var(--ease-spring)',
            }}
          >
            <a
              href="mailto:hello@alexandra.com"
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-black text-sm font-semibold tracking-wide uppercase transition-all duration-300 hover:bg-red-600 hover:text-white hover:scale-105 group"
              style={{
                boxShadow: isVisible
                  ? '0 0 30px rgba(255,255,255,0.3)'
                  : 'none',
                animation: isVisible ? 'pulse-glow 3s ease-in-out infinite' : 'none',
              }}
            >
              Get In Touch
              <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className={`inline-flex items-center text-white text-sm font-semibold uppercase tracking-wide transition-all duration-500 hover:text-red-400 group ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{
                transitionDelay: '1000ms',
                transitionTimingFunction: 'var(--ease-expo-out)',
              }}
            >
              View Portfolio
              <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Contact Info */}
          <div
            className={`grid sm:grid-cols-3 gap-8 max-w-2xl mx-auto transition-all duration-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{
              transitionDelay: '1100ms',
              transitionTimingFunction: 'var(--ease-expo-out)',
            }}
          >
            {contactInfo.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="group flex flex-col items-center text-center"
                style={{
                  transitionDelay: `${1200 + index * 100}ms`,
                }}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full mb-3 text-white transition-all duration-300 group-hover:bg-red-600 group-hover:scale-110">
                  {item.icon}
                </div>
                <span className="text-white/60 text-xs uppercase tracking-wider mb-1">
                  {item.label}
                </span>
                <span className="text-white font-medium transition-colors duration-300 group-hover:text-red-400">
                  {item.value}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* CSS for pulse animation */}
      <style>{`
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 30px rgba(255,255,255,0.3);
          }
          50% {
            box-shadow: 0 0 50px rgba(255,255,255,0.5);
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
