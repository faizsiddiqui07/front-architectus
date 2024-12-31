import React from "react";
import teamImage from "../assets/images/group-business-people-meeting.jpg";
import ownerImage from "../assets/images/workers-it-company-working-computer.jpg";
import { Link, useParams } from "react-router-dom";

const PeopleDetails = () => {
  const { slug } = useParams();

  return (
    <section className="w-full">
      {/* Hero Image with Text Overlay */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[600px] overflow-hidden">
        <img
          src={teamImage}
          alt="Team"
          className="w-full h-full object-cover object-top"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 65%, black 100%)",
          }}
        ></div>
        <div className="absolute inset-0 flex items-end pb-8 px-6 md:px-10">
          <h1 className="text-white text-3xl md:text-4xl font-bold capitalize">
            {slug}
          </h1>
        </div>
      </div>

      {/* Team and Founder Section */}
      <div className="w-full flex flex-col md:flex-row gap-10 py-16 px-6 lg:px-12">
        {/* Founder Section */}
        <ArticleCard
          image={ownerImage}
          title="Khaan Aamir"
          position="CEO & Founder"
          description="Emphasizing straight lines and geometric shapes, the design features simple, unadorned forms that create a sense of order and clarity. Cutting-edge design elements, such as cantilevered structures and unconventional shapes, add visual interest and underscore the residence's contemporary nature."
          url="/people/founder"
        />

        {/* Team Section */}
        <ArticleCard
          image={ownerImage}
          title="Kalpana Saini"
          position="COO & Founder"
          description="Emphasizing straight lines and geometric shapes, the design features simple, unadorned forms that create a sense of order and clarity. Cutting-edge design elements, such as cantilevered structures and unconventional shapes, add visual interest and underscore the residence's contemporary nature."
          url="/people/team"
        />
      </div>
    </section>
  );
};

// Reusable ArticleCard Component
const ArticleCard = ({ image, title, position, description, url }) => (
  <Link
    to={url}
    className="group w-full md:w-1/2 relative flex flex-col items-center rounded-lg overflow-hidden"
  >
    {/* Image */}
    <img
      src={image}
      alt={title}
      className="w-full h-[400px] object-cover rounded-lg transition-opacity duration-300 group-hover:opacity-20"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>

    {/* Title and Position (Hidden on hover) */}
    <div className="absolute bottom-12 text-center text-white opacity-100 group-hover:opacity-0 transition-opacity duration-300">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-lg mt-1">{position}</p>
    </div>

    {/* Description (Visible on hover) */}
    <div className="absolute inset-0 flex items-center justify-center text-white px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <p className="text-center text-base md:text-lg">{description}</p>
    </div>
  </Link>
);


export default PeopleDetails;
