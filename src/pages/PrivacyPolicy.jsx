import { motion } from "framer-motion";
import { FaShieldAlt } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <motion.div
        className="max-w-4xl mx-auto p-6 mt-10 text-gray-800"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-2 mb-4">
          <FaShieldAlt className="text-blue-600 text-xl" />
          <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
        </div>

        <p className="mb-4">
          This Privacy Policy describes how Bidzord ("we", "us", or "our")
          collects, uses, and discloses your personal information when you visit
          or make a purchase from our site.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          1. Information We Collect
        </h2>
        <ul className="list-disc ml-6 mt-2 space-y-2">
          <li>
            Personal Identifiable Information: Name, email address, phone
            number, shipping and billing address.
          </li>
          <li>
            Account Information: Username, password, and profile settings.
          </li>
          <li>
            Order Information: Items purchased, order history, and payment
            details.
          </li>
          <li>
            Technical Information: IP address, browser type, device type, and
            cookies.
          </li>
          <li>
            Usage Information: Pages viewed, time spent, clicks, and
            interactions.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc ml-6 mt-2 space-y-2">
          <li>
            To process and deliver your orders including sending confirmations
            and invoices.
          </li>
          <li>To manage your account and provide customer support.</li>
          <li>To improve our website, services, and marketing efforts.</li>
          <li>To detect fraud, prevent abuse, and enhance security.</li>
          <li>
            To comply with legal obligations and respond to law enforcement.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">
          3. Sharing Your Information
        </h2>
        <p className="mt-2">
          We may share your personal data with third-party vendors and service
          providers who help us operate our business, such as payment
          processors, delivery partners, and marketing agencies. These parties
          are bound by confidentiality obligations.
        </p>

        <h2 className="text-xl font-semibold mt-6">4. Your Rights</h2>
        <ul className="list-disc ml-6 mt-2 space-y-2">
          <li>Right to Access: Request a copy of your data.</li>
          <li>Right to Correction: Correct inaccurate information.</li>
          <li>Right to Deletion: Request deletion of your data.</li>
          <li>
            Right to Object: Object to data processing for marketing purposes.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">5. Cookies and Tracking</h2>
        <p className="mt-2">
          We use cookies to personalize content, analyze site traffic, and
          provide social media features. You can manage your cookie preferences
          in your browser settings.
        </p>

        <h2 className="text-xl font-semibold mt-6">6. Data Retention</h2>
        <p className="mt-2">
          We retain your personal information for as long as necessary to
          fulfill the purposes outlined in this policy unless otherwise required
          by law.
        </p>

        <h2 className="text-xl font-semibold mt-6">7. Contact Us</h2>
        <p className="mt-2">
          For more information about our privacy practices, or if you have
          questions, please contact us at privacy@bidtobuy.com
        </p>
      </motion.div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
