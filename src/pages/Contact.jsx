import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiArrowRight,
  FiPhoneCall,
  FiMessageSquare,
  FiSend,
} from "react-icons/fi";
import axios from "axios";
import { base_url } from "@/config/config";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: "",
    error: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.message
    ) {
      setStatus({
        loading: false,
        success: "",
        error: "All fields are required",
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: "", error: "" });
    if (!validateForm()) return;
    try {
      const res = await axios.post(`${base_url}/api/requestQuery`, formData);
      if (res.data.success) {
        setStatus({
          loading: false,
          success: "Message sent successfully!",
          error: "",
        });
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        setStatus({
          loading: false,
          success: "",
          error: res.data.message || "Failed",
        });
      }
    } catch (err) {
      setStatus({
        loading: false,
        success: "",
        error: err.response?.data?.message || "Server error",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 pt-20 sm:pt-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-2xl md:text-4xl  font-bold text-white mb-4">
            Get In Touch
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out through the form or contact us
            directly.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 pb-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 sm:p-8 shadow-xl"
          >
            <h2 className="text-2xl font-semibold text-white mb-8">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                  placeholder="Full Name"
                />
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                  placeholder="Phone Number"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                  placeholder="Your message here..."
                />
              </div>
              <button
                type="submit"
                disabled={status.loading}
                className={`w-full py-3 px-6 rounded-lg font-medium text-white transition-all flex items-center justify-center ${
                  status.loading
                    ? "bg-indigo-800 cursor-not-allowed"
                    : "bg-indigo-600 hover:bg-indigo-700"
                }`}
              >
                {status.loading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
              {status.success && (
                <p className="text-green-400 mt-2 text-center">
                  {status.success}
                </p>
              )}
              {status.error && (
                <p className="text-red-400 mt-2 text-center">{status.error}</p>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-gradient-to-br from-gray-900/80 to-gray-900 rounded-2xl p-4 sm:p-8 mb-8 lg:mb-0 shadow-2xl border border-gray-800/50 backdrop-blur-sm overflow-hidden relative"
          >
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-indigo-900/20 blur-[80px]"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-indigo-800/10 blur-[60px]"></div>

            <div className="relative z-10">
              {/* Title */}
              <div className="flex items-center gap-3 mb-6 sm:mb-10">
                <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                  Contact Information
                </h2>
              </div>

              {/* Location & Phone */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
                {/* Location */}
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex flex-col xs:flex-row items-center xs:items-start p-3 gap-4 hover:bg-gray-800/30 rounded-xl transition-colors"
                >
                  <div className="flex-shrink-0 bg-indigo-900/20 p-3 rounded-lg border border-indigo-800/50">
                    <FiMapPin className="h-5 w-5 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white text-center xs:text-start">
                      Our Office
                    </h3>
                    <p className="mt-1 text-gray-300/90 text-center xs:text-start">
                      Lucknow, INDIA
                    </p>
                    <div className="mt-2 text-center xs:text-start">
                      <a
                        href="https://maps.app.goo.gl/hhxXfBhPzyhEBUFi6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-indigo-400 hover:text-indigo-300 transition-colors group"
                      >
                        View on map
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex flex-col xs:flex-row items-center xs:items-start p-3 gap-4 hover:bg-gray-800/30 rounded-xl transition-colors"
                >
                  <div className="flex-shrink-0 bg-indigo-900/20 p-3 rounded-lg border border-indigo-800/50">
                    <FiPhone className="h-5 w-5 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white text-center xs:text-start">
                      Call Us
                    </h3>
                    <a
                      href="tel:+919119897774"
                      className="mt-1 text-gray-300/90 hover:text-indigo-400 transition-colors flex items-center gap-2"
                    >
                      <span className="mx-auto xs:mx-0">+91 - 9119897774</span>
                    </a>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <a
                        href="https://wa.me/919119897774"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600/30 px-3 py-1 rounded-md transition-colors group"
                      >
                        <FiMessageSquare className="mr-1.5 h-3.5 w-3.5" />
                        WhatsApp
                      </a>
                      <a
                        href="tel:+919119897774"
                        className="inline-flex items-center text-sm bg-indigo-600/20 text-indigo-400 hover:bg-indigo-600/30 px-3 py-1 rounded-md transition-colors group"
                      >
                        <FiPhone className="mr-1.5 h-3.5 w-3.5" />
                        Call now
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Email */}
              <motion.div
                whileHover={{ x: 4 }}
                className="flex flex-col xs:flex-row items-center xs:items-start p-3 gap-4 hover:bg-gray-800/30 rounded-xl transition-colors mt-6"
              >
                <div className="flex-shrink-0 bg-indigo-900/20 p-3 rounded-lg border border-indigo-800/50">
                  <FiMail className="h-5 w-5 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white text-center xs:text-start">
                    Email Us
                  </h3>
                  <a
                    href="mailto:architectusbureau@gmail.com"
                    className="mt-1 text-gray-300/90 hover:text-indigo-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="mx-auto">architectusbureau@gmail.com</span>
                  </a>
                  <div className="mt-2 flex xs:block justify-center">
                    <a
                      href="mailto:architectusbureau@gmail.com"
                      className="inline-flex items-center text-sm bg-indigo-600/20 text-indigo-400 hover:bg-indigo-600/30 px-3 py-1 rounded-md transition-colors group"
                    >
                      <FiMail className="mr-1.5 h-3.5 w-3.5" />
                      Send email
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Business Hours */}
              <div className="mt-6 pt-6 border-t border-gray-800/50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-indigo-600/20 p-2 rounded-lg border border-indigo-500/30">
                    <FiClock className="h-5 w-5 text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Business Hours
                  </h3>
                </div>
                <ul className="space-y-2">
                  <motion.li
                    whileHover={{ x: 4 }}
                    className="flex justify-between items-center p-3 hover:bg-gray-800/30 rounded-lg transition-colors"
                  >
                    <span className="text-gray-300/90">Monday - Saturday</span>
                    <span className="font-medium text-white/90">
                      9:00 AM - 5:00 PM
                    </span>
                  </motion.li>
                  <motion.li
                    whileHover={{ x: 4 }}
                    className="flex justify-between items-center p-3 hover:bg-gray-800/30 rounded-lg transition-colors"
                  >
                    <span className="text-gray-300/90">Sunday</span>
                    <span className="font-medium text-rose-400/90">Closed</span>
                  </motion.li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
