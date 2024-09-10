import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { base_url } from "../config/config";
import htmlParser from "html-react-parser";
import Breadcrumb from "../components/BreadCrumb";

const ExpertiseDetails = () => {
  const { slug } = useParams(); // Destructuring params for readability
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExpertiseDetails = async () => {
      try {
        const response = await axios.post(`${base_url}/api/expertiseDetails`, {
          slug,
        });
        setData(response.data.data);
      } catch (err) {
        setError("Error fetching project details. Please try again later.");
        console.error("Error fetching project details:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchExpertiseDetails();
  }, [slug]);

  if (loading) {
    return <p className="text-white">Loading project details...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="w-full relative top-[65px] sm:top-[73px]">
      <div className="sticky top-0 bg-[#1a1a1a] border-t border-[#3939399f] z-10">
        <div className="w-full h-[75px] px-4 lg:px-14 flex justify-between items-center">
          {data && <Breadcrumb one={data.expertiseName} two="Expertise" />}
        </div>
      </div>

      <div>
        <div className="w-full h-full relative z-0">
          <img
            src={data?.expertiseImage?.[0]} 
            className="w-full h-full object-cover"
            alt={data?.expertiseName}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent 65%, black 100%)",
            }}
          ></div>
          <div className="w-full absolute bottom-10 px-4 lg:px-14 flex flex-col md:flex-row justify-between items-center gap-5">
            <h2 className="w-full md:w-2/3 text-white text-center md:text-start text-2xl xs:text-3xl font-medium">
              {data?.expertiseName}
            </h2>
          </div>
        </div>
        <div className="w-full h-full my-16 mb-32">
          <div className="text-white px-4 lg:px-14 w-full sm:w-3/4 lg:w-2/4 font-extralight text-justify mx-auto">
            {htmlParser(data?.description)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseDetails;
