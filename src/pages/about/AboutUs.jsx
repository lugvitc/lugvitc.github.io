import React from "react";
import Particle from "../../components/Particle/Particle";
import Typewriters from "typewriter-effect";
import LugIcon from "../../images/icons/lug.png";


import i1 from '../../images/events/password/3.jpg'
import i2 from '../../images/events//cyber-0-day/2.jpg'
import i3 from '../../images/events/hackers-horizon/4.jpg'
import i4 from '../../images/events/rescue-tux/1.jpg'
import i5 from '../../images/events/foss-day/2.jpg'

function AboutUs() {
  return (
    <>
      <Particle />
      {/* Header */}
      <div className="flex flex-col justify-center items-center font-space my-5 py-5">
        <h2 className="my-5 text-base font-medium tracking-tight text-gray-200 uppercase">
          <Typewriters
            options={{
              strings: ["About", "The Linux Club"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <p className="max-w-5xl px-5 mt-2 text-3xl font-black leading-tight text-center text-white sm:mt-0 sm:px-0 sm:text-5xl">
          In the Kernel of Collaboration: About Us, About Linux Excellence.
        </p>
      </div>

      {/* header end */}

      {/* body */}
      <div className="flex flex-row flex-wrap items-center max-w-screen justify-center font-space">
        <div className="sm:w-1/2 p-10 flex justify-center">
          <div className="image object-center text-center">
            <img src={LugIcon } />
          </div>
        </div>
        <div className="sm:w-1/2 p-5 pr-10 flex justify-center">
          <div className="text">
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
              <span className="text-indigo-600">The Linux Club</span>
            </h2>
            <p className="text-white 00">
            The Linux Club VIT, Chennai
The 'Linux Club' of VIT, Chennai was created to spread awareness of Free and Open Source Software (FOSS) through Linux flavours. It believes in developing collaborative open-source projects.
It encourages users to understand the systems and softwares they use on a fundamental level. Which can be achieved only using non-proprietary tools.
It aims to get members to contribute to FOSS, make them more industry ready and to promote GNU/Linux in General.
LINUX!
            </p>
          </div>
        </div>
      </div>
      {/* body ends */}

      {/* next body */}

      <section className="py-10 lg:py-20 bg-stone-100 font-space  text-white">
        <div className="max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div className="flex flex-wrap ">
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
              <div className="lg:max-w-md">
                <div className="px-4 pl-4 mb-6 border-l-4 border-blue-500">
                  <span className="text-sm text-gray-100 uppercase dark:text-gray-400"></span>
                  <h1 className="mt-2 text-3xl font-black  md:text-5xl ">
                    Who we are?
                  </h1>
                </div>
                <p className="px-4 mb-10 text-base leading-7 text-white dark:text-gray-400">
                We are the Linux Users Group, a vibrant community, united by our enthusiasm for Linux and its diverse distributions. Committed to encouraging and spreading awareness about the advantages of Linux, we also provide a platform for users to engage with each other through forums and community discussions. Embrace the spirit of exploring, sharing, and learning together in a Linux-focused community.
                </p>
               
              </div>
            </div>
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <img
                src={i1}
                alt=""
                className="relative z-40 object-cover w-full h-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      {/* bod y2 ends */}
      {/* section 2 */}

      <div class="flex items-center py-20 bg-transparent font-space dark:bg-gray-800 ">
        <div class="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-6 md:px-6">
          <div class="flex flex-wrap items-center">
            <div class="w-full px-4 mb-10 xl:w-1/2 lg:mb-8">
              <div class="flex flex-wrap">
                <div class="w-full px-4 md:w-1/2">
                  <img
                    src={i2}
                    alt=""
                    class="object-cover w-full mb-6 rounded-lg h-80"
                  />
                  <img
                    src={i3}
                    alt=""
                    class="object-cover w-full rounded-lg h-80"
                  />
                </div>
                <div class="w-full px-4 md:w-1/2 xl:mt-11">
                  <img
                    src={i4}
                    alt=""
                    class="object-cover w-full mb-6 rounded-lg h-80"
                  />
                  <img
                    src={i5}
                    alt=""
                    class="object-cover w-full rounded-lg h-80"
                  />
                </div>
              </div>
            </div>
            <div class="w-full px-4 mb-10 xl:w-1/2 lg:mb-8">
              {/* <span class="text-sm font-semibold text-white ">
                Lorem ipsum dolor sit amet consectetur.
              </span> */}
              <h2 class="mt-2 mb-4 text-5xl pb-5 font-bold text-white">
              What We Do?
              </h2>
                {/* <p class="mb-4 text-base leading-7 text-white dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam
                </p> */}
              <ul class="mb-10">
                <li class="flex items-center mb-4 text-base text-gray-100 dark:text-gray-400">
                  <span class="mr-3 text-white  ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="w-6 h-6 bi bi-1-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z"
                      />
                    </svg>
                  </span>
                  As the Linux Users Group, we go beyond conventional boundaries to engage people in a dynamic range of activities
                </li>
                <li class="flex items-center mb-4 text-base text-gray-100 dark:text-gray-400">
                  <span class="mr-3 text-white ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="w-6 h-6 bi bi-2-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6.646 6.24c0-.691.493-1.306 1.336-1.306.756 0 1.313.492 1.313 1.236 0 .697-.469 1.23-.902 1.705l-2.971 3.293V12h5.344v-1.107H7.268v-.077l1.974-2.22.096-.107c.688-.763 1.287-1.428 1.287-2.43 0-1.266-1.031-2.215-2.613-2.215-1.758 0-2.637 1.19-2.637 2.402v.065h1.271v-.07Z" />
                    </svg>
                  </span>
                  Captivating Capture the Flag (CTF) and Cybersecurity-based Hackathons to immersive workshops on various Linux and Cybersecurity topics.
                </li>
                <li class="flex items-center mb-4 text-base text-gray-100 dark:text-gray-400">
                  <span class="mr-3 text-white ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="w-6 h-6 bi bi-3-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-8.082.414c.92 0 1.535.54 1.541 1.318.012.791-.615 1.36-1.588 1.354-.861-.006-1.482-.469-1.54-1.066H5.104c.047 1.177 1.05 2.144 2.754 2.144 1.653 0 2.954-.937 2.93-2.396-.023-1.278-1.031-1.846-1.734-1.916v-.07c.597-.1 1.505-.739 1.482-1.876-.03-1.177-1.043-2.074-2.637-2.062-1.675.006-2.59.984-2.625 2.12h1.248c.036-.556.557-1.054 1.348-1.054.785 0 1.348.486 1.348 1.195.006.715-.563 1.237-1.342 1.237h-.838v1.072h.879Z" />
                    </svg>
                  </span>
                  Our events cater to diverse interests. 
                </li>
                <li class="flex items-center mb-4 text-base text-gray-100 dark:text-gray-400">
                  <span class="mr-3 text-white  ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="w-6 h-6 bi bi-4-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM7.519 5.057c-.886 1.418-1.772 2.838-2.542 4.265v1.12H8.85V12h1.26v-1.559h1.007V9.334H10.11V4.002H8.176c-.218.352-.438.703-.657 1.055ZM6.225 9.281v.053H8.85V5.063h-.065c-.867 1.33-1.787 2.806-2.56 4.218Z" />
                    </svg>
                  </span>
                  Additionally, we set up Linux Installation Booths and host campus-wide activities, creating an environment to learn and explore Linux. 
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* club data */}
      {/* <div className="flex flex-col justify-center items-center font-space ">
        <p className="max-w-5xl px-5 mt-2 text-2xl font-black leading-tight text-center text-white sm:mt-0 sm:px-0 sm:text-2xl">
          Our Departments
        </p>
      </div> */}
      {/* <section class="flex items-center bg-stone-50 xl:h-screen font-space  ">
        
        <div class="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6 bg-[#1A1920] rounded-lg">
            <div class="flex flex-wrap items-center ">
                
                <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                    <div class="flex mb-4">
                        <span
                            class="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 bg-[#16161A] rounded dark:bg-[#16161A] dark:text-gray-100 text-gray-50">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="w-5 h-5 bi bi-file-earmark-code" viewBox="0 0 16 16">
                                <path
                                    d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
                                <path
                                    d="M8.646 6.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 9 8.646 7.354a.5.5 0 0 1 0-.708zm-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 9l1.647-1.646a.5.5 0 0 0 0-.708z" />
                            </svg>
                        </span>
                        <div>
                            <h2 class="mb-4 text-xl font-bold leading-tight text-white  md:text-2xl">
                                Design
                            </h2>
                            <p class="text-base leading-loose text-white dark:text-gray-400">
                                Lorem ipsum dor amet Lorem ipsum dor amet is a dummy text .Lorem ipsum dor amet isopinus
                                ipaino
                            </p>
                        </div>
                    </div>
                    <div class="flex mb-4">
                        <span
                            class="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 bg-[#16161A] rounded dark:bg-[#16161A] dark:text-gray-100 text-gray-50">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="w-5 h-5 bi bi-file-text" viewBox="0 0 16 16">
                                <path
                                    d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
                                <path
                                    d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                            </svg>
                        </span>
                        <div>
                            <h2 class="mb-4 text-xl font-bold leading-tight text-white  md:text-2xl">
                                Strategy
                            </h2>
                            <p class="text-base leading-loose text-white dark:text-gray-400">
                                Lorem ipsum dor amet Lorem ipsum dor amet is a dummy text .Lorem ipsum dor amet isopinus
                                ipaino
                            </p>
                        </div>
                    </div>
                    <div class="flex mb-4">
                        <span
                            class="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 bg-[#16161A] rounded dark:bg-[#16161A] dark:text-gray-100 text-gray-50">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="w-5 h-5 bi bi-bank2" viewBox="0 0 16 16">
                                <path
                                    d="M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916l-7.5-5zM12.375 6v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM.5 15a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1H.5z">
                                </path>
                            </svg>
                        </span>
                        <div>
                            <h2 class="mb-4 text-xl font-bold leading-tight text-white  md:text-2xl">
                                Develop
                            </h2>
                            <p class="text-base leading-loose text-white dark:text-gray-400">
                                Lorem ipsum dor amet Lorem ipsum dor amet is a dummy text .Lorem ipsum dor amet isopinus
                                ipaino
                            </p>
                        </div>
                    </div>

                </div>
                <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                    <div class="flex mb-4">
                        <span
                            class="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 bg-[#16161A] rounded dark:bg-[#16161A] dark:text-gray-100 text-gray-50">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="w-5 h-5 bi bi-file-earmark-code" viewBox="0 0 16 16">
                                <path
                                    d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
                                <path
                                    d="M8.646 6.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 9 8.646 7.354a.5.5 0 0 1 0-.708zm-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 9l1.647-1.646a.5.5 0 0 0 0-.708z" />
                            </svg>
                        </span>
                        <div>
                            <h2 class="mb-4 text-xl font-bold leading-tight text-white  md:text-2xl">
                                Design
                            </h2>
                            <p class="text-base leading-loose text-white dark:text-gray-400">
                                Lorem ipsum dor amet Lorem ipsum dor amet is a dummy text .Lorem ipsum dor amet isopinus
                                ipaino
                            </p>
                        </div>
                    </div>
                    <div class="flex mb-4">
                        <span
                            class="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 bg-[#16161A] rounded dark:bg-[#16161A] dark:text-gray-100 text-gray-50">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="w-5 h-5 bi bi-file-text" viewBox="0 0 16 16">
                                <path
                                    d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
                                <path
                                    d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                            </svg>
                        </span>
                        <div>
                            <h2 class="mb-4 text-xl font-bold leading-tight text-white  md:text-2xl">
                                Strategy
                            </h2>
                            <p class="text-base leading-loose text-white dark:text-gray-400">
                                Lorem ipsum dor amet Lorem ipsum dor amet is a dummy text .Lorem ipsum dor amet isopinus
                                ipaino
                            </p>
                        </div>
                    </div>
                    <div class="flex mb-4">
                        <span
                            class="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 bg-[#16161A] rounded dark:bg-[#16161A] dark:text-gray-100 text-gray-50">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="w-5 h-5 bi bi-bank2" viewBox="0 0 16 16">
                                <path
                                    d="M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916l-7.5-5zM12.375 6v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM.5 15a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1H.5z">
                                </path>
                            </svg>
                        </span>
                        <div>
                            <h2 class="mb-4 text-xl font-bold leading-tight text-white  md:text-2xl">
                                Develop
                            </h2>
                            <p class="text-base leading-loose text-white dark:text-gray-400">
                                Lorem ipsum dor amet Lorem ipsum dor amet is a dummy text .Lorem ipsum dor amet isopinus
                                ipaino
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section> */}

    </>
  );
}

export default AboutUs;
