import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const AuthModal = ({ isOpen, onClose, userType = "Vendor" }) => {
  const [isLogin, setIsLogin] = useState(true);

  // Form data state
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    age: "",
    gender: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log(`[LOGIN] as ${userType}:`, {
        email: formData.email,
        password: formData.password,
      });
    } else {
      console.log(`[REGISTER] as ${userType}:`, formData);
    }
    onClose();
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9, y: -30 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95, y: 30 },
  };

  const formTitle =
    userType.charAt(0).toUpperCase() + userType.slice(1).toLowerCase();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white rounded-xl shadow-xl p-8 w-[90%] max-w-md relative"
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
            >
              <FaTimes />
            </button>

            <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
              {isLogin ? `Login as ${formTitle}` : `Register as ${formTitle}`}
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {!isLogin && (
                <>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="border rounded-lg px-4 py-2 outline-blue-400"
                    required
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border rounded-lg px-4 py-2 outline-blue-400"
                    required
                  />
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                    className="border rounded-lg px-4 py-2 outline-blue-400"
                  />
                  <input
                    type="text"
                    name="age"
                    placeholder="Age"
                    value={formData.age}
                    onChange={handleChange}
                    className="border rounded-lg px-4 py-2 outline-blue-400"
                  />
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="border rounded-lg px-4 py-2 outline-blue-400"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </>
              )}

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="border rounded-lg px-4 py-2 outline-blue-400"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="border rounded-lg px-4 py-2 outline-blue-400"
                required
              />

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-all"
              >
                {isLogin ? "Login" : "Register"}
              </button>
            </form>

            <p className="text-center text-sm text-gray-500 mt-4">
              {isLogin ? (
                <>
                  Don't have an account?{" "}
                  <span
                    className="text-blue-600 cursor-pointer font-medium"
                    onClick={() => setIsLogin(false)}
                  >
                    Register
                  </span>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <span
                    className="text-blue-600 cursor-pointer font-medium"
                    onClick={() => setIsLogin(true)}
                  >
                    Login
                  </span>
                </>
              )}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AuthModal;
