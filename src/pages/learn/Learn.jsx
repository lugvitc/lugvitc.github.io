import React from "react";
import {
  InformationCircleIcon,
  DocumentIcon,
  HomeIcon,
  FilmIcon,
} from "@heroicons/react/24/solid";
import LearnLinuxLanding from "../../components/landing/LearnLinuxLanding";
import { NavLink } from "react-router-dom";
import { paths } from "../../App";





function Learn() {
  return (
    <>
      <LearnLinuxLanding />

      <div className="flex flex-row justify-center items-center w-full font-space ">
        <div class="p-5 mb-4 bg-[#1A1920] rounded-lg w-[70%]">
          <div class="text-lg font-semibold text-green-300 ">
            drwxrwxrwx 1 root root learn-linux.txt
          </div>
          <ol class="mt-3 divide-y divider-gray-200 ">
            <li>
              <NavLink
                to="/chapter_0"
                class="block items-center p-3 sm:flex justify-start hover:bg-[#16161A] "
              >
                <div className="bg-[#1A1920]  rounded-full h-14 w-14 flex justify-center items-center mx-5 pr-4">
                  {React.createElement(InformationCircleIcon, {
                    strokeWidth: 2,
                    className: "h-10 text-white w-10 ",
                  })}
                </div>

                <div class="text-white flex justify-center ">
                  <div class="text-base font-normal">
                    basix linux Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Ipsum, quasi?
                  </div>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/chapter_0"
                class="block items-center p-3 sm:flex justify-start hover:bg-[#16161A] "
              >
                <div className="bg-[#1A1920]  rounded-full h-14 w-14 flex justify-center items-center mx-5 pr-4">
                  {React.createElement(DocumentIcon, {
                    strokeWidth: 2,
                    className: "h-10 text-white w-10 ",
                  })}
                </div>

                <div class="text-white flex justify-center ">
                  <div class="text-base font-normal">
                    basix linux Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Ipsum, quasi?
                  </div>
                </div>
              </NavLink>
            </li>
          </ol>
        </div>
      </div>
      {/* 2nd box */}

      <div className="flex flex-row justify-center items-center w-full font-space">
        <div class="p-5 mb-4 bg-[#1A1920] rounded-lg w-[70%]">
          <div class="text-lg font-semibold text-green-300 ">
            Linux: What? Why? How?
          </div>
          <ol class="mt-3 divide-y divider-gray-200 ">
            <li>
              <NavLink
                to="/chapter_1"
                class="block items-center p-3 sm:flex justify-start hover:bg-[#16161A] "
              >
                <div className="bg-[#1A1920]  rounded-full h-14 w-14 flex justify-center items-center mx-5 pr-4">
                  {React.createElement(InformationCircleIcon, {
                    strokeWidth: 2,
                    className: "h-10 text-white w-10 ",
                  })}
                </div>

                <div class="text-white flex justify-center ">
                  <div class="text-base font-normal">
                    basix linux Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Ipsum, quasi?
                  </div>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/chapter_1"
                class="block items-center p-3 sm:flex justify-start hover:bg-[#16161A] "
              >
                <div className="bg-[#1A1920]  rounded-full h-14 w-14 flex justify-center items-center mx-5 pr-4">
                  {React.createElement(FilmIcon, {
                    strokeWidth: 2,
                    className: "h-10 text-white w-10 ",
                  })}
                </div>

                <div class="text-white flex justify-center ">
                  <div class="text-base font-normal">
                    basix linux Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Ipsum, quasi?
                  </div>
                </div>
              </NavLink>
            </li>
          </ol>
        </div>
      </div>

      {/* 3nd box */}

      <div className="flex flex-row justify-center items-center w-full font-space">
        <div class="p-5 mb-4 bg-[#1A1920] rounded-lg w-[70%]">
          <div class="text-lg font-semibold text-green-300 ">
          Know the system
          </div>
          <ol class="mt-3 divide-y divider-gray-200 ">
            <li>
              <NavLink
                to="/chapter_3"
                class="block items-center p-3 sm:flex justify-start hover:bg-[#16161A] "
              >
                <div className="bg-[#1A1920]  rounded-full h-14 w-14 flex justify-center items-center mx-5 pr-4">
                  {React.createElement(InformationCircleIcon, {
                    strokeWidth: 2,
                    className: "h-10 text-white w-10 ",
                  })}
                </div>

                <div class="text-white flex justify-center ">
                  <div class="text-base font-normal">
                    basix linux Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Ipsum, quasi?
                  </div>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/chapter_3"
                class="block items-center p-3 sm:flex justify-start hover:bg-[#16161A] "
              >
                <div className="bg-[#1A1920]  rounded-full h-14 w-14 flex justify-center items-center mx-5 pr-4">
                  {React.createElement(FilmIcon, {
                    strokeWidth: 2,
                    className: "h-10 text-white w-10 ",
                  })}
                </div>

                <div class="text-white flex justify-center ">
                  <div class="text-base font-normal">
                    basix linux Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Ipsum, quasi?
                  </div>
                </div>
              </NavLink>
            </li>
          </ol>
        </div>
      </div>
      {/* 4nd box */}

      <div className="flex flex-row justify-center items-center w-full font-space">
        <div class="p-5 mb-4 bg-[#1A1920] rounded-lg w-[70%]">
          <div class="text-lg font-semibold text-green-300 ">
          Processes and Packages
          </div>
          <ol class="mt-3 divide-y divider-gray-200 ">
            <li>
              <NavLink
                to="/chapter_4"
                class="block items-center p-3 sm:flex justify-start hover:bg-[#16161A] "
              >
                <div className="bg-[#1A1920]  rounded-full h-14 w-14 flex justify-center items-center mx-5 pr-4">
                  {React.createElement(InformationCircleIcon, {
                    strokeWidth: 2,
                    className: "h-10 text-white w-10 ",
                  })}
                </div>

                <div class="text-white flex justify-center ">
                  <div class="text-base font-normal">
                    basix linux Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Ipsum, quasi?
                  </div>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/chapter_4"
                class="block items-center p-3 sm:flex justify-start hover:bg-[#16161A] "
              >
                <div className="bg-[#1A1920]  rounded-full h-14 w-14 flex justify-center items-center mx-5 pr-4">
                  {React.createElement(FilmIcon, {
                    strokeWidth: 2,
                    className: "h-10 text-white w-10 ",
                  })}
                </div>

                <div class="text-white flex justify-center ">
                  <div class="text-base font-normal">
                    basix linux Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Ipsum, quasi?
                  </div>
                </div>
              </NavLink>
            </li>
          </ol>
        </div>
      </div>
      {/* 5nd box */}

      <div className="flex flex-row justify-center items-center w-full font-space">
        <div class="p-5 mb-4 bg-[#1A1920] rounded-lg w-[70%]">
          <div class="text-lg font-semibold text-green-300 ">
          Advanced Features
          </div>
          <ol class="mt-3 divide-y divider-gray-200 ">
            <li>
              <NavLink
                to="/chapter_5"
                class="block items-center p-3 sm:flex justify-start hover:bg-[#16161A] "
              >
                <div className="bg-[#1A1920]  rounded-full h-14 w-14 flex justify-center items-center mx-5 pr-4">
                  {React.createElement(InformationCircleIcon, {
                    strokeWidth: 2,
                    className: "h-10 text-white w-10 ",
                  })}
                </div>

                <div class="text-white flex justify-center ">
                  <div class="text-base font-normal">
                    basix linux Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Ipsum, quasi?
                  </div>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/chapter_5"
                class="block items-center p-3 sm:flex justify-start hover:bg-[#16161A] "
              >
                <div className="bg-[#1A1920]  rounded-full h-14 w-14 flex justify-center items-center mx-5 pr-4">
                  {React.createElement(FilmIcon, {
                    strokeWidth: 2,
                    className: "h-10 text-white w-10 ",
                  })}
                </div>

                <div class="text-white flex justify-center ">
                  <div class="text-base font-normal">
                    basix linux Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Ipsum, quasi?
                  </div>
                </div>
              </NavLink>
            </li>
          </ol>
        </div>
      </div>

      {/* 6nd box */}

      <div className="flex flex-row justify-center items-center w-full font-space">
        <div class="p-5 mb-4 bg-[#1A1920] rounded-lg w-[70%]">
          <div class="text-lg font-semibold text-green-300 ">
          Desktop Customization
          </div>
          <ol class="mt-3 divide-y divider-gray-200 ">
            <li>
              <NavLink
                to="/chapter_6"
                class="block items-center p-3 sm:flex justify-start hover:bg-[#16161A] "
              >
                <div className="bg-[#1A1920]  rounded-full h-14 w-14 flex justify-center items-center mx-5 pr-4">
                  {React.createElement(InformationCircleIcon, {
                    strokeWidth: 2,
                    className: "h-10 text-white w-10 ",
                  })}
                </div>

                <div class="text-white flex justify-center ">
                  <div class="text-base font-normal">
                    basix linux Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Ipsum, quasi?
                  </div>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/chapter_6"
                class="block items-center p-3 sm:flex justify-start  hover:bg-[#16161A] "
              >
                <div className="bg-[#1A1920]  rounded-full h-14 w-14 flex justify-center items-center mx-5 pr-4">
                  {React.createElement(FilmIcon, {
                    strokeWidth: 2,
                    className: "h-10 text-white w-10 ",
                  })}
                </div>

                <div class="text-white flex justify-center ">
                  <div class="text-base font-normal">
                    basix linux Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Ipsum, quasi?
                  </div>
                </div>
              </NavLink>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}

export default Learn;
