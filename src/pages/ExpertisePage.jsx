// import React, { useState } from "react";
// import SliderMenuImage from "../assets/images/expertise.webp";

// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion.jsx";

// const ExpertisePage = () => {
//   const [activeItem, setActiveItem] = useState(null);

//   const handleToggle = (value) => {
//     setActiveItem(activeItem === value ? null : value);
//   };

//   return (
//     <div className="w-full mb-36">
//       <div className="w-full h-full relative">
//         <img
//           src={SliderMenuImage}
//           className="w-full h-[350px] xs:h-[400px] md:h-[600px] object-cover"
//           alt="Expertise"
//         />
//         <div
//           className="absolute inset-0"
//           style={{
//             background:
//               "linear-gradient(to bottom, transparent 65%, black 100%)",
//           }}
//         ></div>
//         <h2 className="absolute bottom-7 text-white text-3xl sm:text-4xl px-4 lg:px-10 text-center sm:text-start w-full">
//           Expertise & Services
//         </h2>
//       </div>

//       <main className="px-4 lg:px-10 my-10">
//         <div className="w-[100%] text-white flex flex-wrap justify-between items-center">
//           <Accordion type="multiple" collapsible className="w-full">
//             <AccordionItem value="item-1">
//               <AccordionTrigger
//                 onClick={() => handleToggle("item-1")}
//                 className={`font-semibold uppercase text-xl xs:text-2xl px-2 hover:text-blue-900 hover:bg-[#c8c8c8ed] rounded ${
//                   activeItem === "item-1"
//                     ? "bg-[#c8c8c8ed] text-blue-900"
//                     : "text-blue-300"
//                 }`}
//               >
//                 Architecture & Design
//               </AccordionTrigger>
//               <AccordionContent className="ml-2 mt-2 text-lg font-extralight">
//                 <p>
//                   At Architectus Bureau, we believe that architecture is more
//                   than just creating structures; it is about shaping
//                   experiences, fostering communities, and enhancing lives
//                   through thoughtful, sustainable, and innovative design
//                   solutions. Our approach to architecture integrates creativity,
//                   functionality, and sustainability to deliver spaces that are
//                   both ethereal and adaptive.
//                 </p>

//                 <br />

//                 <h2 className="font-medium text-blue-200 text-xl">
//                   Our Approach to Architecture & Design
//                 </h2>

//                 <br />

//                 <ul className="list-disc list-inside">
//                   <li>
//                     <span className="font-medium text-blue-200 mr-1">
//                       Innovation Meets Tradition:{" "}
//                     </span>
//                     We combine the richness of traditional architectural
//                     principles with cutting-edge design techniques to create
//                     timeless, modern spaces that reflect both culture and
//                     innovation. Every project is tailored to the unique
//                     requirements of our clients, ensuring that each space serves
//                     its intended purpose seamlessly while maintaining aesthetic
//                     integrity.
//                   </li>

//                   <br />

//                   <li>
//                     <span className="font-medium text-blue-200 mr-1">
//                       Sustainability and Responsiveness:{" "}
//                     </span>
//                     Sustainability is at the core of our architectural
//                     philosophy. We design spaces that minimize environmental
//                     impact by integrating eco-friendly practices such as
//                     efficient use of resources, energy-saving systems, and
//                     sustainable materials. Our approach ensures that your
//                     building doesn’t just meet your current needs but also
//                     contributes positively to the environment.
//                   </li>

//                   <br />

//                   <li>
//                     <span className="font-medium text-blue-200 mr-1">
//                       Collaborative & Holistic Design:{" "}
//                     </span>
//                     At Architectus Bureau, we believe that successful design is
//                     the result of collaboration. We work closely with clients,
//                     engineers, planners, and other professionals to ensure every
//                     detail aligns with the vision and functionality of the
//                     project. Whether it’s residential, commercial, or
//                     institutional projects, our goal is to create spaces that
//                     resonate with both functionality and grandeur.
//                   </li>
//                 </ul>
//               </AccordionContent>
//             </AccordionItem>

//             <AccordionItem value="item-2">
//               <AccordionTrigger
//                 onClick={() => handleToggle("item-2")}
//                 className={`font-semibold uppercase text-xl xs:text-2xl px-2 hover:text-blue-900 hover:bg-[#c8c8c8ed] rounded ${
//                   activeItem === "item-2"
//                     ? "bg-[#c8c8c8ed] text-blue-900"
//                     : "text-blue-300"
//                 }`}
//               >
//                 Engineering & Technology
//               </AccordionTrigger>
//               <AccordionContent className="ml-2 mt-2 text-lg font-extralight">
//                 <p>
//                   At Architectus Bureau, we understand that modern architecture
//                   and design are deeply rooted in the integration of advanced
//                   engineering solutions and cutting-edge technology. Our
//                   commitment lies in providing innovative, efficient, and
//                   sustainable solutions that enhance the built environment
//                   through a seamless blend of creativity and technical
//                   expertise.
//                 </p>

