// import React, { useState } from "react";
// import image from "../assets/images/career.jpg";
// import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
// import axios from "axios";
// import { base_url } from "../config/config";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

// const dropdownOptions = {
//   salutation: ["Mr", "Ms", "Mrs", "Dr", "Prof"],
//   gender: ["Male", "Female"],
//   age: ["16-19", "20-24", "25-29", "30-34"],
// };

// const Dropdown = ({ label, options, value, onSelect }) => (
//   <div className="w-full">
//     <label className="block text-gray-700 mb-2">{label}</label>
//     <Menu as="div" className="relative w-full inline-block text-left">
//       <MenuButton className="flex justify-between w-full gap-x-1.5 bg-white px-5 py-3 text-sm font-light text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 rounded-md">
//         {value || "Please select"}
//         <ChevronDownIcon
//           aria-hidden="true"
//           className="-mr-1 h-5 w-5 text-gray-400"
//         />
//       </MenuButton>
//       <MenuItems className="absolute right-0 z-10 mt-2 w-full max-h-64 overflow-y-auto origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//         <div className="py-1">
//           {options.map((option, index) => (
//             <MenuItem key={index}>
//               {({ active }) => (
//                 <button
//                   type="button"
//                   onClick={() => onSelect(option)}
//                   className={`${
//                     active ? "bg-gray-100 text-gray-900" : "text-gray-700"
//                   } block px-4 py-2 text-sm w-full text-left`}
//                 >
//                   {option}
//                 </button>
//               )}
//             </MenuItem>
//           ))}
//         </div>
//       </MenuItems>
//     </Menu>
//   </div>
// );

// const Career = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phoneNumber: "",
//     resume: null,
//     salutation: "",
//     gender: "",
//     age: "",
//     address: "",
//     description: "",
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: files ? files[0] : value,
//     });
//   };

