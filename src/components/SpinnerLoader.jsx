import { motion } from "framer-motion";

export const SpinnerLoader = ({ type }) => {
  return (
    <div className="w-full h-64 flex flex-col items-center justify-center">
      {/* Spinner */}
      <motion.div
        className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
      {/* Loading Text */}
      <motion.p
        className="mt-4 text-gray-500 italic text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "mirror" }}
      >
        Loading privacy policy for{" "}
        <span className="font-semibold capitalize">{type}</span>...
      </motion.p>
    </div>
  );
};


