import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { LuChevronLeft, LuChevronRight, LuExternalLink } from "react-icons/lu";
import { 
  FiLinkedin, 
  FiInstagram, 
  FiFacebook,
} from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import MamImage from "../assets/images/Mam.webp";
import SirImage from "../assets/images/Sir.webp";
import project1 from "../assets/images/snow14.webp";
import project2 from "../assets/images/3B26.webp";
import project3 from "../assets/images/M110.webp";
import project4 from "../assets/images/NN01.webp";

const projects = [
  {
    image: project1,
    link: "/allCategory",
  },
  {
    image: project2,
    link: "/allCategory",
  },
  {
    image: project3,
    link: "/allCategory",
  },
  {
    image: project4,
    link: "/allCategory",
  },
];

const People = () => {
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.params.navigation.prevEl = prevRef.current;
      swiperRef.current.swiper.params.navigation.nextEl = nextRef.current;
      swiperRef.current.swiper.navigation.init();
      swiperRef.current.swiper.navigation.update();
    }
  }, []);

  return (
    <section className="w-full min-h-screen bg-gray-950 overflow-hidden">
      {/* Team and Founder Section */}
      <div className="px-6 lg:px-12 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:md-12 md:mb-16 text-center"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-12 h-px bg-amber-500 mr-4"></div>
            <span className="text-amber-500 font-medium uppercase tracking-wider text-sm">
              Our Leadership
            </span>
            <div className="w-12 h-px bg-amber-500 ml-4"></div>
          </div>
          <h1 className="text-[27px] xxs:text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Visionary Architects
          </h1>
          <p className="text-base xxs:text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Meet the innovative minds shaping the future of architectural design
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-16">
          <LeaderCard
            image={SirImage}
            name="Khaan Aamir"
            position="CEO & Founder | Principal Architect"
            description="Khaan Aamir is an Architect & Researcher, shaping the future of design through innovation, sustainability, and experimental architecture. As Founder of Architectus Bureau, Archifie, BUILDiFIE, OWNiFiE, BrainQbit & MAGNECRON, he integrates architecture, technology, and investment into transformative real estate and design ecosystems."
            linkedin="https://www.linkedin.com/in/khaan-aamir-a65444361/"
            twitter="https://x.com/KhaanAamir_92"
            facebook="https://www.facebook.com/aamir.khaan.566/"
            instagram="https://www.instagram.com/khaanaamir_and_partners/"
           
          />
          <LeaderCard
            image={MamImage}
            name="Kalpana Saini"
            position="President & Founder | Principal Architect"
            description="Kalpana Saini is an Architect & Artist who blends design with creativity to craft sustainable, human-centered spaces. As Founder of Architectus Bureau, Archifie, BUILDiFIE , OWNiFiE, BrainQbit & MAGNECRON, she integrates architecture, art, and innovation into timeless, experiential designs."
            linkedin="https://www.linkedin.com/in/kalpana-saini-763280365/"
            twitter="#"
            facebook="https://www.facebook.com/kalpana.saini.5"
            instagram="https://www.instagram.com/saini_kalpna/"
          />
        </div>

        {/* Featured Projects Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12 md:mb-16"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="w-12 h-px bg-amber-500 mr-4"></div>
              <span className="text-amber-500 font-medium uppercase tracking-wider text-sm">
                Featured Work
              </span>
              <div className="w-12 h-px bg-amber-500 ml-4"></div>
            </div>
            <h2 className="text-[27px] xxs:text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Signature <span className="text-amber-500">Projects</span>
            </h2>
            <p className="text-base xxs:text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our portfolio of innovative architectural solutions
            </p>
          </div>

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
              onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <Link to={project.link} className="block group">
                    <div className="relative w-full h-[55vh] xxs:h-[60vh] sm:h-[70vh] md:h-[90vh] overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full object-cover"
                        initial={{ scale: 1.1 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 1.5 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                      {/* Project Info Overlay */}
                      <div className="absolute bottom-0 left-0 w-full p-8 text-white transform transition-all duration-700 group-hover:translate-y-0 translate-y-4">
                        <motion.div
                          className="mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          initial={{ opacity: 0 }}
                        >
                          <span className="text-amber-400 font-medium">
                            {project.category}
                          </span>
                        </motion.div>
                        <h3 className="text-3xl md:text-4xl font-bold mb-4">
                          {project.title}
                        </h3>
                        <motion.div
                          className="flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                          initial={{ opacity: 0 }}
                        >
                          <span className="mr-2">View Project</span>
                          <LuExternalLink size={18} />
                        </motion.div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <button
              ref={prevRef}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-black/50 hover:bg-amber-500 text-white rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110"
            >
              <LuChevronLeft size={24} />
            </button>
            <button
              ref={nextRef}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-black/50 hover:bg-amber-500 text-white rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110"
            >
              <LuChevronRight size={24} />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeSlide
                      ? "bg-amber-500 scale-125"
                      : "bg-white/50"
                  }`}
                  onClick={() => {
                    if (swiperRef.current) {
                      swiperRef.current.swiper.slideTo(index);
                    }
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h3>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Let's collaborate to create something extraordinary together
          </p>
          <Link
            to="/contact"
            className="px-5 sm:px-8 py-3 sm:py-4 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const LeaderCard = ({
  image,
  name,
  position,
  description,
  linkedin,
  facebook,
  twitter,
  instagram
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Social media icons configuration
  const socialLinks = [
    {
      icon: FiLinkedin,
      href: linkedin,
      label: "LinkedIn",
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-500/20"
    },
    {
      icon: FiFacebook,
      href: facebook,
      label: "Facebook",
      color: "hover:text-blue-600",
      bgColor: "hover:bg-blue-700/20"
    },
    {
      icon: FiInstagram,
      href: instagram,
      label: "Instagram",
      color: "hover:text-pink-400",
      bgColor: "hover:bg-pink-500/20"
    },
    {
      icon: BsTwitterX,
      href: twitter,
      label: "Twitter",
      color: "hover:text-gray-300",
      bgColor: "hover:bg-gray-400/20"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full lg:w-1/2 group relative overflow-hidden rounded-2xl shadow-xl bg-gray-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-[500px] overflow-hidden">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          initial={{ scale: 1 }}
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.8 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
          <motion.div
            className="transform transition-all duration-500"
            animate={{ y: isHovered ? -20 : 0 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">{name}</h2>
            <p className="text-sm sm:text-base text-amber-400 font-medium">{position}</p>
          </motion.div>

          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden"
              >
                <p className="text-sm sm:text-base text-gray-200 mb-6 leading-relaxed">
                  {description}
                </p>
                
                {/* Social Media Icons */}
                <div className="flex items-center space-x-3 mb-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 rounded-full bg-gray-800/50 border border-gray-700 flex items-center justify-center text-gray-300 transition-all duration-300 backdrop-blur-sm ${social.color} ${social.bgColor} hover:scale-110 hover:border-current`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <social.icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default People;