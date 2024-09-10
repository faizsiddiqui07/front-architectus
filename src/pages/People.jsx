import React from "react";
import teamImage from "../assets/images/group-business-people-meeting.jpg";
import ownerImage from "../assets/images/workers-it-company-working-computer.jpg";
import { Link } from "react-router-dom";

const People = () => {
  return (
    <section className="w-full relative top-[65px] sm:top-[73px]">
      {/* Hero Image with Text Overlay */}
      <div className="relative w-full h-[300px] sm:h-[400px] overflow-hidden">
        <img
          src={teamImage}
          alt="Team"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 65%, black 100%)",
          }}
        ></div>
        <div className="absolute inset-0 flex items-end pb-8 px-4 lg:px-14">
          <h1 className="text-white text-4xl font-bold">People</h1>
        </div>
      </div>

      {/* Team and Founder Section */}
      <div className="w-full flex flex-col sm:flex-row gap-8 py-16 px-4 lg:px-14">
        {/* Founder Section */}
        <ArticleCard image={ownerImage} title="Founder" url="/people/founder" />

        {/* Team Section */}
        <ArticleCard image={teamImage} title="Team" url="/people/team" />
      </div>
    </section>
  );
};

// Reusable ArticleCard Component
const ArticleCard = ({ image, title, url }) => (
  <Link to={url} className="w-full sm:w-1/2 relative rounded-lg overflow-hidden shadow-lg">
    <img src={image} alt={title} className="w-full h-[400px] object-cover" />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
    <h2 className="absolute bottom-8 left-0 right-0 text-3xl font-bold text-white text-center">
      {title}
    </h2>
  </Link>
);

export default People;
