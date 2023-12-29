import React,{useState,useRef} from "react";
import Particles from "../../components/Particle/Particle";
import Typewriters from "typewriter-effect";
import { Typewriter } from "react-simple-typewriter";
import {
  CodeBlock,
  CopyBlock,
  dracula,
  railscast,
  rainbow,
  a11yDark,
  tomorrowNight,
  irBlack,
  obsidian,
  atomOneDark,
  paraisoDark,
  github,
  googlecode,
  ocean,
  pojoaque,
  androidstudio,
  solarizedDark,
  hopscotch,
  zenburn,
  monokai,
  noctisViola,
  codepen,
  xt256,
} from "react-code-blocks";

import TerminalWindow from "../../components/terminal/Terminal";
import { Penguins, Hacker, Arch } from "./Penguins";
import CountUp from "react-countup";
import { document } from "postcss";

function Root() {
  const [text, setText] = useState("");
  const valueRef = useRef(null);
  function handleChange() {
    let value = valueRef.current.value;
    console.log(value);
    setText(value);
    if (text == "sudo lu") {
      setText("");
      console.log(value+"  i am gere ");
      window.location.href = "http://localhost:5173/#/learn";
    }
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

      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
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
      </div>
    </>
  );
}

export default Root;
