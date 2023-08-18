import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen  bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full  grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>

          <div></div>
        </div>

        <div className="max-w-[1000px] w-full  grid sm: grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold ">
            <p>
              Hi i'm Nael Elmahdy, nice to see you here ^_^. <br />
              please take a look around.{" "}
            </p>
          </div>

          <div>
            <p>
            
              Dedicated and efficient Software Engineer(FE) creating websites and
              writing clean code . would like to join a suitable work
              environment to further enhance and improve my skills within a fast
              and dynamic paced setting,this allowing me to use  my skills
              effectively and optimally, in order to contribute and work
              optimally at all times when given tasks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
