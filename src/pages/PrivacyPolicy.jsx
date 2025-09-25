import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaShieldAlt } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BASE_URL = "https://82.112.236.195/";

async function fetchPrivacyPolicyDelivery() {
  try {
    const response = await fetch(
      `${BASE_URL}admin/cms-page/privacy-policy/delivery`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching privacy policy delivery:", error);
    return null;
  }
}

const PrivacyPolicy = () => {
  const [policy, setPolicy] = useState(null);

  useEffect(() => {
    fetchPrivacyPolicyDelivery().then((data) => {
      if (data) setPolicy(data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <motion.div
        className="max-w-5xl mx-auto p-6 md:p-10 mt-10 mb-16 bg-white rounded-2xl shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-6 border-b pb-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <FaShieldAlt className="text-blue-600 text-2xl" />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Privacy Policy
          </h1>
        </div>

        {/* Content */}
        {policy ? (
          <div
            className="prose prose-blue prose-lg max-w-none leading-relaxed text-gray-700"
            dangerouslySetInnerHTML={{ __html: policy.description }}
          />
        ) : (
          <p className="text-gray-500 italic text-center">
            Loading privacy policy...
          </p>
        )}
      </motion.div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
