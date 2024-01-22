import React, { useEffect } from "react";
import Particle from "../../../../components/Particle/Particle";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import i1 from "../../../../images/events/password/1.jpg";
import i2 from "../../../../images/events/password/2.jpg";
import i3 from "../../../../images/events/password/3.jpg";
import i4 from "../../../../images/events/password/4.jpg";
import i5 from "../../../../images/events/password/5.jpg";
import { apiURL } from "../../../../utils/constant";

function Password2023() {
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
            Password2023
          </p>
          <div className="h-10"></div>
          <p className="max-w-2xl font-space text-xl text-gray-400 md:text-2xl">
            "Password", held on 8th and 9th June 2023, transcended the ordinary,
            offering participants a cybersecurity marathon across three dynamic
            sessions.
          </p>

          <div className="h-12 md:h-24"></div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <p className="self-start inline font-space text-xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-green-600">
                Linux workshop led by the club's President, Abhishek Kumar, and
                Vice President, Aaditya Kushwaha and Technical Head Animesh Rai.
              </p>
              {/* <h2 className="text-4xl font-bold">.</h2> */}
              <div className="h-6"></div>
              <p className=" text-2xl text-gray-400 md:pr-10">
                The event's first day, orchestrated by the Technical department,
                set the tone with immersive workshops that provided a deep dive
                into the intricacies of cybersecurity. These hands-on sessions
                were more than just theoretical lessons; they equipped
                participants with practical skills that would prove invaluable
                in real-world applications.
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
              <div className="-mr-2 rounded-lg md:rounded-l-full h-96">
                <video className=" rounded-lg" controls autoPlay>
                  <source
                    src={`${apiURL}/event/videos/password23`}
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
                <img src={i1} alt="loading image ./...../." />
              </SwiperSlide>
              <SwiperSlide>
                <img src={i2} alt="loading image ./...../." />
              </SwiperSlide>
              <SwiperSlide>
                <img src={i3} alt="loading image ./...../." />
              </SwiperSlide>
              <SwiperSlide>
                <img src={i4} alt="loading image ./...../." />
              </SwiperSlide>
              <SwiperSlide>
                <img src={i5} alt="loading image ./...../." />
              </SwiperSlide>
              <SwiperSlide>
                <img src={i1} alt="loading image ./...../." />
              </SwiperSlide>
              <SwiperSlide>
                <img src={i2} alt="loading image ./...../." />
              </SwiperSlide>
              <SwiperSlide>
                <img src={i3} alt="loading image ./...../." />
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
                    <h5 className="text-2xl font-semibold">Password 2023</h5>
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
                        8th and 9th June 2023,
                      </time>
                      <p className="mt-3">
                        The climax unfolded on the second day, featuring a
                        thrilling Capture the Flag (CTF) competition as the
                        opening act. With 25 challenges spanning Linux and
                        binary exploitation, participants were thrust into an
                        electrifying arena, showcasing their technical prowess.
                        Following this, the Escape the Room challenge added an
                        element of intrigue and suspense, requiring participants
                        to navigate a virtual labyrinth to acquire a key from a
                        remote machine.
                      </p>
                    </div>
                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
                      {/* <h3 className="text-xl font-semibold tracki">Day 2</h3> */}
                      <time className="text-xs tracki uppercase text-white"></time>
                      <p className="mt-3">
                        In the concluding session, participants seamlessly
                        employed their diligently acquired keys to unlock a
                        secure vault, symbolizing not just success but earning
                        them the coveted trophy.
                      </p>
                    </div>
                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
                      {/* <h3 className="text-xl font-semibold tracki">End</h3> */}
                      <time className="text-xs tracki uppercase text-white"></time>
                      <p className="mt-3">
                        Moreover, marking a pioneering move, this event became
                        the inaugural initiative by a club incorporating an RFID
                        system for attendance tracking. As a testament to its
                        significance, the event boasted a prize pool exceeding
                        an impressive 10,000+.Beyond the competitive edge,
                        "Password" offered participants a unique opportunity to
                        engage in practical workshops covering cryptography,
                        penetration testing, and incident response. These
                        sessions, led by experts in the field, provided a
                        comprehensive platform for participants to not only gain
                        knowledge but also apply their skills in a hands-on
                        setting. .
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

export default Password2023;
