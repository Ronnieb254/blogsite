import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, CreditCard, Shield } from 'lucide-react';

const ActivateAccount = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleActivation = async () => {
    try {
      setLoading(true);

      // Simulate payment success
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Save activation status
      localStorage.setItem('creatorActivated', 'true');

      navigate('/blog/create');

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-3xl mx-auto">

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">

          {/* Header */}
          <div className="bg-black text-white p-10 text-center">
            <h1 className="text-4xl font-semibold mb-4">
              Become a Creator
            </h1>

            <p className="text-gray-300 text-lg">
              Activate your creator account and start earning from your blog content.
            </p>
          </div>

          {/* Pricing */}
          <div className="p-10">

            <div className="text-center mb-10">
              <div className="text-6xl font-bold mb-2">
                $5
              </div>

              <p className="text-gray-500">
                One-time activation fee
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-4 mb-10">

              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span>Create unlimited blog posts</span>
              </div>

              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span>Monetize your content</span>
              </div>

              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span>Access creator dashboard</span>
              </div>

              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span>Priority publishing tools</span>
              </div>

            </div>

            {/* Secure Payment */}
            <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-200">
              <div className="flex items-center mb-3">
                <Shield className="w-5 h-5 text-gray-700 mr-2" />
                <h3 className="font-semibold">
                  Secure Payment
                </h3>
              </div>

              <p className="text-sm text-gray-600">
                Your payment is encrypted and securely processed.
              </p>
            </div>

            {/* Button */}
            <button
              onClick={handleActivation}
              disabled={loading}
              className="w-full bg-black text-white py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors disabled:opacity-50"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />

                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 
                      0 0 5.373 0 12h4z"
                    />
                  </svg>

                  Processing Payment...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <CreditCard className="w-5 h-5 mr-2" />
                  Activate for $5
                </span>
              )}
            </button>

          </div>
        </div>
      </div>
    </main>
  );
};

export default ActivateAccount;