//                 <br />

//                 <h2 className="font-medium text-blue-200 text-xl">
//                   Our Approach to Engineering & Technology
//                 </h2>

//                 <br />

//                 <ul className="list-disc list-inside">
//                   <li>
//                     <span className="font-medium text-blue-200 mr-1">
//                       Innovative Engineering Solutions:{" "}
//                     </span>
//                     We combine years of engineering expertise with a
//                     forward-thinking approach to design. By integrating
//                     state-of-the-art technologies, we ensure that every
//                     structure is built to the highest standards of safety,
//                     functionality, and sustainability. Whether it’s structural
//                     integrity, environmental performance, or building
//                     automation, we deliver solutions tailored to your specific
//                     needs.
//                   </li>

//                   <br />

//                   <li>
//                     <span className="font-medium text-blue-200 mr-1">
//                       Sustainable Engineering Practices:{" "}
//                     </span>
//                     Sustainability is a key driver of our engineering
//                     philosophy. We strive to minimize the ecological footprint
//                     of our projects through the use of green building materials,
//                     renewable energy systems, and energy-efficient designs. Our
//                     engineering services ensure that structures not only meet
//                     current standards but also adapt to future needs in a
//                     responsible and environmentally conscious manner.
//                   </li>

//                   <br />

//                   <li>
//                     <span className="font-medium text-blue-200 mr-1">
//                       Advanced Technology Integration:{" "}
//                     </span>
//                     From conceptual design to construction, we harness the
//                     latest technological advancements to provide precision and
//                     efficiency. Our services include:
//                     <ul
//                       style={{ listStyle: "circle" }}
//                       className="list-inside ml-8"
//                     >
//                       <li>
//                         <span className="font-normal">
//                           Building Information Modeling (BIM):{" "}
//                         </span>
//                         A comprehensive approach to design, coordination, and
//                         construction management using digital 3D models.
//                       </li>

//                       <li>
//                         <span className="font-normal">
//                           Structural Analysis & Design:{" "}
//                         </span>
//                         Leveraging advanced software for complex simulations and
//                         ensuring structural reliability.
//                       </li>

//                       <li>
//                         <span className="font-normal">
//                           Energy Optimization:{" "}
//                         </span>
//                         Implementing smart technologies to enhance performance,
//                         reduce costs, and ensure long-term sustainability.
//                       </li>
//                     </ul>
//                   </li>

//                   <br />

//                   <li>
//                     <span className="font-medium text-blue-200 mr-1">
//                       Comprehensive Engineering & Technology Services:{" "}
//                     </span>

//                     <ul className="list-inside ml-5">
//                       <li>
//                         <span className="font-normal">
//                           Structural Engineering{" "}
//                         </span>
//                         <ul className="ml-5" style={{ listStyle: "circle" }}>
//                           <li>
//                             Advanced design solutions for residential,
//                             commercial, and industrial projects, ensuring
//                             maximum durability and safety.
//                           </li>
//                           <li>
//                             Use of cutting-edge materials and technologies to
//                             achieve optimized structural performance.
//                           </li>
//                         </ul>
//                       </li>

//                       <br />

//                       <li>
//                         <span className="font-normal">
//                           Mechanical, Electrical, and Plumbing (MEP) Engineering{" "}
//                         </span>
//                         <ul className="ml-5" style={{ listStyle: "circle" }}>
//                           <li>
//                             Designing efficient, integrated systems for HVAC,
//                             electrical, and plumbing needs to ensure smooth
//                             operations and sustainability.
//                           </li>
//                           <li>
//                             Implementing smart building systems for energy
//                             management and automation.
//                           </li>
//                         </ul>
//                       </li>

//                       <br />

//                       <li>
//                         <span className="font-normal">Civil Engineering </span>
//                         <ul className="ml-5" style={{ listStyle: "circle" }}>
//                           <li>
//                             Comprehensive site development, land evaluation, and
//                             infrastructure planning for a variety of projects.
//                           </li>
//                         </ul>
//                       </li>

//                       <br />

//                       <li>
//                         <span className="font-normal">
//                           Building Automation Systems (BAS){" "}
//                         </span>
//                         <ul className="ml-5" style={{ listStyle: "circle" }}>
//                           <li>
//                             Developing intelligent systems for controlling
//                             lighting, HVAC, security, and other building
//                             functions for increased convenience and energy
//                             efficiency.
//                           </li>
//                         </ul>
//                       </li>
//                     </ul>
//                   </li>

//                   <br />

//                   <li>
//                     <span className="font-medium text-blue-200 mr-1">
//                       Technological Excellence:{" "}
//                     </span>

