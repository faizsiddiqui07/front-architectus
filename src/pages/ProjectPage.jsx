import React, { useEffect, useState } from "react";
import axios from "axios";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Card from "../components/Card";
import { base_url } from "../config/config";

// Reusable Dropdown component
const Dropdown = ({ label, items, selected, onSelect }) => (
  <Menu as="div" className="relative w-full sm:w-[50%] lg:w-[25%] inline-block text-left">
    <MenuButton className="flex justify-between w-full gap-x-1.5 bg-white px-5 py-2 text-sm font-light text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 rounded-full">
      {selected || label}
      <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
    </MenuButton>
    <MenuItems className="absolute right-0 z-10 mt-2 w-full max-h-64 overflow-y-auto origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
      <div className="py-1">
        {items.map((item, index) => (
          <MenuItem key={index}>
            {({ active }) => (
              <button
                onClick={() => onSelect(item)}
                className={`${
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                } block px-4 py-2 text-sm w-full text-left`}
              >
                {item}
              </button>
            )}
          </MenuItem>
        ))}
      </div>
    </MenuItems>
  </Menu>
);

const ProjectPage = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedType, setSelectedType] = useState("All project types");
  const [searchTerm, setSearchTerm] = useState("");
  const [projectTypes, setProjectTypes] = useState([]);

  const getProjects = async () => {
    try {
      const response = await axios.get(`${base_url}/api/getProject`);
      const projectData = response.data.data;
      setProjects(projectData);
      setFilteredProjects(projectData);

      const types = ["All project types", ...new Set(projectData.map(p => p.projectType))];
      setProjectTypes(types);
    } catch (error) {
      setError("Error fetching projects. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Simulate loading for 2 seconds
    setTimeout(() => {
      getProjects();
    }, 100);
  }, []);

  useEffect(() => {
    const filterProjects = () => {
      let filtered = projects;

      if (selectedType !== "All project types") {
        filtered = filtered.filter(project => project.projectType === selectedType);
      }
      if (searchTerm) {
        filtered = filtered.filter(project => 
          project.projectName.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      setFilteredProjects(filtered);
    };

    filterProjects();
  }, [selectedType, searchTerm, projects]);

  // Skeleton Loader
  const renderSkeleton = () => (
    <div className="w-full flex flex-wrap justify-center gap-6">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="w-full sm:w-[48%] lg:w-[48%] xl:w-[31.50%] -z-20">
          <div className="animate-pulse">
            <div className="h-60 bg-gray-700 rounded-md mb-4"></div>
            <div className="h-4 bg-gray-600 rounded w-3/4 mx-auto"></div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full relative top-[65px] sm:top-[73px]">
      <div className="sticky top-[-1px] bg-[#1a1a1a] border-t border-[#3939399f]">
        <div className="w-full h-[75px] px-4 lg:px-14 flex justify-between items-center">
          <p className="text-white text-2xl">Projects</p>
          <span className="text-white text-xl">{filteredProjects.length} Projects</span>
        </div>
        <div className="w-full h-[130px] sm:h-[85px] px-4 lg:px-14 border-y border-[#7a78789f] flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-3 sm:gap-5">
          <input
            className="w-full sm:w-[50%] rounded-full px-5 py-[7px] outline-none"
            placeholder="Search Project..."
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Dropdown
            label="All project types"
            items={projectTypes}
            selected={selectedType}
            onSelect={setSelectedType}
          />
        </div>
      </div>
      <main className="px-4 lg:px-14">
        <section className="my-6 mb-36">
          {loading ? (
            renderSkeleton()
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : filteredProjects.length === 0 ? (
            <p className="text-center text-gray-500">No projects found.</p>
          ) : (
            <div className="w-full flex flex-wrap gap-6">
              {filteredProjects.map((project, index) => (
                <div key={index} className="w-full mx-auto sm:w-[48%] lg:w-[48%] xl:w-[31.50%] flex justify-between">
                  <Card project={project} highlightedText={searchTerm} />
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default ProjectPage;
