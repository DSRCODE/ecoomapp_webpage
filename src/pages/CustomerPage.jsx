import { motion } from "framer-motion";
import { FaShoppingCart, FaCheckCircle, FaShoppingBag } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ZigZagSteps from "../components/ZigZagSteps";

export default function CustomerPage() {
  const customerFeatures = [
    {
      title: "Wide Product Variety",
      desc: "From everyday essentials to luxury picks – explore thousands of products tailored to your needs.",
    },
    {
      title: "Real-Time Order Tracking",
      desc: "Track your orders live and stay informed every step of the way, from dispatch to delivery.",
    },
    {
      title: "Secure Payments",
      desc: "Multiple trusted payment gateways ensure your transactions are fast and secure.",
    },
    {
      title: "User-Friendly Interface",
      desc: "Easily browse, compare, and shop with a clean and intuitive design across all devices.",
    },
    {
      title: "24/7 Customer Support",
      desc: "Have a question or concern? Our support team is always just a click away — anytime, anywhere.",
    },
  ];

  const steps = [
    "Download the E-commWeb Customer App",
    "Sign up & explore categories",
    "Add items to cart & checkout",
    "Receive orders at your doorstep",
  ];

  return (
    <div className="text-gray-800 bg-white ">
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Video Left */}
          <div className="md:w-1/2 w-full">
            <video
              className="rounded-xl w-full shadow-lg"
              controls
              autoPlay
              loop
              poster="https://knowmax-ai-website.s3.amazonaws.com/wp-content/uploads/2024/09/12133025/Ecommerce-customer-service.webp"
            >
              <source src="v.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Text Right */}
          <div className="md:w-1/2 text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-[#14532d]"
            >
              E-commWeb Customer App
            </motion.h1>
            <p className="mt-4 text-lg text-gray-600 ">
              Shop from your favorite brands with a smooth and secure
              experience. Discover trending products, track your orders in
              real-time, enjoy fast delivery, and get support when you need it —
              all from the palm of your hand.
            </p>
            <button
              onClick={() => showCustomerModal(true)}
              className="bg-white border border-indigo-700 text-indigo-700 hover:bg-indigo-50 px-6 py-3 rounded-xl text-lg mt-4 flex items-center gap-2 transition-all duration-300"
            >
              <FaShoppingBag />
              Explore as Customer
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 py-12 bg-[#ecfdf5] ">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#14532d] mb-6">
            Why Customers Love Us
          </h2>
          <p className="mb-10 text-gray-700 ">
            Discover how we make shopping a seamless and joyful experience.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            {customerFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <FaCheckCircle className="text-[#10b981] mt-1 text-xl" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 ">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600  text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* STEPS */}
      <section className="px-6 py-16 bg-white ">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#14532d] mb-12">
            Get Started in 4 Easy Steps
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center relative z-10"
              >
                <div className="w-12 h-12 rounded-full bg-[#14532d] text-white flex items-center justify-center text-lg font-bold mb-4 shadow-md">
                  {index + 1}
                </div>
                <p className="text-gray-700  max-w-[200px]">{step}</p>
              </div>
            ))}
            <div className="hidden md:block absolute top-6 left-0 right-0 h-1 bg-gray-300 z-0 mx-12">
              <div className="absolute left-0 top-0 h-1 bg-[#14532d] w-full z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-12 bg-[#ecfdf5] text-[#14532d] text-center">
        <div className="flex flex-col items-center">
          <FaShoppingCart className="text-4xl mb-3 text-[#10b981]" />
          <h3 className="text-2xl font-bold mb-2">Shop with E-commWeb Today</h3>
          <p className="mb-6 text-gray-700 max-w-xl">
            Discover endless products and get them delivered right to your door.
          </p>
          <button className="bg-[#10b981] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#0e9f6e] transition">
            <span className="flex items-center gap-2">
              <FaShoppingCart />
              Download Customer App
            </span>
          </button>
        </div>
      </section>
    </div>
  );
}
