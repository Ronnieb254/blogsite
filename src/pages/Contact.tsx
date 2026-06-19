import { useEffect, useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  // Linkedin,
  // Twitter,
  // Instagram,
} from "lucide-react";
import Swal from "sweetalert2";
import { useMutation } from "@apollo/client/react";
import {CREATE_CONTACT_MUTATION} from "../graphql/mutations";

type ContactResponse = {
  createContact: {
    id: string;
    name: string;
    email: string;
    message: string;
  };
};

type ContactVariables = {
  input: {
    name: string;
    email: string;
    phone?: string;
    subject?: string;
    message: string;
  };
};

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [createContact, { loading }] = useMutation<
    ContactResponse,
    ContactVariables
  >(CREATE_CONTACT_MUTATION);

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
      { threshold: 0.1, rootMargin: "-50px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await createContact({
        variables: {
          input: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            subject: formData.service,
            message: formData.message,
          },
        },
      });

      Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: "Thank you for reaching out. We will get back to you ASAP.",
        timer: 3000,
        showConfirmButton: false,
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error: any) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Failed",
        text:
          error?.message || "Something went wrong. Please try again later.",
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "hello@thoughtcanva.com",
      href: "mailto:hello@thoughtcanva.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone No.",
      value: "+254 (711) 571261",
      href: "tel:+254711571261",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "P.O. Box 00100, Nairobi, Kenya",
      href: "#",
    },
  ];

  // const socialLinks = [
  //   {
  //     icon: <Linkedin className="w-5 h-5" />,
  //     label: "LinkedIn",
  //     href: "#",
  //   },
  //   {
  //     icon: <Twitter className="w-5 h-5" />,
  //     label: "Twitter",
  //     href: "#",
  //   },
  //   {
  //     icon: <Instagram className="w-5 h-5" />,
  //     label: "Instagram",
  //     href: "#",
  //   },
  // ];

  const services = [
    "Brand Strategy",
    "Creative Direction",
    "Digital Consulting",
    "Growth Strategy",
    "Content Strategy",
    "Other",
  ];

  return (
    <main>
      {/* Hero Header */}
      <section className="relative pt-32 pb-20 bg-gray-50">
        <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
          <div
            className={`max-w-3xl transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionTimingFunction: "var(--ease-expo-out)" }}
          >
            <div className="section-label mb-6">Contact</div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6">
              Let's Work Together
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Have a project in mind? I'd love to hear about it. Fill out the
              form below or reach out directly through any of the channels
              below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={sectionRef}
        className="relative py-24 sm:py-32 bg-white overflow-hidden"
      >
        <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
            {/* Contact Form */}
            <div
              className={`lg:col-span-3 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: "200ms",
                transitionTimingFunction: "var(--ease-expo-out)",
              }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
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
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
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
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-2"
                    >
                      Phone Number
                    </label>

                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 focus:border-black focus:outline-none transition-colors duration-300"
                      placeholder="tel:+254 756 740879"
                      
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium mb-2"
                    >
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
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
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
                  disabled={loading}
                  className="btn-primary group w-full sm:w-auto disabled:opacity-70"
                >
                  {loading ? "Sending..." : "Send Message"}

                  <Send className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div
              className={`lg:col-span-2 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: "400ms",
                transitionTimingFunction: "var(--ease-expo-out)",
              }}
            >
              <div className="bg-gray-50 p-8 lg:p-10">
                <h3 className="text-xl font-semibold mb-8">
                  Get in Touch
                </h3>

                <div className="space-y-6 mb-10">
                  {contactInfo.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-start group"
                    >
                      <div className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-lg mr-4">
                        {item.icon}
                      </div>

                      <div>
                        <span className="block text-sm text-gray-500 mb-1">
                          {item.label}
                        </span>

                        <span className="font-medium">
                          {item.value}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>

                {/* <div className="border-t border-gray-200 pt-8">
                  <h4 className="text-sm font-medium text-gray-500 mb-4">
                    Follow Us
                  </h4>

                  <div className="flex space-x-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        className="w-10 h-10 flex items-center justify-center bg-white border border-gray-200 text-black hover:bg-black hover:text-white transition-all duration-300"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;