//                     <ul className="list-inside ml-5">
//                       <li>
//                         <span className="">
//                           Our use of advanced technology ensures:{" "}
//                         </span>
//                         <ul className="ml-5" style={{ listStyle: "circle" }}>
//                           <li>
//                             <span>Accuracy: </span>Precision engineering for all
//                             design aspects using state-of-the-art software.
//                           </li>
//                           <li>
//                             <span>Efficiency: </span>Streamlined workflows and
//                             reduced construction timelines through automation
//                             and digital solutions.
//                           </li>
//                           <li>
//                             <span>Collaboration: </span>Enhanced communication
//                             and coordination between architects, engineers, and
//                             clients using integrated design platforms.
//                           </li>
//                           <li>
//                             <span>Innovation: </span>Constantly pushing the
//                             boundaries of what is possible with innovative
//                             engineering solutions.
//                           </li>
//                         </ul>
//                       </li>
//                     </ul>
//                   </li>
//                 </ul>
//               </AccordionContent>
//             </AccordionItem>

//             <AccordionItem value="item-3">
//               <AccordionTrigger
//                 onClick={() => handleToggle("item-3")}
//                 className={`font-semibold uppercase text-xl xs:text-2xl px-2 hover:text-blue-900 hover:bg-[#c8c8c8ed] rounded ${
//                   activeItem === "item-3"
//                     ? "bg-[#c8c8c8ed] text-blue-900"
//                     : "text-blue-300"
//                 }`}
//               >
//                 Research & Innovation
//               </AccordionTrigger>
//               <AccordionContent className="ml-2 mt-2 text-lg font-extralight">
//                 <p>
//                   At Architectus Bureau, we believe that the foundation of
//                   exceptional architecture and design is built upon continuous
//                   research and innovation. Our dedication to exploration,
//                   creativity, and cutting-edge technology allows us to push
//                   boundaries and create transformative spaces that reflect the
//                   future of built environments.
//                 </p>

//                 <br />

//                 <h2 className="font-medium text-blue-200 text-xl">
//                   Our Approach to Research & Innovation
//                 </h2>

//                 <br />

//                 <ul className="list-disc list-inside">
//                   <li>
//                     <span className="font-medium text-blue-200 mr-1">
//                       Constant Learning and Exploration:{" "}
//                     </span>
//                     We embrace a culture of curiosity and innovation, fostering
//                     an environment where ideas evolve into meaningful, impactful
//                     solutions. By staying ahead of industry trends and emerging
//                     technologies, we ensure that every project benefits from the
//                     latest advancements in architecture and design.
//                   </li>

//                   <br />

//                   <li>
//                     <span className="font-medium text-blue-200 mr-1">
//                       Commitment to Pioneering Design:{" "}
//                     </span>
//                     Our innovative approach is driven by a deep understanding of
//                     our client’s needs and a commitment to delivering unique
//                     solutions. Through detailed research, collaboration, and
//                     experimentation, we craft spaces that inspire, engage, and
//                     endure.
//                   </li>

//                   <br />

//                   <h2 className="font-medium text-blue-200 text-xl">
//                     Key Areas of Research & Innovation
//                   </h2>
//                   <br />

//                   <li>
//                     <span className="font-medium text-blue-200 mr-1">
//                       Sustainable Architecture:{" "}
//                     </span>
//                     We integrate research into sustainable practices, reducing
//                     the environmental impact of buildings through innovative
//                     design solutions. Our focus is on creating spaces that are
//                     energy-efficient, resilient, and environmentally conscious.
//                   </li>

//                   <br />

//                   <li>
//                     <span className="font-medium text-blue-200 mr-1">
//                       Technology-Driven Design:{" "}
//                     </span>
//                     We leverage emerging technologies such as Building
//                     Information Modeling (BIM), 3D printing, and AI to enhance
//                     the design process. These tools enable greater accuracy,
//                     efficiency, and collaboration, ensuring projects are
//                     completed with precision and innovation.
//                   </li>
//                   <br />
//                   <li>
//                     <span className="font-medium text-blue-200 mr-1">
//                       User-Centric Design:{" "}
//                     </span>
//                     Our research focuses on understanding the needs of the
//                     end-user, ensuring that spaces are not only functional but
//                     also emotionally impactful. This user-centered approach
//                     drives innovative design solutions that promote well-being
//                     and usability.
//                   </li>

//                   <br />

