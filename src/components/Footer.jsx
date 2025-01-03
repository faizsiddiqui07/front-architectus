import React from "react";
import { Link } from "react-router-dom";
import lightLogo from "../assets/logo/new-logo2.png";
import { menuLinks, socialLinks } from "../data";
import { FaArrowUp } from "react-icons/fa";
import scrollTop from "../helpers/scrollTop";

const Footer = () => {
  const currentYear = new Date().getFullYear();
 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className=" mx-auto w-full px-4 lg:px-10 bg-[#c8c8c8c6]">
      {/* Dotted line */}
        {/* <div className="border-b-2 w-full border-dotted mb-10"></div> */}

      <div className="flex justify-between items-center flex-col lg:flex-row py-6 gap-10 lg:gap-0">
        <div className="flex items-center lg:items-start flex-col gap-8">
          <div>
            <Link to={"/"} onClick={scrollTop}>
              <img src={lightLogo} className="w-80" alt="Architectus Bureau Logo" />
            </Link>
          </div>

          <div className="flex flex-col md:flex-row flex-wrap gap-5">
            {menuLinks.map((item, index) => {
              return (
                <Link
                  key={index}
                  to={item.url}
                  onClick={scrollTop}
                  className=" text-center text-base"
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex gap-14  flex-col md:flex-row">
            <div className="flex gap-4 flex-wrap justify-center md:justify-start">
              {socialLinks.map((item, index) => {
                return (
                  <Link
                  key={index}
                    to={item.url}
                    target="_blank"
                    className="w-7 h-7 lg:w-10 lg:h-10 rounded-full flex justify-center items-center bg-gray-700 text-white"
                  >
                    {<item.icon />}
                  </Link>
                );
              })}
            </div>

            <button className="" onClick={scrollToTop}>
              Back To Top{" "}
              <span className="inline-block">
                <FaArrowUp />
              </span>
            </button>
          </div>

          <div>
            <p className="text-center md:text-right text-base">
              Legal and policies © {currentYear} Architectus Bureau. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
