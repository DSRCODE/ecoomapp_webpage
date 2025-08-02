import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBullhorn, FaBars, FaTimes, FaStore } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Vendor", path: "/vendor" },
    { name: "Customer", path: "/customer" },
    { name: "Delivery", path: "/delivery" },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 text-white shadow-lg sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <motion.div
          className="text-2xl font-extrabold flex items-center gap-2 cursor-pointer"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => navigate("/")}
        >
          <FaStore className="text-yellow-300" />
          BidToBuy
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          {navLinks.map((link, i) => (
            <motion.li
              key={i}
              className="relative group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link to={link.path} className="hover:text-yellow-300 transition">
                {link.name}
              </Link>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all group-hover:w-full"></span>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 w-full h-screen bg-white z-40 flex flex-col items-center justify-center gap-10 text-xl font-semibold text-gray-800"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-blue-600"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
