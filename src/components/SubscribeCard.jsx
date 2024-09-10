import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from 'react-hot-toast';
import { base_url } from "../config/config";

const SubscribeCard = () => {
  const [data, setData] = useState({
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Simulate loading time (e.g., fetching data or API call)
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds
    }, 1500);

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    let isValid = true;
    const newErrors = { email: "", phone: "" };

    // Email validation
    if (!data.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    // Phone validation
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

    try {
      const response = await axios.post(`${base_url}/api/subscribe`, data, {
        withCredentials: true,
      });

      const responseData = response.data;
      if (responseData.success) {
        toast.success(responseData.message);
        setData({ email: "", phone: "" }); // Clear fields on success
      } else {
        toast.error(responseData.message);
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.");
      console.error("Subscription error:", error);
    }
  };

  return (
    <div className="w-full h-[330px] rounded-md bg-gray-700 p-8 ">
      {loading ? (
        <div className="animate-pulse w-full h-full flex flex-col gap-5 items-center justify-center">
          <div className="h-6 w-3/4 bg-gray-600 rounded"></div> {/* Skeleton for heading */}
          <div className="h-10 w-full bg-gray-600 rounded-full"></div> {/* Skeleton for email input */}
          <div className="h-10 w-full bg-gray-600 rounded-full"></div> {/* Skeleton for phone input */}
          <div className="h-10 w-full bg-gray-600 rounded-full"></div> {/* Skeleton for submit button */}
        </div>
      ) : (
        <div className="flex flex-col gap-5 items-center justify-center">
          <h1 className="text-white text-[1.2rem]  xl:text-[1.3rem] text-center">
            Stay up to date with the latest Architectus Bureau projects and news.
          </h1>
          <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-4">
              <input
                type="email"
                value={data.email}
                name="email"
                placeholder="Enter email"
                className={`w-full bg-gray-500 rounded-full px-4 py-2 outline-none placeholder:text-white placeholder:text-md text-white ${errors.email ? 'border-2 border-red-500' : ''}`}
                onChange={handleOnChange}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div className="mb-4">
              <input
                type="tel"
                value={data.phone}
                name="phone"
                placeholder="Enter phone"
                className={`w-full bg-gray-500 rounded-full px-4 py-2 outline-none placeholder:text-white placeholder:text-md text-white ${errors.phone ? 'border-2 border-red-500' : ''}`}
                onChange={handleOnChange}
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>

            <button type="submit" className="w-full bg-gray-500 rounded-full py-2 outline-none text-white hover:bg-gray-600">
              Subscribe
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SubscribeCard;