//                   <li>
//                     <span className="font-medium text-blue-200 mr-1">
//                       Cultural & Contextual Research:{" "}
//                     </span>
//                     We place a strong emphasis on understanding the cultural,
//                     historical, and geographical context of a project. This
//                     allows us to develop designs that are deeply rooted in
//                     place, reflecting the local identity while incorporating
//                     innovative solutions.
//                   </li>
//                   <br />
//                   <li>
//                     <span className="font-medium text-blue-200 mr-1">
//                       Design Thinking & Creativity:{" "}
//                     </span>
//                     Our approach to innovation is guided by design thinking—a
//                     human-centered process that fosters creativity, empathy, and
//                     problem-solving. By integrating this mindset into our
//                     projects, we create solutions that are practical yet
//                     imaginative.
//                   </li>
//                 </ul>
//               </AccordionContent>
//             </AccordionItem>

//             <AccordionItem value="item-4">
//               <AccordionTrigger
//                 onClick={() => handleToggle("item-4")}
//                 className={`font-semibold uppercase text-xl xs:text-2xl px-2 hover:text-blue-900 hover:bg-[#c8c8c8ed] rounded ${
//                   activeItem === "item-4"
//                     ? "bg-[#c8c8c8ed] text-blue-900"
//                     : "text-blue-300"
//                 }`}
//               >
//                 Project Management
//               </AccordionTrigger>
//               <AccordionContent className="ml-2 mt-2 text-lg font-extralight">
//                 <p>
//                   At Architectus Bureau, we understand that successful
//                   architecture and design projects require meticulous planning,
//                   coordination, and execution. Our dedicated approach to Project
//                   Management ensures that every project is delivered
//                   efficiently, within budget, and to the highest standards of
//                   quality.
//                 </p>

//                 <br />

//                 <h2 className="font-medium text-blue-200 text-xl">
//                   Our Approach to Project Management
//                 </h2>

//                 <br />

//                 <ul className="list-disc list-inside">
//                   <li>
//                     <span className="font-medium text-blue-200 mr-1">
//                       Efficiency Through Structured Processes:{" "}
//                     </span>
//                     We apply proven project management methodologies tailored to
//                     the unique needs of each project. By combining strategic
//                     planning with innovative practices, we streamline workflows,
//                     minimize risks, and ensure seamless communication between
//                     stakeholders.
//                   </li>

//                   <br />

//                   <li>
//                     <span className="font-medium text-blue-200 mr-1">
//                       Key Elements of Our Project Management Process:{" "}
//                     </span>
//                     <br />
//                     <br />
//                     <ul
//                       style={{ listStyle: "circle" }}
//                       className="list-inside ml-10"
//                     >
//                       <li>
//                         <span className="font-normal">
//                           Comprehensive Planning:{" "}
//                         </span>
//                         Our project management process begins with in-depth
//                         analysis and planning. We collaborate closely with
//                         clients, architects, engineers, and other professionals
//                         to outline clear objectives, scope, timelines, and
//                         resource allocations for the project.
//                       </li>

//                       <li>
//                         <span className="font-normal">
//                           Stakeholder Engagement:{" "}
//                         </span>
//                         Effective communication is at the core of our project
//                         management approach. We ensure that all
//                         stakeholders—from clients to contractors—are engaged at
//                         every stage, fostering transparency, collaboration, and
//                         trust.
//                       </li>

//                       <li>
//                         <span className="font-normal">Risk Management: </span>
//                         We proactively identify potential risks and develop
//                         contingency plans to mitigate them. Our team uses
//                         advanced tools and techniques to predict challenges and
//                         create flexible solutions that safeguard the project’s
//                         success.
//                       </li>
//                       <li>
//                         <span className="font-normal">Quality Control: </span>
//                         Quality assurance is fundamental in our project
//                         management process. We maintain rigorous quality control
//                         throughout every phase, ensuring that designs meet
//                         client expectations, adhere to regulations, and comply
//                         with industry standards.
//                       </li>
//                     </ul>
//                   </li>

//                   <br />

//                   <li>
//                     <span className="font-medium text-blue-200 mr-1">
//                       Project Phases We Manage:{" "}
//                     </span>
//                     <ul className="list-inside ml-8">
//                       <li>
//                         <span className="font-normal">Concept Development</span>
//                         <ul
//                           style={{ listStyle: "circle" }}
//                           className="list-inside ml-8"
//                         >
//                           <li>
//                             Establishing project goals and defining
//                             architectural concepts.
//                           </li>
//                           <li>
//                             Identifying client needs and creating initial design
//                             concepts aligned with expectations.
//                           </li>
//                         </ul>
//                       </li>
//                       <br />

//                       <li>
//                         <span className="font-normal">Design Development</span>
//                         <ul
//                           style={{ listStyle: "circle" }}
//                           className="list-inside ml-8"
//                         >
//                           <li>
//                             Translating conceptual ideas into detailed
//                             architectural and engineering designs.
//                           </li>
//                           <li>
//                             Ensuring precision and creativity in design through
//                             close collaboration.
//                           </li>
//                         </ul>
//                       </li>
//                       <br />

