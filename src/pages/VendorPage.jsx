import { motion } from "framer-motion";
import Slider from "react-slick";
import { FaBoxOpen, FaChartLine, FaCheckCircle, FaClipboardList, FaDollarSign, FaHeadset, FaStore } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function VendorPage() {
const features = [
  {
    title: "Easy Product Listing",
    icon: <FaBoxOpen className="text-indigo-600 text-2xl" />,
    desc: "Upload and manage products in seconds with our user-friendly dashboard.",
  },
  {
    title: "Order Management System",
    icon: <FaClipboardList className="text-indigo-600 text-2xl" />,
    desc: "Track orders from placement to delivery in real-time, hassle-free.",
  },
  {
    title: "Real-Time Sales Tracking",
    icon: <FaChartLine className="text-indigo-600 text-2xl" />,
    desc: "Stay updated with your daily, weekly, and monthly sales insights.",
  },
  {
    title: "Customer Communication Tools",
    icon: <FaHeadset className="text-indigo-600 text-2xl" />,
    desc: "Connect directly with buyers to improve trust and satisfaction.",
  },
  {
    title: "Payout & Analytics Dashboard",
    icon: <FaDollarSign className="text-indigo-600 text-2xl" />,
    desc: "Get paid on time and track earnings with smart analytics.",
  },
];

  const steps = [
    "Download the E-commWeb Vendor App",
    "Register with your business details",
    "List your products/services",
    "Start receiving orders and grow!",
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  return (
    <div className="text-gray-800 bg-white dark:text-white dark:bg-[#0D0D0D]">
      {/* HERO SECTION */}
      <section className="pt-24 pb-16 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-[#012A56]"
        >
          E-commWeb Vendor App
        </motion.h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
          Empowering sellers to grow their business with intuitive tools, order
          management, and real-time analytics.
        </p>
      </section>

      {/* VIDEO/SLIDER SECTION */}
      <section className="px-6 pb-16 max-w-4xl mx-auto">
        <div>
          <video
            className="rounded-xl w-full shadow-lg"
            controls
            autoPlay
            loop
            poster="https://ntspl.co.in/blog/wp-content/uploads/2021/03/multivender-ecommerce-marketplace.jpg"
          >
            <source src="v.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* Add more slides if needed */}
      </section>

      {/* FEATURES SECTION */}
      <section className="px-6 py-16 bg-[#f3f4f6] dark:bg-[#1A1A1A]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#012A56] mb-4">
            Why Vendors Love Us
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-10">
            Empowering local businesses with powerful tools to grow, sell, and
            succeed effortlessly.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-[#222] p-5 rounded-xl shadow-md flex items-start gap-4"
              >
                {item.icon}
                <div>
                  <h4 className="text-lg font-semibold text-[#012A56]">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGISTRATION STEPS SECTION */}
      <section className="px-6 py-16 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#012A56] mb-12">
            Get Started in 4 Easy Steps
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center relative z-10"
              >
                {/* Circle Number */}
                <div className="w-12 h-12 rounded-full bg-[#012A56] text-white flex items-center justify-center text-lg font-bold mb-4 shadow-md">
                  {index + 1}
                </div>

                {/* Step Text */}
                <p className="text-gray-700 dark:text-gray-300 max-w-[200px]">
                  {step}
                </p>
              </div>
            ))}

            {/* Connecting Line */}
            <div className="hidden md:block absolute top-6 left-0 right-0 h-1 bg-gray-300 z-0 mx-12">
              <div className="absolute left-0 top-0 h-1 bg-[#012A56] w-full z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="px-6 py-12 bg-[#f6f3ff] text-[#4B2DB3] text-center">
        <div className="flex flex-col items-center">
          <FaStore className="text-4xl mb-3 text-[#7C3AED]" />
          <h3 className="text-2xl font-bold mb-2">
            Join E-commWeb Vendor Today
          </h3>
          <p className="mb-6 text-gray-700 max-w-xl">
            Start listing your products and grow your sales with ease through
            our seamless vendor platform.
          </p>
          <button className="bg-[#7C3AED] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#6B21A8] transition">
            <span className="flex items-center gap-2">
              <FaStore />
              Download Vendor App
            </span>
          </button>
        </div>
      </section>
    </div>
  );
}
