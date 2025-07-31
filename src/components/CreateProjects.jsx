import { motion } from "framer-motion";
import { FaRobot, FaGlobe, FaMobileAlt, FaCloud } from "react-icons/fa";

// Import your images
import aiImg from "../assets/projects/aiImg.jfif";
import webImg from "../assets/projects/devImg.jfif";
import mobileImg from "../assets/projects/mobileImg.jfif";
import cloudImg from "../assets/projects/cloud.png";

const projectTypes = [
  {
    title: "AI-Powered Platforms",
    description:
      "Smart systems tailored to automate business logic, boost efficiency and user experience.",
    icon: <FaRobot size={28} />,
    image: aiImg,
  },
  {
    title: "Web Applications",
    description:
      "Robust, scalable, and responsive web apps built using modern tech stacks.",
    icon: <FaGlobe size={28} />,
    image: webImg,
  },
  {
    title: "Mobile Solutions",
    description:
      "Cross-platform mobile applications designed with seamless UX and performance.",
    icon: <FaMobileAlt size={28} />,
    image: mobileImg,
  },
  {
    title: "Cloud-Based Systems",
    description:
      "Secure, scalable cloud integrations and backend solutions for businesses.",
    icon: <FaCloud size={28} />,
    image: cloudImg,
  },
];

export default function CreateProjects() {
  return (
    <section
      id="Projects"
      className="pt-24 py-20 px-6 bg-[#F5F9FF]  text-gray-900 dark:text-white"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-[#012A56]"
        >
          Let’s Create Your Next Big Project
        </motion.h2>

        <p className="text-base sm:text-lg md:text-xl text-center text-gray-600 max-w-4xl mx-auto mb-12 ">
          Whether you’re launching a startup or building enterprise-grade
          solutions, we deliver high-performance digital products.
        </p>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectTypes.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000cc] to-[#00000033]"></div>

              {/* Content */}
              <div className="absolute bottom-0 p-6 z-10 text-left text-white">
                <div className="text-[#007FFF] mb-2">{item.icon}</div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-200 mt-2">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 bg-[#022B57] text-white p-10 rounded-xl text-center shadow-lg"
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to start something amazing?
          </h3>
          <p className="text-lg mb-6">
            Let’s turn your idea into a high-performing product.
          </p>
          <button className="bg-white text-[#022B57] font-medium px-8 py-3 rounded-lg hover:bg-gray-100 transition">
            Start a Project 🚀
          </button>
        </motion.div>
      </div>
    </section>
  );
}
