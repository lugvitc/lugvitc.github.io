import React from "react";

import Particle from "../../components/Particle/Particle";
import Typewriters from "typewriter-effect";
import LinkedIn from "../../images/icons/linkedin.png";
import Instagram from "../../images/icons/instagram.png";
import { members_2023 } from "./2023";
import EventTerminal from "../../components/terminal/EventTerminal";

function Member() {
  const members2023 = members_2023.map(
    ({ id, name, position, github, linkedin, instagram, email }) => (
      <div
        id={id}
        className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 bg-[#1A1920] mx-5 my-6"
      >
        <img
          src="https://source.unsplash.com/150x150/?portrait?3"
          alt=""
          className="w-32 h-32 mx-auto rounded-full  aspect-square"
        />
        <div className="space-y-4 text-center divide-y ">
          <div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl">{name}</h2>
            <p className="px-5 text-xs sm:text-base ">{position}</p>
          </div>
          <div className="flex justify-center pt-2 space-x-4 align-center">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={github}
              aria-label="GitHub"
              className="p-2 rounded-md  "
            >
              <svg
                viewBox="0 0 496 512"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 fill-current"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
              </svg>
            </a>
            <a href={linkedin} target="_blank" className="p-1.5 rounded-md  ">
              <img src={LinkedIn} className="h-[16px] w-[16px]" alt="" />
            </a>
            <a href={instagram} target="_blank" className="p-1.5 rounded-md  ">
              <img src={Instagram} className="h-[19px] w-[19px]" alt="" />
            </a>
            <a
              rel="noopener noreferrer"
              href={email}
              target="_blank"
              aria-label="Email"
              className="p-2 rounded-md  "
            >
              <svg
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 fill-current"
              >
                <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    )
  );
  return (
    <>
      <Particle />
      
      <div className="flex flex-col justify-center items-center font-space my-5 py-5">

      <h2 class="my-5 text-base font-medium tracking-tight text-gray-200 uppercase">
      <Typewriters
                  options={{
                    strings: ["Members"],
                    autoStart: true,
                    loop: true,
                  }}
                />
      </h2>
      <p class="max-w-5xl px-5 mt-2 text-4xl font-black leading-tight text-center text-white sm:mt-0 sm:px-0 sm:text-5xl">
      Dive into our Linux Tribe: Building Connections, Cultivating Brilliance.
      </p>

      <p class="max-w-5xl px-5 mt-2 text-md font-black leading-tight text-center text-white sm:mt-10 sm:px-0 sm:text-lg">
      Embrace the Penguin: Your Gateway to Linux Expertise.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae animi quaerat voluptatibus eius eligendi voluptate commodi architecto voluptas distinctio hic repellendus, veniam laborum totam nemo ex! Dicta fugiat animi odio!
      </p>
    </div>
    <div className="flex justify-center w-full">
    <div className="mx-1 px-1 w-[40rem] ">
    <EventTerminal
                title="lug:~$cli-v.0.0.1x"
                children="coiacascasuin"
              >
                <p>
                  <b className="text-blue-gray-600">lug@vitc:~/members$ </b>{" "}
                  <b className="text-light-green-300">sudo lug run -it members.ion </b>
                </p>
                {/* <br />   */}
                <p>
                  <b className="text-blue-gray-600">
                    [sudo] password for lugvitc:
                  </b>{" "}
                  <b className="text-light-green-300"></b>
                </p>
                <p>
                  <b className="text-blue-gray-600">
                    [root@lugvitc superuser]#
                  </b>{" "}
                  <b className="text-light-green-300">cat members_2023 </b>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ullam blanditiis, officiis voluptate dolorem provident, consequuntur soluta veritatis aut, sint nam aspernatur consectetur maxime! Aliquam tempora placeat alias distinctio porro.</p>
                </p>
                <p>
                  <b className="text-blue-gray-600">
                    [root@lugvitc superuser]#
                  </b>{" "}
                  <b className="text-light-green-300">open members_2023 </b>
                </p>
                <Typewriters
                  words={[
                    "Our 21 Batch Board members",
                  ]}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </EventTerminal>
    </div>


    </div>
    
    
      <div className="flex flex-row flex-wrap justify-center items-center text-white font-space">
        {members2023}
      </div>

      
    </>
  );
}

export default Member;



// some other designs 

{/* <div
        class="
                bg-orange-300
                px-12
                pt-16
                pb-14
                shadow-2xl shadow-black/[0.2]
                rounded-3xl
                text-center
                flex flex-col
                justify-center
                max-w-[20rem]

                transition-colors
                dark:bg-neutral-800
            "
      >
        <div class="select-none">
          <img
            src="https://github.com/vsnthdev.png"
            class="
                        shadow-2xl shadow-black/[0.2]
                        rounded-3xl
                        h-60
                        w-60
                        mx-auto
                        -mt-40
                        transform-gpu
                        transition-all
                        hover:scale-125
                    "
            alt="avatar"
          />
        </div>

        <h1 class="mt-7 text-2xl font-bold text-slate-800 ">
          Dhananjay Singh chauhan
        </h1>
        <p class="mt-3 text-slate-600 ">📹 preaiwne</p>

        <div class="mt-3 flex flex-row flex-wrap justify-evenly items-center">
          <a
            href="#"
            class="
                        bg-green-500
                        font-bold
                        text-blue-300
                        px-4
                        py-2
                        rounded-lg
                        flex
                        items-center
                        space-x-2
                        transform-gpu
                        transition-all
                        duration-200
                        hover:bg-sky-400
                        active:scale-90
                    "
          >
            <svg
              class="aspect-square w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 17.227 14"
            >
              <path
                d="M20.8,11.983a7.033,7.033,0,0,1-2.03.556,3.541,3.541,0,0,0,1.554-1.956,7.075,7.075,0,0,1-2.244.858,3.537,3.537,0,0,0-6.022,3.224,10.035,10.035,0,0,1-7.285-3.693,3.539,3.539,0,0,0,1.094,4.719,3.524,3.524,0,0,1-1.6-.442c0,.015,0,.03,0,.045A3.537,3.537,0,0,0,7.1,18.76a3.554,3.554,0,0,1-.931.124,3.5,3.5,0,0,1-.665-.064,3.538,3.538,0,0,0,3.3,2.455,7.132,7.132,0,0,1-5.233,1.464A10.052,10.052,0,0,0,19.048,14.27q0-.23-.01-.458A7.158,7.158,0,0,0,20.8,11.983Z"
                transform="translate(-3.574 -10.326)"
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            href="#"
            class="
                        bg-green-500
                        font-bold
                        text-blue-300
                        px-4
                        py-2
                        rounded-lg
                        flex
                        items-center
                        space-x-2
                        transform-gpu
                        transition-all
                        duration-200
                        hover:bg-sky-400
                        active:scale-90
                    "
          >
            <svg
              class="aspect-square w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 17.227 14"
            >
              <path
                d="M20.8,11.983a7.033,7.033,0,0,1-2.03.556,3.541,3.541,0,0,0,1.554-1.956,7.075,7.075,0,0,1-2.244.858,3.537,3.537,0,0,0-6.022,3.224,10.035,10.035,0,0,1-7.285-3.693,3.539,3.539,0,0,0,1.094,4.719,3.524,3.524,0,0,1-1.6-.442c0,.015,0,.03,0,.045A3.537,3.537,0,0,0,7.1,18.76a3.554,3.554,0,0,1-.931.124,3.5,3.5,0,0,1-.665-.064,3.538,3.538,0,0,0,3.3,2.455,7.132,7.132,0,0,1-5.233,1.464A10.052,10.052,0,0,0,19.048,14.27q0-.23-.01-.458A7.158,7.158,0,0,0,20.8,11.983Z"
                transform="translate(-3.574 -10.326)"
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            href="#"
            class="
                        bg-green-500
                        font-bold
                        text-blue-300
                        px-4
                        py-2
                        rounded-lg
                        flex
                        items-center
                        space-x-2
                        transform-gpu
                        transition-all
                        duration-200
                        hover:bg-sky-400
                        active:scale-90
                    "
          >
            <svg
              class="aspect-square w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 17.227 14"
            >
              <path
                d="M20.8,11.983a7.033,7.033,0,0,1-2.03.556,3.541,3.541,0,0,0,1.554-1.956,7.075,7.075,0,0,1-2.244.858,3.537,3.537,0,0,0-6.022,3.224,10.035,10.035,0,0,1-7.285-3.693,3.539,3.539,0,0,0,1.094,4.719,3.524,3.524,0,0,1-1.6-.442c0,.015,0,.03,0,.045A3.537,3.537,0,0,0,7.1,18.76a3.554,3.554,0,0,1-.931.124,3.5,3.5,0,0,1-.665-.064,3.538,3.538,0,0,0,3.3,2.455,7.132,7.132,0,0,1-5.233,1.464A10.052,10.052,0,0,0,19.048,14.27q0-.23-.01-.458A7.158,7.158,0,0,0,20.8,11.983Z"
                transform="translate(-3.574 -10.326)"
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            href="#"
            class="
                        bg-green-500
                        font-bold
                        text-blue-300
                        px-4
                        py-2
                        rounded-lg
                        flex
                        items-center
                        space-x-2
                        transform-gpu
                        transition-all
                        duration-200
                        hover:bg-sky-400
                        active:scale-90
                    "
          >
            <svg
              class="aspect-square w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 17.227 14"
            >
              <path
                d="M20.8,11.983a7.033,7.033,0,0,1-2.03.556,3.541,3.541,0,0,0,1.554-1.956,7.075,7.075,0,0,1-2.244.858,3.537,3.537,0,0,0-6.022,3.224,10.035,10.035,0,0,1-7.285-3.693,3.539,3.539,0,0,0,1.094,4.719,3.524,3.524,0,0,1-1.6-.442c0,.015,0,.03,0,.045A3.537,3.537,0,0,0,7.1,18.76a3.554,3.554,0,0,1-.931.124,3.5,3.5,0,0,1-.665-.064,3.538,3.538,0,0,0,3.3,2.455,7.132,7.132,0,0,1-5.233,1.464A10.052,10.052,0,0,0,19.048,14.27q0-.23-.01-.458A7.158,7.158,0,0,0,20.8,11.983Z"
                transform="translate(-3.574 -10.326)"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </div> */}


// import React from "react";
// import Atropos from "atropos/react";
// import "atropos/css";
// function Member() {
//   return (
//     <>
//     <div className="h-20"></div>

//       <div className="sm:w-[18rem] sm:h-[10rem] bg-black">

//           <div class=" sm:w-[18rem] sm:h-[25rem] bg-white rounded transform duration-200 easy-in-out m-0">
//             <div class="h-1/4 sm:h-44 overflow-hidden">
//               <img
//                 class="w-full rounded-t h-1/4 sm:h-44 "
//                 src="https://lugvitc.org/static/media/aditya.344f728f46aecfd5e56e.jpeg"
//                 alt="Photo by aldi sigun on Unsplash"
//               />
//             </div>
//             <div class="flex justify-start px-5 -mt-12 mb-5">
//               <span clspanss="block relative h-32 w-32">
//                 <img
//                   alt="Photo by aldi sigun on Unsplash"
//                   src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
//                   class="mx-auto object-cover rounded-full h-24 w-24 bg-white p-1"
//                 />
//               </span>
//             </div>
//             <div class="">
//               <div class="px-7 mb-0">
//                 <h2 class="text-xl font-bold text-green-800 ">
//                   Beth J. Greene
//                 </h2>
//                 <p class="text-gray-400  ">Illustrator</p>
//                 <a href="www.google.com">
//                 </a>
//                 <div class="flex flex-wrap justify-center gap-2 sm:gap-4 mt-8">
//                   <button class="text-green-900 hover:text-green-700 p-1 sm:p-2 inline-flex items-center  ">
//                     <svg
//                       class="w-7 h-7 fill-current"
//                       role="img"
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
//                     </svg>
//                   </button>
//                   <button class="text-green-900 hover:text-green-700 p-1 sm:p-2 inline-flex items-center  ">
//                     <svg
//                       class="w-7 h-7 fill-current"
//                       role="img"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
//                     </svg>
//                   </button>
//                   <button class="text-green-900 hover:text-green-700 p-1 sm:p-2  inline-flex items-center    ">
//                     <svg
//                       class="w-7 h-7 fill-current"
//                       role="img"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
//                     </svg>
//                   </button>
//                   <button class="text-green-900 hover:text-green-700 p-1 sm:p-2  inline-flex items-center    ">
//                     <svg
//                       class="w-7 h-7 fill-current"
//                       role="img"
//                       viewBox="0 0 256 256"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <g>
//                         <path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path>
//                       </g>
//                     </svg>
//                   </button>
//                   <button class="text-green-900 hover:text-green-700 p-1 sm:p-2  inline-flex items-center    ">
//                     <svg
//                       class="w-7 h-7 fill-current"
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 16 16"
//                     >
//                       <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//       </div>

//     </>
//   );
// }

// export default Member;
