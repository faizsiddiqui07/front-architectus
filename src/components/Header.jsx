import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import lightLogo from "../assets/logo/light-logo.png";
import { IoSearchOutline, IoCloseSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import MenuSlide from "./MenuSlide";

const Header = () => {
  const [menuDisplay, setMenuDisplay] = useState(false);
  const navigate = useNavigate()
  const [openSearchBox, setOpenSearchBox] = useState(false);
  const searchBoxRef = useRef(null);

  const toggleMenu = () => {
    const newMenuDisplay = !menuDisplay;
    setMenuDisplay(newMenuDisplay);
    document.body.style.overflow = newMenuDisplay ? "hidden" : "";
  };

  // Search
  const handleSearch = (e) => {
    if (e.target.value) {
      navigate(`/search?q=${e.target.value}`);
    } else {
      navigate(`/`);
    }
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
          {/* Other UI elements like search and cart */}
          {menuDisplay ? (
            ""
          ) : (
            <div
              className="w-full relative flex justify-center items-center"
              ref={searchBoxRef}
            >
              <button
                className="text-2xl"
                onClick={() => setOpenSearchBox(!openSearchBox)}
              >
                <CiSearch className="text-2xl xs:text-3xl" />
              </button>
              {openSearchBox && (
                <div className="w-[280px] xs:w-[300px] lg:w-72 absolute -right-14 top-10 bg-white rounded-md shadow-lg p-2 z-50 transition duration-300 ease-in-out transform scale-100">
                  <div className="w-full flex items-center justify-center space-x-2 border-b">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full px-2 py-1 border-none outline-none text-gray-700"
                      onChange={handleSearch}
                    />
                    <button
                      className="absolute top-4 right-2 text-lg text-gray-600 hover:text-black"
                      onClick={() => {setOpenSearchBox(false), navigate('/')}}
                    >
                      <IoCloseSharp className="text-xl xs:text-2xl" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

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
