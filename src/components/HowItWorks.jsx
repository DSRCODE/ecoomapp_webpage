import React from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

const steps = [
  {
    title: "Submit Campaign",
    description:
      "Create a campaign brief detailing your goals, target audience, and budget.",
  },
  {
    title: "Influencers Assigned",
    description:
      "Our system matches and notifies the best-fit influencers to your campaign.",
  },
  {
    title: "Go Live",
    description:
      "Influencers begin posting content and engaging with your target audience.",
  },
  {
    title: "Analytics",
    description:
      "Track performance with real-time reports and detailed campaign insights.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white px-6 md:px-20" id="how-it-works">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          How It Works
        </motion.h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute top-0 left-6 md:left-10 w-1 bg-indigo-300 h-full rounded-full"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative pl-14 md:pl-24 mb-12"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Circle Marker */}
              <div className="absolute top-1.5 left-3 md:left-6 w-6 h-6 bg-indigo-600 text-white flex items-center justify-center rounded-full shadow-md z-10 font-semibold text-sm">
                {index + 1}
              </div>

              {/* Step Content */}
              <div className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-base">{step.description}</p>
              </div>

              {/* Arrow Down */}
              {index < steps.length - 1 && (
                <div className="absolute left-6 md:left-10 top-full mt-[-4px] text-indigo-400">
                  <FaArrowDown className="animate-bounce" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
