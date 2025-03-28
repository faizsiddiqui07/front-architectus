import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { EffectFade } from "swiper/modules";

const Card = ({ project }) => {
  
  const [showSlider, setShowSlider] = useState(false);
  const [sliderIndex, setSliderIndex] = useState(0);

  useEffect(() => {
    if (showSlider) {
      // Disable background scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Enable background scrolling
      document.body.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = ""; 
    };
  }, [showSlider]);

  const handleImageClick = (index) => {
    setSliderIndex(index);
    setShowSlider(true);
  };

  return (
    <>
      <div  className="block w-full cursor-pointer">
        <div className="bg-white shadow-lg rounded-md overflow-hidden">
          <img
            src={project?.projectImage?.[0]?.url || project?.projectImage?.[0]}
            alt={project.projectName}
            className="w-full h-full object-cover"
            onClick={() => handleImageClick(0)}
          />
        </div>
      </div>

      {showSlider && (
        <ImageSliderPopup
          images={project?.projectImage}
          startIndex={sliderIndex}
          onClose={() => setShowSlider(false)}
        />
      )}
    </>
  );
};

const ImageSliderPopup = ({ images, startIndex, onClose }) => {
  const swiperRef = useRef(null);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
      onClick={handleOverlayClick}
    >
      <div className="relative max-w-6xl w-full h-[90%] flex items-center justify-center xs:px-4">
        <Swiper
          initialSlide={startIndex}
          slidesPerView={1}
          loop={true}
          // effect="fade"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[EffectFade]}
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-[300px] xs:h-[700px] object-contain object-center"
              />
            </SwiperSlide>
          ))}
          <button
            className="absolute top-12 xxs:top-10 xs:top-52 sm:top-48 md:top-36 lg:top-24 xl:top-14 right-3 xs:right-10 z-50 bg-black/50 text-white w-7 xs:w-10 h-7 xs:h-10 rounded-full text-xl xs:text-2xl"
            onClick={onClose}
          >
            &times;
          </button>
        </Swiper>

        {images.length > 1 && (
          <>
            <button
              className="absolute left-1 xs:left-5 top-1/2 transform z-10 -translate-y-1/2 bg-black/50 text-white px-3 py-3 rounded-full"
              onClick={() => swiperRef.current?.slidePrev()} // Slide to previous
            >
              <LuChevronLeft />
            </button>
            <button
              className="absolute right-1 xs:right-5 top-1/2 transform z-10 -translate-y-1/2 bg-black/50 text-white px-3 py-3 rounded-full"
              onClick={() => swiperRef.current?.slideNext()} // Slide to next
            >
              <LuChevronRight />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
