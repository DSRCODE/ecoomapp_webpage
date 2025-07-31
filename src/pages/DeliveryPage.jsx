import { motion } from "framer-motion";
import { FaMotorcycle, FaCheckCircle } from "react-icons/fa";

export default function DeliveryPage() {
const riderFeatures = [
  {
    title: "Flexible Working Hours",
    desc: "Choose your own schedule and work whenever it suits you best.",
  },
  {
    title: "Live Order Notifications",
    desc: "Get instant updates on incoming delivery tasks in real time.",
  },
  {
    title: "Smart Route Navigation",
    desc: "Built-in GPS guidance ensures you always take the fastest and safest route.",
  },
  {
    title: "Payout Transparency",
    desc: "Track your earnings clearly with no hidden fees or surprises.",
  },
  {
    title: "Built-in Support Chat",
    desc: "Get help quickly with integrated rider support chat available anytime.",
  },
];

  const steps = [
    "Download the E-commWeb Delivery App",
    "Register with your documents",
    "Accept delivery tasks nearby",
    "Deliver and earn instantly",
  ];

  return (
    <div className="text-gray-800 bg-white dark:text-white dark:bg-[#0D0D0D]">
      {/* HERO */}
      <section className="pt-24 pb-16 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-[#1e3a8a]"
        >
          E-commWeb Delivery App
        </motion.h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
          Deliver packages faster, safer, and smarter with our rider-friendly
          platform.
        </p>
      </section>

      {/* VIDEO */}
      <section className="px-6 pb-16 max-w-4xl mx-auto">
        <video
          className="rounded-xl w-full shadow-lg"
          controls
          autoPlay
          loop
          poster="https://t4.ftcdn.net/jpg/03/13/86/45/360_F_313864527_H5G41GU1oUoceZOh17eqfrwgDs5U5TNC.jpg"
        >
          <source src="v.mp4" type="video/mp4" />
        </video>
      </section>

      {/* FEATURES */}
      <section className="px-6 py-12 bg-[#e0f2fe] dark:bg-[#1B1B1B]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1e3a8a] mb-6">
            Why Riders Choose Us
          </h2>
          <p className="mb-10 text-gray-700 dark:text-gray-300">
            Empowering delivery heroes with tools, support, and freedom.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            {riderFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <FaCheckCircle className="text-[#3b82f6] mt-1 text-xl" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="px-6 py-16 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1e3a8a] mb-12">
            Get Started in 4 Quick Steps
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center relative z-10"
              >
                <div className="w-12 h-12 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center text-lg font-bold mb-4 shadow-md">
                  {index + 1}
                </div>
                <p className="text-gray-700 dark:text-gray-300 max-w-[200px]">
                  {step}
                </p>
              </div>
            ))}
            <div className="hidden md:block absolute top-6 left-0 right-0 h-1 bg-gray-300 z-0 mx-12">
              <div className="absolute left-0 top-0 h-1 bg-[#1e3a8a] w-full z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-12 bg-[#e0f2fe] text-[#1e3a8a] text-center">
        <div className="flex flex-col items-center">
          <FaMotorcycle className="text-4xl mb-3 text-[#3b82f6]" />
          <h3 className="text-2xl font-bold mb-2">
            Start Delivering with E-commWeb
          </h3>
          <p className="mb-6 text-gray-700 max-w-xl">
            Be your own boss and earn on your own schedule. Fast payouts,
            flexible hours.
          </p>
          <button className="bg-[#3b82f6] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#2563eb] transition">
            <span className="flex items-center gap-2">
              <FaMotorcycle />
              Download Delivery App
            </span>
          </button>
        </div>
      </section>
    </div>
  );
}
