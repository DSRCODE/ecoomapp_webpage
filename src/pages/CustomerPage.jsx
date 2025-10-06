import { motion } from "framer-motion";
import { FaShoppingCart, FaCheckCircle, FaShoppingBag } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { Modal, Form, Input, Button } from "antd";
import ZigZagSteps from "../components/ZigZagSteps";

export default function CustomerPage() {
  const [isJoinModalVisible, setJoinModalVisible] = useState(false);
  const [isDownloadModalVisible, setDownloadModalVisible] = useState(false);

  const customerFeatures = [
    {
      title: "Shop from a wide range of products & Services",
      desc: "Discover thousands of products, from daily essentials to premium picks, all in one place.",
    },
    {
      title: "Search, Compare, and Select Vendors by Location & Delivery",
      desc: "Find vendors near you, compare prices and delivery options, and choose the best fit for your needs.",
    },
    {
      title: "Post a Bid, Get Multiple Vendor Options at Best Price",
      desc: "Submit a bid and receive offers from multiple vendors to ensure you get the best deal.",
    },
    {
      title: "Trusted secure shopping",
      desc: "Shop with confidence knowing our platform prioritizes security and reliable transactions.",
    },
    {
      title:
        "Exclusive Deals & Offers: Get the best prices directly from sellers.",
      desc: "Unlock special promotions and deals directly from sellers to save more on your purchases.",
    },
    {
      title: "Joining Bonus 500/- Terms condition apply",
      desc: "Get an instant joining bonus of ₹500 upon registration. Terms and conditions apply.",
    },
    {
      title: "24/7 Customer Support",
      desc: "Our customer support team is available around the clock to assist you with any queries or concerns.",
    },
  ];

  const steps = [
    "Download the Bidzord Customer App",
    "Sign up & explore categories",
    "Add items to cart & checkout",
    "Receive orders at your doorstep",
  ];

  // Form submit
  const handleJoinSubmit = (values) => {
    console.log("Form submitted:", values);
    setJoinModalVisible(false);
    Modal.success({
      title: "Form submitted!",
      content: "Thank you for your interest. We'll contact you soon.",
    });
  };

  return (
    <>
      <div className="text-gray-800 bg-white ">
        <section className="px-6 py-16 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Video Left */}
            <div className="md:w-1/2 w-full">
              <video
                className="rounded-xl w-full shadow-lg"
                controls
                autoPlay
                loop
                poster="https://knowmax-ai-website.s3.amazonaws.com/wp-content/uploads/2024/09/12133025/Ecommerce-customer-service.webp"
              >
                <source src="v.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Text Right */}
            <div className="md:w-1/2 text-center md:text-left">
              <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold text-[#14532d]"
              >
                Bidzord Customer App
              </motion.h1>
              <p className="mt-4 text-lg text-gray-600 ">
                Shop from your favorite brands with a smooth and secure
                experience. Discover trending products, track your orders in
                real-time, enjoy fast delivery, and get support when you need it
                — all from the palm of your hand.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 mt-4">
                <button
                  onClick={() => setJoinModalVisible(true)}
                  className="bg-white border border-indigo-700 text-indigo-700 hover:bg-indigo-50 px-6 py-3 rounded-xl text-lg flex items-center gap-2 transition-all duration-300"
                >
                  <FaShoppingBag />
                  Explore as Customer
                </button>

                <button
                  onClick={() => setDownloadModalVisible(true)}
                  className="bg-green-600 text-white hover:bg-green-700 px-6 py-3 rounded-xl text-lg flex items-center gap-2 transition-all duration-300"
                >
                  <FaShoppingCart />
                  Download Customer App
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="px-6 py-12 bg-[#ecfdf5] ">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#14532d] mb-6">
              Why Customers Love Us
            </h2>
            <p className="mb-10 text-gray-700 ">
              Discover how we make shopping a seamless and joyful experience.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              {customerFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <FaCheckCircle className="text-[#10b981] mt-1 text-xl" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 ">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600  text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STEPS */}
        <section className="px-6 py-16 bg-white ">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#14532d] mb-12">
              Get Started in 4 Easy Steps
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center relative z-10"
                >
                  <div className="w-12 h-12 rounded-full bg-[#14532d] text-white flex items-center justify-center text-lg font-bold mb-4 shadow-md">
                    {index + 1}
                  </div>
                  <p className="text-gray-700  max-w-[200px]">{step}</p>
                </div>
              ))}
              <div className="hidden md:block absolute top-6 left-0 right-0 h-1 bg-gray-300 z-0 mx-12">
                <div className="absolute left-0 top-0 h-1 bg-[#14532d] w-full z-0" />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* JOIN MODAL */}
      <Modal
        title={
          <div className="text-center">
            <h2 className="text-2xl font-bold text-indigo-700">
              Explore as Customer
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              and get{" "}
              <span className="font-semibold text-green-600">
                ₹500/- Joining Bonus
              </span>
            </p>
          </div>
        }
        open={isJoinModalVisible}
        onCancel={() => setJoinModalVisible(false)}
        footer={null}
        centered
        className="rounded-xl"
      >
        <Form
          layout="vertical"
          onFinish={handleJoinSubmit}
          className="space-y-4"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input
              placeholder="Your Name"
              className="rounded-lg border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
            />
          </Form.Item>

          <Form.Item
            label="Mobile Number"
            name="mobile"
            rules={[
              { required: true, message: "Please enter your mobile number" },
            ]}
          >
            <Input
              placeholder="Mobile Number"
              className="rounded-lg border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
            />
          </Form.Item>

          <Form.Item
            label="Email ID"
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Enter a valid email" },
            ]}
          >
            <Input
              placeholder="Email ID"
              className="rounded-lg border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg py-3 text-lg transition-all"
            >
              Submit
            </Button>
          </Form.Item>

          <div className="text-center text-gray-500 text-sm">
            By submitting, you agree to our terms & conditions.
          </div>
        </Form>
      </Modal>

      {/* DOWNLOAD MODAL */}
      <Modal
        title={
          <div className="text-center">
            <h2 className="text-2xl font-bold text-green-700">Coming Soon</h2>
            <p className="text-sm text-gray-500 mt-1">
              Our Customer App will be available shortly. Stay tuned!
            </p>
          </div>
        }
        open={isDownloadModalVisible}
        onCancel={() => setDownloadModalVisible(false)}
        footer={null}
        centered
        className="rounded-xl"
      />
    </>
  );
}
