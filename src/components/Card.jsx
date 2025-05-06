import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { EffectFade } from "swiper/modules";

const Card = ({ project }) => {
  const [showSlider, setShowSlider] = useState(false);
  const [sliderIndex, setSliderIndex] = useState(0);

  const handleImageClick = (index) => {
    setSliderIndex(index);
    setShowSlider(true);
  };

  useEffect(() => {
    document.body.style.overflow = showSlider ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showSlider]);

  const coverImage =
    project?.projectImage?.[0]?.url || project?.projectImage?.[0];

  return (
    <>
      <div className="block w-full cursor-pointer">
        <div className="bg-white shadow-md rounded-md overflow-hidden">
          <img
            src={coverImage}
            alt={project.projectName || "Project Image"}
            className="w-full h-full object-cover"
            onClick={() => handleImageClick(0)}
          />
        </div>
      </div>

      {showSlider && (
        <ImageSliderPopup
          images={project.projectImage}
          startIndex={sliderIndex}
          onClose={() => setShowSlider(false)}
        />
      )}
    </>
  );
};

const ImageSliderPopup = ({ images = [], startIndex, onClose }) => {
  const swiperRef = useRef(null);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={handleOverlayClick}
    >
      <div className="relative max-w-6xl w-full h-[90%] flex items-center justify-center px-4">
        <Swiper
          initialSlide={startIndex}
          slidesPerView={1}
          loop
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[EffectFade]}
          className="w-full h-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center h-full">
                <img
                  src={image?.url || image}
                  alt={`Slide ${index + 1}`}
                  className="max-h-[80vh] object-contain rounded-xl shadow-xl transition-all duration-500"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute w-5 h-5 flex justify-center items-center top-44 xxs:top-40 xs:top-32 sm:top-20 md:top-10 right-5 lg:right-20 text-white bg-black/60 hover:bg-red-600 transition-all p-4 rounded-full text-xl z-50"
          aria-label="Close slider"
        >
          &times;
        </button>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-transform duration-300 hover:scale-110"
              aria-label="Previous slide"
            >
              <LuChevronLeft className="w-5 h-5 rounded-full" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-transform duration-300 hover:scale-110"
              aria-label="Next slide"
            >
              <LuChevronRight className="w-5 h-5 rounded-full" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};


export default Card;
