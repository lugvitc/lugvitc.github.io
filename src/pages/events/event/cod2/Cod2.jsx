import React,{useEffect} from "react";
import Particle from "../../../../components/Particle/Particle";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import i1 from '../../../../images/events/cyber-0-day-2/1.jpg'
import i2 from '../../../../images/events/cyber-0-day-2/2.jpg'
import i3 from '../../../../images/events/cyber-0-day-2/3.jpg'
import i4 from '../../../../images/events/cyber-0-day-2/4.jpg'
import i5 from '../../../../images/events/cyber-0-day-2/5.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { apiURL } from "../../../../utils/constant";


function Cod2() {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Particle />
      <div className="bg-transparent font-space">
        <div className="text-gray-300 container  mx-auto p-8 overflow-hidden md:rounded-lg md:p-10 lg:p-12">
          <p className="font-space text-4xl font-bold text-gray-200 max-w-5xl lg:text-7xl lg:pr-24 md:text-6xl">
          Cyber-0-Day 2.0
          </p>
          <div className="h-10"></div>
          <p className="max-w-2xl font-space text-xl text-gray-400 md:text-2xl">
          Cyber-0-Day 2.0, the pinnacle event of Technovit, embarked our future hackers on an enthralling journey deep into the realms of cybersecurity. Staged at the majestic Netaji Auditorium, this 24-hour tech marathon was nothing short of perfection. 
          </p>

          <div className="h-12 md:h-24"></div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <p className="self-start inline font-space text-xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-green-600">
              Linux workshop led by the club's Members
              </p>
              {/* <h2 className="text-4xl font-bold">.</h2> */}
              <div className="h-6"></div>
              <p className=" text-2xl text-gray-400 md:pr-10">
              The event unfolded with a knowledge-packed workshop encompassing crucial subjects: Linux fundamentals, OSINT reconnaissance, Web exploitation, cryptography, and Binary exploitation.
              </p>
              <div className="h-8"></div>
              <div className="grid grid-cols-2 gap-4 pt-8 border-t border-gray-800">
                <div>
                  <p className="font-semibold text-gray-400">Part 1</p>
                  <div className="h-4"></div>
                  <p className="font-space text-gray-400">Workshop</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-400">Part 2</p>
                  <div className="h-4"></div>
                  <p className="font-space text-gray-400">CTF Competition</p>
                </div>
              </div>
            </div>
            <div>
              <div className="-mr-2 rounded-lg md:rounded-l-full h-96 ">
                <video className=" rounded-lg w-30 h-96" controls autoPlay>
                  <source
                    src={`${apiURL}/event/videos/cod2`}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          <div className="h-12 md:h-40"></div>

          <p className="font-space text-4xl">
            <span className="text-gray-400">Gallery</span>
          </p>

          <div className="h-20"></div>
          <div className="bg-transparent">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  src={i1}
                  alt="loading image ./...../."
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={i2}
                  alt="loading image ./...../."
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={i3}
                  alt="loading image ./...../."
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={i4}
                  alt="loading image ./...../."
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={i5}
                  alt="loading image ./...../."
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={i1}
                  alt="loading image ./...../."
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={i2}
                  alt="loading image ./...../."
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={i3}
                  alt="loading image ./...../."
                />
              </SwiperSlide>
            </Swiper>
          </div>

          {/* use the below component in case the content is too large */}
          {/* <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col justify-center md:col-span-2">
              <p className="self-start inline font-space text-xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-teal-400 to-teal-600">
                We are humans
              </p>
              <h2 className="text-4xl font-bold">We could work together</h2>
              <div className="h-6"></div>
              <p className="font-space text-xl text-gray-400 md:pr-10">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
                autem, a recusandae vero praesentium qui impedit doloremque
                molestias.
              </p>
              <div className="h-8"></div>
              <div className="grid gap-6 pt-8 border-t border-gray-800 lg:grid-cols-3">
                <div>
                  <p className="font-semibold text-gray-400">Made with love</p>
                  <div className="h-4"></div>
                  <p className="font-space text-gray-400">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Delectus labor.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-400">It's easy to build</p>
                  <div className="h-4"></div>
                  <p className="font-space text-gray-400">
                    Ipsum dolor sit, amet consectetur adipisicing elit. Delectus
                    amet consectetur.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-400">It's easy to build</p>
                  <div className="h-4"></div>
                  <p className="font-space text-gray-400">
                    Ipsum dolor sit, amet consectetur adipisicing elit. Delectus
                    amet consectetur.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="-mr-24 rounded-lg md:rounded-l-full bg-gradient-to-br from-gray-900 to-black h-96"></div>
            </div>
          </div> */}

          <div className="h-10 md:h-40"></div>

          <section className="bg-[#1A1920] text-gray-100 font-space">
            <div className="container max-w-5xl px-4 py-12 mx-auto">
              <div className="grid gap-4 mx-4 sm:grid-cols-12">
                <div className="col-span-12 sm:col-span-3">
                  <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-violet-400">
                    <h5 className="text-2xl font-semibold">
                      Cyber-O-Day
                    </h5>
                    <span className="text-sm font-bold tracki uppercase text-white">
                      Event Details
                    </span>
                  </div>
                </div>
                <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                  <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-blue-400">
                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
                      {/* <h3 className="text-xl font-semibold tracki">Day 1 </h3> */}
                      <time className="text-xs tracki uppercase text-white">
                      {/* 24th to the 25th of September */}
                      </time>
                      <p className="mt-3">
                      Participants actively engaged in interactive sessions, delving into hands-on activities while our tech team provided guidance and support.
Following the workshop, participants faced a rigorous quiz assessing their comprehension of the workshop's intricacies.
 The top 20 teams, showcasing their prowess, progressed to the final Capture The Flag (CTF) round, a pulse-pounding competition meticulously crafted by our expert backend team to push participants to their limits.
                      </p>
                    </div>
                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
                      {/* <h3 className="text-xl font-semibold tracki">Day 2</h3> */}
                      <time className="text-xs tracki uppercase text-white"></time>
                      <p className="mt-3">
                      From the intense CTF round, the top 10 teams advanced to the Treasure Hunt, navigating a complex maze of clues and challenges. Ultimately, three teams emerged as champions, securing generous prizes of 5k, 3k, and 2k INR Amazon gift vouchers, respectively. Additionally, the top 10 teams were rewarded with exclusive hacking tools, marking the conclusion of an extraordinary event that tested, honed, and celebrated the cybersecurity skills of its participants. 
                      </p>
                    </div>
                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
                      {/* <h3 className="text-xl font-semibold tracki">End</h3> */}
                      <time className="text-xs tracki uppercase text-white"></time>
                      <p className="mt-3">
                      
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="h-12"></div>
        </div>
      </div>
    </>
  );
}

export default Cod2;