//                       <li>
//                         <span className="font-normal">
//                           Construction Management
//                         </span>
//                         <ul
//                           style={{ listStyle: "circle" }}
//                           className="list-inside ml-8"
//                         >
//                           <li>
//                             Overseeing construction processes from start to
//                             finish.
//                           </li>
//                           <li>
//                             Managing contractors, budgets, and timelines to
//                             ensure smooth execution.
//                           </li>
//                         </ul>
//                       </li>
//                       <br />

//                       <li>
//                         <span className="font-normal">Post-Construction</span>
//                         <ul
//                           style={{ listStyle: "circle" }}
//                           className="list-inside ml-8"
//                         >
//                           <li>
//                             Providing support during occupancy and maintenance
//                             phases.
//                           </li>
//                           <li>
//                             Managing final inspections, handing over
//                             documentation, and ensuring client satisfaction.
//                           </li>
//                         </ul>
//                       </li>
//                     </ul>
//                   </li>

//                   <br />

//                   <li>
//                     <span className="font-medium text-blue-200 mr-1">
//                       Technological Integration in Project Management:{" "}
//                     </span>
//                     <ul className="list-inside ml-8">
//                       <li>
//                         <span className="font-normal">
//                           We leverage advanced tools such as:
//                         </span>
//                         <ul
//                           style={{ listStyle: "circle" }}
//                           className="list-inside ml-8"
//                         >
//                           <li>
//                             <span>Building Information Modeling (BIM): </span>
//                             Streamlining design coordination and improving
//                             project efficiency.
//                           </li>
//                           <li>
//                             <span>Project Management Software: </span>
//                             Facilitating real-time tracking of project progress,
//                             timelines, and budgets.
//                           </li>
//                           <li>
//                             <span>Data Analytics: </span>
//                             Providing insights into project performance and
//                             enabling data-driven decision-making.
//                           </li>
//                         </ul>
//                       </li>
//                       <br />

//                       <li>
//                         <span className="font-normal">Design Development</span>
//                         <ul
//                           style={{ listStyle: "circle" }}
//                           className="list-inside ml-8"
//                         >
//                           <li>
//                             Translating conceptual ideas into detailed
//                             architectural and engineering designs.
//                           </li>
//                           <li>
//                             Ensuring precision and creativity in design through
//                             close collaboration.
//                           </li>
//                         </ul>
//                       </li>
//                       <br />

//                       <li>
//                         <span className="font-normal">
//                           Construction Management
//                         </span>
//                         <ul
//                           style={{ listStyle: "circle" }}
//                           className="list-inside ml-8"
//                         >
//                           <li>
//                             Overseeing construction processes from start to
//                             finish.
//                           </li>
//                           <li>
//                             Managing contractors, budgets, and timelines to
//                             ensure smooth execution.
//                           </li>
//                         </ul>
//                       </li>
//                       <br />

//                       <li>
//                         <span className="font-normal">Post-Construction</span>
//                         <ul
//                           style={{ listStyle: "circle" }}
//                           className="list-inside ml-8"
//                         >
//                           <li>
//                             Providing support during occupancy and maintenance
//                             phases.
//                           </li>
//                           <li>
//                             Managing final inspections, handing over
//                             documentation, and ensuring client satisfaction.
//                           </li>
//                         </ul>
//                       </li>
//                     </ul>
//                   </li>
//                 </ul>
//               </AccordionContent>
//             </AccordionItem>
//           </Accordion>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default ExpertisePage;

import React, { useState } from "react";
import { motion } from "framer-motion";
import SliderMenuImage from "../assets/images/expertise.webp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion.jsx";
import { ChevronDownIcon } from "lucide-react";

