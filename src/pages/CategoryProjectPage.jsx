import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { base_url } from "../config/config";
import scrollTop from "@/helpers/scrollTop";
import { motion } from "framer-motion";

const CategoryProjectPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 
  const [loadedImages, setLoadedImages] = useState({});
  const navigate = useNavigate();

  const handleImageLoad = (index) => {
    setLoadedImages(prev => ({ ...prev, [index]: true }));
  };

  const getProjects = async () => {
    try {
      const response = await axios.get(`${base_url}/api/getProject`);
      const projectData = response.data.data;
      setProjects(projectData);
    } catch (error) {
      setError("Error fetching projects. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProjects();      
  }, []);

  // Group projects by category
  const groupedCategories = Object.values(
    projects.reduce((acc, project) => {
      if (!acc[project.projectType]) {
        acc[project.projectType] = {
          projectType: project.projectType,
          projectImage: project.projectImage[0],
          slug: project.slug,
        };
      }
      return acc;
    }, {})
  );

  const handleCategoryClick = (slug) => {
    scrollTop();
    navigate(`/category/${slug}`); 
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="w-full relative top-16 sm:top-[73px] mb-[73px] bg-gray-950">
      {/* Sticky Header */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="sticky top-16 sm:top-[72px] bg-gray-900/80 backdrop-blur-sm z-20 border-b border-gray-800"
      >
        <div className="w-full py-4 px-4 lg:px-10">
          <h1 className="text-white text-2xl md:text-3xl font-medium tracking-tight">
            Project
          </h1>
        </div>
      </motion.div>

      {/* Main Content */}
      <main className="px-4 lg:px-10 py-8">
        <section className="">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-pulse flex flex-col items-center">
                <div className="w-12 h-12 bg-gray-800 rounded-full mb-4"></div>
                <p className="text-gray-400">Loading categories...</p>
              </div>
            </div>
          ) : error ? (
            <div className="bg-red-900/20 border border-red-800 rounded-lg p-4 text-center">
              <p className="text-red-400">{error}</p>
            </div>
          ) : groupedCategories.length === 0 ? (
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 text-center">
              <p className="text-gray-400">No categories found.</p>
            </div>
          ) : (
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
            >
              {groupedCategories.map((category, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="relative cursor-pointer group break-inside-avoid"
                  onClick={() => handleCategoryClick(category.slug)}
                >
                  <div className="relative overflow-hidden rounded-xl transition-all duration-300 group-hover:shadow-xl group-hover:shadow-indigo-900/20">
                    <img
                      src={category.projectImage}
                      alt={category.projectType}
                      loading="lazy"
                      className={`w-full h-auto rounded-t-xl ${
                        loadedImages[index] ? 'opacity-100' : 'opacity-0'
                      }`}
                      onLoad={() => handleImageLoad(index)}
                    />
                    {!loadedImages[index] && (
                      <div className="absolute inset-0 bg-gray-800 rounded-xl animate-pulse"></div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent rounded-xl"></div>
                    <div className="absolute bottom-0 left-0 p-3 sm:p-6 w-full">
                      <h3 className="text-white text-xl sm:text-2xl font-medium tracking-tight transition-all duration-300 group-hover:text-indigo-300">
                        {category.projectType}
                      </h3>
                    </div>
                    <div className="absolute inset-0 border border-gray-800 rounded-xl pointer-events-none group-hover:border-indigo-500/50 transition-all duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </section>
      </main>
    </div>
  );
};

export default CategoryProjectPage;