import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Compass, Palette, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [servicesVisible, setServicesVisible] = useState(false);
  const [blogVisible, setBlogVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const heroHeight = heroRef.current.offsetHeight;
      const progress = Math.min(scrollY / heroHeight, 1);
      
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === aboutRef.current) setAboutVisible(true);
            if (entry.target === servicesRef.current) setServicesVisible(true);
            if (entry.target === blogRef.current) setBlogVisible(true);
          }
        });
      },
      { threshold: 0.2, rootMargin: '-50px' }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    if (servicesRef.current) observer.observe(servicesRef.current);
    if (blogRef.current) observer.observe(blogRef.current);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Compass className="w-6 h-6" />,
      title: 'Brand Strategy',
      description: 'Developing comprehensive brand identities that resonate with your target audience.',
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'Creative Direction',
      description: 'Guiding visual storytelling across all touchpoints for cohesive brand experiences.',
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: 'Digital Consulting',
      description: 'Strategic guidance for digital transformation and technology implementation.',
    },
  ];

  const blogPosts = [
    {
      id: 1,
      category: 'Strategy',
      title: 'The Art of Building a Brand That Lasts',
      date: 'May 15, 2026',
      image: '/blog-1.jpg',
    },
    {
      id: 2,
      category: 'Technology',
      title: '5 Digital Trends Shaping 2026',
      date: 'May 14, 2026',
      image: '/blog-2.jpg',
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section
        id="hero"
        ref={heroRef}
        className="relative min-h-screen w-full overflow-hidden bg-white"
      >
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

        <div className="relative z-20 min-h-screen flex items-center">
          <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24 py-32">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              <div className="hero-content max-w-xl">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-[1.1] mb-8">
                  <span className={`block overflow-hidden ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                    <span className={`inline-block transition-transform duration-800 ${isLoaded ? 'translate-y-0' : 'translate-y-full'}`}
                      style={{ transitionDelay: '500ms', transitionTimingFunction: 'var(--ease-expo-out)' }}>
                      Crafting
                    </span>
                  </span>
                  <span className={`block overflow-hidden ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                    <span className={`inline-block transition-transform duration-800 ${isLoaded ? 'translate-y-0' : 'translate-y-full'}`}
                      style={{ transitionDelay: '620ms', transitionTimingFunction: 'var(--ease-expo-out)' }}>
                      Digital
                    </span>
                  </span>
                  <span className={`block overflow-hidden ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                    <span className={`inline-block transition-transform duration-800 ${isLoaded ? 'translate-y-0' : 'translate-y-full'}`}
                      style={{ transitionDelay: '740ms', transitionTimingFunction: 'var(--ease-expo-out)' }}>
                      Excellence
                    </span>
                  </span>
                </h1>

                <p className={`text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed transition-all duration-600 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                  style={{ transitionDelay: '900ms', transitionTimingFunction: 'var(--ease-expo-out)' }}>
                  Strategic consultancy and creative direction for brands that dare to stand out.
                </p>

                <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-500 ${
                  isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
                  style={{ transitionDelay: '1100ms', transitionTimingFunction: 'var(--ease-spring)' }}>
                  <Link to="/contact" className="btn-primary group">
                    Start Your Journey
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <Link to="/services" className="inline-flex items-center justify-center text-sm font-semibold tracking-wide uppercase text-black hover:text-red-600 transition-colors duration-300 group">
                    View My Work
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              <div className={`hero-portrait relative hidden lg:block transition-all duration-1200 ${
                isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-24'
              }`}
                style={{ transitionDelay: '400ms', transitionTimingFunction: 'var(--ease-expo-out)' }}>
                <div className="relative">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img src="/hero-portrait.jpg" alt="Thought Canva" className="w-full h-auto object-cover" />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/30 to-transparent transition-opacity duration-1000 ${
                      isLoaded ? 'opacity-100' : 'opacity-50'
                    }`}
                      style={{ transitionDelay: '800ms', transitionTimingFunction: 'var(--ease-smooth)' }} />
                  </div>
                  <div className={`absolute -bottom-6 -left-6 w-32 h-32 border-2 border-red-600 rounded-2xl transition-all duration-1000 ${
                    isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                  }`}
                    style={{ transitionDelay: '1200ms', transitionTimingFunction: 'var(--ease-spring)' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section ref={aboutRef} className="relative py-24 sm:py-32 bg-white overflow-hidden">
        <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className={`relative overflow-hidden transition-all duration-1000 ${
              aboutVisible ? 'opacity-100' : 'opacity-0'
            }`}
              style={{
                clipPath: aboutVisible ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)',
                transitionTimingFunction: 'var(--ease-expo-out)',
                transitionDelay: '200ms',
              }}>
              <img src="/about-portrait.jpg" alt="About" className="w-full h-auto object-cover" />
            </div>

            <div>
              <div className={`section-label mb-6 transition-all duration-600 ${
                aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
                style={{ transitionDelay: '400ms', transitionTimingFunction: 'var(--ease-expo-out)' }}>
                About Me
              </div>

              <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-semibold mb-8 transition-all duration-700 ${
                aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
                style={{ transitionDelay: '500ms', transitionTimingFunction: 'var(--ease-expo-out)' }}>
                Turning Vision Into Impact
              </h2>

              <div className={`space-y-4 text-gray-600 leading-relaxed mb-10 transition-all duration-600 ${
                aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
                style={{ transitionDelay: '700ms', transitionTimingFunction: 'var(--ease-expo-out)' }}>
                <p>
                  With over a decade of experience in brand strategy and digital innovation, 
                  I help businesses transform their presence and connect with audiences on a deeper level.
                </p>
                <p>
                  Every project is an opportunity to create something extraordinary. I believe in 
                  the power of strategic thinking combined with creative execution.
                </p>
              </div>

              <Link to="/about" className={`btn-secondary group transition-all duration-400 ${
                aboutVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
                style={{ transitionDelay: '900ms', transitionTimingFunction: 'var(--ease-spring)' }}>
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section ref={servicesRef} className="relative py-24 sm:py-32 bg-gray-50 overflow-hidden">
        <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className={`section-label mb-6 transition-all duration-500 ${
              servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
              style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}>
              Services
            </div>
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-semibold transition-all duration-700 ${
              servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
              style={{ transitionDelay: '150ms', transitionTimingFunction: 'var(--ease-expo-out)' }}>
              What I Can Do For You
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div key={service.title}
                className={`group bg-white border border-gray-200 p-8 sm:p-10 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${
                  servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{
                  transitionDelay: `${400 + index * 150}ms`,
                  transitionTimingFunction: 'var(--ease-expo-out)',
                }}>
                <div className="w-14 h-14 flex items-center justify-center bg-black text-white rounded-lg mb-6 transition-all duration-500 group-hover:bg-red-600">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <Link to="/services" className="inline-flex items-center text-sm font-semibold uppercase tracking-wide transition-colors duration-300 group-hover:text-red-600">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>

          <div className={`text-center transition-all duration-600 ${
            servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
            style={{ transitionDelay: '800ms', transitionTimingFunction: 'var(--ease-expo-out)' }}>
            <Link to="/services" className="btn-primary group">
              View All Services
              <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section ref={blogRef} className="relative py-24 sm:py-32 bg-white overflow-hidden">
        <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 lg:mb-16">
            <div>
              <div className={`section-label mb-4 transition-all duration-500 ${
                blogVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
                style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}>
                Blog
              </div>
              <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-semibold transition-all duration-700 ${
                blogVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
                style={{ transitionDelay: '150ms', transitionTimingFunction: 'var(--ease-expo-out)' }}>
                Latest Insights
              </h2>
            </div>
            <Link to="/blog" className={`inline-flex items-center text-sm font-semibold uppercase tracking-wide mt-4 sm:mt-0 transition-all duration-500 hover:text-red-600 group ${
              blogVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
              style={{ transitionDelay: '300ms', transitionTimingFunction: 'var(--ease-expo-out)' }}>
              View All Articles
              <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <div key={post.id}
                className={`group bg-white border border-gray-100 overflow-hidden transition-all duration-700 hover:shadow-xl hover:-translate-y-2 ${
                  blogVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{
                  transitionDelay: `${500 + index * 150}ms`,
                  transitionTimingFunction: 'var(--ease-expo-out)',
                }}>
                <div className="relative h-56 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-black text-xs font-semibold uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
                <div className="p-6 sm:p-8">
                  <div className="text-gray-400 text-sm mb-3">{post.date}</div>
                  <h3 className="text-xl font-semibold mb-4 transition-colors duration-300 group-hover:text-red-600">
                    {post.title}
                  </h3>
                  <Link to="/blog" className="inline-flex items-center text-sm font-semibold uppercase tracking-wide transition-colors duration-300 group-hover:text-red-600">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
