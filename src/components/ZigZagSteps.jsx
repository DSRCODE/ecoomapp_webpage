import React from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

const ZigZagSteps = ({ title, steps }) => {
  return (
    <section className="py-20 bg-white px-4 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
        {title}
      </h2>

      <div className="relative">
        <div className="absolute top-0 left-1/2 w-1 bg-indigo-300 h-full transform -translate-x-1/2 rounded-full"></div>

        {steps.map((step, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              className={`mb-20 flex flex-col md:flex-row ${
                isLeft ? "" : "md:flex-row-reverse"
              } items-center`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-full md:w-1/2 px-4 md:px-8">
                <div className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="text-gray-600 mt-2 text-base">
                    {step.description}
                  </p>
                  {step.tip && (
                    <p className="text-sm text-indigo-500 mt-3 italic">
                      💡 {step.tip}
                    </p>
                  )}
                </div>
              </div>

              <div className="w-0 md:w-10 relative flex justify-center">
                <div className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center z-10 font-semibold shadow-lg">
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <FaArrowDown className="absolute top-full text-indigo-400 mt-4 animate-bounce" />
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ZigZagSteps;
