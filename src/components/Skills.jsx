import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactJs from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstrap.jpg";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300 ">
      {/*container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col  justify-center w-full h-full">
        <div>
          <p className="text-4xl py-4 font-bold border-b-2 border-pink-600">
            Skills
          </p>
          <p className="py-4">
            // these are the technologies that i've worked with
          </p>
        </div>

        {/*__________________________________________________ */}

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML" />
            <p className="my-4">HTML</p>
          </div>
          {/*__________________________________________________ */}

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="CSS" />
            <p className="my-4">CSS</p>
          </div>
          {/*__________________________________________________ */}

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={bootstrap} alt="bootstrap" />
            <p className="my-4">Bootstrap</p>
          </div>
          {/*__________________________________________________ */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={javascript} alt="javascript" />
            <p className="my-4">Javascript</p>
          </div>
          {/*__________________________________________________ */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={reactJs} alt="reactJs" />
            <p className="my-4">React Js</p>
          </div>
          {/*__________________________________________________ */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={github} alt="github" />
            <p className="my-4">Github</p>
          </div>
          {/*__________________________________________________ */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={tailwind} alt="tailwind" />
            <p className="my-4">Tailwind Css</p>
          </div>
          {/*__________________________________________________ */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
