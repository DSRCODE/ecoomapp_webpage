import { FaInstagram, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#1c1c29] text-white pt-8 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <h2
            onClick={() => navigate("/")}
            className="text-2xl font-bold tracking-wide text-[#fff] mb-3 cursor-pointer"
          >
            Bidzord
          </h2>
          <p className="text-sm text-gray-400 mb-3 leading-relaxed">
            Empowering local businesses, delivery partners, and customers with a
            seamless e-commerce experience.
          </p>
          <p className="text-sm text-[#7C3AED] mb-1 font-semibold leading-relaxed">
            RDS SERVICE AGENCY
          </p>
          <p className="text-sm text-gray-500">
            📍 Ward-7, Mohbhatta Road Bemetara-491335, Chhattisgarh <br />
            📞 +91-9039791530 <br />
            📧 admin@bidzord.com
          </p>
        </div>

        {/* Vendor App */}
        <div>
          <h3 className="text-lg font-semibold text-[#fff] mb-4">Vendor App</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li
              className="hover:text-blue-400 cursor-pointer"
              onClick={() => navigate("/privacy-policy/vendor")}
            >
              Privacy & Policy
            </li>
            <li
              className="hover:text-blue-400 cursor-pointer"
              onClick={() => navigate("/terms/vendor")}
            >
              Terms & Conditions
            </li>
            <li
              className="hover:text-blue-400 cursor-pointer"
              onClick={() => navigate("/shipping/vendor")}
            >
              Shipping Policy
            </li>
            <li
              className="hover:text-blue-400 cursor-pointer"
              onClick={() => navigate("/refund/vendor")}
            >
              Refund & Cancellation Policy
            </li>
            <li
              className="hover:text-blue-400 cursor-pointer"
              onClick={() => navigate("/pricing/vendor")}
            >
              Pricing Policy
            </li>
          </ul>
        </div>

        {/* Delivery Partner */}
        <div>
          <h3 className="text-lg font-semibold text-[#fff] mb-4">
            Delivery Partner
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li
              className="hover:text-blue-400 cursor-pointer"
              onClick={() => navigate("/privacy-policy/delivery")}
            >
              Privacy & Policy
            </li>
            <li
              className="hover:text-blue-400 cursor-pointer"
              onClick={() => navigate("/terms/delivery")}
            >
              Terms & Conditions
            </li>
            <li
              className="hover:text-blue-400 cursor-pointer"
              onClick={() => navigate("/shipping/delivery")}
            >
              Shipping Policy
            </li>
            {/* <li
              className="hover:text-blue-400 cursor-pointer"
              onClick={() => navigate("/refund/delivery")}
            >
              Refund & Cancellation Policy
            </li> */}
            <li
              className="hover:text-blue-400 cursor-pointer"
              onClick={() => navigate("/pricing/delivery")}
            >
              Pricing Policy
            </li>
          </ul>
        </div>

        {/* Customer App + Social */}
        <div>
          <h3 className="text-lg font-semibold text-[#fff] mb-4">
            Customer App
          </h3>
          <ul className="space-y-2 text-sm text-gray-300 mb-4">
            <li
              className="hover:text-blue-400 cursor-pointer"
              onClick={() => navigate("/privacy-policy/customer")}
            >
              Privacy & Policy
            </li>
            <li
              className="hover:text-blue-400 cursor-pointer"
              onClick={() => navigate("/terms/customer")}
            >
              Terms & Conditions
            </li>
            {/* <li
              className="hover:text-blue-400 cursor-pointer"
              onClick={() => navigate("/shipping/customer")}
            >
              Shipping Policy
            </li> */}
            <li
              className="hover:text-blue-400 cursor-pointer"
              onClick={() => navigate("/refund/cutomer")}
            >
              Refund & Cancellation Policy
            </li>
            {/* <li
              className="hover:text-blue-400 cursor-pointer"
              onClick={() => navigate("/pricing/cutomer")}
            >
              Pricing Policy
            </li> */}
          </ul>

          {/* Social Icons */}
          {/* <div className="flex gap-4 text-2xl text-gray-400 mb-2">
            <a href="#" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-600">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-white">
              <FaSquareXTwitter />
            </a>
          </div> */}
          <button
            onClick={() => navigate("/register")}
            className="mt-2 text-sm px-4 py-2 rounded-full bg-[#7C3AED] hover:bg-blue-700 transition font-medium"
          >
            Join Now
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-4 border-t border-gray-700 pt-4 text-center text-xs text-gray-500">
        <p>
          © {new Date().getFullYear()} Bidzord — Built to Connect Vendors,
          Deliveries & Customers.
        </p>
        {/* <div className="mt-2 flex justify-center gap-4 text-blue-400 text-sm">
          <Link to="/privacy" className="hover:underline hover:text-blue-500">
            Privacy Policy
          </Link>
          |
          <Link to="/terms" className="hover:underline hover:text-blue-500">
            Terms & Conditions
          </Link>
        </div> */}
      </div>
    </footer>
  );
}
