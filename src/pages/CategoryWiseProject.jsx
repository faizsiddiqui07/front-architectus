import React, { useEffect, useState } from "react";
import axios from "axios";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Card from "../components/Card";
import { base_url } from "../config/config";
import { Link, useParams } from "react-router-dom";

// Reusable Dropdown component
// const Dropdown = ({ label, items, selected, onSelect }) => (
//   <Menu as="div" className="relative w-[300px] inline-block text-left">
//     <MenuButton className="flex justify-between w-full gap-x-1.5 bg-white px-5 py-2 text-sm font-light text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 rounded-full">
//       {selected || label}
//       <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
//     </MenuButton>
//     <MenuItems className="absolute right-0 z-10 mt-2 w-full max-h-64 overflow-y-auto origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//       <div className="py-1">
//         {items.map((item, index) => (
//           <MenuItem key={index}>
//             {({ active }) => (
//               <button
//                 onClick={() => onSelect(item)}
//                 className={`${
//                   active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
//                 } block px-4 py-2 text-sm w-full text-left`}
//               >
//                 {item}
//               </button>
//             )}
//           </MenuItem>
//         ))}
//       </div>
//     </MenuItems>
//   </Menu>
// );

const categoryDescriptions = {
  "Residential": [
    {
      text: "Residential Architecture – Architectus Bureau",
      size: "text-xl font-semibold text-blue-300",
    },
    {
      text: "At Architectus Bureau, we specialize in crafting residential spaces that seamlessly blend functionality, comfort, and aesthetics. Our approach to Residential Architecture focuses on creating homes that reflect individual lifestyles, enhance daily living experiences, and stand the test of time.",
      size: "text-[15px] text-white mt-2 font-extralight",
    },
    {
      text: "Our Philosophy",
      size: "text-lg mt-2 text-blue-300",
    },
    {
      text: "Personalized Living Spaces",
      size: "text-base text-white",
    },
    {
      text: "We believe every home is unique and should resonate with the personality and needs of its residents. Our designs are tailored to create spaces that inspire, relax, and foster connections, ensuring each home becomes a sanctuary of comfort and style.",
      size: "text-[15px] text-white font-extralight",
    },
    {
      text: "Sustainability at the Core",
      size: "text-base text-white mt-2",
    },
    {
      text: "Incorporating sustainable practices, we design eco-friendly homes that promote energy efficiency, utilize green building materials, and harmonize with the surrounding environment.",
      size: "text-[15px] text-white font-extralight",
    },
    {
      text: "Innovative Solutions",
      size: "text-base text-white mt-2",
    },
    {
      text: "From modern smart homes to timeless traditional designs, we use innovative techniques and technologies to deliver homes that are not only visually stunning but also practical and future-ready.",
      size: "text-[15px] text-white font-extralight",
    },
  ],
  "Commercial-&-Corporate": [
    {
      text: "Commercial Architecture – Architectus Bureau",
      size: "text-xl font-semibold text-blue-300",
    },
    {
      text: "At Architectus Bureau, we specialize in designing commercial spaces that are dynamic, functional, and visually striking. Our expertise in Commercial Architecture lies in crafting environments that foster productivity, enhance user experiences, and align with the evolving demands of businesses and industries.",
      size: "text-[15px] text-white mt-2 font-extralight",
    },
    {
      text: "Our Philosophy",
      size: "text-lg mt-2 text-blue-300",
    },
    {
      text: "Purpose-Driven Designs",
      size: "text-base text-white",
    },
    {
      text: "Every commercial project is designed with its unique purpose in mind, whether it’s boosting employee engagement, enhancing customer experiences, or maximizing operational efficiency.",
      size: "text-[15px] text-white font-extralight",
    },
    {
      text: "Sustainability in Focus",
      size: "text-base text-white mt-2",
    },
    {
      text: "We are committed to incorporating eco-friendly practices in commercial design, ensuring spaces that are not only innovative but also sustainable and future-ready.",
      size: "text-[15px] text-white font-extralight",
    },
    {
      text: "Innovation at the Core",
      size: "text-base text-white mt-2",
    },
    {
      text: "Our designs integrate cutting-edge technologies, modern aesthetics, and innovative concepts to create spaces that reflect the forward-thinking vision of our clients.",
      size: "text-[15px] text-white font-extralight",
    },
  ],
  "Hospitality-&-Tourism": [
    {
      text: "Hospitality & Tourism Architecture – Architectus Bureau",
      size: "text-xl font-semibold text-blue-300",
    },
    {
      text: "At Architectus Bureau, we design hospitality and tourism spaces that offer memorable experiences while seamlessly integrating luxury, functionality, and sustainability. From boutique resorts and luxury hotels to eco-lodges and theme parks, our projects reflect a deep understanding of guest needs and local culture, setting the stage for unforgettable journeys.",
      size: "text-[15px] text-white mt-2 font-extralight",
    },
    {
      text: "Our Philosophy",
      size: "text-lg mt-2 text-blue-300",
    },
    {
      text: "Guest-Centric Design",
      size: "text-base text-white",
    },
    {
      text: "We create spaces that prioritize comfort, convenience, and a sense of indulgence, ensuring every visitor feels welcomed and inspired.",
      size: "text-[15px] text-white font-extralight",
    },
    {
      text: "Cultural & Contextual Relevance",
      size: "text-base text-white mt-2",
    },
    {
      text: "Our designs celebrate the local culture, traditions, and natural surroundings, offering an authentic experience to guests.",
      size: "text-[15px] text-white font-extralight",
    },
    {
      text: "Sustainability at Heart",
      size: "text-base text-white mt-2",
    },
    {
      text: "We integrate eco-friendly practices to create spaces that minimize environmental impact and maximize long-term value.",
      size: "text-[15px] text-white font-extralight",
    },
  ],
  "Recreational": [
    {
      text: "Recreational Architecture – Architectus Bureau",
      size: "text-xl font-semibold text-blue-300",
    },
    {
      text: "At Architectus Bureau, we design recreational spaces that inspire relaxation, foster community interaction, and create memorable experiences. Our expertise in Recreational Architecture focuses on developing versatile, engaging environments that blend functionality, aesthetics, and sustainability for leisure, sports, and cultural activities.",
      size: "text-[15px] text-white mt-2 font-extralight",
    },
    {
      text: "Our Philosophy",
      size: "text-lg mt-2 text-blue-300",
    },
    {
      text: "Enhancing Experiences",
      size: "text-base text-white",
    },
    {
      text: "We aim to design spaces that encourage physical activity, mental well-being, and social interaction, making them hubs of relaxation and enjoyment.",
      size: "text-[15px] text-white font-extralight",
    },
    {
      text: "Community-Centric Designs",
      size: "text-base text-white mt-2",
    },
    {
      text: "Our recreational projects are built with the end-users in mind, fostering inclusivity and accessibility for diverse communities.",
      size: "text-[15px] text-white font-extralight",
    },
    {
      text: "Sustainability & Harmony",
      size: "text-base text-white mt-2",
    },
    {
      text: "We create designs that harmonize with the natural environment, incorporating sustainable practices and eco-friendly materials.",
      size: "text-[15px] text-white font-extralight",
    },
  ],
  "Urban-Design-&-Public-Spaces": [
    {
      text: "Urban Design & Public Spaces – Architectus Bureau",
      size: "text-xl font-semibold text-blue-300",
    },
    {
      text: "At Architectus Bureau, we specialize in creating urban designs and public spaces that shape vibrant, inclusive, and sustainable cities. Our expertise lies in transforming urban landscapes into thriving hubs of connectivity, interaction, and resilience, fostering a sense of community and enhancing quality of life.",
      size: "text-[15px] text-white mt-2 font-extralight",
    },
    {
      text: "Our Philosophy",
      size: "text-lg mt-2 text-blue-300",
    },
    {
      text: "Human-Centered Design",
      size: "text-base text-white",
    },
    {
      text: "We design urban spaces with people at the core, prioritizing walkability, accessibility, and community interaction.",
      size: "text-[15px] text-white font-extralight",
    },
    {
      text: "Sustainability & Resilience",
      size: "text-base text-white mt-2",
    },
    {
      text: "Our designs address environmental challenges, integrating green infrastructure and sustainable practices to create future-ready cities.",
      size: "text-[15px] text-white font-extralight",
    },
    {
      text: "Cultural Identity",
      size: "text-base text-white mt-2",
    },
    {
      text: "Each project reflects the unique cultural, historical, and social fabric of its location, making every space meaningful and rooted in context.",
      size: "text-[15px] text-white font-extralight",
    },
  ],
  // "Township-&-Urban-Settlement": [
  //   {
  //     text: "Urban Design & Public Spaces – Architectus Bureau",
  //     size: "text-xl font-semibold text-blue-300",
  //   },
  //   {
  //     text: "At Architectus Bureau, we specialize in creating urban designs and public spaces that shape vibrant, inclusive, and sustainable cities. Our expertise lies in transforming urban landscapes into thriving hubs of connectivity, interaction, and resilience, fostering a sense of community and enhancing quality of life.",
  //     size: "text-[15px] text-white mt-2 font-extralight",
  //   },
  //   {
  //     text: "Our Philosophy",
  //     size: "text-lg mt-2 text-blue-300",
  //   },
  //   {
  //     text: "Human-Centered Design",
  //     size: "text-base text-white",
  //   },
  //   {
  //     text: "We design urban spaces with people at the core, prioritizing walkability, accessibility, and community interaction.",
  //     size: "text-[15px] text-white font-extralight",
  //   },
  //   {
  //     text: "Sustainability & Resilience",
  //     size: "text-base text-white mt-2",
  //   },
  //   {
  //     text: "Our designs address environmental challenges, integrating green infrastructure and sustainable practices to create future-ready cities.",
  //     size: "text-[15px] text-white font-extralight",
  //   },
  //   {
  //     text: "Cultural Identity",
  //     size: "text-base text-white mt-2",
  //   },
  //   {
  //     text: "Each project reflects the unique cultural, historical, and social fabric of its location, making every space meaningful and rooted in context.",
  //     size: "text-[15px] text-white font-extralight",
  //   },
  // ],
  "Healthcare": [
    {
      text: "Healthcare Architecture – Architectus Bureau",
      size: "text-xl font-semibold text-blue-300",
    },
    {
      text: "At Architectus Bureau, we specialize in designing healthcare facilities that combine cutting-edge technology, patient-centered care, and sustainable practices. From hospitals and clinics to wellness centers and research labs, our designs are meticulously crafted to promote healing, efficiency, and comfort for patients, families, and medical professionals.",
      size: "text-[15px] text-white mt-2 font-extralight",
    },
    {
      text: "Our Philosophy",
      size: "text-lg mt-2 text-blue-300",
    },
    {
      text: "Healing Through Design",
      size: "text-base text-white",
    },
    {
      text: "We believe in creating environments that actively contribute to the physical, emotional, and psychological well-being of patients.",
      size: "text-[15px] text-white font-extralight",
    },
    {
      text: "Functionality & Efficiency",
      size: "text-base text-white mt-2",
    },
    {
      text: "Our designs prioritize operational excellence, ensuring seamless workflows for medical staff and ease of navigation for patients.",
      size: "text-[15px] text-white font-extralight",
    },
    {
      text: "Sustainability in Healthcare",
      size: "text-base text-white mt-2",
    },
    {
      text: "We incorporate eco-friendly materials and energy-efficient systems to reduce environmental impact while enhancing long-term usability.",
      size: "text-[15px] text-white font-extralight",
    },
  ],
  "Institutional": [
    {
      text: "Institutional Architecture – Architectus Bureau",
      size: "text-xl font-semibold text-blue-300",
    },
    {
      text: "At Architectus Bureau, we are dedicated to designing institutional spaces that inspire learning, foster innovation, and promote community development. Our expertise in Institutional Architecture focuses on creating environments that balance functionality, aesthetics, and sustainability, catering to educational, cultural, healthcare, and governmental institutions.",
      size: "text-[15px] text-white mt-2 font-extralight",
    },
    {
      text: "Our Philosophy",
      size: "text-lg mt-2 text-blue-300",
    },
    {
      text: "Purpose-Built Designs",
      size: "text-base text-white",
    },
    {
      text: "Every institutional project is designed with its core purpose in mind, ensuring spaces that enhance productivity, accessibility, and engagement for users.",
      size: "text-[15px] text-white font-extralight",
    },
    {
      text: "Community-Centric Approach",
      size: "text-base text-white mt-2",
    },
    {
      text: "Our designs emphasize inclusivity, collaboration, and adaptability, fostering environments that serve diverse communities effectively.",
      size: "text-[15px] text-white font-extralight",
    },
    {
      text: "Sustainability & Innovation",
      size: "text-base text-white mt-2",
    },
    {
      text: "We incorporate sustainable practices and cutting-edge technologies into our designs, ensuring that institutions are environmentally responsible and future-ready.",
      size: "text-[15px] text-white font-extralight",
    },
  ],
  "Landscape": [
    {
      text: "Landscape Architecture – Architectus Bureau",
      size: "text-xl font-semibold text-blue-300",
    },
    {
      text: "At Architectus Bureau, we specialize in Landscape Architecture, transforming outdoor spaces into sustainable, functional, and aesthetically captivating environments. Our designs bridge the gap between nature and the built environment, enhancing biodiversity, promoting well-being, and creating spaces that inspire and connect communities.",
      size: "text-[15px] text-white mt-2 font-extralight",
    },
    {
      text: "Our Philosophy",
      size: "text-lg mt-2 text-blue-300",
    },
    {
      text: "Harmonizing Nature & Design",
      size: "text-base text-white",
    },
    {
      text: "We believe in creating landscapes that seamlessly integrate natural beauty with architectural innovation.",
      size: "text-[15px] text-white font-extralight",
    },
    {
      text: "Sustainability at the Core",
      size: "text-base text-white mt-2",
    },
    {
      text: "Our designs prioritize eco-friendly practices, incorporating native plants, water management systems, and renewable materials.",
      size: "text-[15px] text-white font-extralight",
    },
    {
      text: "Enhancing Experiences",
      size: "text-base text-white mt-2",
    },
    {
      text: "We design spaces that evoke joy, tranquility, and a sense of belonging, fostering connections between people and nature.",
      size: "text-[15px] text-white font-extralight",
    },
  ],
  "Cultural-&-Religions": [
    {
      text: "Cultural & Religious Architecture – Architectus Bureau",
      size: "text-xl font-semibold text-blue-300",
    },
    {
      text: "At Architectus Bureau, we craft cultural and religious spaces that embody heritage, spirituality, and community. Our expertise in Cultural & Religious Architecture focuses on designing timeless structures that honor traditions, inspire reverence, and foster communal harmony, while blending functionality and aesthetics.",
      size: "text-[15px] text-white mt-2 font-extralight",
    },
    {
      text: "Our Philosophy",
      size: "text-lg mt-2 text-blue-300",
    },
    {
      text: "Celebrating Heritage",
      size: "text-base text-white",
    },
    {
      text: "We design spaces that reflect cultural identity and honor the rich traditions of communities, creating architectural landmarks that stand as symbols of pride and history.",
      size: "text-[15px] text-white font-extralight",
    },
    {
      text: "Inspiring Spirituality",
      size: "text-base text-white mt-2",
    },
    {
      text: "Religious structures designed to evoke peace, devotion, and introspection, fostering an environment that nurtures faith and spirituality.",
      size: "text-[15px] text-white font-extralight",
    },
    {
      text: "Inclusivity & Accessibility",
      size: "text-base text-white mt-2",
    },
    {
      text: "Our designs cater to diverse communities, ensuring accessibility for people of all backgrounds and abilities.",
      size: "text-[15px] text-white font-extralight",
    },
  ],
  "Industrial": [
    {
      text: "Industrial Architecture – Architectus Bureau",
      size: "text-xl font-semibold text-blue-300",
    },
    {
      text: "At Architectus Bureau, we design industrial facilities that are efficient, sustainable, and adaptable to the ever-evolving demands of industries. Our expertise in Industrial Architecture focuses on creating spaces that enhance productivity, streamline operations, and ensure safety, while also addressing environmental and economic considerations.",
      size: "text-[15px] text-white mt-2 font-extralight",
    },
    {
      text: "Our Philosophy",
      size: "text-lg mt-2 text-blue-300",
    },
    {
      text: "Functionality First",
      size: "text-base text-white",
    },
    {
      text: "We prioritize practical layouts and designs that improve operational workflows and maximize efficiency for industrial processes.",
      size: "text-[15px] text-white font-extralight",
    },
    {
      text: "Innovation in Design",
      size: "text-base text-white mt-2",
    },
    {
      text: "Our industrial designs incorporate advanced technologies and modern solutions, enabling facilities to meet current demands and adapt to future challenges.",
      size: "text-[15px] text-white font-extralight",
    },
    {
      text: "Sustainability Matters",
      size: "text-base text-white mt-2",
    },
    {
      text: "We integrate eco-friendly practices, materials, and energy-efficient systems to minimize environmental impact and operational costs.",
      size: "text-[15px] text-white font-extralight",
    },
  ],
  "Adaptive-Reuse-&-Renovation": [
    {
      text: "Adaptive Reuse & Renovation – Architectus Bureau",
      size: "text-xl font-semibold text-blue-300",
    },
    {
      text: "At Architectus Bureau, we specialize in adaptive reuse and renovation projects that breathe new life into existing structures while preserving their historical or architectural significance. Our approach focuses on transforming underutilized spaces into functional, sustainable, and aesthetically pleasing environments, ensuring they meet modern needs while respecting the past.",
      size: "text-[15px] text-white mt-2 font-extralight",
    },
    {
      text: "Our Philosophy",
      size: "text-lg mt-2 text-blue-300",
    },
    {
      text: "Preserving Heritage",
      size: "text-base text-white",
    },
    {
      text: "We honor the original character of buildings through thoughtful design, while integrating modern elements for enhanced functionality.",
      size: "text-[15px] text-white font-extralight",
    },
    {
      text: "Sustainability & Innovation",
      size: "text-base text-white mt-2",
    },
    {
      text: "Transforming spaces with sustainable practices, reducing environmental impact, and maximizing the longevity of structures.",
      size: "text-[15px] text-white font-extralight",
    },
    {
      text: "Future-Ready Designs",
      size: "text-base text-white mt-2",
    },
    {
      text: "Adapting spaces to align with contemporary usage while maintaining flexibility for future upgrades and use.",
      size: "text-[15px] text-white font-extralight",
    },
  ],
  "Experimental-&-Conceptual": [
    {
      text: "Experimental & Conceptual Design – Architectus Bureau",
      size: "text-xl font-semibold text-blue-300",
    },
    {
      text: "At Architectus Bureau, we thrive on pushing the boundaries of design through experimental and conceptual architecture. Our approach focuses on creating innovative, thought-provoking spaces that challenge the norms while seamlessly integrating form, function, and aesthetics. Whether it’s exploring new materials, sustainable practices, or avant-garde concepts, we aim to redefine architectural possibilities.",
      size: "text-[15px] text-white mt-2 font-extralight",
    },
    {
      text: "Our Philosophy",
      size: "text-lg mt-2 text-blue-300",
    },
    {
      text: "Pioneering Innovation",
      size: "text-base text-white",
    },
    {
      text: "We embrace bold ideas and experiment with unconventional designs to craft spaces that inspire and captivate.",
      size: "text-[15px] text-white font-extralight",
    },
    {
      text: "Conceptual Exploration",
      size: "text-base text-white mt-2",
    },
    {
      text: "Our designs are deeply rooted in ideas, offering unique solutions tailored to meet modern challenges and future requirements.",
      size: "text-[15px] text-white font-extralight",
    },
    {
      text: "Sustainability & Creativity",
      size: "text-base text-white mt-2",
    },
    {
      text: "Blending cutting-edge technology with creative thinking to create sustainable, forward-thinking spaces.",
      size: "text-[15px] text-white font-extralight",
    },
  ],
  "Technology-&-Innovation": [
    {
      text: "Technology & Innovation – Architectus Bureau",
      size: "text-xl font-semibold text-blue-300",
    },
    {
      text: "At Architectus Bureau, we embrace the intersection of technology and innovation to create forward-thinking, intelligent spaces that redefine modern architecture. Our designs integrate cutting-edge technologies, smart systems, and sustainable solutions to ensure that every project is both futuristic and functional. By combining architectural expertise with the latest advancements, we deliver transformative experiences tailored to meet the demands of contemporary living and working.",
      size: "text-[15px] text-white mt-2 font-extralight",
    },
    {
      text: "Our Philosophy",
      size: "text-lg mt-2 text-blue-300",
    },
    {
      text: "Future-Driven Design",
      size: "text-base text-white",
    },
    {
      text: "We strive to stay ahead of technological trends, offering innovative solutions that enhance user experience, efficiency, and sustainability.",
      size: "text-[15px] text-white font-extralight",
    },
    {
      text: "Holistic Integration",
      size: "text-base text-white mt-2",
    },
    {
      text: "Seamlessly blending technology with architecture, creating spaces that are intelligent, adaptable, and sustainable.",
      size: "text-[15px] text-white font-extralight",
    },
    {
      text: "Sustainability through Innovation",
      size: "text-base text-white mt-2",
    },
    {
      text: "Using technology to drive sustainable practices, reducing environmental impact while optimizing functionality and performance.",
      size: "text-[15px] text-white font-extralight",
    },
  ],
  "Humanitarian-&-Social": [
    {
      text: "Humanitarian & Social Design – Architectus Bureau",
      size: "text-xl font-semibold text-blue-300",
    },
    {
      text: "At Architectus Bureau, we are dedicated to creating humanitarian and socially impactful spaces that enhance communities and promote well-being. Our designs prioritize inclusivity, accessibility, and sustainability, ensuring that every project serves not only architectural excellence but also meaningful contributions to society. From public spaces to community-focused initiatives, we aim to foster spaces that empower people and create positive social change.",
      size: "text-[15px] text-white mt-2 font-extralight",
    },
    {
      text: "Our Philosophy",
      size: "text-lg mt-2 text-blue-300",
    },
    {
      text: "Empowering Communities",
      size: "text-base text-white",
    },
    {
      text: "We believe in design that supports social cohesion, inclusivity, and enhances the quality of life for all members of society.",
      size: "text-[15px] text-white font-extralight",
    },
    {
      text: "Sustainability with Purpose",
      size: "text-base text-white mt-2",
    },
    {
      text: "Creating spaces that respect the environment while addressing the needs of vulnerable populations and underserved communities.",
      size: "text-[15px] text-white font-extralight",
    },
    {
      text: "Human-Centered Design",
      size: "text-base text-white mt-2",
    },
    {
      text: "Prioritizing the human experience in every aspect of design—ensuring spaces are accessible, functional, and emotionally resonant.",
      size: "text-[15px] text-white font-extralight",
    },
  ],
  "Climate-Responsive": [
    {
      text: "Climate Responsive Design – Architectus Bureau",
      size: "text-xl font-semibold text-blue-300",
    },
    {
      text: "At Architectus Bureau, we specialize in climate-responsive architecture that integrates sustainable strategies to create spaces that adapt harmoniously to environmental conditions. Our approach ensures that buildings not only provide comfort but also minimize their environmental footprint by optimizing natural resources. Through thoughtful design tailored to the local climate, we strive to create resilient, energy-efficient, and context-sensitive spaces that enhance both functionality and aesthetics.",
      size: "text-[15px] text-white mt-2 font-extralight",
    },
    {
      text: "Our Philosophy",
      size: "text-lg mt-2 text-blue-300",
    },
    {
      text: "Sustainability & Adaptability",
      size: "text-base text-white",
    },
    {
      text: "We design spaces that respond to the climate by balancing functionality, performance, and environmental sensitivity.",
      size: "text-[15px] text-white font-extralight",
    },
    {
      text: "Resource Optimization",
      size: "text-base text-white mt-2",
    },
    {
      text: "Using nature’s resources efficiently, such as sunlight, wind, and thermal mass, to create comfortable, sustainable spaces.",
      size: "text-[15px] text-white font-extralight",
    },
    {
      text: "Resilience in Design",
      size: "text-base text-white mt-2",
    },
    {
      text: "Creating buildings that can withstand and thrive in varying climatic conditions while reducing energy consumption and environmental impact.",
      size: "text-[15px] text-white font-extralight",
    },
  ],
  "Interior": [
    {
      text: "Interior Design – Architectus Bureau",
      size: "text-xl font-semibold text-blue-300",
    },
    {
      text: "At Architectus Bureau, we provide innovative interior design solutions that blend style, functionality, and sustainability. Our approach focuses on creating spaces that reflect our clients’ visions while optimizing comfort, efficiency, and aesthetic appeal. Whether it’s residential, commercial, or corporate interiors, we ensure every detail contributes to a unique and immersive experience.",
      size: "text-[15px] text-white mt-2 font-extralight",
    },
    {
      text: "Our Philosophy",
      size: "text-lg mt-2 text-blue-300",
    },
    {
      text: "Personalized Spaces",
      size: "text-base text-white",
    },
    {
      text: "We design interiors that resonate with your identity, enhancing both form and function.",
      size: "text-[15px] text-white font-extralight",
    },
    {
      text: "Sustainability & Eco-Conscious Design",
      size: "text-base text-white mt-2",
    },
    {
      text: "Our interiors are created with an emphasis on reducing environmental impact, utilizing sustainable materials, and promoting energy efficiency.",
      size: "text-[15px] text-white font-extralight",
    },
    {
      text: "Seamless Integration",
      size: "text-base text-white mt-2",
    },
    {
      text: "Combining architecture, interior design, and technology for cohesive, harmonious spaces.",
      size: "text-[15px] text-white font-extralight",
    },
  ],
  " Art-&-Craft": [
    {
      text: "Art & Craft – Architectus Bureau",
      size: "text-xl font-semibold text-blue-300",
    },
    {
      text: "At Architectus Bureau, we believe in the fusion of art and craft to create timeless, aesthetically pleasing, and functionally sound spaces. Our approach goes beyond traditional architecture, emphasizing creativity, detail, and craftsmanship in every design. By blending innovation with traditional techniques, we deliver spaces that are not only visually captivating but also reflective of the unique essence of each project.",
      size: "text-[15px] text-white mt-2 font-extralight",
    },
    {
      text: "Our Philosophy",
      size: "text-lg mt-2 text-blue-300",
    },
    {
      text: "Creativity & Customization",
      size: "text-base text-white",
    },
    {
      text: "We approach every project as a unique opportunity to merge artistic expression with architectural precision.",
      size: "text-[15px] text-white font-extralight",
    },
    {
      text: "Attention to Detail",
      size: "text-base text-white mt-2",
    },
    {
      text: "Craftsmanship is at the core of our designs, ensuring that each element reflects the highest standard of artistry and functionality.",
      size: "text-[15px] text-white font-extralight",
    },
    {
      text: "Blending Tradition & Modernity",
      size: "text-base text-white mt-2",
    },
    {
      text: "Combining age-old techniques with contemporary design sensibilities to create balanced and meaningful spaces.",
      size: "text-[15px] text-white font-extralight",
    },
  ],
};

