import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Compass, Palette, Monitor, TrendingUp, Layers, MessageSquare } from 'lucide-react';

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

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
      { threshold: 0.1, rootMargin: '-50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const mainServices = [
    {
      icon: <Compass className="w-8 h-8" />,
      title: 'Brand Strategy',
      description: 'Developing comprehensive brand identities that resonate with your target audience and stand the test of time. From brand positioning to messaging frameworks, I help you define who you are and how you communicate it.',
      features: ['Brand Positioning', 'Messaging Framework', 'Brand Architecture', 'Competitive Analysis'],
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Creative Direction',
      description: 'Guiding visual storytelling and creative execution across all touchpoints for cohesive brand experiences. I ensure every visual element aligns with your brand identity and resonates with your audience.',
      features: ['Visual Identity', 'Art Direction', 'Design Systems', 'Brand Guidelines'],
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'Digital Consulting',
      description: 'Strategic guidance for digital transformation, from user experience to technology implementation. I help you navigate the digital landscape and make informed decisions that drive growth.',
      features: ['Digital Strategy', 'UX Consulting', 'Technology Roadmap', 'Digital Transformation'],
    },
  ];

  const additionalServices = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Growth Strategy',
      description: 'Data-driven approaches to accelerate your business growth and market presence.',
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: 'Content Strategy',
      description: 'Developing content that engages your audience and drives meaningful interactions.',
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Brand Messaging',
      description: 'Crafting compelling narratives that communicate your unique value proposition.',
    },
  ];

  return (
    <main>
      {/* Hero Header */}
      <section className="relative pt-32 pb-20 bg-gray-50">
        <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
          <div className={`max-w-3xl transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
            style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}>
            <div className="section-label mb-6">Services</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6">
              What I Can Do For You
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Comprehensive solutions designed to elevate your brand and drive meaningful results. 
              Each service is tailored to meet your unique needs and goals.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section ref={sectionRef} className="relative py-24 sm:py-32 bg-white overflow-hidden">
        <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
          <div className="space-y-24">
            {mainServices.map((service, index) => (
              <div key={service.title}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                <div className={`transition-all duration-700 ${
                  index % 2 === 1 ? 'lg:order-2' : ''
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                  style={{
                    transitionDelay: `${200 + index * 200}ms`,
                    transitionTimingFunction: 'var(--ease-expo-out)',
                  }}>
                  <div className="w-16 h-16 flex items-center justify-center bg-black text-white rounded-xl mb-8">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href="/contact" className="inline-flex items-center text-sm font-semibold uppercase tracking-wide transition-colors duration-300 hover:text-red-600 group">
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>

                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''} transition-all duration-1000 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                  style={{
                    clipPath: isVisible ? 'inset(0 0 0 0)' : 'inset(0 0 0 100%)',
                    transitionDelay: `${400 + index * 200}ms`,
                    transitionTimingFunction: 'var(--ease-expo-out)',
                  }}>
                  <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden">
                    <img 
                      src={`/blog-${(index % 3) + 1}.jpg`} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={`absolute -bottom-6 ${index % 2 === 0 ? '-right-6' : '-left-6'} w-32 h-32 border-2 border-red-600 rounded-2xl -z-10`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="relative py-24 sm:py-32 bg-gray-50 overflow-hidden">
        <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className={`text-2xl sm:text-3xl font-semibold mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
              style={{ transitionDelay: '800ms', transitionTimingFunction: 'var(--ease-expo-out)' }}>
              Additional Services
            </h2>
            <p className={`text-gray-600 transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
              style={{ transitionDelay: '900ms', transitionTimingFunction: 'var(--ease-expo-out)' }}>
              Complementary offerings to support your brand's growth and success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={service.title}
                className={`bg-white p-8 border border-gray-100 transition-all duration-500 hover:shadow-lg hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{
                  transitionDelay: `${1000 + index * 100}ms`,
                  transitionTimingFunction: 'var(--ease-expo-out)',
                }}>
                <div className="w-12 h-12 flex items-center justify-center bg-black text-white rounded-lg mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 sm:py-32 bg-black text-white overflow-hidden">
        <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
              style={{ transitionDelay: '1100ms', transitionTimingFunction: 'var(--ease-expo-out)' }}>
              Ready to Get Started?
            </h2>
            <p className={`text-lg text-white/70 leading-relaxed mb-10 transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
              style={{ transitionDelay: '1200ms', transitionTimingFunction: 'var(--ease-expo-out)' }}>
              Let's discuss how I can help transform your brand and achieve your business goals.
            </p>
            <a href="/contact" className={`inline-flex items-center justify-center px-10 py-5 bg-white text-black text-sm font-semibold tracking-wide uppercase transition-all duration-300 hover:bg-red-600 hover:text-white hover:scale-105 group ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
              style={{ transitionDelay: '1300ms', transitionTimingFunction: 'var(--ease-spring)' }}>
              Schedule a Consultation
              <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
