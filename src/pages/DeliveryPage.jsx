import { useState } from "react";
import { motion } from "framer-motion";
import { FaMotorcycle, FaCheckCircle } from "react-icons/fa";
import { Modal, Input, Button, Form } from "antd";
import swal from "sweetalert";
import SnakeTimeline from "../components/SetpDesign/SnakeTimeline";

const BASE_URL = "https://82.112.236.195/";

export default function DeliveryPage() {
  const [form] = Form.useForm();
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

  const handleJoinSubmit = async (values) => {
    const payload = {
      user_type: "delivery",
      contact_person_name: values.name || "",
      mobile_number: values.mobile || "",
      email: values.email || "",
      description: values.description || "",
    };

    try {
      const response = await fetch(`${BASE_URL}api/register-form`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);

      // Reset form fields
      form.resetFields();
      setJoinModalVisible(false);

      // Success swal
      swal(
        "Success!",
        "Thank you for your interest. We'll contact you soon.",
        "success"
      );
    } catch (error) {
      console.error("Error submitting form:", error);
      swal(
        "Error!",
        "There was an error submitting the form. Please try again.",
        "error"
      );
    }
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
              rider-friendly platform.
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

      {/* Join Modal */}
      <Modal
        title={
          <div className="text-center">
            <h2 className="text-2xl font-bold text-indigo-700">
              Fill free to get more information
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Become a Delivery Partner & grow with us
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
          form={form}
          onFinish={handleJoinSubmit}
          className="space-y-4"
        >
          <Form.Item
            label="Contact Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input
              placeholder="Your Name"
              className="rounded-lg border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
            />
          </Form.Item>

          <Form.Item
            label="Mobile / WhatsApp Number"
            name="mobile"
            rules={[
              { required: true, message: "Please enter your mobile number" },
            ]}
          >
            <Input
              placeholder="Mobile / WhatsApp Number"
              className="rounded-lg border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
            />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { message: "Please enter your email" },
              { type: "email", message: "Enter a valid email" },
            ]}
          >
            <Input
              placeholder="Email"
              className="rounded-lg border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
            />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[{ message: "Please enter a description" }]}
          >
            <Input.TextArea
              placeholder="Description"
              className="rounded-lg border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
              rows={3}
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

      {/* Download App Modal */}
      <Modal
        title={
          <div className="text-center">
            <h2 className="text-2xl font-bold text-indigo-700">Coming Soon</h2>
            <p className="text-sm text-gray-500 mt-1">
              The delivery app will be available soon. Stay tuned!
            </p>
          </div>
        }
        open={isDownloadModalVisible}
        onCancel={() => setDownloadModalVisible(false)}
        footer={[
          <Button
            key="close"
            onClick={() => setDownloadModalVisible(false)}
            className="rounded-lg border border-gray-300 hover:bg-gray-100"
          >
            Close
          </Button>,
        ]}
        centered
        className="rounded-xl"
      >
        <div className="text-center text-gray-700 mt-2">
          <p>
            Soon you will be able to download our delivery app and start
            delivering with ease.
          </p>
        </div>
      </Modal>
    </div>
  );
}
