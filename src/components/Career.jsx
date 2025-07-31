import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Career() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    state: "",
    // resume: null,
    resumeUrl: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
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
        // Reset the form
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          city: "",
          state: "",
          // resume: null,
          resumeUrl: "",
        });
      } else {
        toast.error("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Form error:", error);
      toast.error("⚠️ An error occurred while sending.");
    }
    console.log("Submitted Application:", {
      ...formData,
      resume: formData.resume?.name || "No file uploaded",
    });
  };

  return (
    <section
      id="Career"
      className="py-20 px-6 bg-gradient-to-br from-[#f5f9ff] to-[#e6f0ff] text-gray-800"
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-[#012A56]"
        >
          Join Our Team
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg md:text-xl text-center text-gray-600 max-w-4xl mx-auto mb-12"
        >
          Be part of a fast-moving, passionate, and innovative team shaping the
          future of tech. Fill in your details to explore career opportunities
          with us.
        </motion.p>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 rounded-xl shadow-lg"
          onSubmit={handleSubmit}
        >
          <div className="col-span-1 md:col-span-2">
            <label className="block mb-1 text-sm font-medium">Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="John Doe"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:ring-2 focus:ring-[#092E55] focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="9876543210"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:ring-2 focus:ring-[#092E55] focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:ring-2 focus:ring-[#092E55] focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">City</label>
            <input
              type="text"
              name="city"
              placeholder="Your City"
              required
              value={formData.city}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:ring-2 focus:ring-[#092E55] focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">State</label>
            <input
              type="text"
              name="state"
              placeholder="Your State"
              required
              value={formData.state}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:ring-2 focus:ring-[#092E55] focus:outline-none"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-1 text-sm font-medium">
              Resume (URL)
            </label>
            {/* <label className="block mb-1 text-sm font-medium">
              Resume (PDF/DOC)
            </label> */}
            {/* <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              required
              onChange={handleChange}
              className="w-full file:px-4 file:py-2 file:bg-[#092E55] file:text-white file:rounded-md file:border-0 file:cursor-pointer bg-gray-50 border border-gray-300 rounded-lg text-gray-800"
            /> */}
            <input
              type="text"
              name="resumeUrl"
              placeholder="https://resume"
              required
              value={formData.resumeUrl}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:ring-2 focus:ring-[#092E55] focus:outline-none"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.01 }}
            type="submit"
            className="md:col-span-2 mt-4 bg-[#092E55] text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Submit Application 📄
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
