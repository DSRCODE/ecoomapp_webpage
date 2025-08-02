import { motion } from "framer-motion";
import { FaCircle } from "react-icons/fa";

const data = [
  {
    id: 1,
    header: "Header",
    desc: "This is some text description for nothing.",
    color: "bg-red-500",
  },
  {
    id: 2,
    header: "Header",
    desc: "This is some text description for nothing.",
    color: "bg-green-500",
  },
  {
    id: 3,
    header: "Header",
    desc: "This is some text description for nothing.",
    color: "bg-orange-500",
  },
  {
    id: 4,
    header: "Header",
    desc: "This is some text description for nothing.",
    color: "bg-teal-500",
  },
  {
    id: 5,
    header: "Header",
    desc: "This is some text description for nothing.",
    color: "bg-purple-500",
  },
  {
    id: 6,
    header: "Header",
    desc: "This is some text description for nothing.",
    color: "bg-yellow-400",
  },
];

const TimelineComponent = () => {
  return (
    <div className="relative flex flex-col items-center py-10 px-4 md:px-10">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-1 gap-8">
        {data.map((item, index) => {
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
                <div className="w-4 h-4 rounded-full bg-black relative z-10 text-white flex items-center justify-center text-xs">
                  {item.id}
                </div>
                {index < data.length - 1 && (
                  <div className="h-20 w-px bg-black mt-1"></div>
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
