import React, { useEffect, useState } from "react";
import axios from "axios";
import { base_url } from "../config/config";
import Card from "../components/Card";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const RelatedProject = ({ projectType, currentProjectId }) => {
  const [projects, setProjects] = useState([]);

  const getRelatedProjects = async () => {
    try {
      const response = await axios.post(`${base_url}/api/getRelatedProject`, {
        projectType,
      });

      if (response.status === 200) {
        const filteredProject = response.data.data.filter(
          (project) => project._id !== currentProjectId
        );
        setProjects(filteredProject);
      }
    } catch (error) {
      console.log("Error fetching projects. Please try again later.");
    }
  };

  useEffect(() => {
    getRelatedProjects();
  }, [projectType, currentProjectId]);

  return (
    <div className="px-4 lg:px-14 w-full mb-36">
      <h2 className="text-white text-2xl border-y mb-5 border-[#3939399f] py-7 cursor-default">
        More Projects
      </h2>
      {projects.length > 0 && (
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            500: {
              slidesPerView: 2,
              spaceBetween:8
            },
            800: {
              slidesPerView: 3,
              spaceBetween:10
            }
          }}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          loop={true}
          speed={900}
          className="mySwiper w-full mb-16 transition-all rounded-lg"
        >
          {projects.map((item, index) => (
            <SwiperSlide key={index}>
              <Card project={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default RelatedProject;
