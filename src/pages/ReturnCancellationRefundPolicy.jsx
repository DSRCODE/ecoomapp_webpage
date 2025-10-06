import { motion } from "framer-motion";
import { FaHome, FaUndoAlt } from "react-icons/fa";
import { Link } from "react-router-dom"; // Adjust if routing library differs
import Footer from "../components/Footer";

const ReturnCancellationRefundPolicy = () => {
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
          <FaUndoAlt className="text-purple-600 text-xl" />
          <h1 className="text-3xl font-bold text-gray-900">
            Return, Cancellation & Refund Policy
          </h1>
        </div>

        <p className="mb-4">
          This policy explains the terms under which customers may return
          products, cancel orders, and request refunds on Bidzord. It also
          defines vendor and delivery responsibilities.
        </p>

        <h2 className="text-xl font-semibold mt-6">1. General Return Policy</h2>
        <p className="mt-2">
          Products are eligible for return within 7 days of delivery. Returns
          are accepted only if the item is unused, unaltered, and in original
          packaging. Services once rendered cannot be returned.
        </p>

        <h2 className="text-xl font-semibold mt-6">2. Non-Returnable Items</h2>
        <p className="mt-2">
          Perishable goods (food, flowers, etc.), personal hygiene products
          (cosmetics, innerwear, masks), digital products & services, customized
          or made-to-order items are non-returnable.
        </p>

        <h2 className="text-xl font-semibold mt-6">3. Refund Process</h2>
        <p className="mt-2">
          Refunds are initiated once the returned product passes quality check.
          Refund will be credited to the original payment method within 7
          working days. For COD orders, refund will be processed to customer’s
          bank account/UPI.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          4. Cancellation by Customer
        </h2>
        <p className="mt-2">
          Customers can cancel orders before they are shipped. If the order is
          shipped, cancellation is not allowed, but return may be requested.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          5. Cancellation by Vendor
        </h2>
        <p className="mt-2">
          Vendors may cancel orders due to stock unavailability, technical
          errors, or fraudulent activity. Customers will be notified and
          refunded in such cases.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          6. Damaged, Wrong, or Defective Products
        </h2>
        <p className="mt-2">
          Customers must report damage or defect within 48 hours of delivery. A
          replacement or refund will be provided after verification.
        </p>

        <h2 className="text-xl font-semibold mt-6">7. Refund Timeline</h2>
        <p className="mt-2">
          Payment Gateway Refund: 3–7 business days. Bank Transfer/UPI Refund:
          5–7 business days. In rare cases, refund may take up to 10 working
          days depending on bank/payment gateway.
        </p>

        <h2 className="text-xl font-semibold mt-6">8. Dispute Resolution</h2>
        <p className="mt-2">
          In case of disputes between customer and vendor, Bidzord will act as a
          mediator. Final decision will be made after reviewing evidence.
        </p>

        <h2 className="text-xl font-semibold mt-6">9. Abuse of Policy</h2>
        <p className="mt-2">
          Frequent false claims or fraudulent returns will result in account
          suspension. Vendors engaging in unfair return denial will also be
          penalized.
        </p>
      </motion.div>
      <Footer />
    </>
  );
};

export default ReturnCancellationRefundPolicy;