const ExpertisePage = () => {
  const expertiseData = [
    {
      id: "item-1",
      title: "Architecture & Design",
      content: (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <p className="mb-6 text-gray-300">
            At Architectus Bureau, we believe that architecture is more than
            just creating structures; it is about shaping experiences, fostering
            communities, and enhancing lives through thoughtful, sustainable,
            and innovative design solutions. Our approach to architecture
            integrates creativity, functionality, and sustainability to deliver
            spaces that are both ethereal and adaptive.
          </p>

          <h3 className="text-base sm:text-xl font-medium text-indigo-300 mb-4">
            Our Approach to Architecture & Design
          </h3>

          <div className="space-y-6">
            <motion.div
              className="p-6 bg-gray-800/50 rounded-xl border border-gray-700"
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="font-medium text-indigo-200 mb-2 underline">
                Innovation Meets Tradition
              </h4>
              <p className="text-gray-300">
                We combine the richness of traditional architectural principles
                with cutting-edge design techniques to create timeless, modern
                spaces that reflect both culture and innovation. Every project
                is tailored to the unique requirements of our clients, ensuring
                that each space serves its intended purpose seamlessly while
                maintaining aesthetic integrity.
              </p>
            </motion.div>

            <motion.div
              className="p-6 bg-gray-800/50 rounded-xl border border-gray-700"
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="font-medium text-indigo-200 mb-2 underline">
                Sustainability and Responsiveness
              </h4>
              <p className="text-gray-300">
                Sustainability is at the core of our architectural philosophy.
                We design spaces that minimize environmental impact by
                integrating eco-friendly practices such as efficient use of
                resources, energy-saving systems, and sustainable materials. Our
                approach ensures that your building doesn’t just meet your
                current needs but also contributes positively to the
                environment.
              </p>
            </motion.div>

            <motion.div
              className="p-6 bg-gray-800/50 rounded-xl border border-gray-700"
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="font-medium text-indigo-200 mb-2 underline">
                Collaborative & Holistic Design
              </h4>
              <p className="text-gray-300">
                At Architectus Bureau, we believe that successful design is the
                result of collaboration. We work closely with clients,
                engineers, planners, and other professionals to ensure every
                detail aligns with the vision and functionality of the project.
                Whether it’s residential, commercial, or institutional projects,
                our goal is to create spaces that resonate with both
                functionality and grandeur.
              </p>
            </motion.div>
          </div>
        </motion.div>
      ),
    },
    {
      id: "item-2",
      title: "Engineering & Technology",
      content: (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <p className="mb-6 text-gray-300">
            At Architectus Bureau, we understand that modern architecture and
            design are deeply rooted in the integration of advanced engineering
            solutions and cutting-edge technology. Our commitment lies in
            providing innovative, efficient, and sustainable solutions that
            enhance the built environment through a seamless blend of creativity
            and technical expertise.
          </p>

          <h3 className="text-base sm:text-xl font-medium text-indigo-300 mb-4">
            Our Approach to Engineering & Technology
          </h3>

          <div className="space-y-6">
            <motion.div
              className="p-6 bg-gray-800/50 rounded-xl border border-gray-700"
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="font-medium text-indigo-200 mb-2 underline">
                Innovative Engineering Solutions
              </h4>
              <p className="text-gray-300">
                We combine years of engineering expertise with a
                forward-thinking approach to design. By integrating
                state-of-the-art technologies, we ensure that every structure is
                built to the highest standards of safety, functionality, and
                sustainability. Whether it’s structural integrity, environmental
                performance, or building automation, we deliver solutions
                tailored to your specific needs.
              </p>
            </motion.div>

            <motion.div
              className="p-6 bg-gray-800/50 rounded-xl border border-gray-700"
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="font-medium text-indigo-200 mb-2 underline">
                Sustainable Engineering Practices
              </h4>
              <p className="text-gray-300">
                Sustainability is a key driver of our engineering philosophy. We
                strive to minimize the ecological footprint of our projects
                through the use of green building materials, renewable energy
                systems, and energy-efficient designs. Our engineering services
                ensure that structures not only meet current standards but also
                adapt to future needs in a responsible and environmentally
                conscious manner.
              </p>
            </motion.div>

            <motion.div
              className="p-6 bg-gray-800/50 rounded-xl border border-gray-700"
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="font-medium text-indigo-200 mb-2 underline">
                Advanced Technology Integration
              </h4>
              <p className="text-gray-300">
                From conceptual design to construction, we harness the latest
                technological advancements to provide precision and efficiency.
                Our services include:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-300">
                <li>
                  <span>Building Information Modeling (BIM)</span>: A
                  comprehensive approach to design, coordination, and
                  construction management using digital 3D models.
                </li>
                <li>
                  <span>Structural Analysis & Design</span>: Leveraging advanced
                  software for complex simulations and ensuring structural
                  reliability.
                </li>
                <li>
                  <span>Energy Optimization</span>: Implementing smart
                  technologies to enhance performance, reduce costs, and ensure
                  long-term sustainability.
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="p-6 bg-gray-800/50 rounded-xl border border-gray-700"
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="font-medium text-indigo-200 mb-2 underline">
                Comprehensive Engineering & Technology Services:
              </h4>
              <p className="text-gray-300">
                Structural Engineering
                <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-300">
                  <li>
                    Advanced design solutions for residential, commercial, and
                    industrial projects, ensuring maximum durability and safety.
                  </li>
                  <li>
                    Use of cutting-edge materials and technologies to achieve
                    optimized structural performance.
                  </li>
                </ul>
              </p>
              <p className="text-gray-300">
                Mechanical, Electrical, and Plumbing (MEP) Engineering
                <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-300">
                  <li>
                    Designing efficient, integrated systems for HVAC,
                    electrical, and plumbing needs to ensure smooth operations
                    and sustainability.
                  </li>
                  <li>
                    Implementing smart building systems for energy management
                    and automation.
                  </li>
                </ul>
              </p>
              <p className="text-gray-300">
                Civil Engineering
                <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-300">
                  <li>
                    Comprehensive site development, land evaluation, and
                    infrastructure planning for a variety of projects.
                  </li>
                </ul>
              </p>
              <p className="text-gray-300">
                Building Automation Systems (BAS)
                <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-300">
                  <li>
                    Developing intelligent systems for controlling lighting,
                    HVAC, security, and other building functions for increased
                    convenience and energy efficiency.
                  </li>
                </ul>
              </p>
            </motion.div>

            <motion.div
              className="p-6 bg-gray-800/50 rounded-xl border border-gray-700"
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="font-medium text-indigo-200 mb-2 underline">
                Technological Excellence:
              </h4>
              <p className="text-gray-300">
                Our use of advanced technology ensures:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-300">
                <li>
                  <span>Accuracy</span>: Precision engineering for all design
                  aspects using state-of-the-art software.
                </li>
                <li>
                  <span>Efficiency</span>: Streamlined workflows and reduced
                  construction timelines through automation and digital
                  solutions.
                </li>
                <li>
                  <span>Collaboration</span>: Enhanced communication and
                  coordination between architects, engineers, and clients using
                  integrated design platforms.
                </li>
                <li>
                  <span>Innovation</span>: Constantly pushing the boundaries of
                  what is possible with innovative engineering solutions.
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      ),
    },
    {
      id: "item-3",
      title: "Research & Innovation",
      content: (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <p className="mb-6 text-gray-300">
            At Architectus Bureau, we believe that the foundation of exceptional
            architecture and design is built upon continuous research and
            innovation. Our dedication to exploration, creativity, and
            cutting-edge technology allows us to push boundaries and create
            transformative spaces that reflect the future of built environments.
          </p>

          <h3 className="text-base sm:text-xl font-medium text-indigo-300 mb-4">
            Our Approach to Research & Innovation
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Constant Learning and Exploration:",
                desc: "We embrace a culture of curiosity and innovation, fostering an environment where ideas evolve into meaningful, impactful solutions. By staying ahead of industry trends and emerging technologies, we ensure that every project benefits from the latest advancements in architecture and design.",
              },
              {
                title: "Commitment to Pioneering Design:",
                desc: "Our innovative approach is driven by a deep understanding of our client’s needs and a commitment to delivering unique solutions. Through detailed research, collaboration, and experimentation, we craft spaces that inspire, engage, and endure.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-800/50 rounded-xl border border-gray-700"
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="font-medium text-indigo-200 mb-2 underline">
                  {item.title}
                </h4>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <h3 className="text-base sm:text-xl font-medium text-indigo-300 my-4">
            Key Areas of Research & Innovation
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Sustainable Architecture:",
                desc: "We integrate research into sustainable practices, reducing the environmental impact of buildings through innovative design solutions. Our focus is on creating spaces that are energy-efficient, resilient, and environmentally conscious.",
              },
              {
                title: "Technology-Driven Design:",
                desc: "We leverage emerging technologies such as Building Information Modeling (BIM), 3D printing, and AI to enhance the design process. These tools enable greater accuracy, efficiency, and collaboration, ensuring projects are completed with precision and innovation.",
              },
              {
                title: "User-Centric Design:",
                desc: "Our research focuses on understanding the needs of the end-user, ensuring that spaces are not only functional but also emotionally impactful. This user-centered approach drives innovative design solutions that promote well-being and usability.",
              },
              {
                title: "Cultural & Contextual Research:",
                desc: "We place a strong emphasis on understanding the cultural, historical, and geographical context of a project. This allows us to develop designs that are deeply rooted in place, reflecting the local identity while incorporating innovative solutions.",
              },
              {
                title: "Design Thinking & Creativity:",
                desc: "Our approach to innovation is guided by design thinking—a human-centered process that fosters creativity, empathy, and problem-solving. By integrating this mindset into our projects, we create solutions that are practical yet imaginative.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-800/50 rounded-xl border border-gray-700"
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="font-medium text-indigo-200 mb-2 underline">
                  {item.title}
                </h4>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ),
    },
    {
      id: "item-4",
      title: "Project Management",
      content: (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <p className="mb-6 text-gray-300">
            At Architectus Bureau, we understand that successful architecture
            and design projects require meticulous planning, coordination, and
            execution. Our dedicated approach to Project Management ensures that
            every project is delivered efficiently, within budget, and to the
            highest standards of quality.
          </p>

          <h3 className="text-base sm:text-xl font-medium text-indigo-300 mb-4">
            Our Approach to Project Management
          </h3>

          <div className="space-y-6">
            <motion.div
              className="p-6 bg-gray-800/50 rounded-xl border border-gray-700"
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="font-medium text-indigo-200 mb-2 underline">
                Efficiency Through Structured Processes:
              </h4>
              <p className="text-gray-300">
                We apply proven project management methodologies tailored to the
                unique needs of each project. By combining strategic planning
                with innovative practices, we streamline workflows, minimize
                risks, and ensure seamless communication between stakeholders.
              </p>
            </motion.div>

            <motion.div
              className="p-6 bg-gray-800/50 rounded-xl border border-gray-700"
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="font-medium text-indigo-200 mb-2 underline">
                Key Elements of Our Project Management Process:
              </h4>
              <div className="mt-3 space-y-3">
                {[
                  {
                    title: "Comprehensive Planning:",
                    desc: "Our project management process begins with in-depth analysis and planning. We collaborate closely with clients, architects, engineers, and other professionals to outline clear objectives, scope, timelines, and resource allocations for the project.",
                  },
                  {
                    title: "Stakeholder Engagement:",
                    desc: "Effective communication is at the core of our project management approach. We ensure that all stakeholders—from clients to contractors—are engaged at every stage, fostering transparency, collaboration, and trust.",
                  },
                  {
                    title: "Risk Management:",
                    desc: "We proactively identify potential risks and develop contingency plans to mitigate them. Our team uses advanced tools and techniques to predict challenges and create flexible solutions that safeguard the project’s success.",
                  },
                  {
                    title: "Quality Control:",
                    desc: "Quality assurance is fundamental in our project management process. We maintain rigorous quality control throughout every phase, ensuring that designs meet client expectations, adhere to regulations, and comply with industry standards.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-indigo-400 mt-1">
                      •
                    </div>
                    <div className="ml-2">
                      <p className="font-medium text-gray-200">{item.title}</p>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="p-6 bg-gray-800/50 rounded-xl border border-gray-700"
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="font-medium text-indigo-200 mb-2 underline">
                Project Phases We Manage:
              </h4>
              <p className="text-gray-300">Concept Development</p>
              <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-300">
                <li>
                  Establishing project goals and defining architectural
                  concepts.
                </li>
                <li>
                  Identifying client needs and creating initial design concepts
                  aligned with expectations.
                </li>
              </ul>

              <p className="text-gray-300">Design Development</p>
              <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-300">
                <li>
                  Translating conceptual ideas into detailed architectural and
                  engineering designs.
                </li>
                <li>
                  Ensuring precision and creativity in design through close
                  collaboration.
                </li>
              </ul>

              <p className="text-gray-300">Construction Management</p>
              <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-300">
                <li>Overseeing construction processes from start to finish.</li>
                <li>
                  Managing contractors, budgets, and timelines to ensure smooth
                  execution.
                </li>
              </ul>

              <p className="text-gray-300">Post-Construction</p>
              <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-300">
                <li>
                  Providing support during occupancy and maintenance phases.
                </li>
                <li>
                  Managing final inspections, handing over documentation, and
                  ensuring client satisfaction.
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="p-6 bg-gray-800/50 rounded-xl border border-gray-700"
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="font-medium text-indigo-200 mb-2 underline">
                Technological Integration in Project Management:
              </h4>
              <p className="text-gray-300">
                We leverage advanced tools such as:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-300">
                <li>
                  <span>Building Information Modeling (BIM): </span>
                  Streamlining design coordination and improving project
                  efficiency.
                </li>
                <li>
                  <span>Project Management Software: </span>
                  Facilitating real-time tracking of project progress,
                  timelines, and budgets.
                </li>
                <li>
                  <span>Data Analytics: </span>
                  Providing insights into project performance and enabling
                  data-driven decision-making.
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      ),
    },
  ];

  return (
    <div className="w-full relative bg-gray-950">
      {/* Hero Section */}
      <div className="relative h-[80vh] max-h-[900px] w-full overflow-hidden">
        <motion.img
          src={SliderMenuImage}
          className="w-full h-full object-cover"
          alt="Expertise"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full px-6 lg:px-12 pb-12">
          <motion.h2
            className="text-2xl md:text-4xl font-bold text-white max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Expertise & Services
          </motion.h2>
          <motion.p
            className="mt-4 text-base md:text-lg text-gray-300 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Discover our comprehensive architectural services and innovative
            approaches
          </motion.p>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-6 lg:px-12 py-10 sm:py-14 max-w-7xl mx-auto">
        <Accordion type="multiple" className="space-y-4 md:space-y-6">
          {expertiseData.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <AccordionItem
                value={item.id}
                className="overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm"
              >
                <AccordionTrigger className="w-full text-white flex justify-between items-center p-3 xs:p-4 md:p-6 text-left hover:no-underline focus:outline-none group">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-white group-data-[state=open]:text-indigo-300 transition-colors">
                    {item.title}
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="text-base md:text-lg p-3 xs:p-4 md:p-6 pt-0 leading-relaxed">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default ExpertisePage;
