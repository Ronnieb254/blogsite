import { useEffect, useRef, useState } from 'react';
import { Compass, Palette, Monitor, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  isVisible: boolean;
}

const ServiceCard = ({
  icon,
  title,
  description,
  delay,
  isVisible,
}: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative bg-white border border-gray-200 p-8 sm:p-10 transition-all duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        transform: isVisible
          ? isHovered
            ? 'translateZ(50px) scale(1.02) rotateY(0deg)'
            : 'translateZ(0) scale(1) rotateY(-3deg)'
          : 'translateZ(-100px) rotateY(-90deg)',
        transitionDelay: isVisible ? '0ms' : `${delay}ms`,
        transitionTimingFunction: 'var(--ease-expo-out)',
        transformStyle: 'preserve-3d',
        boxShadow: isHovered
          ? '0 40px 80px rgba(0,0,0,0.15)'
          : '0 4px 20px rgba(0,0,0,0.05)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon */}
      <div
        className={`w-14 h-14 flex items-center justify-center bg-black text-white rounded-lg mb-6 transition-all duration-500 ${
          isHovered ? 'bg-red-600 rotate-[360deg]' : ''
        }`}
        style={{
          transitionTimingFunction: isHovered
            ? 'var(--ease-expo-out)'
            : 'var(--ease-smooth)',
        }}
      >
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl sm:text-2xl font-semibold mb-4">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed mb-6">{description}</p>

      {/* CTA */}
      <a
        href="#contact"
        className={`inline-flex items-center text-sm font-semibold uppercase tracking-wide transition-all duration-300 ${
          isHovered ? 'text-red-600' : 'text-black'
        }`}
      >
        Explore
        <ArrowRight
          className={`ml-2 w-4 h-4 transition-transform duration-300 ${
            isHovered ? 'translate-x-2' : ''
          }`}
        />
      </a>

      {/* Hover Border Effect */}
      <div
        className={`absolute inset-0 border-2 border-red-600 pointer-events-none transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};

const Services = () => {
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
      { threshold: 0.15, rootMargin: '-50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Compass className="w-6 h-6" />,
      title: 'Brand Strategy',
      description:
        'Developing comprehensive brand identities that resonate with your target audience and stand the test of time.',
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'Creative Direction',
      description:
        'Guiding visual storytelling and creative execution across all touchpoints for cohesive brand experiences.',
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: 'Digital Consulting',
      description:
        'Strategic guidance for digital transformation, from user experience to technology implementation.',
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 sm:py-32 lg:py-40 bg-gray-50 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute top-0 left-0 w-96 h-96 bg-gray-200 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
          style={{ filter: 'blur(100px)' }}
        />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-gray-200 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"
          style={{ filter: 'blur(100px)' }}
        />
      </div>

      <div className="relative z-10 w-full px-6 sm:px-8 lg:px-16 xl:px-24">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          {/* Section Label */}
          <div
            className={`section-label mb-6 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{
              transitionTimingFunction: 'var(--ease-expo-out)',
            }}
          >
            Services
          </div>

          {/* Headline */}
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-semibold transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              transitionDelay: '150ms',
              transitionTimingFunction: 'var(--ease-expo-out)',
            }}
          >
            What I Can Do For You
          </h2>
        </div>

        {/* Services Grid */}
        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{ perspective: '1500px' }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={400 + index * 150}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