//   const handleDropdownSelect = (name, value) => {
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const data = await axios.post(`${base_url}/api/uploadCarrers`, formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       if (data.data.success) {
//         toast.success(data.data.message);
//         navigate("/");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="w-full">
//       <div className="w-full h-[350px] xs:h-[400px] md:h-[600px] relative">
//         <img
//           src={image}
//           className="w-full h-full object-cover object-top"
//           alt="Career"
//         />
//         <div
//           className="absolute inset-0"
//           style={{
//             background:
//               "linear-gradient(to bottom, transparent 65%, black 100%)",
//           }}
//         ></div>
//         <span className="text-4xl sm:text-4xl text-white font-normal absolute bottom-7 px-4 lg:px-10">
//           Career
//         </span>
//       </div>

//       <div className="w-full flex flex-col lg:flex-row justify-between gap-5 my-14 px-4 lg:px-10">
//         <div className="text-center w-full lg:w-[40%]">
//           <p data-aos="zoom-in-up" className="text-white font-extralight xs:px-10">
//             Architectus Bureau welcomes designers, innovators, makers, and
//             pioneering trailblazers to join the practice.
//             <br />
//             <br />
//             We want to work with the best talent from across the industry and
//             develop our people to grow within our practice. With people from
//             diverse backgrounds, we nurture innovation and flexibility to
//             deliver extraordinary projects.
//           </p>
//         </div>

//         <div data-aos="zoom-in-up" className="w-full lg:w-[60%]">
//           <form
//             onSubmit={handleSubmit}
//             className="bg-white p-6 shadow-md rounded-md flex flex-col items-center"
//           >
//             <h3 className="text-2xl font-semibold text-gray-800 mb-6">
//               Apply for a Position
//             </h3>

//             <div className="mb-4 w-full">
//               <label className="block text-gray-700 mb-2" htmlFor="email">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full p-2 border border-gray-300 rounded-md outline-none"
//                 required
//               />
//             </div>

//             <div className="mb-4 w-full">
//               <Dropdown
//                 label="Salutation"
//                 options={dropdownOptions.salutation}
//                 value={formData.salutation}
//                 onSelect={(value) => handleDropdownSelect("salutation", value)}
//               />
//             </div>

//             <div className="mb-4 flex w-full gap-4">
//               <div className="w-full">
//                 <label className="block text-gray-700 mb-2" htmlFor="firstName">
//                   First Name
//                 </label>
//                 <input
//                   type="text"
//                   name="firstName"
//                   id="firstName"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded-md outline-none"
//                   required
//                 />
//               </div>
//               <div className="w-full">
//                 <label className="block text-gray-700 mb-2" htmlFor="lastName">
//                   Last Name
//                 </label>
//                 <input
//                   type="text"
//                   name="lastName"
//                   id="lastName"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded-md outline-none"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="mb-4 flex w-full gap-4">
//               <Dropdown
//                 label="Gender"
//                 options={dropdownOptions.gender}
//                 value={formData.gender}
//                 onSelect={(value) => handleDropdownSelect("gender", value)}
//               />

//               <Dropdown
//                 label="Age"
//                 options={dropdownOptions.age}
//                 value={formData.age}
//                 onSelect={(value) => handleDropdownSelect("age", value)}
//               />
//             </div>

//             <div className="mb-4 w-full">
//               <label className="block text-gray-700 mb-2" htmlFor="phoneNumber">
//                 Phone Number
//               </label>
//               <input
//                 type="tel"
//                 name="phoneNumber"
//                 id="phoneNumber"
//                 value={formData.phoneNumber}
//                 onChange={handleChange}
//                 className="w-full p-2 border border-gray-300 rounded-md outline-none"
//                 required
//               />
//             </div>

//             <div className="mb-4 w-full">
//               <label className="block text-gray-700 mb-2" htmlFor="address">
//                 Full Address
//               </label>
//               <input
//                 type="text"
//                 name="address"
//                 id="address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 className="w-full p-2 border border-gray-300 rounded-md outline-none"
//                 required
//               />
//             </div>

//             <div className="mb-6 w-full">
//               <label className="block text-gray-700 mb-2" htmlFor="resume">
//                 Resume
//               </label>
//               <input
//                 type="file"
//                 name="resume"
//                 id="resume"
//                 onChange={handleChange}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//                 required
//               />
//             </div>

//             <div className="mb-6 w-full">
//               <label className="block text-gray-700 mb-2" htmlFor="description">
//                 Description
//               </label>
//               <textarea
//                 rows={5}
//                 type="text"
//                 name="description"
//                 id="description"
//                 onChange={handleChange}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//                 required
//               />
//             </div>

//             <button
//               type="submit"
//               className="bg-gray-700 hover:bg-gray-800 transition text-white px-6 py-2 rounded-full"
//             >
//               Submit Application
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Career;


import React, { useState } from "react";
import { motion } from "framer-motion";
import image from "../assets/images/career.jpg";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import { base_url } from "../config/config";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const dropdownOptions = {
  salutation: ["Mr", "Ms", "Mrs", "Dr", "Prof"],
  gender: ["Male", "Female", "Other", "Prefer not to say"],
  age: ["16-19", "20-24", "25-29", "30-34", "35-39", "40+"],
};

const Dropdown = ({ label, options, value, onSelect }) => (
  <div className="w-full">
    <label className="block text-gray-300 mb-2 text-sm">{label}</label>
    <Menu as="div" className="relative w-full">
      <MenuButton className="flex justify-between w-full gap-x-1.5 bg-gray-800 px-4 py-3 text-sm text-gray-300 shadow-sm ring-1 ring-gray-700 hover:bg-gray-700 rounded-md transition-all">
        {value || `Select ${label}`}
        <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" />
      </MenuButton>
      <MenuItems className="absolute z-10 mt-1 w-full max-h-60 overflow-auto rounded-md bg-gray-800 py-1 shadow-lg ring-1 ring-gray-700 focus:outline-none">
        {options.map((option, index) => (
          <MenuItem key={index}>
            {({ active }) => (
              <button
                onClick={() => onSelect(option)}
                className={`${
                  active ? "bg-gray-700 text-white" : "text-gray-300"
                } block px-4 py-2 text-sm w-full text-left`}
              >
                {option}
              </button>
            )}
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  </div>
);

const Career = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    resume: null,
    salutation: "",
    gender: "",
    age: "",
    address: "",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleDropdownSelect = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const data = await axios.post(`${base_url}/api/uploadCarrers`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (data.data.success) {
        toast.success(data.data.message);
        navigate("/");
      }
    } catch (error) {
      toast.error("Error submitting application");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-gray-950">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        <motion.img
          src={image}
          className="w-full h-full object-cover object-top"
          alt="Career"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full px-8 lg:px-16 pb-12">
          <motion.h1
            className="text-2xl md:text-4xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Career
          </motion.h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-6 lg:px-8 py-8 sm:py-14">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* About Section */}
          <motion.div
            className="w-full lg:w-2/5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-900/50 p-4 md:p-8 rounded-xl border border-gray-800 h-full">
              <h2 className="text-2xl font-semibold text-white mb-6">
                Join Our Team
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Architectus Bureau welcomes designers, innovators, makers, and
                pioneering trailblazers to join the practice.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We want to work with the best talent from across the industry and
                develop our people to grow within our practice. With people from
                diverse backgrounds, we nurture innovation and flexibility to
                deliver extraordinary projects.
              </p>
            </div>
          </motion.div>

          {/* Application Form */}
          <motion.div
            className="w-full lg:w-3/5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-gray-900/50 p-4 md:p-8 rounded-xl border border-gray-800"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">
                Apply for a Position
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2 text-sm" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-md text-gray-300 transition-all"
                    required
                  />
                </div>

                <div>
                  <Dropdown
                    label="Salutation"
                    options={dropdownOptions.salutation}
                    value={formData.salutation}
                    onSelect={(value) => handleDropdownSelect("salutation", value)}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2 text-sm" htmlFor="firstName">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-md text-gray-300 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2 text-sm" htmlFor="lastName">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-md text-gray-300 transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Dropdown
                    label="Gender"
                    options={dropdownOptions.gender}
                    value={formData.gender}
                    onSelect={(value) => handleDropdownSelect("gender", value)}
                  />
                  <Dropdown
                    label="Age Group"
                    options={dropdownOptions.age}
                    value={formData.age}
                    onSelect={(value) => handleDropdownSelect("age", value)}
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 text-sm" htmlFor="phoneNumber">
                    Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      id="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-md text-gray-300 transition-all"
                      required
                    />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 text-sm" htmlFor="address">
                    Full Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-md text-gray-300 transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 text-sm" htmlFor="resume">
                    Resume (PDF, DOC, DOCX)
                  </label>
                  <div className="mt-1 flex items-center">
                    <label className="cursor-pointer bg-gray-800 hover:bg-gray-700 px-4 py-3 rounded-md border border-gray-700 flex items-center transition-all">
                      <span className="text-gray-300 mr-2">
                        {formData.resume ? formData.resume.name : "Choose file"}
                      </span>
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <input
                        type="file"
                        name="resume"
                        id="resume"
                        onChange={handleChange}
                        className="hidden"
                        accept=".pdf,.doc,.docx"
                        required
                      />
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 text-sm" htmlFor="description">
                    Cover Letter / Additional Information
                  </label>
                  <textarea
                    rows={5}
                    name="description"
                    id="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-md text-gray-300 transition-all"
                    required
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-6 py-3 rounded-md font-medium text-white transition-all ${
                      isSubmitting
                        ? "bg-indigo-800 cursor-not-allowed"
                        : "bg-indigo-600 hover:bg-indigo-700"
                    }`}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Career;