import { motion } from "framer-motion";
import { FaFileContract, FaHome } from "react-icons/fa";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
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
        <div className="flex items-center text-gray-500 text-sm md:text-base mb-4">
          <FaFileContract className="text-blue-600 text-xl" />
          <h1 className="text-3xl font-bold text-gray-900">
            Terms & Conditions
          </h1>
        </div>

        <p className="mb-4">
          Welcome to Bidzord, an e-commerce and service marketplace operated by
          RDS Service Agency (“Company”, “We”, “Us”, or “Our”). These Terms &
          Conditions govern the use of our website, mobile applications
          (Bidzord, Bidzord-Vendors, Bidzord-Delivery Partner), and related
          services.
        </p>

        <p className="mb-4">
          By accessing our website/app and accepting the Terms & Conditions
          displayed therein, you acknowledge that you have read, understood, and
          agreed to be bound by these Terms. Only after such acceptance, you
          will be eligible for registration in the Bidzord App and register as a
          Vendor, Customer, or Delivery Partner. If you do not accept these
          Terms, you will not be able to use the Bidzord platform or its
          services.
        </p>

        <h2 className="text-xl font-semibold mt-6">1. Eligibility</h2>
        <ul className="list-disc ml-6 mt-2 space-y-2">
          <li>Users must be 18 years or older.</li>
          <li>
            Vendors must provide valid KYC and GST details (if applicable).
          </li>
          <li>
            Delivery partners must submit ID proof, address proof, and police
            verification.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">2. Definitions</h2>
        <ul className="list-disc ml-6 mt-2 space-y-2">
          <li>
            <strong>Customer:</strong> Any user purchasing products or services
            from Bidzord.
          </li>
          <li>
            <strong>Vendor:</strong> Any product or service provider registered
            on Bidzord-Vendors app (GST or non-GST).
          </li>
          <li>
            <strong>Service Provider:</strong> Vendors offering digital,
            physical, or professional services.
          </li>
          <li>
            <strong>Delivery Partner:</strong> Individual registered on
            Bidzord-Delivery Partner app for pickup/delivery.
          </li>
          <li>
            <strong>Courier Partner:</strong> Third-party logistics partners
            integrated with Bidzord.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">3. Account Registration</h2>
        <p className="mt-2">
          Customers, vendors, and delivery partners must register using valid
          email, phone, and ID. The company reserves the right to suspend
          accounts in case of fraud or misuse.
        </p>

        <h2 className="text-xl font-semibold mt-6">4. Vendor Obligations</h2>
        <p className="mt-2">
          Vendors are responsible for product authenticity, quality, and legal
          compliance. Fake or counterfeit products are strictly prohibited.
          Vendors must honor return/refund policies.
        </p>

        <h2 className="text-xl font-semibold mt-6">5. Order & Delivery</h2>
        <p className="mt-2">
          Orders are processed by vendors and fulfilled via courier/delivery
          partners. Delivery charges may apply depending on distance. Customers
          must provide accurate delivery addresses.
        </p>

        <h2 className="text-xl font-semibold mt-6">6. Returns & Refunds</h2>
        <p className="mt-2">
          Eligible products may be returned within 7 days. Refunds will be
          processed within 7 working days to the original payment method.
          Non-returnable items include perishables, hygiene items, services, and
          digital products.
        </p>

        <h2 className="text-xl font-semibold mt-6">7. Payments & Commission</h2>
        <p className="mt-2">
          All payments are processed through secure payment gateways. Vendors
          agree to platform commission deductions as per agreement. Settlement
          timelines depend on vendor type (GST/Non-GST).
        </p>

        <h2 className="text-xl font-semibold mt-6">8. Prohibited Items</h2>
        <p className="mt-2">
          Illegal products, weapons, narcotics, adult content, animals, and
          government-restricted goods are not allowed.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          9. Limitation of Liability
        </h2>
        <p className="mt-2">
          Bidzord is a marketplace and acts only as an intermediary. The company
          is not liable for vendor fraud, delivery delays, or product defects
          beyond policy coverage.
        </p>

        <h2 className="text-xl font-semibold mt-6">10. Governing Law</h2>
        <p className="mt-2">
          These Terms & Conditions are governed by the laws of India.
          Jurisdiction lies in Chhattisgarh courts.
        </p>
      </motion.div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
