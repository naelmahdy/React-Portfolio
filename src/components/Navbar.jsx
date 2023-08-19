import React, { useState } from "react";
import Logo from "../assets/glow.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

import { Link } from "react-router-dom";
import cvNael from "../assets/NaelElmahdy.pdf";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="logo" style={{ width: "50px" }} />
      </div>

      {/* menu */}
      {/* -------------------------------------------------------- */}
      <ul className="hidden md:flex">
        <li>
          <Link to={"/"}>Home</Link>{" "}
        </li>
        <li>
          <Link to={"/About"}>About</Link>{" "}
        </li>
        <li>
          <Link to={"/Skills"}>Skills</Link>{" "}
        </li>
        <li>
          <Link to={"/Work"}>Work</Link>{" "}
        </li>
        <li>
          <Link to={"/Contact"}>Contact</Link>{" "}
        </li>
      </ul>

      {/* hamburger */}
      {/* -------------------------------------------------------- */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile menu */}
      {/* -------------------------------------------------------- */}

      <ul
        className={
          !nav
            ? "hidden"
            : " absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to={"/"}>
            Home
          </Link>{" "}
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to={"/About"}>
            About
          </Link>{" "}
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to={"/Skills"}>
            Skills
          </Link>{" "}
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to={"/Work"}>
            Work
          </Link>{" "}
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to={"/Contact"}>
            Contact
          </Link>
        </li>
      </ul>

      {/* social icons */}
      <div className="hidden lg:flex fixed top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              href="https://www.linkedin.com/in/nael-elmahdy-3978631a5/"
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-[#333]">
            <a
              href="https://github.com/naelmahdy"
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Github <FaGithub size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              href="mailto:naelmahdy33@gmail.com"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Mail <HiOutlineMail size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              href={`${cvNael}`}
              download
              className="flex justify-between items-center w-full text-gray-300"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              href={`https://api.whatsapp.com/send?phone=201066342015`}
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Whatsapp <BsWhatsapp size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
