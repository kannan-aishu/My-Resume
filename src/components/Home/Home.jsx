import React from "react";
import Hi from "./R.gif";
import Myphoto from "./panda.jpg";
import { TfiHtml5 } from "react-icons/tfi";
import { IoLogoCss3 } from "react-icons/io5";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandMongodb } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa6";


export default function Home() {
  return (
    <div className="bg-gradient-to-r ">
      {/* Content Container */}
      <div className="flex flex-col-reverse md:flex-row justify-around items-center mt-10 p-5 space-y-5 md:space-y-0">
        {/* Left Section */}
        <div
          className="text-center md:text-left flex flex-col items-center md:items-start p-5 space-y-5 animate-fade-in"
        >
          <div className="flex items-center animate-slide-in-left">
            <img
              src={Hi}
              alt="No Images"
              className="h-[50px] mr-2 animate-bounce"
            />
            <h1 className="text-[30px] font-bold text-blue-700">HI</h1>
          </div>
          <h2 className="text-[30px] md:text-4xl font-semibold text-[gray] animate-fade-in">
            I am Kannan
          </h2>
          <h1 className="text-xl md:text-4xl font-extralight animate-slide-in-bottom">
            I am a React Front-End Developer
          </h1>
        </div>

        {/* Right Section */}
        <div
          className="transform transition-transform hover:scale-110 duration-500 animate-slide-in-right"
        >
          <img
            src={Myphoto}
            alt="No Image"
            className="rounded-full h-[300px] w-[300px] md:h-[400px] md:w-[400px] hover:shadow-lg shadow-md shadow-black object-cover mb-[30px]"
          />
        </div>
      </div>

      {/* Additional Section */}
      <div className="animate-fade-in-up">
        <p className="pl-[50px] pr-[50px] text-[gray]">
        As a React Front-End Developer, you work on building user interfaces for web applications using React, a popular JavaScript library. When you mention "single constant," you're likely referring to a value or piece of data that is defined once and doesn't change throughout the lifecycle of your application.
        </p>
        <p className="p-[50px] text-[gray]">In React, a constant is often defined using the const keyword, which ensures that the variable cannot be reassigned after its initial value. A single constant could represent a fixed value that is used in various parts of your application, such as a configuration setting, API endpoint, or styling value.</p>
      </div>
     <div className="flex flex-col p-[40px] justify-center">
      <h1 className="font-semibold text-[25px] border-[white] border-b-[0.75px] mb-[30px]">Skills</h1>
     <div className="flex flex-wrap text-[50px] justify-center  gap-[30px]">
        <TfiHtml5 className="border-[white] border-[0.5px] p-[5px] rounded-md"/>
        <IoLogoCss3 className="border-[white] border-[0.5px] p-[5px] rounded-md" />
        <RiJavascriptFill className="border-[white] border-[0.5px] p-[5px] rounded-md"/>
        <FaReact className="border-[white] border-[0.5px] p-[5px] rounded-md"/>
        <RiTailwindCssFill className="border-[white] border-[0.5px] p-[5px] rounded-md"/>
        <TbBrandMongodb className="border-[white] border-[0.5px] p-[5px] rounded-md"/>
        <FaNodeJs className="border-[white] border-[0.5px] p-[5px] rounded-md"/>
      </div>
     </div>
    </div>
  );
}
