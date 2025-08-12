import React, { useEffect, useState } from "react";
import BannerVideo from "../components/BannerVideo";
import LongCardProject from "../components/LongCardProject";
import SubscribeCard from "../components/SubscribeCard";
import ShortCardProject from "../components/ShortCardProject";
import axios from "axios";
import { base_url } from "../config/config";
import image from "../assets/images/snow14.webp";
import { motion } from "framer-motion";
import LoadingSkeleton from "../components/LoadingSkeleton";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  const [expertise, setExpertise] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExpertise = async () => {
      try {
        const response = await axios.get(`${base_url}/api/getExpertise`);
        setExpertise(response.data.data.slice(0, 6));
      } catch (err) {
        setError("Failed to load expertise. Please try again later.");
        console.error("Fetch expertise error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchExpertise();
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Banner */}
      <BannerVideo />

      {/* Main Content */}
      <div className="w-full pb-12">
        {/* Projects Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <LongCardProject 
            to="/allCategory"
            image={image}
            heading="Projects"
            projectType="All Projects"
            component={<SubscribeCard />}
            icon={<FiArrowRight className="ml-2" />}
          />
        </motion.div>

        {/* Mobile Subscribe Card */}
        <motion.div 
          variants={itemVariants}
          className="block md:hidden mt-12 px-4 lg:px-10"
        >
          <SubscribeCard />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;