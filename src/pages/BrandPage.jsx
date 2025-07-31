import { motion } from "framer-motion";
import BrandOnboardingForm from "../components/BrandOnboardingForm";
import {
  FaBullseye,
  FaChartLine,
  FaClock,
  FaUsers,
  FaMoneyBillWave,
  FaRocket,
} from "react-icons/fa";

const BrandPage = () => {
  const sections = [
    {
      title: "Why Use Influencers?",
      text: "Influencers have built strong trust and engagement with their audience. Collaborating with them gives your brand authentic visibility, driving higher engagement than traditional ads.",
      image: "https://images.unsplash.com/photo-1616401788523-b6a4a1ef7c41",
    },
    {
      title: "How Targeting Works",
      text: "We help you target the right niche by analyzing demographics, content categories, and engagement rates. Campaigns are tailored to ensure your message reaches potential customers effectively.",
      image: "https://images.unsplash.com/photo-1616400611030-6f543e2258fa",
    },
    {
      title: "Pricing Models",
      text: "Choose from flexible pricing: fixed rates for straightforward reach, commission-based for sales conversions, or ROI-based for performance marketing. We adapt to your brand’s strategy.",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04",
    },
    {
      title: "Real Case Studies",
      text: "Discover how brands like yours increased their reach by 5x using our platform. Case studies provide data-driven results that highlight the power of influencer marketing.",
      image: "https://images.unsplash.com/photo-1612831662051-f68f5f5ee9ee",
    },
  ];

  const features = [
    {
      icon: <FaBullseye className="text-blue-600 text-3xl mb-4" />,
      title: "Targeted Audience Reach",
      desc: "Connect with influencers who speak directly to your desired audience, ensuring higher engagement and conversions.",
    },
    {
      icon: <FaChartLine className="text-green-600 text-3xl mb-4" />,
      title: "ROI-Focused Campaigns",
      desc: "Optimize every rupee spent with performance-driven strategies and results you can measure.",
    },
    {
      icon: <FaClock className="text-yellow-600 text-3xl mb-4" />,
      title: "Real-Time Analytics",
      desc: "Monitor campaign performance in real time with detailed reports and live insights.",
    },
    {
      icon: <FaUsers className="text-purple-600 text-3xl mb-4" />,
      title: "Trusted Influencer Pool",
      desc: "Work only with verified and vetted influencers from various niches and platforms.",
    },
    {
      icon: <FaMoneyBillWave className="text-pink-600 text-3xl mb-4" />,
      title: "Flexible Budgets",
      desc: "Start small or go big — campaigns designed to match your budget without compromise.",
    },
    {
      icon: <FaRocket className="text-red-600 text-3xl mb-4" />,
      title: "Quick Campaign Setup",
      desc: "Get your campaign live within minutes with our intuitive interface and onboarding support.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Intro Section */}
      <section className="py-20 px-4 h-[500px] bg-gradient-to-br from-blue-100 to-white flex flex-col items-center justify-center text-center">
        <motion.h1
          className="text-4xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Promote Your Brand with Influencers
        </motion.h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Reach the right audience through our trusted influencer network.
          Campaign setup, targeting, and real-time performance — all in one
          platform.
        </p>
      </section>

      {/* Zig-Zag Info Sections */}
      {sections.map((section, i) => (
        <section
          key={i}
          className={`py-16 px-4 flex flex-col md:flex-row ${
            i % 2 === 1 ? "md:flex-row-reverse" : ""
          } items-center gap-8 max-w-6xl mx-auto`}
        >
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: i % 2 === 1 ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={`${section.image}?auto=format&fit=crop&w=800&q=80`}
              alt={section.title}
              className="rounded-xl shadow-xl w-full h-80 object-cover"
            />
          </motion.div>
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: i % 2 === 1 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {section.title}
            </h2>
            <p className="text-gray-600 text-lg">{section.text}</p>
          </motion.div>
        </section>
      ))}

      {/* Features */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Platform Features
          </h2>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
            {features.map((item, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
                whileHover={{ scale: 1.05 }}
              >
                {item.icon}
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Case Studies */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Case Studies
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Discover how our data-driven strategies are helping brands target
            real audiences, save campaign time, and avoid fake influencer traps.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Case 1 */}
            <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                🎯 Hyperlocal Reach Campaign
              </h3>
              <p className="text-gray-700 mb-4">
                A food delivery brand targeted <strong>20,000+ users</strong> in
                4 local zones using verified micro-influencers. Campaign setup
                took <strong>just 48 hours</strong>, saving weeks in outreach.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>📍 87% engagement from local audiences</li>
                <li>🚀 3x faster conversion vs traditional ads</li>
                <li>
                  ✅ Influencers verified with follower authenticity tools
                </li>
              </ul>
            </div>

            {/* Case 2 */}
            <div className="bg-green-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                🔍 Fake Follower Filter Strategy
              </h3>
              <p className="text-gray-700 mb-4">
                A D2C skincare brand filtered out{" "}
                <strong>22% fake influencers</strong> using our detection tools
                and partnered only with authentic creators.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>💡 Saved ₹50K+ in marketing budget</li>
                <li>📊 2.5x higher ROI from real followers</li>
                <li>
                  🛠️ Built long-term partnerships with 12 niche influencers
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Submission */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Launch Your Campaign?
          </h2>
          <p className="text-gray-600 text-lg">
            Fill out the onboarding form below and our team will get in touch to
            help you set up your first influencer campaign tailored to your
            brand goals.
          </p>
        </div>
        <BrandOnboardingForm />
      </section>
    </div>
  );
};

export default BrandPage;
