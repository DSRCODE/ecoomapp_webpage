import { FaCheckCircle } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      title: "For Vendors",
      description:
        "Easily list products, manage inventory, track orders, and grow your business with real-time insights.",
    },
    {
      title: "For Customers",
      description:
        "Shop from a wide range of products with secure payment options, fast delivery, and smooth returns.",
    },
    {
      title: "For Delivery Partners",
      description:
        "Flexible delivery slots, transparent earnings, and support to help you deliver efficiently and safely.",
    },
  ];

  return (
    <section className="bg-white py-16 px-6 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">
        Why Choose <span className="text-[#7C3AED]">Bidzord</span>?
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        India’s First Platform Connecting Customers to Vendors & Service
        Providers (Small/large scale Gst/NON Gst) with Orders-bids-leads and
        Flexible Delivery options (Courier/Home delievary/Selfship).
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-left"
          >
            <div className="flex items-center gap-3 mb-4 text-blue-600 text-2xl">
              <FaCheckCircle />
              <h3 className="text-xl font-semibold text-gray-800">
                {feature.title}
              </h3>
            </div>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
