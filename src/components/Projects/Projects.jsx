import React from "react";
import { Link } from "react-router-dom";
import A1 from "./1.png";
import A2 from "./2.png";
import A3 from "./3.png";

export default function Projects() {
  return (
    <div>
      <div className="flex flex-wrap justify-around p-[10px] mt-[50px] mb-[50px] gap-[30px]">
        {/* Project 1 */}
        <Link
          to={"https://kannan-aishu.github.io/test/"}
          className="laptop:w-[38%] p-[20px] rounded-lg transition-all duration-300 animate-fade-in hover:shadow-xl hover:scale-105 hover:border-2 hover:border-gray-500"
        >
          <img
            src={A1}
            alt="W3school Cloud Website"
            className="h-[250px] object-cover rounded-md transition-transform duration-300 "
          />
          <div className="p-4">
            <p className="text-[20px] font-semibold">W3school Cloud Website</p>
            <p className="text-sm text-gray-600">
              W3Schools is a popular website offering tutorials, references,
              and examples for web development and programming. It doesn’t have
              a specific "cloud website" section but includes resources for
              topics like cloud computing, HTML, CSS.
            </p>
          </div>
        </Link>

        {/* Project 2 */}
        <Link
          to={"https://www.kannangreactdeveloper.online/"}
          className="laptop:w-[38%] p-[20px] rounded-lg transition-all duration-300 animate-fade-in hover:shadow-xl hover:scale-105 hover:border-2 hover:border-gray-500"
        >
          <img
            src={A2}
            alt="E-commerce Website"
            className="h-[250px] object-cover rounded-md transition-transform duration-300 "
          />
          <div className="p-4">
            <p className="text-[20px] font-semibold">E-commerce Website</p>
            <p className="text-sm text-gray-600">
              An e-commerce website is an online platform that allows businesses
              to sell products and services to customers over the internet. It
              provides a convenient way for users to browse and purchase items
              without needing to visit a physical store.
            </p>
          </div>
        </Link>

        {/* Project 3 */}
        <Link
          to="https://kannan-aishu.github.io/Automatz/"
          className="laptop:w-[38%] p-[20px] rounded-lg transition-all duration-300 animate-fade-in hover:shadow-xl hover:scale-105 hover:border-2 hover:border-gray-500"
        >
          <img
            src={A3}
            alt="Automatiz Robotics Website"
            className="h-[250px] object-cover rounded-md transition-transform duration-300 "
          />
          <div className="p-4">
            <p className="text-[20px] font-semibold">
              Automatiz Robotics Website
            </p>
            <p className="text-sm text-gray-600">
              At Automatiz Robotics, we specialize in developing cutting-edge
              robotic solutions to enhance automation across various industries.
              Our mission is to create innovative robots that improve
              efficiency, safety, and productivity.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
