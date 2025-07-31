import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";

const HeroIntro = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-gradient-to-br from-violet-100 via-white to-blue-50">
      {/* Text Section */}
      <motion.div
        className="max-w-xl mb-12 md:mb-0"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-6">
          Everything in One Platform —
          <br />
          <span className="text-violet-600">
            For Vendors, Shoppers & Partners
          </span>
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          Simplify your e-commerce operations with our unified system – manage
          stores, fulfill orders, and deliver seamlessly.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-lg transition"
        >
          Explore the Ecosystem <FaArrowRight />
        </motion.button>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Slider
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={3000}
          arrows={false}
          className="rounded-xl shadow-lg"
        >
          <img
            src="https://ntspl.co.in/blog/wp-content/uploads/2021/03/multivender-ecommerce-marketplace.jpg"
            alt="Ecommerce platform"
            className="w-full h-[400px] object-cover rounded-xl"
          />
          <img
            src="https://knowmax-ai-website.s3.amazonaws.com/wp-content/uploads/2024/09/12133025/Ecommerce-customer-service.webp"
            alt="Customer Management"
            className="w-full h-[400px] object-cover rounded-xl"
          />
          <img
            src="https://t4.ftcdn.net/jpg/03/13/86/45/360_F_313864527_H5G41GU1oUoceZOh17eqfrwgDs5U5TNC.jpg"
            alt="Delivery system"
            className="w-full h-[400px] object-cover rounded-xl"
          />
        </Slider>
      </motion.div>
    </section>
  );
};

export default HeroIntro;
