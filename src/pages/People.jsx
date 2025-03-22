import React from "react";
import teamImage from "../assets/images/group-business-people-meeting.jpg";
import MamImage from "../assets/images/Mam.jpg";
import SirImage from "../assets/images/Sir.jpeg";

const People = () => {
  return (
    <section className="w-full min-h-screen ">
      {/* Team and Founder Section */}
      <div className="container mx-auto flex flex-col md:flex-row gap-12 pb-16 pt-24 sm:pt-28 px-6 lg:px-12">
        <ArticleCard
          image={SirImage}
          title="Khaan Aamir"
          position="CEO & Founder | Principle Architect"
          description="Leading with a vision for innovation, Khaan drives the company forward with a focus on geometric precision and cutting-edge solutions. "
        />
        <ArticleCard
          image={MamImage}
          title="Kalpana Saini"
          position="President & Founder | Principle Architect"
          description="Kalpana ensures operational excellence, blending clarity and creativity to shape a dynamic, forward-thinking team."
        />
      </div>

      {/* Hero Image Section */}
      <div
        data-aos="fade-up"
        className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden mb-20 shadow-2xl"
      >
        <img
          src={teamImage}
          alt="Our Team"
          className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent flex items-end">
          <div className="text-center text-white p-8 w-full">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Our Team
            </h1>
            <p className="text-lg md:text-xl mt-2 opacity-90">
              United in purpose, diverse in talent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable ArticleCard Component
const ArticleCard = ({ image, title, position, description }) => (
  <div
    data-aos="fade-up"
    className="group w-full md:w-1/2 relative rounded-xl overflow-hidden shadow-lg transform transition-all duration-500 hover:-translate-y-2"
  >
    {/* Image */}
    <img
      src={image}
      alt={title}
      className="w-full h-[450px] object-cover object-top transition-all duration-500 group-hover:scale-100 sm:group-hover:scale-110"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-300 sm:group-hover:bg-black/50"></div>

    {/* Content */}
    <div className="absolute bottom-0 p-6 w-full text-white transition-all duration-300 ">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-wide border-b-2 inline">
        {title}
      </h2>
      <p className="text-lg md:text-xl text-gray-200 mt-1">{position}</p>
      <p className="mt-4 text-base ">
        {description}
      </p>
    </div>
  </div>
);

export default People;