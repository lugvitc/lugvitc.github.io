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
  const chapters = [
    { 
      link:"/chapter_1",
      title: "Linux: What? Why? How?",
      description:
        "What is Linux,Linux Distributions , The Linux Family Tree,Why do we need it?,Installation ...",
    },
    {
      link:"/chapter_2",
      title: "Know the terminal",
      description:
        "What is the terminal?, Terminal Emulators, Shells, Terminal Basics, Terminal Commands ....",
    },
    {
      link:"/chapter_3",
      title: "Linux File System",
      description:
        "Filesystems, Everything is a File, The Filesystem Heirarchy Standard (FHS), Users, Groups and Permissions ...",
    },

    {
      link:"/chapter_4",
      title: "Processes and Packages",
      description:
        "Processes, Process states , Process Monitoring, Background and Foreground jobs, Package Managers...",
    },
    {
      link:"/chapter_5",
      title: "Advanced Features",
      description:
        "Terminal Utilities, Path Expansion ,Brace Expansion ,Modes, Opening a file, Changing Modes and Giving Commands, Vim cheat sheet ...",
    },
    {
      link:"/chapter_6",
      title: "Desktop Customization",
      description: "Vim Customization, Vim Plugins , Customizing GNOME, Extensions",
    },
  ];

  return (
    <>
      <LearnLinuxLanding />

      <NavLink to="/learn">
        <div className="flex flex-row justify-center items-center w-full font-space ">
          <div class="p-5 mb-4 bg-[#1A1920] rounded-lg w-[70%]">
            <div class="text-lg font-semibold text-green-300 ">
              drwxrwxrwx 1 root root learn-linux.txt
            </div>
            <div class="flex flex-row flex-wrap justify-start w-full my-5 text-white  ">
              <div className="bg-[#1A1920]  rounded-full h-14 w-14 mx-5 pr-4">
                {React.createElement(InformationCircleIcon, {
                  strokeWidth: 2,
                  className: "h-10 text-white w-10 ",
                })}
              </div>

              <div className="sm:w-[70%]">
                This is where you start your linux journey. Below are the
                chapters containing Video lectures by our experts and also the
                text notes. Use this page and transform from pigeon to penguin.
              </div>
            </div>
          </div>
        </div>
      </NavLink>

      {chapters.map(({link,title,description})=>{
        return (
          <NavLink to={link}>
        <div className="flex flex-row justify-center items-center w-full font-space ">
          <div class="p-5 mb-4 bg-[#1A1920] rounded-lg w-[70%]">
            <div class="text-lg font-semibold text-green-300 ">
              {title}
            </div>
            <div class="flex flex-row flex-wrap justify-start w-full my-5 text-white  ">
              <div className="bg-[#1A1920]  rounded-full h-14 w-14 mx-5 pr-4">
                {React.createElement(FilmIcon, {
                  strokeWidth: 2,
                  className: "h-10 text-white w-10 ",
                })}
              </div>

              <div className="sm:w-[70%]">
                {description}
              </div>
            </div>
          </div>
        </div>
      </NavLink>
        )
      })}


      
    </>
  );
}

export default Learn;
