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
            BidToBuy
          </h2>
          <p className="text-sm text-gray-400 mb-4 leading-relaxed">
            Empowering local businesses, delivery partners, and customers with a
            seamless e-commerce experience.
          </p>
          <p className="text-sm text-gray-500">
            📍 Jaipur, Rajasthan, India <br />
            📞 +91-9782488408 <br />
            📧 support@bidTobuy.com
          </p>
        </div>

        {/* Vendor App */}
        <div>
          <h3 className="text-lg font-semibold text-[#fff] mb-4">Vendor App</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li
              className="hover:text-blue-400 cursor-pointer"
              onClick={() => navigate("/vendor/register")}
            >
              Register as Vendor
            </li>
            <li
              className="hover:text-blue-400 cursor-pointer"
              onClick={() => navigate("/vendor/dashboard")}
            >
              Vendor Dashboard
            </li>
            <li
              className="hover:text-blue-400 cursor-pointer"
              onClick={() => navigate("/vendor/support")}
            >
              Support
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
              onClick={() => navigate("/delivery/join")}
            >
              Become a Partner
            </li>
            <li
              className="hover:text-blue-400 cursor-pointer"
              onClick={() => navigate("/delivery/track")}
            >
              Track Orders
            </li>
            <li
              className="hover:text-blue-400 cursor-pointer"
              onClick={() => navigate("/delivery/help")}
            >
              Help Center
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
              onClick={() => navigate("/shop")}
            >
              Shop Now
            </li>
            <li
              className="hover:text-blue-400 cursor-pointer"
              onClick={() => navigate("/orders")}
            >
              My Orders
            </li>
            <li
              className="hover:text-blue-400 cursor-pointer"
              onClick={() => navigate("/support")}
            >
              Customer Support
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 text-2xl text-gray-400 mb-2">
            <a href="#" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-600">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-white">
              <FaSquareXTwitter />
            </a>
          </div>
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
          © {new Date().getFullYear()} BidToBuy — Built to Connect Vendors,
          Deliveries & Customers.
        </p>
        <div className="mt-2 flex justify-center gap-4 text-blue-400 text-sm">
          <Link to="/privacy" className="hover:underline hover:text-blue-500">
            Privacy Policy
          </Link>
          |
          <Link to="/terms" className="hover:underline hover:text-blue-500">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
