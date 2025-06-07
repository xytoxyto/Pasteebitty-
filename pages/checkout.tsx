import { useState } from 'react';

export default function Checkout() {
  const [loading, setLoading] = useState(false);

  const startCheckout = async () => {
    setLoading(true);
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
    });

    const data = await response.json();
    if (data.id) {
      window.location.href = `https://checkout.stripe.com/pay/${data.id}`;
    } else {
      alert('Error creating checkout session');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
      <h1 className="text-3xl font-bold mb-4">Upgrade to Premium</h1>
      <p className="mb-6 text-center max-w-md">
        Get access to premium features like saved templates, live publishing, and more. Only $12 one-time.
      </p>
      <button
        onClick={startCheckout}
        disabled={loading}
        className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
      >
        {loading ? 'Redirecting…' : 'Buy Now'}
      </button>
    </div>
  );
}
Add Stripe checkout page