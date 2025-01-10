import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { base_url } from "../config/config";
import scrollTop from "@/helpers/scrollTop";

const CategoryProjectPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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
    scrollTop()
    navigate(`/category/${slug}`);
  };

  return (
    <div className="w-full relative top-[65px] sm:top-[73px]">
      <div className="sticky top-[64px] sm:top-[72px] bg-[#1a1a1a] border-t border-[#3939399f] z-20">
        <div className="w-full py-3 xxs:py-5 px-4 lg:px-10 flex justify-between items-center flex-col xxs:flex-row border-b gap-3 border-[#7a78789f]">
          <p className="text-white text-xl md:text-2xl">Projects</p>
        </div>
      </div>
      <main className="px-4 lg:px-10">
        <section className="my-6 mb-36">
          {loading ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : groupedCategories.length === 0 ? (
            <p className="text-center text-gray-500">No categories found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {groupedCategories.map((category, index) => (
                <div
                  key={index}
                  className="cursor-pointer"
                  onClick={() => handleCategoryClick(category.slug)}
                >
                  <div className="relative shadow-lg rounded-md">
                    <img
                      src={category.projectImage}
                      alt={category.projectType}
                      className="w-full object-cover"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to bottom, transparent 65%, black 100%)",
                      }}
                    ></div>
                    <div className="p-4 absolute bottom-0 w-full">
                      <p className=" text-white text-xl md:text-2xl">
                        {category.projectType}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default CategoryProjectPage;
