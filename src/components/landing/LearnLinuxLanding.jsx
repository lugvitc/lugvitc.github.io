import React from "react";
import Typewriters from "typewriter-effect";
import Particle from "../Particle/Particle";

function LearnLinuxLanding() {
  return (
    <>
      <Particle />
      <div className="flex flex-col justify-center items-center font-space my-5 py-5">
        <h2 className="my-5 text-base font-medium tracking-tight text-gray-200 uppercase">
          <Typewriters
            options={{
              strings: ["Learn", "Linux"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <p className="max-w-5xl px-5 mt-2 text-4xl font-black leading-tight text-center text-white sm:mt-0 sm:px-0 sm:text-5xl">
          Embrace the Penguin: Your Gateway to Linux Expertise.
        </p>

        <p className="max-w-5xl px-5 mt-2 text-md font-black leading-tight text-center text-white sm:mt-10 sm:px-0 sm:text-lg">
          Learn the basics of Linux from here. From surfing the terminal to installing software, down to customising your desktop and even managing processes, we'll inculcate the way of the Penguin into you.    
        </p>
      </div>
    </>
  );
}

export default LearnLinuxLanding;
