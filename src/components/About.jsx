import { motion } from "framer-motion";
import Slider from "react-slick";

const images = [
  "https://ntspl.co.in/blog/wp-content/uploads/2021/03/multivender-ecommerce-marketplace.jpg",
  "https://knowmax-ai-website.s3.amazonaws.com/wp-content/uploads/2024/09/12133025/Ecommerce-customer-service.webp",
  "https://t4.ftcdn.net/jpg/03/13/86/45/360_F_313864527_H5G41GU1oUoceZOh17eqfrwgDs5U5TNC.jpg",
];

export default function About() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
  };

  return (
    <section
      id="About"
      className="pt-24 py-20 px-6 bg-gradient-to-br from-violet-50 via-white to-blue-50 text-gray-800 dark:text-white"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* IMAGE SLIDER */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Slider {...sliderSettings}>
            {images.map((img, i) => (
              <div key={i}>
                <img
                  src={img}
                  alt={`Slide ${i + 1}`}
                  className="rounded-xl shadow-xl object-cover w-full h-[400px]"
                />
              </div>
            ))}
          </Slider>
        </motion.div>

        {/* TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center md:text-left mb-6 text-[#012A56]">
            About Us
          </h2>

          <p className="text-lg text-gray-700 mb-4">
            <span className="font-semibold">e-commWebpage</span> is a powerful
            digital ecosystem designed to revolutionize interactions between
            businesses, customers, and delivery partners in the eCommerce space.
          </p>

          <p className="text-md text-gray-700 mb-6">
            We provide three dedicated applications for seamless operations:
          </p>

          {/* APP CARDS */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-semibold text-[#012A56] mb-2">
                🛍️ Vendor App
              </h3>
              <p className="text-gray-700">
                Empower sellers to manage inventory, receive real-time orders,
                track sales, and interact with customers. Local shops or growing
                brands can stay connected and thriving.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-semibold text-[#012A56] mb-2">
                📦 Delivery App
              </h3>
              <p className="text-gray-700">
                Connect couriers with orders efficiently with route
                optimization, instant updates, and delivery tracking for fast
                and transparent service.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-semibold text-[#012A56] mb-2">
                🧑‍💻 Customer App
              </h3>
              <p className="text-gray-700">
                Browse products, place orders, and enjoy a secure, intuitive
                shopping experience with real-time tracking and smooth
                communication with vendors and delivery agents.
              </p>
            </div>
          </div>

          {/* FEATURES LIST */}
          <div className="mt-8">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                🚀 Seamless experience across Vendor, Delivery, and Customer
                apps
              </li>
              <li>🔒 Secure & scalable infrastructure</li>
              <li>📲 Fast onboarding and easy registration</li>
              <li>🛠️ Dedicated support and technical excellence</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
