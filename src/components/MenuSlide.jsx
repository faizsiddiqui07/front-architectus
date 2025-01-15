import React from "react";
import SliderMenuImage from "../assets/images/snow14.webp";
import { Link, useNavigate } from "react-router-dom";
import { menuLinks, socialLinks } from "../data";
import scrollTop from "@/helpers/scrollTop";

const MenuSlide = ({ onClose }) => {
  const navigate = useNavigate();

  const handleClick = (slug) => {
    window.history.replaceState(null, "", "/");
    navigate(slug);
    onClose();
    scrollTop();
  };

  return (
    <div className="relative">
      <div>
        <img
          src={SliderMenuImage}
          className="fixed top-0 w-full h-screen object-cover bg-center bg-cover"
          alt=""
        />
      </div>
      <div className="fixed right-0 top-0 w-full md:w-2/6 h-screen bg-white opacity-80 z-30">
        <div className="flex gap-12 lg:gap-20 flex-col justify-center items-center w-full h-screen">
          <ul className="flex items-center flex-col gap-5 lg:gap-7">
            {menuLinks.map((item, index) => (
              <li key={index}>
                <div
                  onClick={() => handleClick(item.url)} // Make sure this is a function reference
                  className="text-2xl font-semibold text-slate-900 hover:text-slate-700"
                >
                  {item.title}
                </div>
              </li>
            ))}
          </ul>
          <ul className="flex gap-3 flex-wrap justify-center">
            {socialLinks.map((item, index) => (
              <li
                key={index}
                className="w-8 h-8 rounded-full bg-slate-700 hover:bg-gray-600 text-white flex justify-center items-center"
              >
                <Link to={item.url} target="_blank">
                  <item.icon />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuSlide;
