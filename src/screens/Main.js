import React from "react";
import name from "../images/name.png";
import me from "../images/me.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Main = () => {
  return (
    <div className=" pt-24 lg:pt-12 w-full flex px-24 lg:px-2 mb-24 lg:mb-0 lg:mt-14">
      <div className="section_one w-1/4 lg:w-1/2 flex flex-col lg:items-center">
        <img src={name} className="object-contain h-24 self-start transform transition duration-300
        hover:scale-110" />
        <div className="line w-1/4 lg:w-3/4 my-6 lg:my-4"></div>
        <div className="link1 flex flex-row">
          <a  className="mr-2 lg:mb-2" href="https://instagram.com/zaeshann">
            {" "}
            Instagram
          </a>
          <p className="mr-2 lg:hidden">|</p>
          <a className="mr-2 lg:hidden" href="https://linkedin.com/zaeshann">
            {" "}
            Linked In
          </a>
        </div>
        <div className="link2 flex flex-row">
          <a className="mr-2" href="https://facebook.com/zaeshann">
            {" "}
            Facebook
          </a>
          <p className="mr-2">|</p>
          <a className="mr-2" href="https://behance.net/zeeshancoding">
            {" "}
            Behance
          </a>
        </div>
        <Link  to='/contact'>
        <div className="buttonnn w-2/4 lg:w-full text-yellow-400 
        flex items-center justify-center py-2 mt-6  lg:mb-2 hover:bg-yellow-400 hover:text-gray-800 transform transition duration-300
        hover:scale-110">
          <button className="text-medium font-semibold  ">
            CONTACT ME
          </button>
        </div>
        </Link>
      </div>
      <div className="section_two w-3/5 lg:1/2 flex flex-col items-center justify-end">
        <img src={me} className="object-contain h-96 lg:h-80" alt="bro" />
      </div>
      <div className="section_three w-1/4 flex flex-col lg:hidden  ">
        <p className="text-yellow-400 text-xl font-medium mb-4">INTRODUCTION</p>
        <p className=" text-2xl font-bold mb-4">Full Stack Web Developer, MERN Stack, Responsive Design</p>
        <p className=" text-base font-normal mb-4 text-yellow-400">An aspiring Web Developer with an on-going Bachelors Degree in Computer Science who is passionate about web development.</p>
      </div>
    </div>
  );
};

export default Main;
