import Slider from "react-slick";
import { motion } from "framer-motion";
import { FaStar, FaRegStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Testimonial data based on app roles
const testimonials = [
  {
    name: "Manish Gupta",
    role: "Vendor - Grocery Store Owner",
    message:
      "The Vendor App helped me manage inventory and track sales like never before. Real-time updates and ease of use—just amazing!",
    rating: 5,
  },
  {
    name: "Ritika Sharma",
    role: "Customer - Daily User",
    message:
      "Using the Customer App is a breeze. I can place orders, track deliveries, and make payments seamlessly. Love the clean UI!",
    rating: 5,
  },
  {
    name: "Arjun Verma",
    role: "Delivery Partner",
    message:
      "The Delivery App keeps everything organized. From route optimization to task updates, it makes my job super efficient.",
    rating: 4,
  },
  {
    name: "Sneha Kaur",
    role: "Customer - EdTech Service",
    message:
      "The app offers incredible speed and support. It has become an essential part of my daily routine for education purchases.",
    rating: 5,
  },
  {
    name: "Ravi Patel",
    role: "Vendor - Electronics",
    message:
      "I’ve seen a 30% boost in orders since using the platform. The dashboard insights and easy order management changed the game.",
    rating: 5,
  },
];

// Color background styles (Why Choose Us theme inspired)
const bgShades = [
  "bg-[#e8f0ff]",
  "bg-[#f0f8e8]",
  "bg-[#fff0f0]",
  "bg-[#fff8e6]",
  "bg-[#f3f0ff]",
];

const settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  arrows: false,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
};

const renderStars = (rating) => (
  <div className="flex justify-center gap-1 mt-2">
    {[...Array(5)].map((_, i) =>
      i < rating ? (
        <FaStar key={i} className="text-yellow-400" />
      ) : (
        <FaRegStar key={i} className="text-gray-400 dark:text-gray-500" />
      )
    )}
  </div>
);

export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#f0f5ff] to-[#eaf1ff] text-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-[#012A56]"
        >
          ⭐ What Our Users Say
        </motion.h2>
        <p className="text-lg mb-12 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Real stories from vendors, customers, and delivery partners using our
          platform every day.
        </p>

        <Slider {...settings}>
          {testimonials.map((t, index) => {
            const bg = bgShades[index % bgShades.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div
                  className={`rounded-xl shadow-lg p-6 text-center h-full mx-4 ${bg}`}
                >
                  <p className="text-gray-800 dark:text-white italic mb-4">
                    “{t.message}”
                  </p>
                  {renderStars(t.rating)}
                  <h4 className="text-lg font-semibold mt-4 text-[#012A56]">
                    {t.name}
                  </h4>
                  <span className="text-sm text-blue-700">{t.role}</span>
                </div>
              </motion.div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}
