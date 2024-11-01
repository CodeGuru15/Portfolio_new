import { useState } from "react";

const About = () => {
  const [more, setMore] = useState(false);

  const handleMore = () => {
    setMore(!more);
  };
  return (
    <div className="h-[100vh] grid place-content-center">
      <div className="grid place-content-center w-[80vw]">
        <div className="flex p-2 font-bold md:text-xl text-sm">
          <p>About</p>
          <p className="pl-2 text-purple-700">Me</p>
        </div>
        <div className="p-2 font-semibold text-sm md:text-lg">
          Hi, I,m Here To Build Your Dream Project !
        </div>
        <div className="p-2 text-justify md:font-medium text-sm lg:text-xl animate-slideleft font-serif tracking-wider">
          Passionate and self-motivated entry-level Full Stack Web Developer
          seeking to leverage my strong foundations in HTML, CSS, and
          JavaScript, along with a keen interest in frameworks like React JS,
          Next JS and Tailwind CSS, to contribute to building dynamic and
          user-friendly web applications. Driven by a love for problem-solving
          and a thirst for continuous learning, I'm eager to join a
          collaborative team and grow my skills while contributing to real-world
          projects.
        </div>
        {more ? (
          <>
            <button
              onClick={handleMore}
              className="  hover:text-black bg-blue-500 p-1 w-[150px] m-2 rounded-sm"
            >
              Read Less
            </button>
            <div className="p-2 text-justify md:font-medium text-sm lg:text-xl">
              <p className="py-2 text-2xl text-left font-bold">
                Creating Impressive web experiences, pixel by pixel
              </p>
              <p className="font-serif tracking-wider">
                Embarking on a journey as a full-stack web developer in Kolkata,
                my portfolio showcase cutting-edge designs and streamelined
                solutions, with the perfect blend of creativity and technical
                knowledge. Immerse yourself in an array of successful web
                projects, rendering my footprint in the digital landscape.
              </p>
            </div>
          </>
        ) : (
          window.screen.width > 768 && (
            <button
              onClick={handleMore}
              className=" hover:text-black bg-blue-500 p-1 w-[150px] m-2 rounded-sm"
            >
              Read More
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default About;
