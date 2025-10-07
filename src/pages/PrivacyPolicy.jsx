import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaShieldAlt, FaHome, FaChevronRight } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { SpinnerLoader } from "../components/SpinnerLoader";

const BASE_URL = "https://82.112.236.195/";

async function fetchPrivacyPolicy({type, cat}) {
  try {
    const response = await fetch(
      `${BASE_URL}admin/cms-page/${cat}/${type}`,
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
    console.error("Error fetching privacy policy:", error);
    return null;
  }
}

const PrivacyPolicy = () => {
  const { cat,type } = useParams(); // vendor | delivery | customer etc.
  const [policy, setPolicy] = useState(null);

  console.log(cat)

  useEffect(() => {
    if (type) {
      fetchPrivacyPolicy({type, cat}).then((data) => {
        if (data) setPolicy(data);
      });
    }
  }, [type]);

  return (
    <>
      {/* <Navbar /> */}
      <motion.div
        className="max-w-5xl mx-auto p-6 md:p-10 mt-10 mb-16 bg-white rounded-2xl shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Breadcrumb */}
        <div className="flex items-center text-gray-500 text-sm md:text-base mb-4">
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-blue-600 transition"
          >
            <FaHome /> Home
          </Link>
          <FaChevronRight className="mx-2" />
          <span className="capitalize">{type} {cat}</span>
        </div>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6 border-b pb-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <FaShieldAlt className="text-blue-600 text-2xl" />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 capitalize">
            {cat} – {type}
          </h1>
        </div>

        {/* Content */}
        {policy ? (
          <div
            className="prose prose-blue prose-lg max-w-none leading-relaxed text-gray-700"
            dangerouslySetInnerHTML={{ __html: policy.description }}
          />
        ) : (
          <SpinnerLoader type={type} />
        )}
      </motion.div>
      {/* <Footer /> */}
    </>
  );
};

export default PrivacyPolicy;
