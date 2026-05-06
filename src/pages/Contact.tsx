import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Mail, Phone, MapPin, Send, Linkedin, Twitter, Instagram } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! I will get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'hello@thoughtcanva.com',
      href: 'mailto:hello@thoughtcanva.com',
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+254 (769) 940599',
      href: 'tel:+254769940599',
    },
   
  ];

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', href: '#' },
    { icon: <Twitter className="w-5 h-5" />, label: 'Twitter', href: '#' },
    { icon: <Instagram className="w-5 h-5" />, label: 'Instagram', href: '#' },
  ];

  const services = [
    'Brand Strategy',
    'Creative Direction',
    'Digital Consulting',
    'Growth Strategy',
    'Content Strategy',
    'Other',
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
            <div className="section-label mb-6">Contact</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6">
              Let's Work Together
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Have a project in mind? I'd love to hear about it. Fill out the form below 
              or reach out directly through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={sectionRef} className="relative py-24 sm:py-32 bg-white overflow-hidden">
        <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
            {/* Contact Form */}
            <div className={`lg:col-span-3 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
              style={{ transitionDelay: '200ms', transitionTimingFunction: 'var(--ease-expo-out)' }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 focus:border-black focus:outline-none transition-colors duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 focus:border-black focus:outline-none transition-colors duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 focus:border-black focus:outline-none transition-colors duration-300"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 focus:border-black focus:outline-none transition-colors duration-300 bg-white"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-200 focus:border-black focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary group w-full sm:w-auto"
                >
                  Send Message
                  <Send className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            </div>

            {/* Contact Info Sidebar */}
            <div className={`lg:col-span-2 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
              style={{ transitionDelay: '400ms', transitionTimingFunction: 'var(--ease-expo-out)' }}>
              <div className="bg-gray-50 p-8 lg:p-10">
                <h3 className="text-xl font-semibold mb-8">Get in Touch</h3>

                <div className="space-y-6 mb-10">
                  {contactInfo.map((item, index) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className={`flex items-start group transition-all duration-500 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                      }`}
                      style={{
                        transitionDelay: `${500 + index * 100}ms`,
                        transitionTimingFunction: 'var(--ease-expo-out)',
                      }}
                    >
                      <div className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-lg mr-4 transition-all duration-300 group-hover:bg-red-600">
                        {item.icon}
                      </div>
                      <div>
                        <span className="block text-sm text-gray-500 mb-1">{item.label}</span>
                        <span className="font-medium transition-colors duration-300 group-hover:text-red-600">
                          {item.value}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="border-t border-gray-200 pt-8">
                  <h4 className="text-sm font-medium text-gray-500 mb-4">Follow Me</h4>
                  <div className="flex space-x-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={social.label}
                        href={social.href}
                        className={`w-10 h-10 flex items-center justify-center bg-white border border-gray-200 text-black hover:bg-black hover:text-white hover:border-black transition-all duration-300 ${
                          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                        }`}
                        style={{
                          transitionDelay: `${800 + index * 100}ms`,
                          transitionTimingFunction: 'var(--ease-spring)',
                        }}
                        aria-label={social.label}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="mt-10 p-6 bg-black text-white">
                  <h4 className="font-semibold mb-2">Availability</h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Currently accepting new projects for Q1 2026. Let's discuss how I can help bring your vision to life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 sm:py-32 bg-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/cta-background.jpg"
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 w-full px-6 sm:px-8 lg:px-16 xl:px-24">
          <div className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
            style={{ transitionDelay: '600ms', transitionTimingFunction: 'var(--ease-expo-out)' }}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6">
              Ready to Transform Your Brand?
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-10">
              Let's create something extraordinary together. Your journey to exceptional brand presence starts with a conversation.
            </p>
            <a
              href="mailto:hello@thoughtcanva.com"
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-black text-sm font-semibold tracking-wide uppercase transition-all duration-300 hover:bg-red-600 hover:text-white hover:scale-105 group"
            >
              Schedule a Call
              <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
