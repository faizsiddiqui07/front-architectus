import React, { useEffect, useState } from "react";
import BannerVideo from "../components/BannerVideo";
import LongCardProject from "../components/LongCardProject";
import SubscribeCard from "../components/SubscribeCard";
import ShortCardProject from "../components/ShortCardProject";
import axios from "axios";
import { base_url } from "../config/config";
import image from "../assets/images/snow14.webp";

const Home = () => {
  const [expertise, setExpertise] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExpertise = async () => {
      try {
        console.log("urls",base_url);
        
        const response = await axios.get(`${base_url}/api/getExpertise`);
        setExpertise(response.data.data.slice(0, 6)); // Limit to 6 items
      } catch (err) {
        setError("Failed to load expertise. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchExpertise();
  }, []);

  return (
    <div>
      <BannerVideo />

      <LongCardProject
        to="/allCategory"
        image={image}
        heading="Projects"
        projectType="All Projects"
        component={<SubscribeCard />}
      />

      <div className="block md:hidden px-4 lg:px-10 my-10">
        <SubscribeCard />
      </div>
    </div>
  );
};

export default Home;
