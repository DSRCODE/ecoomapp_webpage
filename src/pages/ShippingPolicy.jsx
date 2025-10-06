import { motion } from "framer-motion";
import { FaHome, FaTruck } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const ShippingPolicy = () => {
  return (
    <>
      <motion.div
        className="max-w-4xl mx-auto p-6 mt-10 text-gray-800"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center text-gray-500 text-sm md:text-base mb-4">
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-blue-600 transition"
          >
            <FaHome /> Home
          </Link>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <FaTruck className="text-green-600 text-xl" />
          <h1 className="text-3xl font-bold text-gray-900">Shipping Policy</h1>
        </div>

        <p className="mb-4">
          This Shipping Policy describes how products and services ordered on
          Bidzord are delivered to customers. It explains the role of vendors,
          courier partners, and delivery partners.
        </p>

        <h2 className="text-xl font-semibold mt-6">1. Delivery Models</h2>
        <ul className="list-disc ml-6 mt-2 space-y-2">
          <li>
            <strong>Courier Partner Delivery:</strong> Orders shipped through
            registered courier companies integrated with Bidzord.
          </li>
          <li>
            <strong>Delivery Partner Delivery:</strong> Local delivery managed
            by individuals registered on the Bidzord-Delivery Partner app.
          </li>
          <li>
            <strong>Hybrid Model:</strong> Combination of courier and delivery
            partner depending on distance.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">2. Serviceable Areas</h2>
        <p className="mt-2">
          Bidzord delivers across India subject to courier availability. Certain
          remote, restricted, or government-sensitive areas may not be
          serviceable.
        </p>

        <h2 className="text-xl font-semibold mt-6">3. Shipping Charges</h2>
        <p className="mt-2">
          Shipping charges depend on weight, distance, and delivery mode.
          Customers are shown charges before checkout. Free delivery may be
          offered on promotional orders.
        </p>

        <h2 className="text-xl font-semibold mt-6">4. Delivery Timelines</h2>
        <p className="mt-2">
          Estimated delivery timelines are shown during checkout. Standard
          delivery: 3–7 business days. Express delivery: 1–2 business days (if
          available). Delays may occur due to natural calamities, strikes, or
          logistics issues.
        </p>

        <h2 className="text-xl font-semibold mt-6">5. Failed Delivery</h2>
        <p className="mt-2">
          If the customer is unavailable, two more delivery attempts will be
          made. After three failed attempts, the product will be returned to the
          vendor.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          6. Damaged or Lost Shipment
        </h2>
        <p className="mt-2">
          If a product is lost or damaged in transit, customers will receive a
          full refund or replacement. Vendors and courier/delivery partners will
          cooperate in the claim process.
        </p>

        <h2 className="text-xl font-semibold mt-6">7. Tracking</h2>
        <p className="mt-2">
          Customers can track orders via app/website. SMS, email, and push
          notifications are provided for updates.
        </p>
      </motion.div>
      <Footer />
    </>
  );
};

export default ShippingPolicy;
