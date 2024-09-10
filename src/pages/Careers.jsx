import React, { useState } from "react";
import image from "../assets/images/sliderOpen.jpg";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import { base_url } from "../config/config";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const dropdownOptions = {
  salutation: ["Mr", "Ms", "Mrs", "Dr", "Prof"],
  gender: ["Male", "Female"],
  age: ["16-19", "20-24", "25-29", "30-34"],
};

const Dropdown = ({ label, options, value, onSelect }) => (
  <div className="w-full">
    <label className="block text-gray-700 mb-2">{label}</label>
    <Menu as="div" className="relative w-full inline-block text-left">
      <MenuButton className="flex justify-between w-full gap-x-1.5 bg-white px-5 py-3 text-sm font-light text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 rounded-md">
        {value || "Please select"}
        <ChevronDownIcon
          aria-hidden="true"
          className="-mr-1 h-5 w-5 text-gray-400"
        />
      </MenuButton>
      <MenuItems className="absolute right-0 z-10 mt-2 w-full max-h-64 overflow-y-auto origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1">
          {options.map((option, index) => (
            <MenuItem key={index}>
              {({ active }) => (
                <button
                  type="button"
                  onClick={() => onSelect(option)}
                  className={`${
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                  } block px-4 py-2 text-sm w-full text-left`}
                >
                  {option}
                </button>
              )}
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  </div>
);

const Careers = () => {
  const navigate = useNavigate()
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
    try {
      const data = await axios.post(`${base_url}/api/uploadCarrers`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("daa",data);
      
      if (data.data.success) {
        toast.success(data.data.message)
        navigate("/")
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full">
      <div className="w-full h-[350px] xs:h-[400px] md:h-[600px] relative">
        <img src={image} className="w-full h-full object-cover" alt="Career" />
        <span className="text-4xl sm:text-4xl text-white font-normal absolute bottom-7 px-4 lg:px-14">
          Careers
        </span>
      </div>

      <div className="text-center">
        <p className="w-4/5 sm:w-2/3 lg:w-1/2 mx-auto mt-10 text-white font-extralight">
          Foster + Partners welcomes designers, innovators, makers, and
          pioneering trailblazers to join the practice.
          <br />
          <br />
          We want to work with the best talent from across the industry and
          develop our people to grow within our practice. With people from
          diverse backgrounds, we nurture innovation and flexibility to deliver
          extraordinary projects.
        </p>
      </div>

      <div className="w-4/5 sm:w-2/3 lg:w-1/2 mx-auto my-16 mb-32">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 shadow-md rounded-md flex flex-col items-center"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Apply for a Position
          </h3>

          <div className="mb-4 w-full">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md outline-none"
              required
            />
          </div>

          <div className="mb-4 w-full">
            <Dropdown
              label="Salutation"
              options={dropdownOptions.salutation}
              value={formData.salutation}
              onSelect={(value) => handleDropdownSelect("salutation", value)}
            />
          </div>

          <div className="mb-4 flex w-full gap-4">
            <div className="w-full">
              <label className="block text-gray-700 mb-2" htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md outline-none"
                required
              />
            </div>
            <div className="w-full">
              <label className="block text-gray-700 mb-2" htmlFor="lastName">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md outline-none"
                required
              />
            </div>
          </div>

          <div className="mb-4 flex w-full gap-4">
            <Dropdown
              label="Gender"
              options={dropdownOptions.gender}
              value={formData.gender}
              onSelect={(value) => handleDropdownSelect("gender", value)}
            />

            <Dropdown
              label="Age"
              options={dropdownOptions.age}
              value={formData.age}
              onSelect={(value) => handleDropdownSelect("age", value)}
            />
          </div>

          <div className="mb-4 w-full">
            <label className="block text-gray-700 mb-2" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md outline-none"
              required
            />
          </div>

          <div className="mb-4 w-full">
            <label className="block text-gray-700 mb-2" htmlFor="address">
              Full Address
            </label>
            <input
              type="text"
              name="address"
              id="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md outline-none"
              required
            />
          </div>

          <div className="mb-6 w-full">
            <label className="block text-gray-700 mb-2" htmlFor="resume">
              Resume
            </label>
            <input
              type="file"
              name="resume"
              id="resume"
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-6 w-full">
            <label className="block text-gray-700 mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              rows={5}
              type="text"
              name="description"
              id="description"
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-2 rounded-full"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default Careers;
