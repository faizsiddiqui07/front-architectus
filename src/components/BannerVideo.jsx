import React from "react";
import { Link } from "react-router-dom";
import video1 from "../assets/bannerVideo/video1.mp4";
import video2 from "../assets/bannerVideo/video2.mp4";
import video3 from "../assets/bannerVideo/video3.mp4";
import video4 from "../assets/bannerVideo/video4.mp4";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const BannerVideo = () => {
  const videos = [
    {
      url: video1,
      title: "News",
      description:
        "Apple opens new store at the heart of Shanghai’s Jing'an District",
      link: "",
    },
    {
      url: video2,
      title: "News",
      description:
        "First ever Foster + Partners exhibition in Korea opens at Seoul Museum of Art",
      link: "",
    },
    {
      url: video3,
      title: "News",
      description:
        "Apple opens new store at the heart of Shanghai’s Jing'an District",
      link: "",
    },
    {
      url: video4,
      title: "News",
      description:
        "First ever Foster + Partners exhibition in Korea opens at Seoul Museum of Art",
      link: "",
    },
  ];

  return (
    <div>
      <div className="mx-auto">
        <Swiper
          cssMode={true}
          mousewheel={true}
          autoplay={{ delay: 10000 }}
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper relative"
        >
          {videos.map((videoURL, index) => {
            return (
              <div className="relative" key={videoURL + index}>
                <SwiperSlide>
                  <Link to={videoURL.link}>
                    <div className="w-full h-[100vh] object-cover relative">
                      <video
                        src={videoURL.url}
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                      ></video>
                      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 65%, black 100%)' }}></div>
                    </div>
                    <div className="absolute bottom-24 px-5 lg:bottom-12 w-full lg:w-[45%] lg:p-12 p-0 text-center lg:text-left text-white">
                      <h1 className="text-md mb-3">{videoURL.title}</h1>
                      <h1 className="text-xl font-medium">
                        {videoURL.description}
                      </h1>
                    </div>
                  </Link>
                </SwiperSlide>
              </div>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default BannerVideo;
