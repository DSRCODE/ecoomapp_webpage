import { motion } from "framer-motion";
import {
  FaBoxOpen,
  FaChartLine,
  FaCheckCircle,
  FaClipboardList,
  FaDollarSign,
  FaHeadset,
  FaStore,
} from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { Modal, Form, Input, Button, Select } from "antd";
import TimelineComponent from "../components/SetpDesign/TimelineComponent";
import { IndianRupee } from "lucide-react";
import swal from "sweetalert";

const BASE_URL = "https://82.112.236.195/";

const { Option } = Select;

export default function VendorPage() {
  const [form] = Form.useForm();

  const [isJoinModalVisible, setJoinModalVisible] = useState(false);
  const [isDownloadModalVisible, setDownloadModalVisible] = useState(false);
  const [customCategory, setCustomCategory] = useState(false);

  const features = [
    {
      title: "Vendors Welcome: Local, National, GST & Non-GST",
      icon: <FaBoxOpen className="text-indigo-600 text-2xl" />,
      desc: "Open to all vendors, whether local, national, GST registered, or Non-GST. Everyone is welcome to grow with us.",
    },
    {
      title:
        "Zero Hassle, Quick Setup, Effortless Product Upload & Management with AI",
      icon: <FaClipboardList className="text-indigo-600 text-2xl" />,
      desc: "Set up your store quickly and manage products effortlessly using AI-powered tools.",
    },
    {
      title: "Reliable Payments, Easy Policies, Instant Settlements",
      icon: <FaChartLine className="text-indigo-600 text-2xl" />,
      desc: "Enjoy secure payments, simple policies, and instant settlements without delays.",
    },
    {
      title: "Save Money with Multiple Delivery Choices",
      icon: <FaHeadset className="text-indigo-600 text-2xl" />,
      desc: "Offer customers multiple delivery options while reducing costs and improving satisfaction.",
    },
    {
      title: "Minimal Commission, Maximum Growth for Vendors",
      icon: <IndianRupee className="text-indigo-600 text-2xl" />,
      desc: "Pay minimal commission while accessing a platform designed to maximize your business growth.",
    },
    {
      title: "Endless Opportunities Through Bids, Leads & Orders",
      icon: <FaBoxOpen className="text-indigo-600 text-2xl" />,
      desc: "Gain new orders and leads effortlessly with our bidding and order platform.",
    },
    {
      title: "Joining Bonus: 5 Bid/Order Platform Fee Free",
      icon: <IndianRupee className="text-indigo-600 text-2xl" />,
      desc: "Get a special joining bonus—first 5 bids/orders platform fee-free.",
    },
  ];

  const steps = [
    "Download the Bidzord Vendor App",
    "Register with your business details",
    "List your products/services",
    "Start receiving orders and grow!",
  ];

  // Form submit
  const handleJoinSubmit = async (values) => {
    // Determine final category
    const finalCategory =
      values.category === "other" ? values.customCategory : values.category;

    const payload = {
      user_type: "vendor",
      business_name: values.businessName || "",
      contact_person_name: values.name || "",
      mobile_number: values.mobile || "",
      email: values.email || "",
      gstin: values.gstin || "",
      product_category: finalCategory || "",
      description: values.description || "",
    };

    try {
      const response = await fetch("https://82.112.236.195/api/register-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);

      form.resetFields();
      setJoinModalVisible(false);
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
    <>
      <div className="text-gray-800 bg-white ">
        {/* HERO SECTION */}
        <section className="px-6 py-16 max-w-7xl mx-auto">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12">
            {/* Text Left */}
            <div className="md:w-1/2 text-center md:text-left">
              <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold text-[#012A56]"
              >
                Bidzord Vendor App
              </motion.h1>
              <p className="mt-4 text-lg text-gray-600 ">
                Empowering sellers to grow their business with intuitive tools,
                order management, and real-time analytics. Manage your store,
                track performance, and maximize reach — all from one powerful
                app.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 mt-4">
                <button
                  onClick={() => setJoinModalVisible(true)}
                  className="bg-indigo-700 hover:bg-indigo-800 text-white px-6 py-3 rounded-xl text-lg flex items-center gap-2 transition-all duration-300"
                >
                  <FaStore />
                  Join as Vendor
                </button>

                <button
                  onClick={() => setDownloadModalVisible(true)}
                  className="bg-green-600 text-white hover:bg-green-700 px-6 py-3 rounded-xl text-lg flex items-center gap-2 transition-all duration-300"
                >
                  <FaStore />
                  Download Vendor App
                </button>
              </div>
            </div>

            {/* Video Right */}
            <div className="md:w-1/2">
              <video
                className="rounded-xl w-full shadow-lg"
                controls
                autoPlay
                loop
                poster="https://ntspl.co.in/blog/wp-content/uploads/2021/03/multivender-ecommerce-marketplace.jpg"
              >
                <source src="v.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="px-6 py-16 bg-[#f3f4f6] ">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#012A56] mb-4">
              Why Vendors Love Us
            </h2>
            <p className="text-gray-600 mb-10">
              Empowering local businesses with powerful tools to grow, sell, and
              succeed effortlessly.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-5 rounded-xl shadow-md flex items-start gap-4"
                >
                  {item.icon}
                  <div>
                    <h4 className="text-lg font-semibold text-[#012A56]">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TimelineComponent />

        {/* CTA SECTION */}
        <section className="px-6 py-12 bg-[#f6f3ff] text-[#4B2DB3] text-center">
          <div className="flex flex-col items-center">
            <FaStore className="text-4xl mb-3 text-[#7C3AED]" />
            <h3 className="text-2xl font-bold mb-2">
              Join Bidzord Vendor Today
            </h3>
            <p className="mb-6 text-gray-700 max-w-xl">
              Start listing your products and grow your sales with ease through
              our seamless vendor platform.
            </p>
            <button
              onClick={() => setDownloadModalVisible(true)}
              className="bg-[#7C3AED] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#6B21A8] transition flex items-center gap-2"
            >
              <FaStore />
              Download Vendor App
            </button>
          </div>
        </section>
      </div>

      {/* JOIN AS VENDOR MODAL */}
      <Modal
        title={
          <div className="text-center">
            <h2 className="text-2xl font-bold text-indigo-700">
              Join as Vendor
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Fill free to get more information
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
            label="Contact Person Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input placeholder="Your Name" />
          </Form.Item>

          <Form.Item
            label="Mobile Number"
            name="mobile"
            rules={[{ required: true, message: "Please enter mobile number" }]}
          >
            <Input placeholder="Mobile Number" />
          </Form.Item>

          <Form.Item label="Business Name" name="businessName">
            <Input placeholder="Business Name (Optional)" />
          </Form.Item>

          <Form.Item label="Email" name="email">
            <Input placeholder="Email (Optional)" />
          </Form.Item>

          <Form.Item label="GSTIN" name="gstin">
            <Input placeholder="GSTIN (Optional)" />
          </Form.Item>

          <Form.Item
            label="Product Category"
            name="category"
            rules={[{ required: false }]}
          >
            <Select
              placeholder="Select Product Category"
              onChange={(value) => setCustomCategory(value === "other")}
            >
              <Option value="fashion">Fashion</Option>
              <Option value="electronics">Electronics</Option>
              <Option value="food">Food</Option>
              <Option value="handicraft">Handicraft</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>

          {customCategory && (
            <Form.Item
              label="Enter Product Category"
              name="customCategory"
              rules={[{ required: true, message: "Please enter category" }]}
            >
              <Input placeholder="Enter your category" />
            </Form.Item>
          )}

          <Form.Item label="Description" name="description">
            <Input.TextArea placeholder="Description (Optional)" rows={3} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      {/* DOWNLOAD APP MODAL */}
      <Modal
        title={
          <div className="text-center">
            <h2 className="text-2xl font-bold text-indigo-700">
              Download Vendor App
            </h2>
            <p className="text-gray-500 mt-1">Coming Soon</p>
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
