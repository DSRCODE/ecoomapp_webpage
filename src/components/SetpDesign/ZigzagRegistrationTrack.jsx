import React, { useState, useEffect } from "react";
import { BsArrowRight, BsArrowRightCircle } from "react-icons/bs";
import { CiCircleAlert } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";
import { FiZap } from "react-icons/fi";
import { SiTarget } from "react-icons/si";


const ZigzagRegistrationTrack = () => {
  const [animatedStep, setAnimatedStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState(null);

  const steps = [
    "Create your account with basic information",
    "Verify your email address and phone number",
    "Complete your profile and preferences",
    "Start exploring and enjoy the platform",
  ];

  const stepColors = [
    "from-blue-500 to-purple-600",
    "from-purple-600 to-pink-500",
    "from-pink-500 to-orange-500",
    "from-orange-500 to-green-500",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-6 py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 min-h-screen relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-[#012A56] via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Your Journey Starts Here
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Follow the track to complete your registration in 4 simple steps
          </p>
        </div>

        {/* Zigzag Track Container */}
        <div className="relative">
          {steps.map((step, index) => {
            const isLeft = index % 2 === 0;
            const isActive = animatedStep === index;
            const isCompleted = animatedStep > index;
            const isHovered = hoveredStep === index;

            return (
              <div key={index} className="relative mb-20 last:mb-0">
                {/* Track Segment */}
                <div
                  className={`flex items-center ${
                    isLeft ? "justify-start" : "justify-end"
                  } relative`}
                >
                  {/* Step Card */}
                  <div
                    className={`relative transition-all duration-500 transform ${
                      isLeft ? "mr-8" : "ml-8"
                    } ${isHovered ? "scale-105" : "scale-100"} ${
                      isActive ? "animate-pulse" : ""
                    }`}
                    onMouseEnter={() => setHoveredStep(index)}
                    onMouseLeave={() => setHoveredStep(null)}
                  >
                    {/* Glowing Card Background */}
                    <div
                      className={`
                      relative bg-white rounded-2xl p-8 shadow-2xl border border-gray-100
                      ${isActive ? "ring-4 ring-blue-300 ring-opacity-50" : ""}
                      ${isHovered ? "shadow-3xl" : ""}
                      transition-all duration-300
                    `}
                    >
                      {/* Step Number Circle */}
                      <div
                        className={`
                        absolute ${
                          isLeft ? "-right-6" : "-left-6"
                        } top-1/2 transform -translate-y-1/2
                        w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl
                        bg-gradient-to-r ${stepColors[index]} shadow-lg
                        ${isActive ? "animate-spin" : ""}
                        ${
                          isCompleted
                            ? "bg-gradient-to-r from-green-400 to-green-600"
                            : ""
                        }
                        transition-all duration-300
                      `}
                      >
                        {isCompleted ? (
                          <FaCheckCircle className="w-8 h-8" />
                        ) : (
                          <span className="relative z-10">{index + 1}</span>
                        )}

                        {/* Pulse Ring */}
                        {isActive && (
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 animate-ping opacity-30"></div>
                        )}
                      </div>

                      {/* Step Content */}
                      <div className={`${isLeft ? "pr-8" : "pl-8"} relative`}>
                        <div className="flex items-center mb-3">
                          <SiTarget
                            className={`w-5 h-5 mr-2 ${
                              isActive
                                ? "text-yellow-500 animate-spin"
                                : "text-gray-400"
                            }`}
                          />
                          <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                            Step {index + 1}
                          </span>
                        </div>

                        <p className="text-gray-700 text-lg leading-relaxed max-w-sm">
                          {step}
                        </p>

                        {/* Progress Indicator */}
                        <div className="mt-4 flex items-center">
                          <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r ${
                                stepColors[index]
                              } transition-all duration-1000 ${
                                isCompleted
                                  ? "w-full"
                                  : isActive
                                  ? "w-3/4"
                                  : "w-0"
                              }`}
                            ></div>
                          </div>
                          {isCompleted && (
                            <FiZap className="w-4 h-4 ml-2 text-green-500 animate-bounce" />
                          )}
                        </div>
                      </div>

                      {/* Floating Icons */}
                      {isActive && (
                        <>
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-bounce delay-100"></div>
                          <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-pink-400 rounded-full animate-bounce delay-300"></div>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Connecting Path */}
                {index < steps.length - 1 && (
                  <div className="relative mt-8">
                    {/* Zigzag Path */}
                    <svg
                      className="w-full h-20"
                      viewBox="0 0 800 80"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          id={`gradient-${index}`}
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#3B82F6" />
                          <stop offset="50%" stopColor="#8B5CF6" />
                          <stop offset="100%" stopColor="#EC4899" />
                        </linearGradient>
                      </defs>

                      <path
                        d={
                          isLeft
                            ? "M100 40 Q200 20 400 40 T700 40"
                            : "M700 40 Q600 20 400 40 T100 40"
                        }
                        stroke={`url(#gradient-${index})`}
                        strokeWidth="4"
                        strokeDasharray="10,5"
                        className={`${
                          animatedStep > index ? "animate-pulse" : ""
                        }`}
                      />

                      {/* Moving Arrow */}
                      {animatedStep > index && (
                        <g className="animate-bounce">
                          <BsArrowRight
                            x={isLeft ? "650" : "150"}
                            y="32"
                            className="w-4 h-4 text-blue-600"
                          />
                        </g>
                      )}
                    </svg>

                    {/* Animated Dots */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div
                        className={`flex space-x-2 ${
                          animatedStep > index ? "animate-pulse" : ""
                        }`}
                      >
                        {[...Array(3)].map((_, i) => (
                          <CiCircleAlert
                            key={i}
                            className={`w-2 h-2 text-blue-400 animate-bounce`}
                            style={{ animationDelay: `${i * 200}ms` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button
            className="
            bg-gradient-to-r from-[#012A56] to-blue-600 text-white 
            px-12 py-4 rounded-full text-lg font-semibold
            shadow-xl hover:shadow-2xl transform hover:scale-105 
            transition-all duration-300 hover:from-blue-600 hover:to-purple-600
            relative overflow-hidden group
          "
          >
            <span className="relative z-10 flex items-center">
              Start Your Journey
              <BsArrowRightCircle className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ZigzagRegistrationTrack;
