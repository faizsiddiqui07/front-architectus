import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import { base_url } from "../config/config";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import scrollTop from "@/helpers/scrollTop";

const categoryDescriptions = {
  Residential: [
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
  Recreational: [
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
  Healthcare: [
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
  Institutional: [
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
  Landscape: [
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
  "Cultural-&-Religious": [
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
  Industrial: [
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
  Interior: [
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();

  const getSingleCategoryProjects = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${base_url}/api/projectDetails/${params.slug}`
      );
      setProjects(response.data.data || []);
      const description = categoryDescriptions[params.slug];
      setCategoryDescription(description);
    } catch (error) {
      setError("Error fetching projects. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSingleCategoryProjects();
    scrollTop();
  }, [params.slug]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const renderSkeleton = () => (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="break-inside-avoid"
        >
          <div className="animate-pulse bg-gray-800 rounded-xl h-64"></div>
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="w-full relative top-16 sm:top-[73px] mb-[73px] bg-gray-950 min-h-screen">
      {/* Sticky Header */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="sticky top-16 sm:top-[72px] bg-gray-900/80 backdrop-blur-sm z-20 border-b border-gray-800"
      >
        <div className="w-full py-4 px-4 lg:px-10">
          <h1 className="text-white text-xl md:text-2xl font-medium tracking-tight">
            <Link to="/allCategory" className="text-gray-300 hover:text-indigo-300 transition-colors">
              Projects
            </Link>{" "}
            <span className="text-gray-400">/</span> {projects[0]?.projectType}
          </h1>
        </div>
      </motion.div>

      {/* Main Content */}
      <main className="px-4 lg:px-10 py-8">
        {/* Description Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12 bg-gray-900/50 border border-gray-800 rounded-xl p-6"
        >
          {Array.isArray(categoryDescription) ? (
            categoryDescription.map((line, idx) => (
              <p key={idx} className={`${line.size} ${idx !== 0 ? '' : ''}`}>
                {line.text}
              </p>
            ))
          ) : (
            <p className="text-gray-300">{categoryDescription}</p>
          )}
        </motion.section>

        {/* Project Cards */}
        <section className="">
          {loading ? (
            renderSkeleton()
          ) : error ? (
            <div className="bg-red-900/20 border border-red-800 rounded-lg p-4 text-center">
              <p className="text-red-400">{error}</p>
            </div>
          ) : projects.length === 0 ? (
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 text-center">
              <p className="text-gray-400">No projects found.</p>
            </div>
          ) : (
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="columns-1 sm:columns-2 lg:columns-3 gap-3 md:gap-6 space-y-3 md:space-y-6"
            >
              {projects.map((project) => (
                <motion.div
                  key={project._id}
                  variants={itemVariants}
                  className="break-inside-avoid"
                >
                  <Card project={project} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </section>
      </main>
    </div>
  );
};

export default CategoryWiseProject;
