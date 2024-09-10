import React, { useEffect, useState } from "react";
import SliderMenuImage from "../assets/images/sliderOpen.jpg";
import axios from "axios";
import { base_url } from "../config/config";
import { Link } from "react-router-dom";

const ExpertisePage = () => {
  const [expertise, setExpertise] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getExpertise = async () => {
      try {
        const response = await axios.get(`${base_url}/api/getExpertise`);
        const data = response.data.data;

        if (data && Array.isArray(data)) {
          setExpertise(data);
        } else {
          setError("Unexpected API response.");
          setExpertise([]);
        }
      } catch (err) {
        setError("Error fetching expertise. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    getExpertise();
  }, []);

  if (loading) {
    return <p className="text-white text-center mt-10">Loading expertise...</p>;
  }

  if (error) {
    return <p className="text-red-500 text-center mt-10">{error}</p>;
  }

  return (
    <div className="w-full mb-36">
      <div className="w-full h-full relative">
        <img
          src={SliderMenuImage}
          className="w-full h-[350px] xs:h-[400px] md:h-[600px] object-cover"
          alt="Expertise"
        />
        <h2 className="absolute bottom-7 text-white text-3xl sm:text-4xl px-4 lg:px-14 text-center sm:text-start w-full">
          Expertise
        </h2>
      </div>

      <main className="px-4 lg:px-14 my-10">
        <div className="w-full flex flex-wrap justify-between items-center">
          {expertise.map((item) => (
            <ExpertiseCard key={item._id} expertise={item} />
          ))}
        </div>
      </main>
    </div>
  );
};

const ExpertiseCard = ({ expertise }) => (
  <Link to={`/expertise/${expertise.slug}`} className="mt-7 w-full sm:w-[49%] lg:w-[33%]">
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <div className="relative">
        <img
          src={expertise.expertiseImage?.[0]}
          alt={expertise.expertiseName}
          className="w-full h-full object-cover transition-transform transform hover:scale-105 duration-300"
        />
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, transparent 60%, rgba(0, 0, 0, 0.5) 100%)"
          }}
        ></div>
      </div>
      <div className="p-4 lg:p-6">
        <h3 className="text-[16px] text-center xs:text-start xs:text-lg lg:text-xl font-medium text-gray-800">
          {expertise.expertiseName.length > 70
            ? `${expertise.expertiseName.slice(0, 70)}...`
            : expertise.expertiseName}
        </h3>
      </div>
    </div>
  </Link>
);

export default ExpertisePage;
