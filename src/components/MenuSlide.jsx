// import React from "react";
// import SliderMenuImage from "../assets/images/snow14.webp";
// import { Link, useNavigate } from "react-router-dom";
// import { menuLinks, socialLinks } from "../data";
// import scrollTop from "@/helpers/scrollTop";

// const MenuSlide = ({ onClose }) => {
//   const navigate = useNavigate();

//   const handleClick = (slug) => {
//     window.history.replaceState(null, "", "/");
//     navigate(slug);
//     onClose();
//     scrollTop();
//   };

//   return (
//     <div className="relative">
//       <div>
//         <img
//           src={SliderMenuImage}
//           className="fixed top-0 w-full h-screen object-cover bg-center bg-cover"
//           alt=""
//         />
//       </div>
//       <div className="fixed right-0 top-0 w-full md:w-2/6 h-screen bg-white opacity-80 z-30">
//         <div className="flex gap-12 lg:gap-20 flex-col justify-center items-center w-full h-screen">
//           <ul className="flex items-center flex-col gap-5 lg:gap-7">
//             {menuLinks.map((item, index) => (
//               <li key={index}>
//                 <div
//                   onClick={() => handleClick(item.url)}
//                   className="text-2xl font-semibold text-slate-900 hover:text-slate-700 cursor-pointer"
//                 >
//                   {item.title}
//                 </div>
//               </li>
//             ))}
//           </ul>
//           <ul className="flex gap-3 flex-wrap justify-center">
//             {socialLinks.map((item, index) => (
//               <li
//                 key={index}
//                 className="w-8 h-8 rounded-full bg-slate-700 hover:bg-gray-600 text-white flex justify-center items-center cursor-pointer"
//               >
//                 <Link to={item.url} target="_blank">
//                   <item.icon />
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MenuSlide;


import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { menuLinks, socialLinks } from "../data";
import scrollTop from "@/helpers/scrollTop";
import { motion, AnimatePresence } from "framer-motion";

const MenuSlide = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  // Close menu on ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const handleNavigation = (slug) => {
    onClose();
    navigate(slug);
    scrollTop();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Background overlay */}
          <motion.div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Menu panel */}
          <motion.div
            className="fixed right-0 top-0 w-full h-screen bg-white shadow-xl z-50 sm:max-w-md"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex flex-col h-full p-4 sm:p-6">
              {/* Close button */}
              <button
                onClick={onClose}
                className="self-end p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Navigation links */}
              <nav className="flex-1 flex flex-col justify-start">
                <ul className="space-y-2 sm:space-y-4">
                  {menuLinks.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                    >
                      <button
                        onClick={() => handleNavigation(item.url)}
                        className="text-xl sm:text-2xl font-medium w-full text-left p-2 sm:p-3 hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        {item.title}
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Social links */}
              <div className="pt-0 xxs:pt-4 sm:pt-6 border-t border-gray-200">
                <ul className="flex items-center py-2 gap-3 sm:gap-4 overflow-x-auto custom-scrollbar w-full">
                  {socialLinks.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-white transition-colors"
                        aria-label={item.title}
                      >
                        <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MenuSlide;