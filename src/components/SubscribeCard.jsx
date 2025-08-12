import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from 'react-hot-toast';
import { motion } from "framer-motion";
import { base_url } from "../config/config";
import { FiMail, FiPhone, FiSend } from "react-icons/fi";

const SubscribeCard = () => {
  const [data, setData] = useState({
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timer);
  }, []);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let isValid = true;
    const newErrors = { email: "", phone: "" };

    if (!data.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!data.phone) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(data.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    try {
      const response = await axios.post(`${base_url}/api/subscribe`, data);
      if (response.data.success) {
        toast.success(response.data.message);
        setData({ email: "", phone: "" });
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.");
      console.error("Subscription error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 p-3 sm:p-6 shadow-xl border border-gray-700"
    >
      {loading ? (
        <div className="animate-pulse flex flex-col gap-5">
          <div className="h-6 w-3/4 bg-gray-700 rounded"></div>
          <div className="h-12 w-full bg-gray-700 rounded-lg"></div>
          <div className="h-12 w-full bg-gray-700 rounded-lg"></div>
          <div className="h-12 w-full bg-gray-700 rounded-lg"></div>
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-white text-center">
            Stay Updated
          </h2>
          <p className="text-gray-300 text-center">
            Get the latest Architectus Bureau projects and news delivered to your inbox.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiMail className="text-gray-400" />
                </div>
                <input
                  type="email"
                  value={data.email}
                  name="email"
                  placeholder="Your email address"
                  className={`w-full pl-10 pr-4 py-3 bg-gray-700 border ${errors.email ? 'border-red-500' : 'border-gray-600'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white placeholder-gray-400`}
                  onChange={handleOnChange}
                />
              </div>
              {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
            </div>

            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiPhone className="text-gray-400" />
                </div>
                <input
                  type="tel"
                  value={data.phone}
                  name="phone"
                  placeholder="Your phone number"
                  className={`w-full pl-10 pr-4 py-3 bg-gray-700 border ${errors.phone ? 'border-red-500' : 'border-gray-600'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white placeholder-gray-400`}
                  onChange={handleOnChange}
                />
              </div>
              {errors.phone && <p className="mt-1 text-sm text-red-400">{errors.phone}</p>}
            </div>

            <button
              type="submit"
              disabled={submitting}
              className={`w-full flex items-center justify-center py-3 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors ${submitting ? 'opacity-75 cursor-not-allowed' : ''}`}
            >
              {submitting ? 'Submitting...' : 'Subscribe'}
              {!submitting && <FiSend className="ml-2" />}
            </button>
          </form>
        </div>
      )}
    </motion.div>
  );
};

export default SubscribeCard;