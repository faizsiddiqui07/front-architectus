import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import scrollTop from "../helpers/scrollTop";

const LongCardProject = ({ to, image, heading, projectType, component }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading process
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); 

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <div className="mx-auto px-4 lg:px-14 my-10 ">
      <h2 className="text-3xl text-white py-4">{heading}</h2>

      <div className="w-full flex gap-7">
        <div className="w-full md:w-[50%] lg:w-[65%] overflow-hidden rounded-md">
          {loading ? (
            <div className="h-[330px] w-full bg-gray-700 animate-pulse rounded-md"></div> // Skeleton for image
          ) : (
            <Link to={to} onClick={scrollTop}>

              <div className="relative">
                <img
                  src={image}
                  className="h-[230px] sm:h-[330px] w-full object-cover hover:scale-105 transition-all duration-300 "
                  alt={`Project image for ${heading}`}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 65%, black 100%)",
                  }}
                ></div>
                <h1 className="absolute bottom-6 left-6 text-white text-2xl">
                  {projectType}
                </h1>
              </div>
            </Link>
          )}
        </div>

        <div className="w-full md:w-[50%] lg:w-[35%] hidden md:block">
         
            {component}
          
        </div>
      </div>
    </div>
  );
};

export default LongCardProject;
