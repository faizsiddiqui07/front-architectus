import React, { useEffect, useState } from "react";
import BannerVideo from "../components/BannerVideo";
import LongCardProject from "../components/LongCardProject";
import SubscribeCard from "../components/SubscribeCard";
import ShortCardProject from "../components/ShortCardProject";
import axios from "axios";
import { base_url } from "../config/config";
import image from "../assets/images/sliderOpen.jpg";

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
        to="/projects"
        image={image}
        heading="Projects"
        projectType="All Projects"
        component={<SubscribeCard />}
      />

      <div className="px-4 lg:px-14 w-full">
        <h2 className="text-3xl text-white">Expertise</h2>
        <div className="w-full flex justify-between flex-wrap md:mb-10">
          {loading ? (
            <p className="text-white">Loading expertise...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            expertise.map((item, index) => (
              <ShortCardProject key={index} expertise={item} />
            ))
          )}
        </div>
      </div>

      <div className="block md:hidden px-4 lg:px-14 my-10">
        <SubscribeCard />
      </div>
    </div>
  );
};

export default Home;
