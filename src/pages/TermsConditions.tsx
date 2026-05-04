
// -----------------------------
// TERMS & CONDITIONS (Styled)
// -----------------------------

export const TermsConditions = () => {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="py-24 bg-gray-300 overflow-hidden text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl font-semibold mb-4">
            Terms & Conditions
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

            {termsSections.map((section, index) => (
              <div key={index}>
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
export default TermsConditions;

const termsSections = [
  {
    title: 'Use of Site',
    content: (
      <p className="text-gray-600 leading-relaxed">
        You agree to use this website lawfully and not engage in harmful, fraudulent, or abusive activity.
      </p>
    ),
  },
  {
    title: 'Intellectual Property',
    content: (
      <p className="text-gray-600 leading-relaxed">
        All content is owned by ThoughtCanva and may not be reused without permission.
      </p>
    ),
  },
  {
    title: 'Google AdSense Disclaimer',
    content: (
      <p className="text-gray-600 leading-relaxed">
        This website uses Google AdSense to display advertisements. Ads may be personalized based on your browsing behavior.
      </p>
    ),
  },
  {
    title: 'Limitation of Liability',
    content: (
      <p className="text-gray-600 leading-relaxed">
        We are not liable for damages resulting from use of this website.
      </p>
    ),
  },
  {
    title: 'Changes',
    content: (
      <p className="text-gray-600 leading-relaxed">
        We may update these terms at any time without prior notice.
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
