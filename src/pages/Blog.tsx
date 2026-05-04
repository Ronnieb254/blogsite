import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Search, Tag, User, Plus, LogOut, Lock } from 'lucide-react';
import { useBlog } from '../context/BlogContext';
import { useAuth } from '../context/AuthContext';

const Blog = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  const { posts, getPreviewContent } = useBlog();
  const { isAuthenticated, user, logout } = useAuth();

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

  const categories = ['All', 'Strategy', 'Creative', 'Technology', 'Business', 'Marketing', 'Design'];

  // Filter posts
  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = posts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <main>
      {/* Hero Header */}
      <section className="relative pt-32 pb-20 bg-gray-50">
        <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className={`max-w-2xl transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
              style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}>
              <div className="section-label mb-6">Blog</div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6">
                Latest Insights
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Thoughts on branding, strategy, design, and the ever-evolving digital landscape.
              </p>
            </div>

            {/* Auth Actions */}
            <div className={`flex items-center gap-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
              style={{ transitionDelay: '200ms', transitionTimingFunction: 'var(--ease-expo-out)' }}>
              {isAuthenticated ? (
                <>
                  <div className="flex items-center gap-3 mr-4">
                    <img
                      src={user?.avatar || '/hero-portrait.jpg'}
                      alt={user?.fullName}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <span className="text-sm font-medium hidden sm:block">{user?.fullName}</span>
                  </div>
                  <Link
                    to="/blog/create"
                    className="inline-flex items-center px-4 py-2 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors duration-300"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    New Post
                  </Link>
                  <button
                    onClick={logout}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-100 transition-colors duration-300"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <div className="flex items-center text-gray-500 mr-4">
                    <Lock className="w-4 h-4 mr-2" />
                    <span className="text-sm hidden sm:block">Guest Mode</span>
                  </div>
                  <Link
                    to="/login"
                    state={{ from: { pathname: '/blog' } }}
                    className="inline-flex items-center px-4 py-2 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors duration-300"
                  >
                    <User className="w-4 h-4 mr-2" />
                    Sign In
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === 'All' && !searchQuery && (
        <section className="relative py-12 bg-white">
          <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
            <div className={`group relative overflow-hidden rounded-2xl transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
              style={{ transitionDelay: '200ms', transitionTimingFunction: 'var(--ease-expo-out)' }}>
              <div className="relative h-[50vh] sm:h-[60vh] overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
                <span className="inline-block px-4 py-1 bg-red-600 text-white text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
                  {featuredPost.category}
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-4 max-w-2xl transition-transform duration-500 group-hover:-translate-y-2">
                  {featuredPost.title}
                </h2>
                <p className="text-white/80 leading-relaxed mb-6 max-w-xl hidden sm:block">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-white/60 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {featuredPost.date}
                  </div>
                  <Link
                    to={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center text-white text-sm font-semibold uppercase tracking-wide transition-colors duration-300 group-hover:text-red-400"
                  >
                    Read Article
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section ref={sectionRef} className="relative py-24 sm:py-32 bg-white overflow-hidden">
        <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
          {/* Filter & Search */}
          <div className={`flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12 transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
            style={{ transitionDelay: '300ms', transitionTimingFunction: 'var(--ease-expo-out)' }}>
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-black text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full lg:w-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full lg:w-64 pl-10 pr-4 py-2 border border-gray-200 focus:border-black focus:outline-none transition-colors duration-300"
              />
            </div>
          </div>

          {/* Guest Notice */}
          {!isAuthenticated && (
            <div className={`mb-8 bg-amber-50 border border-amber-200 rounded-lg p-4 transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
              style={{ transitionDelay: '350ms', transitionTimingFunction: 'var(--ease-expo-out)' }}>
              <div className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-amber-600 mt-0.5" />
                <div>
                  <p className="text-sm text-amber-800 font-medium">
                    You're browsing as a guest
                  </p>
                  <p className="text-sm text-amber-700 mt-1">
                    Sign in to read full articles and create your own blog posts.{' '}
                    <Link
                      to="/login"
                      state={{ from: { pathname: '/blog' } }}
                      className="underline hover:text-amber-900"
                    >
                      Sign in now
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => {
                const previewContent = getPreviewContent(post.content);
                const isPreview = !isAuthenticated;

                return (
                  <article
                    key={post.id}
                    className={`group bg-white border border-gray-100 overflow-hidden transition-all duration-700 hover:shadow-xl hover:-translate-y-2 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                    }`}
                    style={{
                      transitionDelay: `${400 + index * 100}ms`,
                      transitionTimingFunction: 'var(--ease-expo-out)',
                    }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110"
                      />
                      <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-black text-xs font-semibold uppercase tracking-wider">
                        {post.category}
                      </span>
                      {isPreview && (
                        <div className="absolute top-4 right-4 w-8 h-8 bg-black/70 rounded-full flex items-center justify-center">
                          <Lock className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <div className="flex items-center text-gray-400 text-sm mb-3">
                        <Calendar className="w-4 h-4 mr-2" />
                        {post.date}
                      </div>

                      <h3 className="text-lg font-semibold mb-3 transition-colors duration-300 group-hover:text-red-600 line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed mb-4 text-sm line-clamp-3">
                        {post.excerpt}
                      </p>

                      {isPreview && (
                        <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                          <p className="text-xs text-gray-500 mb-1">Preview:</p>
                          <p className="text-sm text-gray-600 line-clamp-2">
                            {previewContent.substring(0, 150)}...
                          </p>
                        </div>
                      )}

                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center text-sm font-semibold uppercase tracking-wide transition-colors duration-300 group-hover:text-red-600"
                      >
                        {isPreview ? 'Read Preview' : 'Read More'}
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16">
              <Tag className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No posts found</h3>
              <p className="text-gray-500">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative py-24 sm:py-32 bg-gray-50 overflow-hidden">
        <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
          <div className={`max-w-2xl mx-auto text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
            style={{ transitionDelay: '800ms', transitionTimingFunction: 'var(--ease-expo-out)' }}>
            <div className="w-12 h-12 flex items-center justify-center bg-black text-white rounded-lg mx-auto mb-6">
              <Tag className="w-5 h-5" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              Subscribe to My Newsletter
            </h2>
            <p className="text-gray-600 mb-8">
              Get the latest insights on branding, strategy, and design delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-200 focus:border-black focus:outline-none transition-colors duration-300"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
