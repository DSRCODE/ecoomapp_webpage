import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://formspree.io/f/xrbknopd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("🚀 Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Form error:", error);
      toast.error("⚠️ An error occurred while sending.");
    }
  };

  return (
    <section
      id="Contact"
      className="pt-24 py-20 px-6 bg-gradient-to-br from-[#f2f9ff] to-[#dceaff] text-gray-800"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Header and Description */}
        <div className="text-left">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-[#012A56]"
          >
            Let’s Connect
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg md:text-xl text-center text-gray-600 max-w-4xl mx-auto"
          >
            Have a question, project idea, or just want to say hi? We’d love to
            hear from you. Fill out the form and we’ll get back to you shortly.
          </motion.p>
        </div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left bg-white p-8 rounded-xl shadow-lg"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block mb-2 text-sm font-medium">Name</label>
            <input
              name="name"
              type="text"
              required
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#022B57]"
            />
          </div>

          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#022B57]"
            />
          </div>

          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium">Message</label>
            <textarea
              name="message"
              required
              rows="4"
              placeholder="Tell us about your query..."
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#022B57]"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.01 }}
            type="submit"
            className="mt-6 bg-[#022B57] text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Send Message 🚀
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
