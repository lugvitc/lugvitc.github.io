import React, { useEffect } from "react";
import Particle from "../../../../components/Particle/Particle";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import img1 from "../../../../images/events/LinuxInstallation2024/img1.png";
import img2 from "../../../../images/events/LinuxInstallation2024/img2.jpg";
import img3 from "../../../../images/events/LinuxInstallation2024/img3.jpg";
import img4 from "../../../../images/events/LinuxInstallation2024/img4.jpg";
import img5 from "../../../../images/events/LinuxInstallation2024/img5.jpg";
import poster from "../../../../images/events/LinuxInstallation2024/poster.png";


// import required modules
import { Pagination } from "swiper/modules";

function LinuxInstallation2024() {
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
            Linux Installation Booth 2025
          </p>
          <div className="h-10"></div>
          <p className="max-w-2xl font-space text-xl text-gray-400 md:text-2xl">
          On 11th and 12th August 2025, the Linux Club organized a Linux 
          Installation Booth in AB1.The event was interactive, attracting 
          a huge number of participants, allowing them to gain practical 
          experience in installing and configuring Linux distributions 
          while fostering a deeper appreciation for open-source technologies.
          </p>

          <div className="h-12 md:h-24"></div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <p className="self-start inline font-space text-xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-green-600">
                The Linux Club Technical Team
              </p>
              {/* <h2 className="text-4xl font-bold">.</h2> */}
              <div className="h-6"></div>
              <p className=" text-2xl text-gray-400 md:pr-10">
                The club's goal is to make Linux accessible to everyone.
              </p>
              <div className="h-8"></div>
              <div className="grid grid-cols-2 gap-4 pt-8 border-t border-gray-800">
                {/* <div>
                  <p className="font-semibold text-gray-400">Part 1</p>
                  <div className="h-4"></div>
                  <p className="font-space text-gray-400">Lecture</p>
                </div> */}
                <div>
                  <p className="font-semibold text-gray-400">
                    Linux Distro Distribution
                  </p>
                  <div className="h-4"></div>
                  {/* <p className="font-space text-gray-400">Live Bugfix</p> */}
                </div>
              </div>
            </div>
            <div>
              {/* <div className="-mr-2 rounded-lg md:rounded-l-full h-96">
                <video className=" rounded-lg" controls autoPlay>
                  <source
                    src="https://docs.material-tailwind.com/demo.mp4"
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
                <img src={poster} alt="loading image ./...../." />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img1} alt="loading image ./...../." />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img2} alt="loading image ./...../." />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img3} alt="loading image ./...../." />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img4} alt="loading image ./...../." />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img5} alt="loading image ./...../." />
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
                      Linux Installation Booth 2025
                    </h5>
                    <span className="text-sm font-bold tracki uppercase text-white">
                      Event Details
                    </span>
                  </div>
                </div>
                <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                  <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-blue-400">
                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
                      <time className="text-xs tracki uppercase text-white">
                      </time>
                      <p className="mt-3">
                      The Linux Club's mission to make Linux accessible to all,
                      regardless of technical expertise, was clearly successful, 
                      as over 200 participants eagerly participated in the event. 
                      The club’s approach was not only inclusive but also empowering, 
                      drawing students from diverse backgrounds who were excited 
                      to explore something new.
                      </p>
                    </div>
                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
                      <time className="text-xs tracki uppercase text-white"></time>
                      <p className="mt-3">
                      The installation booth became a hub of activity, providing a 
                      welcoming, supportive learning environment for attendees. 
                      Students received personalized, hands-on guidance, with 
                      step-by-step instructions and assistance throughout the Linux 
                      installation process. The booth was staffed by knowledgeable 
                      volunteers who patiently helped participants troubleshoot any 
                      challenges, ensuring they felt confident with their new skills. 
                      This thoughtful and collaborative approach allowed students to 
                      interact, ask questions, and gain a deeper understanding of the 
                      Linux operating system.
                      </p>
                    </div>
                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
                      <time className="text-xs tracki uppercase text-white"></time>
                      <p className="mt-3">
                        The infectious curiosity and enthusiasm displayed by the 
                        participants were a testament to the Linux Club’s efforts 
                        in sparking interest and demystifying Linux for the student 
                        community. The event not only broadened awareness about the 
                        power of open-source software but also fostered a sense of 
                        camaraderie and shared learning among participants. It was 
                        clear that the Linux Club had succeeded in creating an event 
                        that not only introduced new users to Linux but also encouraged 
                        ongoing exploration and mastery of the operating system.
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

export default LinuxInstallation2024;
