import React, { useState, useRef } from "react";
import Particles from "../../components/Particle/Particle";
import Typewriters from "typewriter-effect";
import { Typewriter } from "react-simple-typewriter";
import { Alert } from "@material-tailwind/react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import TerminalWindow from "../../components/terminal/Terminal";
import { Penguins, Hacker, Arch } from "./Penguins";
import CountUp from "react-countup";
import { document } from "postcss";
import gfg from "../../images/icons/gfg.png";
import cyberpeace from "../../images/icons/cyberpeace.png";
import zsec from "../../images/icons/zsecurity.jpg";
import bugxs from "../../images/icons/bugxs.jpg";
import codingninjas from "../../images/icons/codingninjas.jpg";
import rapido from "../../images/icons/rapido.png";
import alibi from "../../images/icons/alibi.png";
function Root() {
  const [text, setText] = useState("");
  const valueRef = useRef(null);
  function handleChange() {
    let value = valueRef.current.value;
    console.log(value);
    setText(value);
    if (text == "sudo lu") {
      setText("");
      window.location.href = "/#/cli";
    }
  }

  function Icon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
        />
      </svg>
    );
  }
  

  return (
    <>
      <Particles />
      <div className="flex flex-row flex-wrap  ">
        
        <div className="flex justify-center items-center flex-wrap sm:w-7/12 sm:h-[60vh]">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className=" text-5xl text-white font-space font-thin">
                <Typewriters
                  options={{
                    strings: ["lug@vitc", "~$ sudo lug"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-white font-space">
                Linux Club VIT, Chennai The 'Linux Club' of VIT, Chennai was
                created to spread awareness of Free and Open Source Software
                (FOSS) through Linux flavours. It believes in developing
                collaborative open-source projects.{" "}
              </p>
              <div className="mt-12"></div>
            </div>
          </div>
        </div>

        <div className="sm:w-2/6  flex flex-col mt-5 justify-center items-center pl-5 pr-5">
          <TerminalWindow title="lug:~$cli-v.0.0.1x" children="coiacascasuin">
            <p>
              <b className="text-blue-gray-600">lug@vitc:~$ </b>{" "}
              <b className="text-light-green-300">sudo lug </b>
            </p>
            {/* <br />   */}
            <p>
              <b className="text-blue-gray-600">[sudo] password for lugvitc:</b>{" "}
              <b className="text-light-green-300"></b>
            </p>
            <p>
              <b className="text-blue-gray-600">[root@lugvitc superuser]#</b>{" "}
              <b className="text-light-green-300">cat ./root.sh </b>
            </p>
            <Typewriter
              words={[
                "Are you a member of CLI cult ,If yes explore our website with our CLI",
              ]}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
            <br />
            Type 'sudo lug' to use our CLI|
            <pre>
              $~:{" "}
              <input
                ref={valueRef}
                type="text"
                name=""
                id="command"
                className="bg-transparent outline-none"
                onChange={handleChange}
              />{" "}
            </pre>
          </TerminalWindow>
        </div>
      </div>

      <div class="flex flex-col w-full mt-0 lg:flex-row sm:mt-10 lg:mt-0">
        <div class="w-full max-w-md p-4 mx-auto mb-0 sm:mb-16 lg:mb-0 lg:w-1/3">
          <div class="relative flex flex-col items-center justify-center w-full h-full p-20 mr-5 rounded-lg">
            <svg
              class="absolute w-full h-full text-gray-100 fill-current"
              viewBox="0 0 377 340"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <g>
                  <path
                    d="M342.8 3.7c24.7 14 18.1 75 22.1 124s18.6 85.8 8.7 114.2c-9.9 28.4-44.4 48.3-76.4 62.4-32 14.1-61.6 22.4-95.9 28.9-34.3 6.5-73.3 11.1-95.5-6.2-22.2-17.2-27.6-56.5-47.2-96C38.9 191.4 5 151.5 .9 108.2-3.1 64.8 22.7 18 61.8 8.7c39.2-9.2 91.7 19 146 16.6 54.2-2.4 110.3-35.6 135-21.6z"
                    fill="#16161A"
                    opacity="0.6"
                  />
                </g>
              </g>
            </svg>

            <h4 class="relative mt-6 mb-3 text-5xl font-bold font-space text-white">
              <CountUp delay={1} end={10} />+
            </h4>
            <p class="relative text-3xl mt-5  text-center text-white font-space">
              Events
            </p>
          </div>
        </div>

        <div class="w-full max-w-md p-4 mx-auto mb-0 sm:mb-16 lg:mb-0 lg:w-1/3">
          <div class="relative flex flex-col items-center justify-center w-full h-full p-20 mr-5 rounded-lg">
            <svg
              class="absolute w-full h-full text-gray-100 fill-current"
              viewBox="0 0 358 372"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <g>
                  <path
                    fill="#16161A"
                    opacity="0.6"
                    d="M315.7 6.5c30.2 15.1 42.6 61.8 41.5 102.5-1.1 40.6-15.7 75.2-24.3 114.8-8.7 39.7-11.3 84.3-34.3 107.2-23 22.9-66.3 23.9-114.5 30.7-48.2 6.7-101.3 19.1-123.2-4.1-21.8-23.2-12.5-82.1-21.6-130.2C30.2 179.3 2.6 141.9.7 102c-2-39.9 21.7-82.2 57.4-95.6 35.7-13.5 83.3 2.1 131.2 1.7 47.9-.4 96.1-16.8 126.4-1.6z"
                  />
                </g>
              </g>
            </svg>

            <h4 class="relative mt-6 mb-3 text-5xl font-bold font-space text-white">
              <CountUp delay={1} end={4000} />+
            </h4>
            <p class="relative text-3xl mt-5  text-center text-white font-space">
              Participants
            </p>
          </div>
        </div>

        <div class="w-full max-w-md p-4 mx-auto mb-16 lg:mb-0 lg:w-1/3">
          <div class="relative flex flex-col items-center justify-center w-full h-full p-20 mr-5 rounded-lg">
            <svg
              class="absolute w-full h-full text-gray-100 fill-current"
              viewBox="0 0 378 410"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <g>
                  <path
                    fill="#16161A"
                    opacity="0.6"
                    d="M305.9 14.4c23.8 24.6 16.3 84.9 26.6 135.1 10.4 50.2 38.6 90.3 43.7 137.8 5.1 47.5-12.8 102.4-50.7 117.4-37.9 15.1-95.7-9.8-151.7-12.2-56.1-2.5-110.3 17.6-130-3.4-19.7-20.9-4.7-82.9-11.5-131.2C25.5 209.5-3 174.7 1.2 147c4.2-27.7 41-48.3 75-69.6C110.1 56.1 141 34.1 184 17.5c43.1-16.6 98.1-27.7 121.9-3.1z"
                  />
                </g>
              </g>
            </svg>

            <h4 class="relative mt-6 mb-3 text-5xl font-bold font-space text-white">
              <CountUp delay={1} end={60} />+
            </h4>
            <p class="relative text-3xl mt-5  text-center text-white font-space">
              Winners
            </p>
          </div>
        </div>
      </div>
      {/* <div className="px-4 mx-auto max-w-7xl sm:px-6 sm:py-6 sm:my-3  lg:px-8 relative ">
        <div className="grid grid-cols-1 gap-2 mt-12 sm:grid-cols-3 lg:mt-20   ">
          <a
            href="#"
            className="transition-all  duration-1000  bg-transparent backdrop-blur-sm hover:bg-[#16161A]  hover:shadow-xl m-2 p-4 relative z-40 group   text-white "
          >
            <div className=" absolute text-white  bg-[#16161A]/50 top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  "></div>
            <div className="py-2 px-9 relative text-center font-thin ">
              <h2 className="text-5xl text-white">
                <CountUp delay={1} end={1230} />+
              </h2>
              <h3 className="mt-8 text-3xl font-semibold text-white font-space group-hover:text-white opacity-100">
                Participants
              </h3>
            </div>
          </a>
          <a
            href="#"
            className="transition-all  duration-1000  bg-transparent hover:bg-[#16161A]  hover:shadow-xl m-2 p-4 relative z-40 group   text-white"
          >
            <div className=" absolute text-white  bg-[#16161A]/50 top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  "></div>
            <div className="py-2 px-9 relative text-center font-thin ">
              <h2 className="text-5xl text-white">
                <CountUp delay={1} end={10} />+
              </h2>
              <h3 className="mt-8 text-3xl font-semibold text-white font-space group-hover:text-white opacity-100">
                Events
              </h3>
            </div>
          </a>
          <a
            href="#"
            className="transition-all  duration-1000  bg-transparent hover:bg-[#16161A]  hover:shadow-xl m-2 p-4 relative z-40 group   text-white"
          >
            <div className=" absolute text-white  bg-[#16161A]/50 top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  "></div>
            <div className="py-2 px-9 relative  text-center font-thin">
              <h2 className="text-5xl text-white">
                <CountUp delay={1} end={100} />+
              </h2>
              <h3 className="mt-8 text-3xl font-semibold text-white font-space group-hover:text-white opacity-100">
                Winners
              </h3>
            </div>
          </a>
        </div>
      </div> */}

      <div className="flex flex-col justify-center items-center font-space my-5 py-5">
        <h2 className="my-5 text-base font-medium tracking-tight text-gray-200 uppercase">
          <Typewriters
            options={{
              strings: ["Sponsorships"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <p className="max-w-5xl px-5 mt-2 text-3xl font-black leading-tight text-center text-white sm:mt-0 sm:px-0 sm:text-5xl">
          Companies that sponsored our events.
        </p>
      </div>
      {/* sponsership section */}

      <div className="px-3 md:lg:xl:px-40    py-20 bg-opacity-10">
        <div className="grid grid-cols-1 md:lg:xl:grid-cols-3 group bg-transparent shadow-xl shadow-neutral-100  ">
          <div className="p-10 flex flex-col items-center text-center group  hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full bg-tranparent text-white shadow-lg shadow-gray-200">
              <img src={gfg} alt="" />
            </span>
            <p className="text-xl font-medium text-white font-space mt-3">
              Geeks for Geeks
            </p>
            <p className="mt-2 text-sm text-white font-space">
              GeeksforGeeks, with 12 million users, offers coding resources and
              challenges, guided by mentors, focusing on expertise and community
              for coding excellence.
            </p>
          </div>

          <div className="p-10 flex flex-col items-center text-center group  hover:bg-slate-50 cursor-pointer">
            <span className="rounded-full  text-white shadow-lg shadow-gray-200">
              <img
                src={cyberpeace}
                className="h-[100px] w-[100px] rounded-full"
                alt=""
              />
            </span>
            <p className="text-xl font-medium text-white font-space mt-3">
              Cyberpeace Foundation
            </p>
            <p className="mt-2 text-sm text-white font-space">
              CyberPeace Foundation collaborates globally to enhance internet
              security, uniting stakeholders from various sectors to combat
              cybercrime and create a trusted online space.
            </p>
          </div>

          <div className="p-10 flex flex-col items-center text-center group hover:bg-slate-50 cursor-pointer">
            <span className="rounded-full  text-white shadow-lg shadow-gray-200">
              <img
                src={bugxs}
                className="h-[100px] w-[100px] rounded-full"
                alt=""
              />
            </span>
            <p className="text-xl font-medium text-white font-space mt-3">
              Bug XS
            </p>
            <p className="mt-2 text-sm text-white font-space">
              The cybersecurity company excels in bug bounty training, VAPT
              services, and consultancy, ensuring robust protection and
              regulatory compliance by identifying vulnerabilities and promoting
              cybersecurity awareness.
            </p>
          </div>

          <div className="p-10 flex flex-col items-center text-center group  hover:bg-slate-50 cursor-pointer">
            <span className="rounded-full  text-white shadow-lg shadow-gray-200">
              <img
                src={zsec}
                className="h-[100px] w-[100px] rounded-full"
                alt=""
              />
            </span>
            <p className="text-xl font-medium text-white font-space mt-3">
              zSecurity
            </p>
            <p className="mt-2 text-sm text-white font-space">
              zSecurity is a top provider of ethical hacking and cybersecurity
              training, simplifying the path to becoming an ethical hacker with
              online courses, hacking equipment, and up-to-date resources.
            </p>
          </div>

          <div className="p-10 flex flex-col items-center text-center group hover:bg-slate-50 cursor-pointer">
            <span className="rounded-full  text-white shadow-lg shadow-gray-200">
              <img
                src={codingninjas}
                className="h-[100px] w-[100px] rounded-full"
                alt=""
              />
            </span>
            <p className="text-xl font-medium text-white font-space mt-3">
              Coding Ninjas
            </p>
            <p className="mt-2 text-sm text-white font-space">
              Coding Ninjas, closes the college-industry gap with top-notch
              faculty, diverse courses (including Machine Learning and Web
              Development), and a thriving ecosystem with 40,000+ students,
              1000+ Ambassadors, 2000+ TAs, and 150+ employees.
            </p>
          </div>

          <div className="p-10 flex flex-col items-center text-center group  hover:bg-slate-50 cursor-pointer">
            <span className="rounded-full  text-white shadow-lg shadow-gray-200">
              <img
                src={rapido}
                className="h-[100px] w-[100px] rounded-full"
                alt=""
              />
            </span>
            <p className="text-xl font-medium text-white font-space mt-3">
              Rapido
            </p>
            <p className="mt-2 text-sm text-white font-space">
              Rapido, chosen by 10 million users, tackles India's intra-city
              commuting challenges with safe, affordable bike taxis. Navigating
              peak-hour traffic swiftly, it's the go-to solution for efficient
              travel.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Root;
