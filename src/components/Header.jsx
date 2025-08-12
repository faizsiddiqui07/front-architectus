import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import lightLogo from "../assets/logo/new-logo2.png";
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import MenuSlide from "./MenuSlide";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "" : "hidden";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <header className={`h-16 sm:py-9 shadow-md bg-[#c8c8c8ed] transition-all duration-400 w-full z-40 fixed`}>
      <div className="h-full mx-auto flex items-center justify-between px-4 lg:px-10">
        <div>
          <Link to="/">
            <img
              src={lightLogo}
              className="w-[250px] xxs:w-[275px] sm:w-[350px] md:w-80 lg:w-96"
              alt="Architectus Bureau Logo"
            />
          </Link>
        </div>

        <div className="flex items-center gap-1 xxs:gap-4 text-xl text-white z-50">
          <button
            className="p-2 rounded-md"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <IoCloseSharp className="text-black" />
            ) : (
              <GiHamburgerMenu className="text-black" />
            )}
          </button>
        </div>
      </div>
      <MenuSlide isOpen={isMenuOpen} onClose={closeMenu} />
    </header>
  );
};

export default Header;