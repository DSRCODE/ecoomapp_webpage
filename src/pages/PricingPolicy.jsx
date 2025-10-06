import { motion } from "framer-motion";
import { FaHome, FaTags } from "react-icons/fa";
import { Link } from "react-router-dom"; // Adjust as per routing library
import Footer from "../components/Footer";

const PricingPolicy = () => {
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
          <FaTags className="text-yellow-600 text-xl" />
          <h1 className="text-3xl font-bold text-gray-900">Pricing Policy</h1>
        </div>

        <p className="mb-4">
          This Pricing Policy defines how products and services are priced on
          Bidzord. It explains vendor pricing rights, platform commission,
          applicable taxes, discounts, and billing practices.
        </p>

        <h2 className="text-xl font-semibold mt-6">1. Vendor Pricing Rights</h2>
        <p className="mt-2">
          Vendors are free to set the price of their products and services.
          Prices must comply with market standards and legal requirements.
          Vendors cannot list products at unfair or misleading prices.
        </p>

        <h2 className="text-xl font-semibold mt-6">2. Platform Commission</h2>
        <p className="mt-2">
          Bidzord charges a commission on every successful order. The commission
          percentage may vary by category (products/services). Commission
          details will be provided to vendors during onboarding.
        </p>

        <h2 className="text-xl font-semibold mt-6">3. Taxes & Compliance</h2>
        <p className="mt-2">
          Vendors with GST must provide GSTIN and issue GST invoices. Non-GST
          vendors must issue a bill of supply. All applicable taxes (GST, TCS,
          TDS) will be applied as per Indian law.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          4. Transparency of Pricing
        </h2>
        <p className="mt-2">
          Customers will see the final payable price including all charges.
          Hidden charges or undisclosed fees are strictly prohibited. Any
          delivery/shipping fee must be clearly displayed before checkout.
        </p>

        <h2 className="text-xl font-semibold mt-6">5. Discounts & Offers</h2>
        <p className="mt-2">
          Vendors may offer discounts, promo codes, or bundles. The platform may
          run seasonal or promotional campaigns. Misuse of discounts for fraud
          will result in suspension.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          6. Bid Pricing (Special Feature)
        </h2>
        <p className="mt-2">
          Customers may place bids on selected products/services. Vendors can
          accept or reject bids at their discretion. Once a bid is accepted, it
          becomes a binding contract.
        </p>

        <h2 className="text-xl font-semibold mt-6">7. Mispricing Clause</h2>
        <p className="mt-2">
          In case of technical error or mispricing, Bidzord reserves the right
          to cancel the order. Customers will be refunded in full if payment has
          been made.
        </p>
      </motion.div>
      <Footer />
    </>
  );
};

export default PricingPolicy;
