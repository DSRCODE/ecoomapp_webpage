import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          className="text-4xl font-bold text-blue-700 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Connect With the Bidzord Team
        </motion.h1>
        <motion.p
          className="text-gray-600 max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Whether you're a creator, brand, or agency — we’re always open to new
          opportunities and conversations. Let’s shape the future of influencer
          marketing together. If you’re interested in{" "}
          <strong className="text-blue-600">B2B partnerships</strong>, brand
          collaborations, or joining our elite creator network, reach out using
          the form below.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-10 text-left">
          {/* Left - B2B Invitation */}
          <motion.div
            className="bg-blue-50 p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              🤝 B2B Partnership Invitation
            </h2>
            <ul className="list-disc pl-5 space-y-3 text-gray-700">
              <li>
                Partner with India’s most performance-driven creator network
              </li>
              <li>Access verified and result-oriented influencers</li>
              <li>
                Tailored campaigns from local reach to national visibility
              </li>
              <li>Transparent analytics & ROI insights</li>
              <li>Support for small startups to large enterprises</li>
              <li>Ongoing creator & campaign monitoring for brand safety</li>
            </ul>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            className="bg-white p-8 rounded-xl shadow-md border border-blue-100"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              📬 Send Us a Message
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-600 mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Message</label>
                <textarea
                  rows="5"
                  placeholder="Tell us what you're looking for..."
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
