import React, { useEffect } from "react";
import Particle from "../../../../components/Particle/Particle";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import i1 from "../../../../images/events/fossit24/1.jpg";
import i2 from "../../../../images/events/fossit24/2.jpg";
import i3 from "../../../../images/events/fossit24/3.jpg";
import i4 from "../../../../images/events/fossit24/4.jpg";
import i5 from "../../../../images/events/fossit24/5.jpg";
import i6 from "../../../../images/events/fossit24/6.jpg";
import i7 from "../../../../images/events/fossit24/7.jpg";
import i8 from "../../../../images/events/fossit24/8.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { apiURL } from "../../../../utils/constant";

function FOSSit2024() {
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
            FOSSit '24
          </p>
          <div className="h-10"></div>
          <p className="max-w-2xl font-space text-xl text-gray-400 md:text-2xl">
            FOSSit '24 was a 24-hour Open Source marathon held on April 14, 2024
            aimed towards introducing the participants to the different aspects
            of Free and Open Source Software. With workshops, competition,
            collaboration, the event encapsulated the world of FOSS into a
            informative and fun experience.
          </p>

          <div className="h-12 md:h-24"></div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <p className="self-start inline font-space text-xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-green-600">
                Free and Open Source Software
              </p>
              {/* <h2 className="text-4xl font-bold">.</h2> */}
              <div className="h-6"></div>
              <p className=" text-2xl text-gray-400 md:pr-10">
                Informative workshops were held on git, github actions and FOSS
                followed by a Ideathon, Contributathon and an overnight
                Hackathon
              </p>
              <div className="h-8"></div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-8 border-t border-gray-800">
                <div>
                  <p className="font-semibold text-gray-400">Part 1</p>
                  <div className="h-4"></div>
                  <p className="font-space text-gray-400">Workshop</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-400">Part 2</p>
                  <div className="h-4"></div>
                  <p className="font-space text-gray-400">Contributathon</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-400">Part 3</p>
                  <div className="h-4"></div>
                  <p className="font-space text-gray-400">Hackathon</p>
                </div>
              </div>
            </div>
            <div>
              {/* <div className="-mr-2 rounded-lg md:rounded-l-full h-96 ">
                <video className=" rounded-lg w-30 h-96" controls autoPlay>
                  <source
                    src={`${apiURL}/event/videos/cod2`}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div> */}
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
                <img src={i5} alt="loading image ./...../." />
              </SwiperSlide>
              <SwiperSlide>
                <img src={i6} alt="loading image ./...../." />
              </SwiperSlide>
              <SwiperSlide>
                <img src={i8} alt="loading image ./...../." />
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
              <SwiperSlide>
                <img src={i4} alt="loading image ./...../." />
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
                    <h5 className="text-2xl font-semibold">FOSSit '24</h5>
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
                        April 14 - April 15, 2024
                      </time>
                      <p className="mt-3">
                        FOSSit '24 kicked off with a series of insightful
                        workshops. The event began with an enlightening talk
                        from a speaker from FOSS India, explaining the
                        significance of FOSS and its impact on the tech
                        community. This was followed by engaging sessions from
                        our club members on Git, GitHub, and GitHub Actions,
                        equipping participants with essential skills for version
                        control and CI/CD pipelines.
                      </p>
                    </div>
                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
                      {/* <h3 className="text-xl font-semibold tracki">Day 2</h3> */}
                      <time className="text-xs tracki uppercase text-white"></time>
                      <p className="mt-3">
                        The event featured a dynamic Ideathon, where
                        participants generated and voted on innovative project
                        ideas. In the Contributathon, multiple GitHub
                        repositories with pre-defined issues were set up.
                        Participants had to resolve these issues through pull
                        requests, judged on their technical complexity,
                        adherence to open-source standards, and best practices.
                      </p>
                    </div>
                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
                      {/* <h3 className="text-xl font-semibold tracki">End</h3> */}
                      <time className="text-xs tracki uppercase text-white"></time>
                      <p className="mt-3">
                        The event culminated in an intense Hackathon. Teams
                        implemented the most popular ideas from the Ideathon,
                        collaborating to form larger groups as needed. The teams
                        then presented their projects on stage, showcasing their
                        creativity and technical prowess. The event highlighted
                        the power of collaboration and the diverse applications
                        of open-source tools.
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

export default FOSSit2024;
