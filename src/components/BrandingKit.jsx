import React from "react";

const BrandingKit = () => {
  const kitItems = [
    { item: "👕 Brand T-Shirt", qty: "1" },
    { item: "🧢 Brand Cap", qty: "1" },
    { item: "🪪 Partner ID Card", qty: "1" },
    { item: "🏅 Authorized Certificate", qty: "1" },
    { item: "🏪 Shop Banner (5x3 feet)", qty: "1" },
    { item: "🧱 Wall Posters (2x5 feet)", qty: "1" },
    { item: "📇 Visiting Cards", qty: "1000" },
  ];

  return (
    <section className="bg-gradient-to-br from-yellow-50 to-white py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-indigo-700 mb-6">
          🎁 Free Super Branding Kit – MRP ₹11,999
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          हर Retailer को मिलेगी एक शानदार प्रोफेशनल पहचान! Customers का भरोसा, Brand की Value और Fintech Identity सब कुछ मिलेगा।
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg shadow">
            <thead className="bg-indigo-100">
              <tr>
                <th className="py-3 px-4 border text-left">🎨 Item</th>
                <th className="py-3 px-4 border text-left">📦 Quantity</th>
              </tr>
            </thead>
            <tbody>
              {kitItems.map((kit, i) => (
                <tr key={i} className="border-t">
                  <td className="py-3 px-4">{kit.item}</td>
                  <td className="py-3 px-4">{kit.qty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ul className="text-left mt-6 text-gray-700 space-y-2 max-w-2xl mx-auto">
          <li>✅ Showroom Look मिलेगा</li>
          <li>✅ Customers पर Trust बढ़ेगा</li>
          <li>✅ Brand Value में Boost</li>
          <li>✅ पूरी Professional Fintech Identity</li>
        </ul>
      </div>
    </section>
  );
};

export default BrandingKit;
