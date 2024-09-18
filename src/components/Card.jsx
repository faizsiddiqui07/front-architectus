import React from "react";
import { Link } from "react-router-dom";
import scrollTop from '../helpers/scrollTop'

const Card = ({ project, highlightedText }) => {
  // Function to highlight the search term within the project name
  const highlightText = (text, highlight) => {
    if (!highlight || !highlight.trim()) return text;

    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={index} className="bg-yellow-300">{part}</span>
      ) : (
        part
      )
    );
  };

  return (
    <Link to={`/project/${project.slug}`} className="block w-full" onClick={scrollTop}>
      <div className="bg-white shadow-lg rounded-md overflow-hidden">
        <img
          src={project.projectImage?.[0]}
          alt={project.projectName}
          className="w-full h-full object-cover"
        />
        <div className="p-3">
          <p className="text-sm font-semibold text-gray-600">
            {project.completionDate.split("-", 1)}  {project.projectAddress}
          </p>
          <h5 className="text-lg text-[#333333] font-medium ">
            {/* Apply the highlightText function to the project name */}
            {highlightText(
              project.projectName.length > 70
                ? `${project.projectName.slice(0, 70)}...`
                : project.projectName,
              highlightedText
            )}
          </h5>
        </div>
      </div>
    </Link>
  );
};

export default Card;
