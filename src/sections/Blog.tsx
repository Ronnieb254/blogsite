import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

interface BlogPost {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  featured?: boolean;
}

const Blog = () => {
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

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      category: 'Strategy',
      title: 'The Art of Building a Brand That Lasts',
      excerpt:
        'Discover the key principles behind creating brand identities that stand the test of time and resonate deeply with audiences.',
      date: 'December 15, 2024',
      image: '/blog-1.jpg',
      featured: true,
    },
    {
      id: 2,
      category: 'Technology',
      title: '5 Digital Trends Shaping 2025',
      excerpt:
        'Explore the emerging technologies and digital strategies that will define the next year.',
      date: 'December 10, 2024',
      image: '/blog-2.jpg',
    },
    {
      id: 3,
      category: 'Creative',
      title: 'The Power of Visual Storytelling',
      excerpt:
        'How compelling visuals can transform your brand narrative and engage your audience.',
      date: 'December 5, 2024',
      image: '/blog-3.jpg',
    },
  ];

  const featuredPost = blogPosts.find((post) => post.featured);
  const secondaryPosts = blogPosts.filter((post) => !post.featured);

  return (
    <section
      id="blog"
      ref={sectionRef}
      className="relative py-24 sm:py-32 lg:py-40 bg-white overflow-hidden"
    >
      <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 lg:mb-16">
          <div>
            {/* Section Label */}
            <div
              className={`section-label mb-4 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{
                transitionTimingFunction: 'var(--ease-expo-out)',
              }}
            >
              Blog
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
              Latest Insights
            </h2>
          </div>

          {/* View All Link */}
          <a
            href="#"
            className={`inline-flex items-center text-sm font-semibold uppercase tracking-wide mt-4 sm:mt-0 transition-all duration-500 hover:text-red-600 group ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
            style={{
              transitionDelay: '300ms',
              transitionTimingFunction: 'var(--ease-expo-out)',
            }}
          >
            View All Articles
            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Blog Grid */}
        <div className="space-y-8">
          {/* Featured Post */}
          {featuredPost && (
            <div
              className={`group relative overflow-hidden rounded-2xl transition-all duration-1000 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
              style={{
                transitionDelay: '300ms',
                transitionTimingFunction: 'var(--ease-expo-out)',
              }}
            >
              {/* Background Image */}
              <div className="relative h-[50vh] sm:h-[60vh] overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
                {/* Category */}
                <span className="inline-block px-4 py-1 bg-red-600 text-white text-xs font-semibold uppercase tracking-wider rounded-full mb-4 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-red-600/30">
                  {featuredPost.category}
                </span>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-4 max-w-2xl transition-transform duration-500 group-hover:-translate-y-2">
                  {featuredPost.title}
                </h3>

                {/* Excerpt */}
                <p className="text-white/80 leading-relaxed mb-6 max-w-xl hidden sm:block">
                  {featuredPost.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-white/60 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {featuredPost.date}
                  </div>

                  <a
                    href="#"
                    className="inline-flex items-center text-white text-sm font-semibold uppercase tracking-wide transition-all duration-300 group-hover:text-red-400"
                  >
                    Read Article
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Secondary Posts Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {secondaryPosts.map((post, index) => (
              <div
                key={post.id}
                className={`group bg-white border border-gray-100 overflow-hidden transition-all duration-700 hover:shadow-xl hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{
                  transitionDelay: `${500 + index * 150}ms`,
                  transitionTimingFunction: 'var(--ease-expo-out)',
                }}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110"
                  />
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-black text-xs font-semibold uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  {/* Date */}
                  <div className="flex items-center text-gray-400 text-sm mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {post.date}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-red-600">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                    {post.excerpt}
                  </p>

                  {/* Read More */}
                  <a
                    href="#"
                    className="inline-flex items-center text-sm font-semibold uppercase tracking-wide transition-colors duration-300 group-hover:text-red-600"
                  >
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
