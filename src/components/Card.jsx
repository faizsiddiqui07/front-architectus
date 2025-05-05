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

  const coverImage = project?.projectImage?.[0]?.url || project?.projectImage?.[0];

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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
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
              <img
                src={image?.url || image}
                alt={`Slide ${index + 1}`}
                className="w-full h-[300px] xs:h-[700px] object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          onClick={onClose}
          className="absolute top-16 right-12 text-white bg-black/60 hover:bg-black/80 rounded-full w-10 h-10 flex items-center justify-center text-xl z-50"
          aria-label="Close slider"
        >
          &times;
        </button>

        {images.length > 1 && (
          <>
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full"
              aria-label="Previous slide"
            >
              <LuChevronLeft size={15} />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full"
              aria-label="Next slide"
            >
              <LuChevronRight size={15} />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
