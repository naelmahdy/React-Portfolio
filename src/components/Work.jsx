import React from "react";
import ecommerce from "../assets/New folder/ecommerce.PNG";
import bookStore from "../assets/New folder/bookStore.PNG";
import travellers from "../assets/New folder/travellers.PNG";
import portfolio from "../assets/New folder/portfolio.PNG";
import reactTemplate from "../assets/New folder/reactTemplate.PNG";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      {/** container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            work
          </p>
          <p className="py-6 ">
            // checkout some of my recent work and there is more in my cv
          </p>
        </div>

        {/** ____________________________________________ */}

        {/** card container */}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/** card item */}

          <div
            style={{ backgroundImage: `url(${ecommerce})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto work-content-div"
          >
            {/** hover effect  */}
            <div className="opacity-0 group-hover:opacity-100  ">
              <span className=" text-2xl font-bold text-white -tracking-wider block  text-center">
                {" "}
                React Ecommerce With Dashboard{" "}
              </span>
              <div className="pt-8 text-center">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/feed/update/urn:li:activity:7077338357718032386/"
                >
                  <button className="text-center rounded px-4  m-2  py-3 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/naelmahdy/ReactEcommerce"
                >
                  <button className="text-center rounded px-4  m-2 py-3 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/** end card container */}

          {/** card item */}

          <div
            style={{ backgroundImage: `url(${reactTemplate})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto work-content-div"
          >
            {/** hover effect  */}
            <div className="opacity-0 group-hover:opacity-100  ">
              <span className=" text-2xl font-bold text-white -tracking-wider">
                {" "}
                react Js Application{" "}
              </span>
              <div className="pt-8 text-center">
                <a href="https://first-temp-using-styled-component.vercel.app/" target="_blank">
                  <button className="text-center rounded px-4  m-2  py-3 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/naelmahdy/first-temp-using-styledComponent" target="_blank">
                  <button className="text-center rounded px-4  m-2 py-3 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/** end card container */}

          {/** card item */}

          <div
            style={{ backgroundImage: `url(${bookStore})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto work-content-div"
          >
            {/** hover effect  */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className=" text-2xl font-bold text-white -tracking-wider block text-center">
                {" "}
                book store EgyptFWD React Final App{" "}
              </span>
              <div className="pt-8 text-center">
                <a href="https://myreadsapp-nu.vercel.app/" target="_blank">
                  <button className="text-center rounded px-4  m-2  py-3 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/naelmahdy/MyReadsApp" target="_blank">
                  <button className="text-center rounded px-4  m-2 py-3 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/** end card container */}
          {/** card item */}

          <div
            style={{ backgroundImage: `url(${portfolio})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto work-content-div"
          >
            {/** hover effect  */}
            <div className="opacity-0 group-hover:opacity-100  ">
              <span className=" text-2xl font-bold text-white -tracking-wider block  text-center">
                {" "}
                html css bootstrap js responsive design{" "}
              </span>
              <div className="pt-8 text-center">
                <a
                  target="_blank"
                  href="https://naelmahdy.github.io/Portfolio/"
                >
                  <button className="text-center rounded px-4  m-2  py-3 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/naelmahdy/Portfolio"
                >
                  <button className="text-center rounded px-4  m-2 py-3 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/** end card container */}
          {/** card item */}

          <div
            style={{ backgroundImage: `url(${travellers})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto work-content-div"
          >
            {/** hover effect  */}
            <div className="opacity-0 group-hover:opacity-100  ">
              <span className=" text-2xl font-bold text-white -tracking-wider block  text-center">
                {" "}
                html css bootstrap js responsive design{" "}
              </span>
              <div className="pt-8 text-center">
                <a
                  target="_blank"
                  href="https://naelmahdy.github.io/Task8Traveller/#DESTINATIONS"
                >
                  <button className="text-center rounded px-4  m-2  py-3 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/naelmahdy/Task8Traveller"
                >
                  <button className="text-center rounded px-4  m-2 py-3 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/** end card container */}
        </div>
      </div>
    </div>
  );
};

export default Work;
