import React from "react";
import { Link } from "react-router-dom";
import scrollTop from "../helpers/scrollTop";

const Breadcrumb = ({ one, two }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        {two && (
          <li className="inline-flex items-center">
            <Link
            onClick={scrollTop}
              to={`/${two.toLowerCase()}`}
              className="text-md xs:text-lg sm:text-2xl font-normal text-[#ffffff] hover:text-[#7b7b7b] transition-all"
            >
              {two}
            </Link>
          </li>
        )}
        <li>
          <div className="flex items-center">
            <span className="text-[#ffffff] cursor-default">/</span>
            <span
              className="ms-1 text-sm xs:text-lg sm:text-2xl font-normal text-[#bebebe] cursor-default"
              aria-current="page"
            >
              {one}
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
