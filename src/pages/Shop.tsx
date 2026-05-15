import { useEffect } from "react";

const Shop = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://payhip.com/embed-page.js?v=24u68985";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-24 px-6 pb-4">
      
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold">DIGITAL SHOP</h1>
        <p className="text-gray-500 mt-2">
          Download templates, tools, and digital products
        </p>
      </div>

      {/* IMPORTANT: Payhip container must exist BEFORE script loads */}
      <div className="max-w-5xl mx-auto">
        <div className="payhip-embed-page" data-key="9ep6W"></div>
      </div>

    </div>
  );
};

export default Shop;