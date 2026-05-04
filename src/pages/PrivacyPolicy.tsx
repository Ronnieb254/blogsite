
const PrivacyPolicy = () => {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gray-300 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl font-semibold mb-4">
            Privacy Policy
          </h1>
          <p className="text-white/70 text-lg">
            Last updated: January 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white shadow-sm border border-gray-100 p-8 sm:p-12 space-y-10">

            {sections.map((section, index) => (
              <div key={index} className="group">
                <h2 className="text-xl sm:text-2xl font-semibold mb-3 flex items-center">
                  <span className="text-red-600 mr-3">{index + 1}.</span>
                  {section.title}
                </h2>

                {section.content}
              </div>
            ))}

          </div>
        </div>
      </section>
    </main>
  );
};

const sections = [
  {
    title: 'Introduction',
    content: (
      <p className="text-gray-600 leading-relaxed">
        We respect your privacy and are committed to protecting your personal data. This policy explains how we collect, use, and safeguard your information in compliance with GDPR and other applicable laws.
      </p>
    ),
  },
  {
    title: 'Data We Collect',
    content: (
      <ul className="list-disc pl-6 text-gray-600 space-y-2">
        <li>Personal data (name, email, company)</li>
        <li>Messages submitted via forms</li>
        <li>Technical data (IP address, browser type)</li>
        <li>Usage data (pages visited, time spent)</li>
      </ul>
    ),
  },
  {
    title: 'Legal Basis for Processing',
    content: (
      <p className="text-gray-600 leading-relaxed">
        We process your data based on consent, contractual necessity, legitimate interest, or legal obligations.
      </p>
    ),
  },
  {
    title: 'How We Use Your Data',
    content: (
      <ul className="list-disc pl-6 text-gray-600 space-y-2">
        <li>To respond to inquiries</li>
        <li>To improve website performance</li>
        <li>To send updates (with consent)</li>
        <li>To display ads via Google AdSense</li>
      </ul>
    ),
  },
  {
    title: 'Cookies & Advertising',
    content: (
      <p className="text-gray-600 leading-relaxed">
        We use cookies to enhance user experience and serve personalized ads. Third-party vendors may use cookies based on your browsing activity.
      </p>
    ),
  },
  {
    title: 'Data Sharing',
    content: (
      <p className="text-gray-600 leading-relaxed">
        We do not sell your data. We may share it with trusted partners such as analytics and advertising providers.
      </p>
    ),
  },
  {
    title: 'Data Retention',
    content: (
      <p className="text-gray-600 leading-relaxed">
        We retain data only as long as necessary or required by law.
      </p>
    ),
  },
  {
    title: 'Your Rights (GDPR)',
    content: (
      <ul className="list-disc pl-6 text-gray-600 space-y-2">
        <li>Access your data</li>
        <li>Correct inaccurate data</li>
        <li>Request deletion</li>
        <li>Restrict processing</li>
        <li>Withdraw consent</li>
      </ul>
    ),
  },
  {
    title: 'Data Security',
    content: (
      <p className="text-gray-600 leading-relaxed">
        We implement security measures to protect your personal data.
      </p>
    ),
  },
  {
    title: 'Contact',
    content: (
      <p className="text-gray-600">
        Email: <span className="font-medium">hello@thoughtcanva.com</span>
      </p>
    ),
  },
];

export default PrivacyPolicy;