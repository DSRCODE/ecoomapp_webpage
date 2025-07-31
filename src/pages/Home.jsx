// src/pages/Home.jsx
import { useState } from "react";
import Hero from "../components/Hero";

import Testimonials from "../components/Testimonials";
import About from "../components/About";
import Contact from "../components/Contact";
import Career from "../components/Career";
import AuthModal from "../components/AuthModal";
import ImageGrid from "../components/ImageGrid";
import HeroIntro from "../components/HeroIntro";
import ZigZagSteps from "../components/ZigZagSteps";
import ShowcaseGrid from "../components/ShowcaseGrid";
import WhyChooseUs from "../components/WhyChooseUs";

const brandSteps = [
  {
    title: "Create Your Brand Campaign",
    description:
      "Start by submitting your product, campaign goals, target audience, and budget.",
    tip: "Be specific about your goals and brand message.",
  },
  {
    title: "Get Influencer Matches",
    description:
      "We use AI + human curation to match you with influencers based on niche, engagement, and authenticity.",
    tip: "Review influencer profiles and approve your shortlist.",
  },
  {
    title: "Collaborate & Go Live",
    description:
      "Once influencers are approved, they create and post content across platforms.",
    tip: "Provide a clear content brief or sample references.",
  },
  {
    title: "Track Results in Real-Time",
    description:
      "Monitor campaign performance through our dashboard with reach, engagement, and ROI metrics.",
    tip: "Use insights to plan your next campaign smarter.",
  },
];

const influencerSteps = [
  {
    title: "Create Your Influencer Profile",
    description:
      "Fill in your niche, follower count, platform links, and sample content to start.",
    tip: "Highlight past campaigns and keep your content updated.",
  },
  {
    title: "Receive Campaign Invites",
    description:
      "Get invited to campaigns that match your audience, values, and style.",
    tip: "Apply only to campaigns you genuinely align with.",
  },
  {
    title: "Content Creation & Review",
    description:
      "Post approved content as per brand brief and schedule. Maintain quality and transparency.",
    tip: "Follow brand guidelines and disclose sponsorships clearly.",
  },
  {
    title: "Earn & Grow",
    description:
      "Get paid directly after completion and grow your profile through successful collaborations.",
    tip: "Consistent performance boosts your visibility to future campaigns.",
  },
];

export default function Home() {
  const [showVendorModal, setShowVendorModal] = useState(false);
  const [showCustomerModal, setShowCustomerModal] = useState(false);
  const [showDeliveryModal, setShowDeliveryModal] = useState(false);

  const handleClose = () => {
    setShowVendorModal(false);
    setShowCustomerModal(false);
    setShowDeliveryModal(false);
  };
  return (
    <>
      <Hero
        showVendorModal={setShowVendorModal}
        showCustomerModal={setShowCustomerModal}
        showDeliveryModal={setShowDeliveryModal}
      />
      <HeroIntro />
      <WhyChooseUs />
      <About />
      <Testimonials />
      <AuthModal
        isOpen={showVendorModal}
        onClose={handleClose}
        userType="vendor"
      />
      <AuthModal
        isOpen={showCustomerModal}
        onClose={handleClose}
        userType="customer"
      />
      <AuthModal
        isOpen={showDeliveryModal}
        onClose={handleClose}
        userType="delivery"
      />
    </>
  );
}
