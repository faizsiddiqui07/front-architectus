import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import scrollTop from "../helpers/scrollTop";
import { base_url } from "../config/config";

const ShortCardProject = ({ expertise }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 1.5 seconds
    }, 100);

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);

  return (
    <div className="mt-4 w-full sm:w-[49%] lg:w-[32.5%]" onClick={scrollTop}>
      <div className="w-full overflow-hidden rounded-md">
        {loading ? (
          <div className="animate-pulse">
            <div className="h-[300px] lg:h-[330px] w-full bg-gray-600"></div> {/* Skeleton for image */}
            <div className="h-6 w-3/4 bg-gray-600 mt-4 mx-6"></div> {/* Skeleton for title */}
          </div>
        ) : (
          <Link to={`/expertise/${expertise.slug}`}>
            <div className="relative">
              <img
                src={expertise.expertiseImage}
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                alt={`Project image for ${expertise.expertiseName}`}
              />
              <div 
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 65%, black 100%)",
                }}
              ></div>
              <h1 className="absolute bottom-6 ps-4 w-full text-center sm:text-start  text-white text-lg sm:text-xl md:text-xl lg:text-2xl">
                {expertise.expertiseName}
              </h1>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ShortCardProject;
