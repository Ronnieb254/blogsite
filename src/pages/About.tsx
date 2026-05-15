import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Award, Users, Lightbulb, Target } from 'lucide-react';

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
      <div className={`text-4xl sm:text-5xl font-semibold mb-2 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
        style={{ transitionDelay: `${delay}ms`, transitionTimingFunction: 'var(--ease-expo-out)' }}>
        {displayValue}
      </div>
      <div className={`text-sm text-gray-500 uppercase tracking-wider transition-all duration-400 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
        style={{ transitionDelay: `${delay + 200}ms`, transitionTimingFunction: 'var(--ease-smooth)' }}>
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
      { threshold: 0.1, rootMargin: '-50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: '50+', label: 'Projects Delivered' },
    { value: '5', label: 'Years Experience' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '10+', label: 'Happy Clients' },
  ];

  const values = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Innovation',
      description: 'Pushing boundaries and exploring new possibilities in every project.',
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Precision',
      description: 'Attention to detail that ensures every element serves a purpose.',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Collaboration',
      description: 'Working closely with clients to bring their vision to life.',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Excellence',
      description: 'Committed to delivering work that exceeds expectations.',
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
            <div className="section-label mb-6">About Me</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6">
              Turning Vision Into Impact
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              With over a decade of experience in brand strategy and digital innovation, 
              I help businesses transform their presence and connect with audiences on a deeper level.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section ref={sectionRef} className="relative py-24 sm:py-32 bg-white overflow-hidden">
        <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
            <div className={`relative overflow-hidden transition-all duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
              style={{
                clipPath: isVisible ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)',
                transitionTimingFunction: 'var(--ease-expo-out)',
                transitionDelay: '200ms',
              }}>
              <img src="/about-portrait.jpg" alt="About Thought Canva" className="w-full h-auto object-cover" />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gray-100 rounded-full -z-10" />
            </div>

            <div>
              <h2 className={`text-2xl sm:text-3xl font-semibold mb-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
                style={{ transitionDelay: '400ms', transitionTimingFunction: 'var(--ease-expo-out)' }}>
                My Story
              </h2>

              <div className={`space-y-4 text-gray-600 leading-relaxed mb-8 transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
                style={{ transitionDelay: '500ms', transitionTimingFunction: 'var(--ease-expo-out)' }}>
                <p>
                  Every project is an opportunity to create something extraordinary. I believe in 
                  the power of strategic thinking combined with creative execution to deliver results 
                  that exceed expectations.
                </p>
                <p>
                  My journey began over five years ago when I discovered my passion for helping 
                  brands find their unique voice. Since then, I've had the privilege of working with 
                  startups, established companies, and everything in between.
                </p>
                <p>
                  What drives me is the challenge of taking complex ideas and transforming them into 
                  clear, compelling brand narratives that resonate with target audiences and drive 
                  meaningful business results.
                </p>
              </div>

              <div className={`transition-all duration-400 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
                style={{ transitionDelay: '700ms', transitionTimingFunction: 'var(--ease-spring)' }}>
                <a href="/contact" className="btn-primary group">
                  Let's Work Together
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto mb-24 transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
            style={{ transitionDelay: '600ms', transitionTimingFunction: 'var(--ease-expo-out)' }}>
            {stats.map((stat, index) => (
              <AnimatedStat
                key={stat.label}
                value={stat.value}
                label={stat.label}
                delay={700 + index * 150}
                isVisible={isVisible}
              />
            ))}
          </div>

          {/* Values */}
          <div>
            <h2 className={`text-2xl sm:text-3xl font-semibold mb-12 text-center transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
              style={{ transitionDelay: '800ms', transitionTimingFunction: 'var(--ease-expo-out)' }}>
              My Core Values
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={value.title}
                  className={`text-center p-8 bg-gray-50 transition-all duration-500 hover:bg-white hover:shadow-lg ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{
                    transitionDelay: `${900 + index * 100}ms`,
                    transitionTimingFunction: 'var(--ease-expo-out)',
                  }}>
                  <div className="w-14 h-14 flex items-center justify-center bg-black text-white rounded-lg mx-auto mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
