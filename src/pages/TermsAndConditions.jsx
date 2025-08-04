import { motion } from "framer-motion";
import { FaFileContract } from "react-icons/fa";
import Footer from "../components/Footer";

const TermsAndConditions = () => {
  return (
    <>
      <motion.div
        className="max-w-4xl mx-auto p-6 mt-10 text-gray-800"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-2 mb-4">
          <FaFileContract className="text-blue-600 text-xl" />
          <h1 className="text-3xl font-bold text-gray-900">
            Terms & Conditions
          </h1>
        </div>

        <p className="mb-4">
          These Terms & Conditions govern your access to and use of the BidToBuy
          platform. By using our services, you agree to be bound by these terms.
        </p>

        <h2 className="text-xl font-semibold mt-6">1. Eligibility</h2>
        <p className="mt-2">
          You must be at least 18 years old to use our services. By agreeing to
          these terms, you confirm that you meet this requirement.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          2. Account Responsibilities
        </h2>
        <p className="mt-2">
          You are responsible for maintaining the confidentiality of your
          account credentials and for all activities that occur under your
          account.
        </p>

        <h2 className="text-xl font-semibold mt-6">3. Prohibited Activities</h2>
        <ul className="list-disc ml-6 mt-2 space-y-2">
          <li>Using the platform for fraudulent or illegal activities.</li>
          <li>Impersonating others or providing false information.</li>
          <li>
            Disrupting the services or accessing data not intended for you.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">
          4. Product Listings and Transactions
        </h2>
        <p className="mt-2">
          Sellers must provide accurate product information. Buyers agree to
          make timely payments. We are not liable for third-party disputes.
        </p>

        <h2 className="text-xl font-semibold mt-6">5. Intellectual Property</h2>
        <p className="mt-2">
          All content on the site, including logos, product images, and text,
          are owned by BidToBuy or licensed to us. Unauthorized use is strictly
          prohibited.
        </p>

        <h2 className="text-xl font-semibold mt-6">6. Termination</h2>
        <p className="mt-2">
          We reserve the right to suspend or terminate your account if you
          violate these terms or engage in harmful behavior.
        </p>

        <h2 className="text-xl font-semibold mt-6">7. Disclaimers</h2>
        <p className="mt-2">
          Services are provided "as is" without warranties. We do not guarantee
          availability, accuracy, or uninterrupted access.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          8. Limitation of Liability
        </h2>
        <p className="mt-2">
          We are not liable for indirect, incidental, or consequential damages
          arising from your use of the platform.
        </p>

        <h2 className="text-xl font-semibold mt-6">9. Updates to Terms</h2>
        <p className="mt-2">
          We may update these terms at any time. Continued use of our platform
          after changes constitutes your acceptance of the revised terms.
        </p>

        <h2 className="text-xl font-semibold mt-6">10. Contact Information</h2>
        <p className="mt-2">
          If you have any questions about these terms, contact us at
          terms@bidtobuy.com
        </p>
      </motion.div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
