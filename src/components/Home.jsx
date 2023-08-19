import React, { useRef, useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Work from "./Work";

const Home = () => {
  const ref = useRef(null);

  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div name="home" className=" w-full h-screen  bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Nael Elmahdy
        </h1>
        <h2 className="text-4xl sm:text-7xl font-extrabold text-[#8892b0]">
          I'm FrontEnd Developer,
        </h2>

        <p className="text-[#8892b0] py-4 max-w-[600px]">
          I'm FrontEnd Developer specializing in building beautiful designs ,
          i'm focous on building beautiful responsive web applications
        </p>
        <div>
          <button
            onClick={handleClick}
            className="text-white group border-2 px-6 py-3 my-2 flex items-center  hover:bg-pink-600 hover:border-pink-600  "
          >
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-2" />
            </span>
          </button>
        </div>
      </div>
      <div className="bg-[#0a192f] h-screen" ref={ref}>
        {toggle && (
          <div>
            <Work />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
