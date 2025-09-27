import React from "react";
import { motion } from "framer-motion";
import image from "../assets/images/about.webp";

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
            className="text-4xl md:text-4xl font-bold text-white max-w-4xl leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="mt-4 text-xl text-gray-300 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Redefining architecture through innovation and sustainability
          </motion.p>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-6 lg:px-12 py-16 sm:py-20 max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Introduction */}
          <motion.div variants={fadeIn} className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              <span className="text-amber-500">Architectus Bureau</span>
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Founded by visionary architects{" "}
              <span className="font-semibold text-white">
                Khaan Aamir + Kalpana Saini & Co.
              </span>
              , is redefining architectural design through innovative,
              sustainable spaces that blend form and function as living art.
            </p>
          </motion.div>

          {/* Philosophy Section */}
          <motion.div variants={fadeIn} className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Our Design Philosophy
                </h3>
                <div className="w-16 h-1 bg-amber-500 mb-6"></div>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  At its core, Architectus Bureau believes architecture is more
                  than building structures—it is about crafting experiences.
                  Guided by a commitment to design excellence, the firm embraces
                  an experimental approach that challenges conventions while
                  maintaining harmony with the environment.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  The firm’s design philosophy revolves around innovation fused
                  with cultural relevance, ensuring that every project tells a
                  unique story. Key aspects of our approach include:
                </p>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 h-full">
                <h4 className="text-xl font-semibold text-white mb-6 text-center">
                  Core Design Principles
                </h4>
                <div className="space-y-6">
                  {[
                    {
                      title: "Contextual Sensitivity",
                      desc: "Tailoring designs to align with the geographical, cultural, and social fabric of the location.",
                      color: "from-emerald-500/10 to-emerald-600/5",
                    },
                    {
                      title: "Experimental Techniques",
                      desc: "Utilizing cutting-edge technologies like parametric modeling, 3D printing, and VR simulations to explore unconventional solutions.",
                      color: "from-amber-500/10 to-amber-600/5",
                    },
                    {
                      title: "Sustainability Integration",
                      desc: "From passive cooling techniques and green roofs to renewable energy integration, the firm prioritizes eco-conscious solutions.",
                      color: "from-green-500/10 to-green-600/5",
                    },
                    {
                      title: "Functional Aesthetics",
                      desc: "Striking a balance between beauty and usability by crafting spaces that inspire and perform simultaneously.",
                      color: "from-indigo-500/10 to-indigo-600/5",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className={`bg-gradient-to-r ${item.color} border border-gray-800 rounded-xl p-5 transition-all duration-300 hover:border-amber-500/30`}
                      whileHover={{ y: -3 }}
                    >
                      <h5 className="text-lg font-semibold text-white mb-2">
                        {item.title}
                      </h5>
                      <p className="text-gray-300">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sustainability Section */}
          <motion.div variants={fadeIn} className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Commitment to Sustainability
              </h3>
              <div className="w-16 h-1 bg-amber-500 mx-auto mb-4"></div>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
               Architectus Bureau is committed to leaving a minimal ecological footprint. Our projects emphasize:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Energy Efficiency",
                  desc: "Smart building systems, natural lighting, and renewable energy integration.",
                },
                {
                  title: "Material Innovation",
                  desc: "Use of locally sourced, recycled, and low-impact materials.",
                },
                {
                  title: "Biodiversity Promotion",
                  desc: "Designs that incorporate green spaces, urban forests, and water conservation techniques.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 text-center group hover:border-amber-500/30 transition-all duration-500"
                  whileHover={{ y: -8 }}
                >
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-600/10 group-hover:from-amber-500/30 group-hover:to-amber-600/20 transition-all duration-500">
                      <span className="text-2xl font-bold text-amber-500">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-4">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 mb-4">{item.desc}</p>
                  <div className="mt-4 pt-4 border-t border-gray-800">
                    <p className="text-amber-500 font-medium">{item.stats}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team Section */}
          <motion.div variants={fadeIn} className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                  Our Multidisciplinary Team
                </h3>
                <div className="space-y-6">
                  {[
                    "Architects, urban planners, and designers who specialize in cutting-edge technologies.",
                    "Engineers and sustainability consultants who ensure technical and environmental feasibility.",
                    "Artists and craftsmen who add unique cultural and artistic elements to each project.",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 flex items-center justify-center mr-4 mt-1">
                        <span className="text-amber-500 font-medium">
                          {index + 1}
                        </span>
                      </div>
                      <p className="text-gray-300 text-lg">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Collaborative Leadership
                </h3>
                <div className="w-16 h-1 bg-amber-500 mb-6"></div>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                 Under the dynamic leadership of Khaan Aamir and Kalpana Saini, the firm thrives on a collaborative culture. Architectus Bureau brings together a multidisciplinary team of:
                </p>
              </div>
            </div>
          </motion.div>

          {/* Closing Section */}
          <motion.div
            variants={fadeIn}
            className="text-center py-12 px-8 bg-gray-900/50 border border-gray-800 rounded-2xl"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Shaping the Future of Architecture
            </h3>
            <div className="w-16 h-1 bg-amber-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
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
