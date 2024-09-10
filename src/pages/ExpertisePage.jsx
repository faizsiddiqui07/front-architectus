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
  <Link to={`/expertise/${expertise.slug}`} className="mt-7 w-full sm:w-[49%]">
    <div className="bg-white w-full h-[310px] shadow-lg rounded-md overflow-hidden">
      <img
        src={expertise.expertiseImage?.[0]}
        alt={expertise.expertiseName}
        className="w-full h-60 object-cover"
      />
      <div className="p-4">
        <span className="text-[20px] text-[#333333] font-normal mt-2">
          {expertise.expertiseName.length > 70
            ? `${expertise.expertiseName.slice(0, 70)}...`
            : expertise.expertiseName}
        </span>
      </div>
    </div>
  </Link>
);

export default ExpertisePage;
