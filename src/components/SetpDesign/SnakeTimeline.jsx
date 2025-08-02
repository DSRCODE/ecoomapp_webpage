import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "What is Lorem Ipsum?",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    title: "Why use Lorem Ipsum?",
    text: "It is a long established fact that a reader will be distracted.",
  },
  {
    id: 3,
    title: "Where does it come from?",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
  },
  {
    id: 4,
    title: "Where can I get some?",
    text: "There are many variations of passages of Lorem Ipsum available.",
  },
];

const Timeline = () => {
  return (
    <div className="relative flex flex-col items-center py-16 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#14532d]">
        Our Few Process
      </h2>

      <div className="relative w-full max-w-5xl mx-auto">
        {/* Vertical Line */}
        <div className="hidden sm:block absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300 z-0" />

        {steps.map((step, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={step.id}
              className={`mb-20 flex flex-col sm:flex-row items-center sm:items-stretch ${
                isLeft ? "sm:justify-start" : "sm:justify-end"
              } relative z-10`}
              initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Left Spacer */}
              {isLeft && <div className="hidden sm:block flex-1" />}

              {/* Dot & Number */}
              <motion.div
                className="z-10 w-10 h-10 bg-white border-4 border-[#0ea5e9] rounded-full flex items-center justify-center font-bold text-[#0ea5e9] shadow-md absolute sm:static sm:translate-x-0 -translate-y-6 sm:translate-y-0 left-1/2 sm:left-auto transform -translate-x-1/2 sm:transform-none"
                whileInView={{ scale: [0.8, 1.2, 1] }}
                transition={{ duration: 0.6 }}
              >
                {step.id}
              </motion.div>

              {/* Card */}
              <div
                className={`mt-8 sm:mt-0 w-full sm:w-[45%] bg-white rounded-lg shadow-lg border-l-[6px] border-[#0ea5e9] px-6 py-4 ${
                  isLeft ? "sm:mr-8 text-left" : "sm:ml-8 text-left"
                }`}
              >
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.text}</p>
              </div>

              {/* Right Spacer */}
              {!isLeft && <div className="hidden sm:block flex-1" />}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
