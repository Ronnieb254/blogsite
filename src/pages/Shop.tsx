import { useEffect } from 'react';

const Shop = () => {
  useEffect(() => {
    // Load Payhip script
    const script = document.createElement('script');
    script.src = 'https://payhip.com/embed-page.js?v=24u68985';
    script.type = 'text/javascript';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white pt-28 pb-20 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          {/* <p className="text-red-600 uppercase tracking-[0.3em] text-sm font-semibold mb-3">
            Thought Canva
          </p> */}

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black">
            DIGITAL SHOP
          </h1>

          <p className="text-gray-600 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
            Download templates, tools, guides, and digital resources designed
            to help creators, entrepreneurs, and brands grow faster.
          </p>
        </div>

        {/* Shop Container */}
        <div className="bg-gray-50 rounded-3xl shadow-sm border border-gray-200 overflow-hidden">

          {/* Mobile Fix Wrapper */}
          <div className="w-full overflow-hidden">

            {/* Responsive Embed */}
            <div
              className="payhip-embed-page "
              data-key="9ep6W"
              style={{
                width: '100%',
                minHeight: '1200px',
              }}
            >
              ...
            </div>

          </div>
        </div>

        {/* Extra CTA */}
        <div className="text-center mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
            More Digital Products Coming Soon
          </h2>

          <p className="text-gray-600 max-w-xl mx-auto mb-8">
            New templates, AI tools, business kits, and creative resources are
            added regularly.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center justify-center bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-red-600 transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* MOBILE PAYHIP FIX */}
      <style>{`
        .payhip-embed-page iframe {
          width: 100% !important;
          min-height: 1200px !important;
          border: none !important;
          overflow: hidden !important;
        }

        @media (max-width: 768px) {
          .payhip-embed-page iframe {
            min-height: 1800px !important;
          }

          .payhip-embed-page {
            overflow-x: hidden !important;
          }

          body {
            overflow-x: hidden;
          }
        }

        /* Fix mobile button tap issue */
        iframe {
          pointer-events: auto !important;
        }
      `}</style>
    </div>
  );
};

export default Shop;