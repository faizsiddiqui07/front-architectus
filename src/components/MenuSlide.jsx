import React from "react";
import SliderMenuImage from "../assets/images/sliderOpen.jpg";
import { Link } from "react-router-dom";
import { menuLinks, socialLinks } from "../data";

const MenuSlide = ({onClose}) => {
  return (
    <div className="relative ">
      <div className="">
        <img
          src={SliderMenuImage} 
          className="fixed top-0 w-full h-screen object-cover bg-center bg-cover"
          alt=""
        />
      </div>
      <div className="fixed right-0 top-0 w-full md:w-2/6 h-screen bg-white opacity-80 z-30">
        <div className="flex gap-12 lg:gap-20 flex-col justify-center items-center w-full h-screen">
          <ul className="flex items-center flex-col gap-5 lg:gap-7">
            {menuLinks.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    to={item.url}
                    onClick={onClose}
                    className="text-2xl font-semibold text-slate-900 hover:text-slate-700"
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ul className="flex gap-3 flex-wrap justify-center">
            {socialLinks.map((item, index) => {
              return (
                <li className="w-8 h-8 rounded-full bg-slate-700 hover:bg-gray-600 text-white flex justify-center items-center">
                  <Link className="">{<item.icon/>}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuSlide;
