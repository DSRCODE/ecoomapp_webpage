import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    header: "Download the Bidzord Vendor App",
    desc: "Get the app from Play Store or App Store to start your vendor journey.",
    color: "bg-indigo-600",
  },
  {
    id: 2,
    header: "Register Your Business",
    desc: "Fill in your business details, contact info, and select your product categories.",
    color: "bg-green-500",
  },
  {
    id: 3,
    header: "List Products/Services",
    desc: "Add your products or services with descriptions, images, and pricing.",
    color: "bg-orange-500",
  },
  {
    id: 4,
    header: "Receive Orders & Sell",
    desc: "Start getting orders from customers and grow your business seamlessly.",
    color: "bg-teal-500",
  },
];

const TimelineComponent = () => {
  return (
    <div className="relative flex flex-col items-center py-10 px-4 md:px-10 bg-white">
      <div className="w-full max-w-4xl grid grid-cols-1 gap-8">
        {steps.map((item, index) => {
          const isLeft = index % 2 !== 0;
          return (
            <div
              key={item.id}
              className={`flex ${
                isLeft ? "flex-row-reverse" : "flex-row"
              } items-center`}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`w-full max-w-sm p-4 rounded shadow-md ${item.color} text-white`}
              >
                <h3 className="font-bold text-lg">{item.header}</h3>
                <p className="text-sm mt-2">{item.desc}</p>
              </motion.div>
              <div className="relative mx-6 flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-indigo-600 text-white relative z-10 flex items-center justify-center font-bold text-sm">
                  {item.id}
                </div>
                {index < steps.length - 1 && (
                  <div className="h-20 w-px bg-gray-300 mt-1"></div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimelineComponent;
