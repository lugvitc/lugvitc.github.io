import React,{useEffect} from "react";
import Particle from "../../../../components/Particle/Particle";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import i1 from '../../../../images/events/hackers-horizon/1.jpg'
import i2 from '../../../../images/events/hackers-horizon/2.jpg'
import i3 from '../../../../images/events/hackers-horizon/3.jpg'
import i4 from '../../../../images/events/hackers-horizon/4.jpg'
import i5 from '../../../../images/events/hackers-horizon/5.jpg'



// import required modules
import { Pagination } from "swiper/modules";

function HackersHorizon() {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Particle />
      <div class="bg-transparent font-space">
        <div class="text-gray-300 container  mx-auto p-8 overflow-hidden md:rounded-lg md:p-10 lg:p-12">
          <p class="font-space text-4xl font-bold text-gray-200 max-w-5xl lg:text-7xl lg:pr-24 md:text-6xl">
            Hacker's Horizon
          </p>
          <div class="h-10"></div>
          <p class="max-w-2xl font-space text-xl text-gray-400 md:text-2xl">
            Linux Club, VIT Chennai successfully organised “Hackers Horizon” a
            two-day, full hands-on hacking session.
          </p>

          <div class="h-12 md:h-24"></div>

          <div class="grid gap-8 md:grid-cols-2">
            <div class="flex flex-col justify-center">
              <p class="self-start inline font-space text-xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-green-600">
                Guest Speaker Ankit Singh
              </p>
              {/* <h2 class="text-4xl font-bold">.</h2> */}
              <div class="h-6"></div>
              <p class=" text-2xl text-gray-400 md:pr-10">
                Ankit Singh,a top 50 Bugcrowd hacker and one of the world's
                leading cybersecurity experts
              </p>
              <div class="h-8"></div>
              <div class="grid grid-cols-2 gap-4 pt-8 border-t border-gray-800">
                <div>
                  <p class="font-semibold text-gray-400">Day 1</p>
                  <div class="h-4"></div>
                  <p class="font-space text-gray-400">Hands-on-Workshop</p>
                </div>
                <div>
                  <p class="font-semibold text-gray-400">Day 2</p>
                  <div class="h-4"></div>
                  <p class="font-space text-gray-400">CTF Competition</p>
                </div>
              </div>
            </div>
            <div>
              <div class="-mr-2 rounded-lg md:rounded-l-full h-96">
                <video className=" rounded-lg" controls autoPlay>
                  <source
                    src="http://127.0.0.1:5000/event/videos/hackerhorizon"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          <div class="h-12 md:h-40"></div>

          <p class="font-space text-4xl">
            <span class="text-gray-400">Gallery</span>

            {/* <span class="text-gray-600"
          >consectetur adipisicing elit. Consectetur atque molestiae omnis
          excepturi enim!</span
        > */}
          </p>

          {/* <div class="h-12 md:h-20"></div> */}

          {/* <div class="grid gap-4 md:grid-cols-3">
            <div class="flex-col p-8 py-16 rounded-lg shadow-2xl md:p-12 bg-gradient-to-br from-gray-900 to-black">
              <img
                src="https://lugvitc.org/static/media/hacker-horizon.79253aeafe52d3409068.JPG"
                alt="loading image ./...../."
              />
            </div>
            <div class="flex-col p-8 py-16 rounded-lg shadow-2xl md:p-12 bg-gradient-to-b from-gray-900 to-black">
              <img
                src="https://lugvitc.org/static/media/hacker-horizon.79253aeafe52d3409068.JPG"
                alt="loading image ./...../."
              />
            </div>
            <div class="flex-col p-8 py-16 rounded-lg shadow-2xl md:p-12 bg-gradient-to-bl from-gray-900 to-black">
              <img
                src="https://lugvitc.org/static/media/hacker-horizon.79253aeafe52d3409068.JPG"
                alt="loading image ./...../."
              />
            </div>
          </div> */}

          <div class="h-20"></div>
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
          {/* <div class="grid gap-8 md:grid-cols-3">
            <div class="flex flex-col justify-center md:col-span-2">
              <p class="self-start inline font-space text-xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-teal-400 to-teal-600">
                We are humans
              </p>
              <h2 class="text-4xl font-bold">We could work together</h2>
              <div class="h-6"></div>
              <p class="font-space text-xl text-gray-400 md:pr-10">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
                autem, a recusandae vero praesentium qui impedit doloremque
                molestias.
              </p>
              <div class="h-8"></div>
              <div class="grid gap-6 pt-8 border-t border-gray-800 lg:grid-cols-3">
                <div>
                  <p class="font-semibold text-gray-400">Made with love</p>
                  <div class="h-4"></div>
                  <p class="font-space text-gray-400">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Delectus labor.
                  </p>
                </div>
                <div>
                  <p class="font-semibold text-gray-400">It's easy to build</p>
                  <div class="h-4"></div>
                  <p class="font-space text-gray-400">
                    Ipsum dolor sit, amet consectetur adipisicing elit. Delectus
                    amet consectetur.
                  </p>
                </div>
                <div>
                  <p class="font-semibold text-gray-400">It's easy to build</p>
                  <div class="h-4"></div>
                  <p class="font-space text-gray-400">
                    Ipsum dolor sit, amet consectetur adipisicing elit. Delectus
                    amet consectetur.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div class="-mr-24 rounded-lg md:rounded-l-full bg-gradient-to-br from-gray-900 to-black h-96"></div>
            </div>
          </div> */}

          <div class="h-10 md:h-40"></div>

          <section className="bg-[#1A1920] text-gray-100 font-space">
            <div className="container max-w-5xl px-4 py-12 mx-auto">
              <div className="grid gap-4 mx-4 sm:grid-cols-12">
                <div className="col-span-12 sm:col-span-3">
                  <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-violet-400">
                    <h3 className="text-3xl font-semibold">Hackers Horizon</h3>
                    <span className="text-sm font-bold tracki uppercase text-white">
                      Event Details
                    </span>
                  </div>
                </div>
                <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                  <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-blue-400">
                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
                      <h3 className="text-xl font-semibold tracki">Day 1 </h3>
                      <time className="text-xs tracki uppercase text-white">
                        Dec 2020
                      </time>
                      <p className="mt-3">
                        Day 1 covered a wide range of topics, including Windows
                        hacking, trojan and malware etc. We welcomed more than
                        400 participants both from VIT and other colleges.
                      </p>
                    </div>
                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
                      <h3 className="text-xl font-semibold tracki">Day 2</h3>
                      <time className="text-xs tracki uppercase text-white">
                        dec 2019
                      </time>
                      <p className="mt-3">
                        Day 2 Ankit covered wide variety of topics -- Network
                        hacking, Man in the middle, System hacking, Burpsuite,
                        SQL Injection and much more. Workshop was hands-on,
                        everyone followed not just listen to theory. Apart from
                        working in competitive, we feel every participant
                        received something from the event to advance their
                        skills.
                      </p>
                    </div>
                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
                      <h3 className="text-xl font-semibold tracki">End</h3>
                      <time className="text-xs tracki uppercase text-white">
                        dec 2016
                      </time>
                      <p className="mt-3">
                        At the end we had a CTF challenging event, many teams
                        were formed and participated in event. It was an
                        absolute success. Winning teams were announced. We were
                        able to offer prizes and goodies signed by Mr. Ankit
                        himself for winning teams and other active participants
                        thanks to our sponsors Cyber Peace, Z Security and
                        BugXs, which encouraged every team to put up their
                        all-out effort.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div class="h-12"></div>
        </div>
      </div>
    </>
  );
}

export default HackersHorizon;
