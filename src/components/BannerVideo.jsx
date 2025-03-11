import React, { useRef } from "react";
import { Link } from "react-router-dom";
import video1 from "../assets/bannerVideo/video1.mp4";
import video3 from "../assets/bannerVideo/video3.mp4";
import video4 from "../assets/bannerVideo/video4.mp4";
import video5 from "../assets/bannerVideo/video5.mp4";
import video6 from "../assets/bannerVideo/video6.mp4";

import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const BannerVideo = () => {
  const swiperRef = useRef(null); 

  const videos = [
    {
      url: video1,
      title: "First",
      description:
        "ARCHITECTUS BUREAU : Khaaan Aamir + Kalpana Saini & Co.",
      link: "/category/Recreational",
    },
    {
      url: video3,
      title: "Second",
      description:
        "ARCHITECTUS BUREAU : Khaaan Aamir + Kalpana Saini & Co.",
      link: "/category/Residential",
    },
    {
      url: video4,
      title: "Third",
      description:
        "ARCHITECTUS BUREAU : Khaaan Aamir + Kalpana Saini & Co.",
      link: "/category/Humanitarian-&-Social",
    },
    {
      url: video5,
      title: "Fourth",
      description:
        "ARCHITECTUS BUREAU : Khaaan Aamir + Kalpana Saini & Co.",
      link: "/category/Residential",
    },
    {
      url: video6,
      title: "Fifth",
      description:
        "ARCHITECTUS BUREAU : Khaaan Aamir + Kalpana Saini & Co.",
      link: "/category/Residential",
    },
  ];

  return (
    <div>
      <div className="mx-auto relative">
        <Swiper
          cssMode={true}
          mousewheel={true}
          autoplay={{ delay: 10000 }}
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Autoplay, Pagination]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="mySwiper"
        >
          {videos.map((videoURL, index) => (
            <div className="relative" key={videoURL.url + index}>
              <SwiperSlide>
                <Link to={videoURL.link}>
                  <div className="w-full h-[100vh] object-cover relative">
                    <video
                      src={videoURL.url}
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    ></video>
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to bottom, transparent 65%, black 100%)",
                      }}
                    ></div>
                  </div>
                  <div className="absolute bottom-24 px-5 lg:bottom-12 w-full lg:w-[48%] lg:p-12 p-0 text-center lg:text-left text-white">
                    <h1 className="text-md mb-3">{videoURL.title}</h1>
                    <h1 className="text-xl font-medium">
                      {videoURL.description}
                    </h1>
                  </div>
                </Link>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
        {/* Left and Right Buttons */} 
        <button
          className="absolute left-5 top-1/2 transform z-10 -translate-y-1/2 bg-black/50 text-white px-3 py-3 rounded-full"
          onClick={() => swiperRef.current?.slidePrev()} // Slide to previous
        >
          <LuChevronLeft />
        </button>
        <button
          className="absolute right-5 top-1/2 transform z-10 -translate-y-1/2 bg-black/50 text-white px-3 py-3 rounded-full"
          onClick={() => swiperRef.current?.slideNext()} // Slide to next
        >
          <LuChevronRight />
        </button>
      </div>
    </div>
  );
};

export default BannerVideo;
