import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { base_url } from "../config/config";
import Breadcrumb from "../components/BreadCrumb";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from "swiper/modules";
import RelatedProject from "../components/RelatedProject";
import SwiperCore from "swiper";
import htmlParser from 'html-react-parser';

// Install Swiper modules
SwiperCore.use([Navigation]);

const ProjectDetails = () => {
  const params = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const fetchProjectDetails = async () => {
    try {
      // Simulate a delayed response with setTimeout
      setTimeout(async () => {
        const response = await axios.post(`${base_url}/api/projectDetails`, {
          slug: params.slug,
        });
        setData(response.data.data);
        setLoading(false);
      }, 100); // 2-second delay
    } catch (error) {
      setError("Error fetching project details. Please try again later.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjectDetails();
  }, [params.slug]);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index); // Open popup with the selected image index
  };

  const closePopup = () => {
    setSelectedImageIndex(null); // Close the popup
  };

  if (loading) {
    return (
      <div className="w-full relative top-[65px] sm:top-[73px]">
        <SkeletonHeader />
        {data?.description ? <SkeletonDescription /> : null}
        <SkeletonImageGallery />
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500 text-center mt-10">{error}</p>;
  }

  return (
    <div className="w-full relative top-[65px] sm:top-[73px]">
      <div className="sticky top-0 bg-[#1a1a1a] border-t border-[#3939399f] z-10">
        <div className="w-full h-[75px] px-4 lg:px-14 flex justify-between items-center">
          {data && <Breadcrumb one={data.projectName} two="Projects" />}
        </div>
      </div>

      <ProjectHeader project={data} />

      <div className="w-full h-full my-16">
        {data?.description && (
          <div className="text-white px-4 lg:px-14 w-full sm:w-3/4 lg:w-2/4 font-extralight text-justify mx-auto">
            {htmlParser(data?.description)}
          </div>
        )}
      </div>

      <ProjectImageGallery images={data?.projectImage} onImageClick={handleImageClick} />

      {selectedImageIndex !== null && (
        <ImageSliderPopup
          images={data.projectImage}
          startIndex={selectedImageIndex}
          onClose={closePopup}
        />
      )}

      {data && (
        <RelatedProject
          projectType={data.projectType}
          currentProjectId={data._id}
        />
      )}
    </div>
  );
};

// Skeleton Components
const SkeletonHeader = () => (
  <div className="relative w-full bg-gray-800 animate-pulse h-[550px] rounded-md">
    <div className="absolute bottom-4 lg:bottom-10 w-full px-4 lg:px-14 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
      <div className="bg-gray-600 h-8 w-1/3 rounded-md"></div>
      <div className="bg-gray-600 h-6 w-24 rounded-full"></div>
    </div>
  </div>
);

const SkeletonDescription = () => (
  <div className="px-4 lg:px-14 mt-10">
    <div className="mx-auto w-full sm:w-3/4 lg:w-2/4">
      <div className="bg-gray-600 h-6 rounded-md mb-4 animate-pulse"></div>
      <div className="bg-gray-600 h-6 rounded-md mb-4 animate-pulse"></div>
      <div className="bg-gray-600 h-6 rounded-md mb-4 animate-pulse"></div>
      <div className="bg-gray-600 h-6 rounded-md mb-4 animate-pulse"></div>
    </div>
  </div>
);

const SkeletonImageGallery = () => (
  <div className="px-4 lg:px-14 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-28">
    {[...Array(6)].map((_, index) => (
      <div key={index} className="w-full h-64 bg-gray-700 animate-pulse rounded-md"></div>
    ))}
  </div>
);

const ProjectHeader = ({ project }) => (
  <div className="relative w-full">
    {/* Responsive Banner Image */}
    <img
      src={project.projectImage[0]}
      className="w-full  object-cover xs:object-fill h-full"
      alt={project.projectName}
    />
    {/* Gradient Overlay */}
    <div
      className="absolute inset-0"
      style={{
        background: "linear-gradient(to bottom, transparent 60%, black 100%)",
      }}
    ></div>
    {/* Header Content */}
    <div className="absolute bottom-4 lg:bottom-10 w-full px-4 lg:px-14 flex flex-col-reverse md:flex-row justify-between items-center gap-2 md:gap-8">
      <h2 className="text-white text-center md:text-left text-lg sm:text-xl md:text-2xl font-medium">
        {project.projectName}
      </h2>
      <span className="bg-white text-[#343333] rounded-full px-3 py-1 text-[10px] sm:text-xs md:text-sm">
        {project.projectType}
      </span>
    </div>
  </div>
);

// Image Gallery Component (excluding first image)
const ProjectImageGallery = ({ images, onImageClick }) => (
  <div className="px-4 lg:px-14 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
    {images && images.slice(1).map((image, index) => (
      <div key={index} className="w-full h-full relative cursor-pointer">
        <img
          src={image}
          alt={`Project image ${index}`}
          className="w-full h-full object-cover rounded-lg"
          onClick={() => onImageClick(index + 1)}  // Adjust index for popup
        />
      </div>
    ))}
  </div>
);

// Fullscreen Image Slider Popup Component
const ImageSliderPopup = ({ images, startIndex, onClose }) => {
  // Function to handle clicks outside the image to close the slider
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
      onClick={handleOverlayClick} // Click handler for the overlay
    >
      <div className="relative max-w-6xl max-h-[90%] w-full h-full flex items-center justify-center xs:px-4">
        <Swiper
          initialSlide={startIndex - 1}
          navigation
          spaceBetween={50}
          slidesPerView={1}
        >
          {images.slice(1).map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Full view ${index}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className="absolute top-32 sm:top-16 lg:top-5 right-4 z-50 text-red-600 text-5xl"
          onClick={onClose}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default ProjectDetails;
