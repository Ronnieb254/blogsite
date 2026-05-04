import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface StatProps {
  value: string;
  label: string;
  delay: number;
  isVisible: boolean;
}

const AnimatedStat = ({ value, label, delay, isVisible }: StatProps) => {
  const [displayValue, setDisplayValue] = useState('0');
  const numericValue = parseInt(value.replace(/\D/g, ''));
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      const duration = 1500;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease out expo
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(easeProgress * numericValue);
        
        setDisplayValue(current + suffix);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, numericValue, suffix, delay]);

  return (
    <div className="text-center">
      <div
        className={`text-4xl sm:text-5xl font-semibold mb-2 transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{
          transitionDelay: `${delay}ms`,
          transitionTimingFunction: 'var(--ease-expo-out)',
        }}
      >
        {displayValue}
      </div>
      <div
        className={`text-sm text-gray-500 uppercase tracking-wider transition-all duration-400 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          transitionDelay: `${delay + 200}ms`,
          transitionTimingFunction: 'var(--ease-smooth)',
        }}
      >
        {label}
      </div>
    </div>
  );
};

const About = () => {
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

  const stats = [
    { value: '150+', label: 'Projects Delivered' },
    { value: '12', label: 'Years Experience' },
    { value: '98%', label: 'Client Satisfaction' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 sm:py-32 lg:py-40 bg-white overflow-hidden"
    >
      <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-0 items-center">
          {/* Image Column */}
          <div className="lg:col-span-6 relative">
            <div
              className={`relative overflow-hidden transition-all duration-1000 ${
                isVisible
                  ? 'opacity-100 clip-path-full'
                  : 'opacity-0 clip-path-hidden'
              }`}
              style={{
                clipPath: isVisible
                  ? 'inset(0 0 0 0)'
                  : 'inset(0 100% 0 0)',
                transitionTimingFunction: 'var(--ease-expo-out)',
                transitionDelay: '200ms',
              }}
            >
              <img
                src="/about-portrait.jpg"
                alt="About Thought Canva"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Decorative Element */}
            <div
              className={`absolute -bottom-8 -right-8 w-48 h-48 bg-gray-100 rounded-full -z-10 transition-all duration-1000 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              }`}
              style={{
                transitionDelay: '600ms',
                transitionTimingFunction: 'var(--ease-spring)',
              }}
            />
          </div>

          {/* Content Column */}
          <div className="lg:col-span-6 lg:-ml-16 relative z-10">
            <div
              className={`bg-white p-8 sm:p-12 lg:p-16 shadow-xl transition-all duration-800 ${
                isVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-20'
              }`}
              style={{
                transitionDelay: '500ms',
                transitionTimingFunction: 'var(--ease-expo-out)',
              }}
            >
              {/* Section Label */}
              <div
                className={`section-label mb-6 transition-all duration-600 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{
                  transitionDelay: '400ms',
                  transitionTimingFunction: 'var(--ease-expo-out)',
                }}
              >
                About Me
              </div>

              {/* Headline */}
              <h2
                className={`text-3xl sm:text-4xl lg:text-5xl font-semibold mb-8 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: '700ms',
                  transitionTimingFunction: 'var(--ease-expo-out)',
                }}
              >
                Turning Vision Into Impact
              </h2>

              {/* Body Text */}
              <div
                className={`space-y-4 text-gray-600 leading-relaxed mb-10 transition-all duration-600 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{
                  transitionDelay: '900ms',
                  transitionTimingFunction: 'var(--ease-expo-out)',
                }}
              >
                <p>
                  With over a decade of experience in brand strategy and digital
                  innovation, I help businesses transform their presence and connect
                  with audiences on a deeper level.
                </p>
                <p>
                  Every project is an opportunity to create something extraordinary.
                  I believe in the power of strategic thinking combined with creative
                  execution to deliver results that exceed expectations.
                </p>
              </div>

              {/* CTA */}
              <button
                onClick={() => scrollToSection('#services')}
                className={`btn-secondary group transition-all duration-400 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
                style={{
                  transitionDelay: '1100ms',
                  transitionTimingFunction: 'var(--ease-spring)',
                }}
              >
                Learn My Story
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div
          className={`mt-16 lg:mt-24 grid grid-cols-3 gap-8 max-w-4xl mx-auto transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{
            transitionDelay: '1000ms',
            transitionTimingFunction: 'var(--ease-expo-out)',
          }}
        >
          {stats.map((stat, index) => (
            <AnimatedStat
              key={stat.label}
              value={stat.value}
              label={stat.label}
              delay={1100 + index * 150}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
