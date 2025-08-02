import React, { useState, useEffect, useRef } from "react";
import {
  LogIn,
  Upload,
  Send,
  Gift,
  ChevronDown,
  CheckCircle,
  ArrowDown,
} from "lucide-react";

const VerticalScrollSteps = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState(new Set());
  const containerRef = useRef(null);
  const stepRefs = useRef([]);

  const steps = [
    {
      id: 1,
      title: "Login to Workday",
      description: "Access your Workday account to get started",
      icon: LogIn,
      color: "from-teal-400 to-cyan-500",
      bgColor: "bg-teal-500",
      lightColor: "bg-teal-100",
      borderColor: "border-teal-300",
    },
    {
      id: 2,
      title: "Upload Receipts",
      description: "Upload your expense receipts and documents",
      icon: Upload,
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-500",
      lightColor: "bg-blue-100",
      borderColor: "border-blue-300",
    },
    {
      id: 3,
      title: "Submit Report",
      description: "Review and submit your expense report",
      icon: Send,
      color: "from-indigo-500 to-purple-600",
      bgColor: "bg-indigo-600",
      lightColor: "bg-indigo-100",
      borderColor: "border-indigo-300",
    },
    {
      id: 4,
      title: "Get Reimbursed",
      description: "Receive your reimbursement once approved",
      icon: Gift,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500",
      lightColor: "bg-purple-100",
      borderColor: "border-purple-300",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const stepIndex = parseInt(entry.target.dataset.stepIndex);

          if (entry.isIntersecting) {
            setVisibleSteps((prev) => new Set([...prev, stepIndex]));

            // Set active step based on visibility
            if (entry.intersectionRatio > 0.5) {
              setActiveStep(stepIndex);
            }
          }
        });
      },
      {
        threshold: [0.3, 0.5, 0.7],
        rootMargin: "-20% 0px -20% 0px",
      }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const getStepStatus = (index) => {
    if (visibleSteps.has(index)) {
      if (index < activeStep) return "completed";
      if (index === activeStep) return "active";
      return "visible";
    }
    return "upcoming";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="text-center py-16 px-6">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
          Get Strated in 4 Easy Steps
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Follow these simple steps to complete your download and get
          your app.
        </p>
        <ChevronDown className="w-8 h-8 text-gray-400 mx-auto animate-bounce" />
      </div>

      {/* Steps Container */}
      <div ref={containerRef} className="relative max-w-4xl mx-auto px-6 pb-20">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200">
          {/* Animated Progress Line */}
          <div
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-teal-400 via-blue-500 to-purple-600 transition-all duration-1000 ease-out"
            style={{
              height: `${(activeStep / (steps.length - 1)) * 100}%`,
            }}
          />
        </div>

        {/* Steps */}
        {steps.map((step, index) => {
          const StepIcon = step.icon;
          const status = getStepStatus(index);
          const isLeft = index % 2 === 0;

          return (
            <div
              key={step.id}
              ref={(el) => (stepRefs.current[index] = el)}
              data-step-index={index}
              className={`relative flex items-center mb-32 last:mb-0 ${
                isLeft ? "justify-start" : "justify-end"
              }`}
            >
              {/* Step Circle */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                <div
                  className={`
                  relative w-10 h-10 rounded-full flex items-center justify-center
                  transition-all duration-700 ease-out transform
                  ${
                    status === "upcoming"
                      ? "scale-75 opacity-50 bg-gray-300"
                      : status === "visible"
                      ? "scale-90 opacity-75 bg-gradient-to-br " + step.color
                      : status === "active"
                      ? "scale-110 opacity-100 bg-gradient-to-br " +
                        step.color +
                        " shadow-2xl"
                      : "scale-100 opacity-100 " + step.bgColor
                  }
                `}
                >
                  {/* Step Icon */}
                  {status === "completed" ? (
                    <CheckCircle className="w-8 h-8 text-white" />
                  ) : (
                    <StepIcon className="w-8 h-8 text-white" />
                  )}

                  {/* Step Number Badge */}
                  <div
                    className={`
                    absolute -top-2 -right-2 w-8 h-8 rounded-full
                    flex items-center justify-center text-sm font-bold text-white
                    ${status === "completed" ? "bg-green-500" : step.bgColor}
                    ${status === "active" ? "animate-pulse" : ""}
                  `}
                  >
                    {step.id}
                  </div>

                  {/* Pulse Animation for Active Step */}
                  {/* {status === "active" && (
                    <>
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 animate-ping opacity-30" />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 animate-pulse opacity-20" />
                    </>
                  )} */}

                  {/* Completion Ring */}
                  {/* {status === "completed" && (
                    <div className="absolute inset-0 rounded-full border-4 border-green-400 animate-pulse" />
                  )} */}
                </div>
              </div>

              {/* Step Card */}
              <div
                className={`
                ${isLeft ? "pr-16 text-right" : "pl-16 text-left"}
                ${isLeft ? "mr-12" : "ml-12"}
                transition-all duration-700 ease-out transform
                ${
                  status === "upcoming"
                    ? "translate-y-8 opacity-0"
                    : status === "visible"
                    ? "translate-y-4 opacity-70"
                    : "translate-y-0 opacity-100"
                }
              `}
              >
                <div
                  className={`
                  relative p-8 rounded-2xl shadow-xl border-2
                  transition-all duration-500 hover:scale-105
                  ${
                    status === "upcoming"
                      ? "bg-white border-gray-200"
                      : status === "completed"
                      ? "bg-green-50 border-green-200 shadow-green-100"
                      : status === "active"
                      ? "bg-white border-blue-300 shadow-blue-100 shadow-2xl"
                      : "bg-white " + step.borderColor
                  } 
                `}
                >
                  {/* Card Header */}
                  <div
                    className={`flex items-center mb-4 ${
                      isLeft ? "justify-end" : "justify-start"
                    } `}
                  >
                    <div
                      className={`
                      w-12 h-12 rounded-xl flex items-center justify-center mr-3
                      ${
                        status === "completed"
                          ? "bg-green-100"
                          : step.lightColor
                      }
                    `}
                    >
                      <StepIcon
                        className={`w-6 h-6 ${
                          status === "completed"
                            ? "text-green-600"
                            : step.bgColor.replace("bg-", "text-")
                        }`}
                      />
                    </div>
                    <div className={`${isLeft ? "text-right" : "text-left"}`}>
                      <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                        Step {step.id}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Progress Indicator */}
                  <div
                    className={`flex items-center ${
                      isLeft ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div className="flex items-center">
                      <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`
                          h-full transition-all duration-1000 rounded-full
                          ${
                            status === "completed"
                              ? "w-full bg-green-500"
                              : status === "active"
                              ? "w-3/4 bg-gradient-to-r " + step.color
                              : status === "visible"
                              ? "w-1/2 bg-gray-400"
                              : "w-0 bg-gray-300"
                          }
                        `}
                        />
                      </div>

                      {status === "completed" && (
                        <CheckCircle className="w-5 h-5 ml-3 text-green-500 animate-bounce" />
                      )}

                      {status === "active" && (
                        <div className="ml-3 flex space-x-1">
                          {[...Array(3)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full animate-bounce ${step.bgColor}`}
                              style={{ animationDelay: `${i * 200}ms` }}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div
                    className={`
                    absolute ${isLeft ? "top-4 left-4" : "top-4 right-4"}
                    px-3 py-1 rounded-full text-xs font-bold
                    ${
                      status === "completed"
                        ? "bg-green-500 text-white"
                        : status === "active"
                        ? step.bgColor + " text-white animate-pulse"
                        : status === "visible"
                        ? "bg-blue-100 text-blue-600"
                        : "bg-gray-200 text-gray-600"
                    }
                  `}
                  >
                    {status === "completed"
                      ? "Completed"
                      : status === "active"
                      ? "In Progress"
                      : status === "visible"
                      ? "Ready"
                      : "Upcoming"}
                  </div>

                  {/* Decorative Arrow */}
                  {status === "active" && index < steps.length - 1 && (
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                      <ArrowDown className="w-6 h-6 text-blue-500 animate-bounce" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer CTA */}
      <div className="text-center py-16 px-6">
        <button
          className="
          bg-gradient-to-r from-blue-600 to-purple-600 text-white 
          px-12 py-4 rounded-full text-lg font-semibold
          shadow-xl hover:shadow-2xl transform hover:scale-105 
          transition-all duration-300 hover:from-purple-600 hover:to-pink-600
          relative overflow-hidden group
        "
        >
          <span className="relative z-10">Get Started Today</span>
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>
    </div>
  );
};

export default VerticalScrollSteps;