const CategoryWiseProject = () => {
  const [projects, setProjects] = useState([]);
  const [categoryDescription, setCategoryDescription] = useState("");
  //   const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //   const [selectedType, setSelectedType] = useState("Categories");
  //   const [projectTypes, setProjectTypes] = useState([]);
  const params = useParams();

  const getSingleCategoryProjects = async () => {
    try {
      const response = await axios.get(
        `${base_url}/api/projectDetails/${params.slug}`
      );

      const projectData = response.data.data;

      setProjects(projectData);
      const description = categoryDescriptions[params.slug];
      setCategoryDescription(description);
      //   setFilteredProjects(projectData);

      //   const types = ["Categories", ...new Set(projectData.map(p => p.projectType))];
      //   setProjectTypes(types);
    } catch (error) {
      setError("Error fetching projects. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Simulate loading for 2 seconds
    setTimeout(() => {
      getSingleCategoryProjects();
    }, 100);
  }, [[params.slug]]);

  //   useEffect(() => {
  //     const filterProjects = () => {
  //       let filtered = projects;

  //       if (selectedType !== "Categories") {
  //         filtered = filtered.filter(project => project.projectType === selectedType);
  //       }

  //       setFilteredProjects(filtered);
  //     };

  //     filterProjects();
  //   }, [selectedType, projects]);

  // Skeleton Loader
  const renderSkeleton = () => (
    <div className="w-full flex flex-wrap justify-center gap-6">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="w-full sm:w-[48%] lg:w-[48%] xl:w-[31.50%] -z-20"
        >
          <div className="animate-pulse">
            <div className="h-60 bg-gray-700 rounded-md mb-4"></div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full relative top-[65px] sm:top-[73px]">
      <div className="sticky top-[64px] sm:top-[72px] bg-[#1a1a1a] border-t border-[#3939399f]">
        <div className="w-full py-3 xxs:py-5 px-4 lg:px-10 border-b gap-3 border-[#7a78789f]">
          <p className="text-white text-lg sm:text-xl md:text-2xl">
            <Link to="/allCategory">Projects </Link> / {projects[0]?.projectType}
          </p>
          {/* <Dropdown
            label="Categories"
            items={projectTypes}
            selected={selectedType}
            onSelect={setSelectedType}
          /> */}
        </div>
      </div>
      <main className="px-4 lg:px-10">
        <section className="my-6">
          {Array.isArray(categoryDescription) ? (
            categoryDescription.map((line, index) => (
              <p key={index} className={`${line.size}`}>
                {line.text}
              </p>
            ))
          ) : (
            <p className="text-white my-4">{categoryDescription}</p>
          )}
        </section>
        <section className="my-6 mb-36">
          {loading ? (
            renderSkeleton()
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : projects.length === 0 ? (
            <p className="text-center text-gray-500">No projects found.</p>
          ) : (
            <div className="w-full flex flex-wrap gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="w-full mx-auto sm:w-[48%] lg:w-[48%] xl:w-[31.50%] flex justify-between"
                >
                  <Card project={project} />
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default CategoryWiseProject;
