// import React, { useRef } from "react";
// import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Autoplay, Pagination } from "swiper/modules";
// import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

// import MamImage from "../assets/images/Mam.jpg";
// import SirImage from "../assets/images/Sir.jpeg";
// import project1 from "../assets/images/snow14.webp";
// import project2 from "../assets/images/3B26.webp";
// import project3 from "../assets/images/M110.webp";
// import project4 from "../assets/images/NN01.webp";

// // Projects Array for Slider
// const projects = [
//   { image: project1, link: "/allCategory" },
//   { image: project2, link: "/allCategory" },
//   { image: project3, link: "/allCategory" },
//   { image: project4, link: "/allCategory" },
// ];

// const People = () => {
//   const swiperRef = useRef(null);

//   return (
//     <section className="w-full min-h-screen">
//       {/* Team and Founder Section */}
//       <div className="container mx-auto flex flex-col md:flex-row gap-12 pb-16 pt-24 sm:pt-28 px-6 lg:px-12">
//         <ArticleCard
//           image={SirImage}
//           title="Khaan Aamir"
//           position="CEO & Founder | Principal Architect"
//           description="Leading with a vision for innovation, Khaan drives the company forward with a focus on geometric precision and cutting-edge solutions."
//         />
//         <ArticleCard
//           image={MamImage}
//           title="Kalpana Saini"
//           position="President & Founder | Principal Architect"
//           description="Kalpana ensures operational excellence, blending clarity and creativity to shape a dynamic, forward-thinking team."
//         />
//       </div>

//       {/* Slider Section */}
//       <div data-aos="fade-up" className="relative mx-auto max-w-6xl mb-6">
//         <Swiper
//           cssMode
//           mousewheel
//           autoplay={{ delay: 3000, disableOnInteraction: false }}
//           loop
//           pagination={{ clickable: true }}
//           modules={[Autoplay, Pagination]}
//           onSwiper={(swiper) => (swiperRef.current = swiper)}
//           className="rounded-lg shadow-xl"
//         >
//           {projects.map((project, index) => (
//             <SwiperSlide key={index} className="relative group">
//               <Link to={project.link}>
//                 <div className="w-full h-[75vh] sm:h-[90vh] overflow-hidden relative">
//                   <img
//                     src={project.image}
//                     alt={`Slide ${index + 1}`}
//                     className="w-full h-full object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-105"
//                     loading="lazy"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
//                 </div>
//               </Link>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Navigation Buttons */}
//         <button
//           className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all"
//           onClick={() => swiperRef.current?.slidePrev()}
//         >
//           <LuChevronLeft size={24} />
//         </button>
//         <button
//           className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all"
//           onClick={() => swiperRef.current?.slideNext()}
//         >
//           <LuChevronRight size={24} />
//         </button>
//       </div>
//     </section>
//   );
// };

// // Reusable ArticleCard Component
// const ArticleCard = ({ image, title, position }) => (
//   <div
//     data-aos="fade-up"
//     className="group w-full md:w-1/2 relative rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-2"
//   >
//     {/* Image */}
//     <img
//       src={image}
//       alt={title}
//       className="w-full h-[450px] object-cover object-top transition-transform duration-500 group-hover:scale-110"
//     />

// <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-300 sm:group-hover:bg-black/50"></div>

//     {/* Content */}
//     <div className="absolute bottom-4 left-4 text-white">
//       <h2 className="text-2xl font-semibold border-b-2 inline">{title}</h2>
//       <p className="text-sm mt-1 opacity-80">{position}</p>
//     </div>
//   </div>
// );

// export default People;


import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import MamImage from "../assets/images/Mam.jpg";
import SirImage from "../assets/images/Sir.jpeg";
import project1 from "../assets/images/snow14.webp";
import project2 from "../assets/images/3B26.webp";
import project3 from "../assets/images/M110.webp";
import project4 from "../assets/images/NN01.webp";

const projects = [
  { image: project1, link: "/allCategory" },
  { image: project2, link: "/allCategory" },
  { image: project3, link: "/allCategory" },
  { image: project4, link: "/allCategory" },
];

const People = () => {
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="w-full min-h-screen bg-gray-950">
      {/* Team and Founder Section */}
      <div className="px-6 lg:px-12 pt-24 pb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h1 className="text-2xl sm:text-4xl font-bold text-white mb-4">Our Leadership</h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Visionary architects shaping the future of design
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 mb-24">
          <ArticleCard
            image={SirImage}
            title="Khaan Aamir"
            position="CEO & Founder | Principal Architect"
            description="Leading with a vision for innovation, Khaan drives the company forward with a focus on geometric precision and cutting-edge solutions."
          />
          <ArticleCard
            image={MamImage}
            title="Kalpana Saini"
            position="President & Founder | Principal Architect"
            description="Kalpana ensures operational excellence, blending clarity and creativity to shape a dynamic, forward-thinking team."
          />
        </div>

        {/* Featured Projects Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className=""
        >
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-8 text-center">
            Featured Projects
          </h2>
          
          <div className="relative">
            <Swiper
              cssMode
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <Link to={project.link} className="block">
                    <div className="relative w-full md:h-[90vh] overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full object-cover"
                        initial={{ scale: 1.1 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 1.5 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <button
              ref={prevRef}
              className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 w-8 md:w-12 h-8 md:h-12 flex items-center justify-center bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <LuChevronLeft size={24} />
            </button>
            <button
              ref={nextRef}
              className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 w-8 md:w-12 h-8 md:h-12 flex items-center justify-center bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <LuChevronRight size={24} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ArticleCard = ({ image, title, position, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="w-full md:w-1/2 group relative overflow-hidden rounded-xl shadow-lg"
  >
    <div className="relative h-[500px] overflow-hidden">
      <motion.img
        src={image}
        alt={title}
        className="w-full h-full object-cover object-top"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.8 }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-8 text-white transition-all duration-500 group-hover:bg-black/30">
        <div className="transform transition-all duration-500 group-hover:-translate-y-4">
          <h2 className="text-3xl font-bold mb-2">{title}</h2>
          <p className="text-indigo-300 font-medium mb-4">{position}</p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          whileHover={{ opacity: 1, height: 'auto' }}
          className="overflow-hidden"
        >
          <p className="text-gray-300 mt-4">{description}</p>
        </motion.div>
      </div>
    </div>
  </motion.div>
);

export default People;