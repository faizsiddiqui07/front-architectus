import React from "react";
import { motion } from "framer-motion";
import image from "../assets/images/about.webp";
import { FaLeaf, FaLightbulb, FaPalette, FaUsers } from "react-icons/fa";

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="w-full bg-gray-950">
      {/* Hero Section */}
      <div className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
        <motion.img
          src={image}
          className="w-full h-full object-cover"
          alt="About Architectus Bureau"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full px-6 lg:px-12 pb-12">
          <motion.h1
            className="text-2xl md:text-4xl font-bold text-white max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="mt-4 text-base md:text-lg text-gray-300 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Redefining architecture through innovation and sustainability
          </motion.p>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-6 lg:px-12 py-10 sm:py-14 max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeIn} className="mb-6">
            <motion.p
              className="w-full max-w-7xl mx-auto text-center text-base text-gray-300 "
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <span className="font-semibold text-white">
                Architectus Bureau
              </span>
              , founded by visionary architects{" "}
              <span className="font-semibold text-white">
                Khaan Aamir + Kalpana Saini & Co.
              </span>
              , is redefining architectural design through innovative,
              sustainable spaces that blend form and function as living art.
            </motion.p>
          </motion.div>

          {/* Philosophy Section */}
          <motion.div variants={fadeIn} className="mb-8 sm:mb-10">
            <p className="text-base text-gray-300 leading-relaxed text-center">
              At its core,{" "}
              <span className="font-semibold text-white">
                Architectus Bureau
              </span>{" "}
              believes architecture is more than building structures—it is about
              crafting experiences. Guided by a commitment to design excellence,
              the firm embraces an experimental approach that challenges
              conventions while maintaining harmony with the environment.
            </p>
            <p className="text-base text-gray-300 leading-relaxed mb-8 text-center">
              {" "}
              The firm’s design philosophy revolves around innovation fused with
              cultural relevance, ensuring that every project tells a unique
              story. Key aspects of our approach include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
              {[
                {
                  icon: <FaLeaf className="text-3xl text-emerald-400" />,
                  title: "Contextual Sensitivity",
                  desc: " Tailoring designs to align with the geographical, cultural, and social fabric of the location.",
                },
                {
                  icon: <FaLightbulb className="text-3xl text-amber-400" />,
                  title: "Experimental Techniques",
                  desc: " Utilizing cutting-edge technologies like parametric modeling, 3D printing, and VR simulations to explore unconventional solutions.",
                },
                {
                  icon: <FaLeaf className="text-3xl text-green-400" />,
                  title: "Sustainability in Every Detail",
                  desc: "From passive cooling techniques and green roofs to renewable energy integration, the firm prioritizes eco-conscious solutions.",
                },
                {
                  icon: <FaPalette className="text-3xl text-indigo-400" />,
                  title: "Functional Aesthetics",
                  desc: "Striking a balance between beauty and usability by crafting spaces that inspire and perform simultaneously.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-indigo-500/50 transition-all duration-300 h-full"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    {item.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-300">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeIn} className="mb-8 sm:mb-10">
            <p className="text-base text-gray-300 leading-relaxed text-center mb-8">
              Architectus Bureau is committed to leaving a minimal ecological
              footprint. Our projects emphasize:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
              {[
                {
                  icon: <FaLeaf className="text-3xl text-emerald-400" />,
                  title: "Energy Efficiency",
                  desc: "Smart building systems, natural lighting, and renewable energy integration.",
                },
                {
                  icon: <FaLightbulb className="text-3xl text-amber-400" />,
                  title: "Material Innovation",
                  desc: "Use of locally sourced, recycled, and low-impact materials.",
                },
                {
                  icon: <FaLeaf className="text-3xl text-green-400" />,
                  title: "Biodiversity Promotion",
                  desc: "Designs that incorporate green spaces, urban forests, and water conservation techniques.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-indigo-500/50 transition-all duration-300 h-full"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    {item.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-300">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team Section */}
          <motion.div variants={fadeIn} className="mb-8 sm:mb-10">
            <p className="text-base text-gray-300 leading-relaxed mb-8 text-center">
              Under the dynamic leadership of Khaan Aamir and Kalpana Saini, the
              firm thrives on a collaborative culture. Architectus Bureau brings
              together a multidisciplinary team of:
            </p>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  "Architects, urban planners, and designers who specialize in cutting-edge technologies.",
                  "Engineers and sustainability consultants who ensure technical and environmental feasibility.",
                  "Artists and craftsmen who add unique cultural and artistic elements to each project.",
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-indigo-900/50 border border-indigo-700 flex items-center justify-center mr-4 mt-1">
                      <span className="text-indigo-300">{index + 1}</span>
                    </div>
                    <p className="text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Closing Section */}
          <motion.div variants={fadeIn} className="text-center">
            <p className="text-base text-gray-300 leading-relaxed max-w-7xl mx-auto">
              Architectus Bureau continues to evolve as a trendsetter in
              architecture, pushing boundaries in the realms of smart cities,
              biophilic design, and sustainable urban development. With a strong
              foundation built on innovation and integrity, the firm remains
              dedicated to transforming spaces into icons of living art for
              generations to come.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
