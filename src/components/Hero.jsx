import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = [
  {
    key: "vendor",
    title: "Empowering Vendors",
    subtitle: "Expand your business digitally.",
    description:
      "Our platform helps vendors reach more customers, manage their inventory effortlessly, and grow their business using cutting-edge tools. Accept orders, track performance, and scale with ease — all in one place.",
    bg: "url('https://ntspl.co.in/blog/wp-content/uploads/2021/03/multivender-ecommerce-marketplace.jpg')",
  },
  {
    key: "customer",
    title: "Delighting Customers",
    subtitle: "A seamless shopping experience.",
    description:
      "Enjoy a wide variety of products with smooth navigation, smart search, and secure payments. Track orders in real-time and get support when needed — your satisfaction is our priority.",
    bg: "url('https://knowmax-ai-website.s3.amazonaws.com/wp-content/uploads/2024/09/12133025/Ecommerce-customer-service.webp')",
  },
  {
    key: "delivery",
    title: "Supporting Delivery Heroes",
    subtitle: "Delivering dreams, one ride at a time.",
    description:
      "From optimized routes to real-time order updates, our delivery partners are equipped with the tools to ensure speed, safety, and satisfaction. Earn rewards and grow your delivery journey with us.",
    bg: "url('https://t4.ftcdn.net/jpg/03/13/86/45/360_F_313864527_H5G41GU1oUoceZOh17eqfrwgDs5U5TNC.jpg')",
  },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % roles.length);
    }, 5000); // slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const current = roles[activeIndex];

  return (
    <div className="relative h-[85vh] w-full overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: current.bg }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70" />
      </div>

      {/* Animated Role Info */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.key}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 text-white"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            {current.title}
          </h1>
          <p className="mt-3 text-xl md:text-2xl font-medium">
            {current.subtitle}
          </p>
          <p className="mt-6 text-base md:text-lg max-w-3xl leading-relaxed">
            {current.description}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Hero;
