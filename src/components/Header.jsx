import React, { useState } from "react";
import { Link } from "react-router-dom";
import lightLogo from "../assets/logo/light-logo.png";
import { IoSearchOutline, IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import MenuSlide from "./MenuSlide";

const Header = () => {
  const [menuDisplay, setMenuDisplay] = useState(false);

  const toggleMenu = () => {
    const newMenuDisplay = !menuDisplay;
    setMenuDisplay(newMenuDisplay);
    document.body.style.overflow = newMenuDisplay ? "hidden" : "";
  };

  return (
    <header
      className={`h-16 sm:py-9 shadow-md bg-[#00000059] hover:bg-[#1a1a1a] transition-all duration-500 w-full z-40 ${
        menuDisplay ? "fixed top-0" : "absolute"
      }`}
    >
      <div className="h-full mx-auto flex items-center justify-between px-4 lg:px-14">
        <div>
          <Link to="/">
            <img
              src={lightLogo}
              className="w-56 sm:w-72 md:w-80 lg:w-96"
              alt="Architectus Bureau Logo"
            />
          </Link>
        </div>

        <div className="flex items-center gap-4 text-xl text-white z-50">
          <button
            className={`p-2 rounded-md ${menuDisplay ? "text-black" : ""}`}
            aria-label="Search"
          >
            <IoSearchOutline />
          </button>
          <button
            className="p-2 rounded-md"
            onClick={toggleMenu}
            aria-label={menuDisplay ? "Close menu" : "Open menu"}
          >
            {menuDisplay ? (
              <IoCloseSharp className="text-black" />
            ) : (
              <GiHamburgerMenu />
            )}
          </button>
        </div>
      </div>
      {menuDisplay && <MenuSlide onClose={toggleMenu} />}
    </header>
  );
};

export default Header;
