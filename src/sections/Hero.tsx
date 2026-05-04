import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const heroHeight = heroRef.current.offsetHeight;
      const progress = Math.min(scrollY / heroHeight, 1);
      
      // Parallax effects
      const bgElement = heroRef.current.querySelector('.hero-bg') as HTMLElement;
      const contentElement = heroRef.current.querySelector('.hero-content') as HTMLElement;
      const portraitElement = heroRef.current.querySelector('.hero-portrait') as HTMLElement;
      
      if (bgElement) {
        bgElement.style.transform = `translateY(${scrollY * 0.3}px) scale(${1 + progress * 0.05})`;
      }
      if (contentElement) {
        contentElement.style.transform = `translateY(${scrollY * 0.15}px)`;
        contentElement.style.opacity = `${1 - progress * 0.8}`;
      }
      if (portraitElement) {
        portraitElement.style.transform = `translateY(${scrollY * -0.1}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden bg-white"
    >
      {/* Background Image */}
      <div
        className={`hero-bg absolute inset-0 z-0 transition-all duration-1500 ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
        }`}
        style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
      >
        <img
          src="/hero-background.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />
      </div>

      {/* Diagonal Divider SVG */}
      <svg
        className="absolute top-0 right-0 h-full w-1/2 z-10 pointer-events-none hidden lg:block"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M 0 0 L 100 0 L 100 100 L 30 100 Z"
          fill="white"
          className={`transition-all duration-1200 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            transitionDelay: '300ms',
            transitionTimingFunction: 'var(--ease-expo-out)',
          }}
        />
      </svg>

      {/* Content Container */}
      <div className="relative z-20 min-h-screen flex items-center">
        <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24 py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="hero-content max-w-xl">
              {/* Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-[1.1] mb-8">
                <span
                  className={`block overflow-hidden ${
                    isLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    transitionDelay: '500ms',
                    transitionTimingFunction: 'var(--ease-expo-out)',
                  }}
                >
                  <span
                    className={`inline-block transition-transform duration-800 ${
                      isLoaded ? 'translate-y-0' : 'translate-y-full'
                    }`}
                    style={{
                      transitionDelay: '500ms',
                      transitionTimingFunction: 'var(--ease-expo-out)',
                    }}
                  >
                    Crafting
                  </span>
                </span>
                <span
                  className={`block overflow-hidden ${
                    isLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    transitionDelay: '620ms',
                    transitionTimingFunction: 'var(--ease-expo-out)',
                  }}
                >
                  <span
                    className={`inline-block transition-transform duration-800 ${
                      isLoaded ? 'translate-y-0' : 'translate-y-full'
                    }`}
                    style={{
                      transitionDelay: '620ms',
                      transitionTimingFunction: 'var(--ease-expo-out)',
                    }}
                  >
                    Digital
                  </span>
                </span>
                <span
                  className={`block overflow-hidden ${
                    isLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    transitionDelay: '740ms',
                    transitionTimingFunction: 'var(--ease-expo-out)',
                  }}
                >
                  <span
                    className={`inline-block transition-transform duration-800 ${
                      isLoaded ? 'translate-y-0' : 'translate-y-full'
                    }`}
                    style={{
                      transitionDelay: '740ms',
                      transitionTimingFunction: 'var(--ease-expo-out)',
                    }}
                  >
                    Excellence
                  </span>
                </span>
              </h1>

              {/* Subheading */}
              <p
                className={`text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed transition-all duration-600 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: '900ms',
                  transitionTimingFunction: 'var(--ease-expo-out)',
                }}
              >
                Strategic consultancy and creative direction for brands that dare
                to stand out.
              </p>

              {/* CTAs */}
              <div
                className={`flex flex-col sm:flex-row gap-4 transition-all duration-500 ${
                  isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
                style={{
                  transitionDelay: '1100ms',
                  transitionTimingFunction: 'var(--ease-spring)',
                }}
              >
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="btn-primary group"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => scrollToSection('#services')}
                  className="inline-flex items-center justify-center text-sm font-semibold tracking-wide uppercase text-black hover:text-red-600 transition-colors duration-300 group"
                >
                  View My Work
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right Portrait */}
            <div
              className={`hero-portrait relative hidden lg:block transition-all duration-1200 ${
                isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-24'
              }`}
              style={{
                transitionDelay: '400ms',
                transitionTimingFunction: 'var(--ease-expo-out)',
              }}
            >
              <div className="relative">
                {/* Portrait Image */}
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="/hero-portrait.jpg"
                    alt="Thought Canva"
                    className="w-full h-auto object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/30 to-transparent transition-opacity duration-1000 ${
                      isLoaded ? 'opacity-100' : 'opacity-50'
                    }`}
                    style={{
                      transitionDelay: '800ms',
                      transitionTimingFunction: 'var(--ease-smooth)',
                    }}
                  />
                </div>

                {/* Floating Accent */}
                <div
                  className={`absolute -bottom-6 -left-6 w-32 h-32 border-2 border-red-600 rounded-2xl transition-all duration-1000 ${
                    isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                  }`}
                  style={{
                    transitionDelay: '1200ms',
                    transitionTimingFunction: 'var(--ease-spring)',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
