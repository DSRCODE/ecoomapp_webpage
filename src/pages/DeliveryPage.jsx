import { useState } from "react";
import { motion } from "framer-motion";
import { FaMotorcycle, FaCheckCircle } from "react-icons/fa";
import { Modal, Input, Button, Form } from "antd";
import SnakeTimeline from "../components/SetpDesign/SnakeTimeline";

export default function DeliveryPage() {
  const [isJoinModalVisible, setJoinModalVisible] = useState(false);
  const [isDownloadModalVisible, setDownloadModalVisible] = useState(false);

  const riderFeatures = [
    {
      title: "Flexible delivery slots",
      desc: "Choose your own slots and work whenever it suits you best.",
    },
    {
      title: "Transparent earnings",
      desc: "Track your earnings clearly with no hidden fees or surprises.",
    },
    {
      title: "Support to help you deliver efficiently and safely.",
      desc: "Get help quickly with integrated rider support chat available anytime.",
    },
    {
      title: "Flexible Work According to Your Convenience",
      desc: "Built-in GPS guidance ensures you always take the fastest and safest route.",
    },
  ];

  const steps = [
    "Download the Bidzord Delivery App",
    "Register with your documents",
    "Accept delivery tasks nearby",
    "Deliver and earn instantly",
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
    <div className="text-gray-800 bg-white">
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Video Left */}
          <div className="md:w-1/2 w-full">
            <video
              className="rounded-xl w-full shadow-lg"
              controls
              autoPlay
              loop
              poster="https://t4.ftcdn.net/jpg/03/13/86/45/360_F_313864527_H5G41GU1oUoceZOh17eqfrwgDs5U5TNC.jpg"
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
              className="text-4xl md:text-5xl font-bold text-[#1e3a8a]"
            >
              Bidzord Delivery App
            </motion.h1>
            <p className="mt-4 text-lg text-gray-800 ">
              Deliver packages faster, safer, and smarter with our
              rider-friendly platform. Track orders in real-time, optimize
              delivery routes, and boost your efficiency — all from a single
              dashboard.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-4 mt-4">
              <button
                onClick={() => setJoinModalVisible(true)}
                className="flex items-center justify-center gap-2 px-6 py-3 text-lg font-medium rounded-xl border border-indigo-700 bg-indigo-100 text-indigo-700 hover:bg-indigo-200 transition-all duration-300 w-full sm:w-auto"
              >
                <FaMotorcycle />
                Join as Delivery Partner
              </button>

              <button
                onClick={() => setDownloadModalVisible(true)}
                className="flex items-center justify-center gap-2 px-6 py-3 text-lg font-medium rounded-xl bg-[#3b82f6] text-white hover:bg-[#2563eb] transition w-full sm:w-auto"
              >
                <FaMotorcycle />
                Download Delivery App
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 py-12 bg-[#e0f2fe] ">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1e3a8a] mb-2">
            Why Riders Choose Us
          </h2>
          <p className="mb-10 text-gray-700 ">
            Empowering delivery heroes with tools, support, and freedom.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            {riderFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <FaCheckCircle className="text-[#3b82f6] mt-1 text-xl" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 ">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEPS */}
      <SnakeTimeline />

      {/* Join as Delivery Partner Modal */}
      <Modal
        title="Fill free to get more information"
        open={isJoinModalVisible}
        onCancel={() => setJoinModalVisible(false)}
        footer={null}
      >
        <Form layout="vertical" onFinish={handleJoinSubmit}>
          <Form.Item
            label="Contact Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input placeholder="Your Name" />
          </Form.Item>

          <Form.Item
            label="Mobile / WhatsApp Number"
            name="mobile"
            rules={[
              { required: true, message: "Please enter your mobile number" },
            ]}
          >
            <Input placeholder="Mobile / WhatsApp Number" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Enter a valid email" },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      {/* Download App Modal */}
      <Modal
        title="Coming Soon"
        open={isDownloadModalVisible}
        onCancel={() => setDownloadModalVisible(false)}
        footer={[
          <Button key="close" onClick={() => setDownloadModalVisible(false)}>
            Close
          </Button>,
        ]}
      >
        <p>The delivery app will be available soon. Stay tuned!</p>
      </Modal>
    </div>
  );
}
