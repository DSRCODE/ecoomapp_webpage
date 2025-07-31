import { motion } from "framer-motion";
import { FaStore, FaShoppingBag, FaMotorcycle } from "react-icons/fa";

const Hero = ({ showVendorModal, showCustomerModal, showDeliveryModal }) => {
  return (
    <div className="flex flex-col items-center justify-center h-[85vh] bg-gradient-to-br from-slate-100 to-white text-center px-4">
      {/* Headline */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-slate-800 leading-tight"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Empowering Vendors, Cutomers & Delivery Partners
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="mt-4 text-slate-600 text-lg max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        A complete ecommerce platform connecting businesses, buyers, and riders
        with smart, seamless apps for every role.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="mt-8 flex flex-col md:flex-row gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <button
          onClick={() => showVendorModal(true)}
          className="bg-indigo-700 hover:bg-indigo-800 text-white px-6 py-3 rounded-xl text-lg flex items-center gap-2 transition-all duration-300"
        >
          <FaStore />
          Join as Vendor
        </button>

        <button
          onClick={() => showCustomerModal(true)}
          className="bg-white border border-indigo-700 text-indigo-700 hover:bg-indigo-50 px-6 py-3 rounded-xl text-lg flex items-center gap-2 transition-all duration-300"
        >
          <FaShoppingBag />
          Explore as Customer
        </button>

        <button
          onClick={() => showDeliveryModal(true)}
          className="bg-indigo-100 border border-indigo-700 text-indigo-700 hover:bg-indigo-200 px-6 py-3 rounded-xl text-lg flex items-center gap-2 transition-all duration-300"
        >
          <FaMotorcycle />
          Join as Delivery Partner
        </button>
      </motion.div>
    </div>
  );
};

export default Hero;
