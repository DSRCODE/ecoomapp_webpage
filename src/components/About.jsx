import { motion } from "framer-motion";
import Slider from "react-slick";
const ab1 =  "https://ntspl.co.in/blog/wp-content/uploads/2021/03/multivender-ecommerce-marketplace.jpg";
const ab2 = "https://knowmax-ai-website.s3.amazonaws.com/wp-content/uploads/2024/09/12133025/Ecommerce-customer-service.webp";
const ab3 =
  "https://t4.ftcdn.net/jpg/03/13/86/45/360_F_313864527_H5G41GU1oUoceZOh17eqfrwgDs5U5TNC.jpg";

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
      className="pt-24 py-20 px-6 bg-gradient-to-br from-violet-100 via-white to-blue-50 text-gray-800 dark:text-white"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* IMAGE SLIDER SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Slider {...sliderSettings}>
            {[ab1, ab2, ab3].map((img, i) => (
              <div key={i}>
                <img
                  src={img}
                  alt={`Slide ${i + 1}`}
                  className="rounded-xl shadow-lg object-cover w-full h-[400px]"
                />
              </div>
            ))}
          </Slider>
        </motion.div>

        {/* TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-[#012A56]">
            About Us
          </h2>
          <p className="text-lg text-black">
            <span className="font-semibold">e-commWebpage</span> is a powerful
            digital ecosystem designed to revolutionize how businesses,
            customers, and delivery partners interact in the eCommerce space.
          </p>
          <p className="mt-4 text-md text-black">
            With a vision to simplify digital commerce, we provide three
            dedicated mobile applications for seamless operations:
          </p>

          <div className="mt-6 text-black space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-[#012A56]">
                🛍️ Vendor App
              </h3>
              <p>
                Our vendor platform empowers sellers to manage inventory,
                receive real-time orders, track sales, and interact with
                customers with ease. Whether you’re a local shop or a growing
                brand, the vendor app keeps your business connected and
                thriving.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#012A56]">
                📦 Delivery App
              </h3>
              <p>
                Built for speed and reliability, our delivery app connects
                couriers with customer orders efficiently. With route
                optimization, instant updates, and delivery tracking, it ensures
                fast and transparent service for every delivery partner.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#012A56]">
                🧑‍💻 Customer App
              </h3>
              <p>
                From browsing products to placing orders, our customer app
                provides an intuitive shopping experience. Users enjoy secure
                payments, real-time tracking, and smooth communication with
                vendors and delivery agents.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <ul className="list-disc list-inside text-left space-y-2 text-black">
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
