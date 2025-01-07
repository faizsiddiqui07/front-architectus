import React from "react";
import image from "../assets/images/about.webp";

const About = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[350px] xs:h-[400px] md:h-[600px] relative">
        <img src={image} className="w-full h-full object-cover" alt="" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 65%, black 100%)",
          }}
        ></div>
        <span className="w-full text-3xl text-center sm:text-start sm:text-4xl text-white font-normal absolute bottom-7 px-4 lg:px-10">
          About us
        </span>
      </div>
      <div className="w-full py-12">
        <div className="px-6 lg:px-20 mx-auto text-justify">
          <p className="text-white  mx-auto leading-relaxed">
            <span className="font-semibold">Architectus Bureau</span>, founded &
            established by visionary architects
            <span className="font-semibold"> Khaan Aamir</span> and
            <span className="font-semibold"> Kalpana Saini</span>, with a
            mission to redefine the essence of architectural design. The firm
            has garnered recognition as a leading name in the industry,
            celebrated for its ability to merge innovation, experimentation, and
            sustainability into transformative spaces that stand as living art.
          </p>

          <div className="mt-9 text-gray-300">
            <p className="mx-auto leading-relaxed">
              At its core,{" "}
              <span className="text-white font-semibold">
                Architectus Bureau
              </span>{" "}
              believes architecture is more than building structures—it is about
              crafting experiences. Guided by a commitment to design excellence,
              the firm embraces an experimental approach that challenges
              conventions while maintaining harmony with the environment.
            </p>
            <p className="mx-auto leading-relaxed">
              The firm’s design philosophy revolves around innovation fused with
              cultural relevance, ensuring that every project tells a unique
              story. Key aspects of our approach include:
            </p>

            <ul className="mt-2 text-left list-disc list-inside mx-auto space-y-2 ">
              <li>
                <span className="mr-1">Contextual Sensitivity:</span> Tailoring
                designs to align with the geographical, cultural, and social
                fabric of the location.
              </li>
              <li>
                <span className="mr-1">Experimental Techniques:</span> Utilizing
                cutting-edge technologies like parametric modeling, 3D printing,
                and VR simulations to explore unconventional solutions.
              </li>
              <li>
                <span className="mr-1">Sustainability in Every Detail:</span> From
                passive cooling techniques and green roofs to renewable energy
                integration, the firm prioritizes eco-conscious solutions.
              </li>
              <li>
                <span className="mr-1">Functional Aesthetics:</span> Striking a
                balance between beauty and usability by crafting spaces that
                inspire and perform simultaneously.
              </li>
            </ul>

            <p className="mt-9 mx-auto leading-relaxed">
              Architectus Bureau is committed to leaving a minimal ecological
              footprint. Our projects emphasize:
            </p>

            <ul className="mt-2 text-left list-disc list-inside mx-auto space-y-2 ">
              <li>
                <span className="mr-1">Energy Efficiency:</span> Smart building systems, natural lighting, and renewable energy integration.
              </li>
              <li>
                <span className="mr-1">Material Innovation:</span>Use of locally sourced, recycled, and low-impact materials.
              </li>
              <li>
                <span className="mr-1">Biodiversity Promotion:</span>Designs that incorporate green spaces, urban forests, and water conservation techniques.
              </li>
            </ul>

            <p className="mt-9 mx-auto leading-relaxed">
            Under the dynamic leadership of Khaan Aamir and Kalpana Saini, the firm thrives on a collaborative culture. Architectus Bureau brings together a multidisciplinary team of:
            </p>

            <ul className="mt-2 text-left list-disc list-inside mx-auto space-y-2 ">
              <li>
              Architects, urban planners, and designers who specialize in cutting-edge technologies.
              </li>
              <li>
              Engineers and sustainability consultants who ensure technical and environmental feasibility.
              </li>
              <li>
              Artists and craftsmen who add unique cultural and artistic elements to each project.
              </li>
            </ul>

            <p className="mt-9 mx-auto leading-relaxed">
            Architectus Bureau continues to evolve as a trendsetter in architecture, pushing boundaries in the realms of smart cities, biophilic design, and sustainable urban development. With a strong foundation built on innovation and integrity, the firm remains dedicated to transforming spaces into icons of living art for generations to come.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
