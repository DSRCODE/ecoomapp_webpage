import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import InfluencerOnboardingForm from "../components/InfluencerOnboardingForm";

const InfluencerPage = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="py-20 px-4 h-[500px] bg-gradient-to-br from-blue-100 to-white flex flex-col items-center justify-center text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Join Our Influencer Network
        </motion.h1>
        <motion.p
          className="text-gray-600 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Become a digital ambassador for top brands. Get consistent paid
          promotions, grow your personal brand, and become a core part of a
          trustworthy marketing movement.
        </motion.p>
      </section>

      {/* Why Join Us */}
      {/* Why Join Bidzord? */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-3xl font-semibold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why Join Bidzord?
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Whether you’re just starting out or you're an experienced creator,
            Bidzord empowers you to grow your influence, get paid fairly, and
            collaborate with trusted brands—big and small. Join a secure,
            opportunity-rich, performance-based influencer network that values
            *you*.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Full-Time Community Membership",
                desc: "Become a core part of our creator ecosystem. Get ongoing campaign offers, mentorship, and inside access to growth tools.",
              },
              {
                title: "Brand Security Partnership",
                desc: "We filter out shady deals and fake offers. Work only with verified brands under transparent terms and reliable payment systems.",
              },
              {
                title: "Numerous Collaboration Opportunities",
                desc: "No more waiting months for one deal. Access multiple brand campaigns every month across categories and regions.",
              },
              {
                title: "Small & Large Brand Gigs",
                desc: "From emerging startups to popular labels, collaborate with a mix of brands that match your audience and tone.",
              },
              {
                title: "Performance-Based Payout Boosts",
                desc: "Your engagement and professionalism earn you bonuses. The better you perform, the more you earn — no middlemen.",
              },
              {
                title: "Bidzord Growth Track",
                desc: "Show consistency, and we’ll upgrade your status. Top performers become Bidzord Pros — our premium inner circle.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-semibold mb-2 text-blue-700">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-semibold text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Influencer Perks & Benefits
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Category-Based Campaigns",
                description:
                  "Get promotions that align with your niche – whether you're into fashion, tech, fitness, or food. We connect you with relevant brands only.",
                icon: "📢",
              },
              {
                title: "Fair & Fast Payments",
                description:
                  "We ensure transparent pricing, no middlemen cuts, and timely payouts after campaign completion – typically within 48 hours.",
                icon: "💸",
              },
              {
                title: "Real-Time Campaign Insights",
                description:
                  "Track engagement, reach, and clicks live on your dashboard. Make smarter content choices with actual data.",
                icon: "📊",
              },
              {
                title: "Local Brand Matches",
                description:
                  "Targeted campaigns from businesses in your city or region, increasing collaboration and boosting your credibility locally.",
                icon: "📍",
              },
              {
                title: "Support & Community",
                description:
                  "Join a growing network of trusted influencers. Get campaign guidance, feedback, and growth tips from our expert team.",
                icon: "🤝",
              },
              {
                title: "Easy Onboarding Process",
                description:
                  "Sign up in minutes. Share your profile, follower insights, and get approved quickly. No contracts or hidden conditions.",
                icon: "🚀",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-bold text-blue-700 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bidzord Comunnity */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Become a Core Member of Bidzord
          </motion.h2>

          <motion.p
            className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Connect with us for upcoming opportunities and join the growing{" "}
            <span className="font-semibold text-blue-600">
              Bidzord Community
            </span>
            . Your performance and engagement are constantly evaluated—work
            smart and we’ll ensure you get consistent collaborations based on
            results, not just follower counts.
          </motion.p>

          <motion.p
            className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            The better you perform, the more you earn. We match you with a wide
            range of campaigns—from startups to big brands—so you're never stuck
            waiting for one deal. If you align with our values and deliver
            results, you'll be officially onboarded into the{" "}
            <span className="font-semibold text-blue-600">Bidzord tier</span> —
            giving you priority access to higher-paying gigs and long-term brand
            partnerships.
          </motion.p>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow hover:bg-blue-700 transition">
              Join Bidzord Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl font-semibold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            Our Strategy for Smarter Influence
          </motion.h2>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            With modern tools and data-driven approaches, we help brands reach
            **local audiences** more precisely. We focus on influencers with
            **authentic engagement**, not fake followers — ensuring our partners
            get real impact, and you earn meaningful opportunities.
          </motion.p>
        </div>
      </section>

      {/* Onboarding Form */}
      <section className="py-12 bg-blue-50 px-4">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <motion.h2
            className="text-3xl font-semibold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            Ready to Get Started?
          </motion.h2>
          <p className="text-gray-600">
            Fill the onboarding form with your follower count, niche category,
            average reach, and past collaborations. We’ll get back with a
            campaign best suited for you.
          </p>
        </div>
        <InfluencerOnboardingForm />
      </section>
    </div>
  );
};

export default InfluencerPage;
