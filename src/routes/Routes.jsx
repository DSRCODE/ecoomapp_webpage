// routes/Routes.jsx
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";

import NotFound from "../pages/NotFound";
import BrandPage from "../pages/BrandPage";
import InfluencerPage from "../pages/InfluencerPage";
import ContactPage from "../pages/ContactPage";
import VendorPage from "../pages/VendorPage";
import CustomerPage from "../pages/CustomerPage";
import DeliveryPage from "../pages/DeliveryPage";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsAndConditions from "../pages/TermsAndConditions";

export default function AppRoutes() {
  return (
    <Routes>
      {/* ✅ Routes WITH Layout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/vendor" element={<VendorPage />} />
        <Route path="/customer" element={<CustomerPage />} />
        <Route path="/delivery" element={<DeliveryPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
      <Route path="/privacy-policy/:type" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsAndConditions />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
