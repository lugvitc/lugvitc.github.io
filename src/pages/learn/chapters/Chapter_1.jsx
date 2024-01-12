import React from "react";

import Particle from "../../../components/Particle/Particle";
function Chapter_1() {
  return (
    <>
      {/* <Particle/> */}
      <div className="flex flex-col justify-center items-center font-space  my-5 py-5">
        <p class="max-w-5xl px-5 mt-2 text-md  leading-tight text-center text-white sm:mt-10 sm:px-0 sm:text-2xl">
          Chapter - 1
        </p>
        <div className="h-4"></div>
        <p class="max-w-5xl px-5 mt-2 text-4xl  leading-tight text-center text-white sm:mt-0 sm:px-0 sm:text-5xl">
          Linux: What? Why? How?
        </p>
      </div>
      <div className="h-5"></div>
      <div className="flex justify-center items-center z-auto bg-[]">
        <iframe
          className="sm:h-[580px] sm:w-[1240px] outline-none"
          src="https://www.youtube.com/embed/nZDx0dSeg6w"
          title="Why Linux? : Session 1"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="sm:h-20"></div>

      <div class="p-8">
        <div class="bg-[#16161A] p-4 rounded-lg shadow-xl py-8 mt-12">
          <h4 class="text-4xl font-thin font-space text-white tracking-widest uppercase text-center">
            Knowledge Center
          </h4>
          {/* <p class="text-center text-white font-space text-sm mt-2"></p> */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-12 px-2 xl:px-12 mt-4">
            <div class="flex flex-row space-x-8 mt-8">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-12 w-12 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </div>
              <div>
                <h4 class="text-xl font-bold text-green-200 font-space">
                  1. What is Linux
                </h4>
                <p class="text-white font-space my-2 font-thin">
                  When most people say 'Linux', they are talking about the OS, a
                  free (libre) and open source Operating System. To be more
                  precise Linux is the name of the OS Kernel (the core of an
                  operating system) which is just one part of a larger system
                  composed of other free and open source software (FOSS). When
                  someone says that they are using 'Linux', they are probably
                  using what's called a Linux distribution. A Linux Distribution
                  is a complete operating system which includes the Linux
                  Kernel, a package manager, a desktop environment, device
                  drivers, among other things. A lot of these software are a
                  part of the GNU software project thus, Linux is also referred
                  to as GNU/Linux.Linux was created by Linus Torvalds in 1991.
                  It was inspired by MINIX, another OS kernel in the Unix-like
                  family of operating systems.
                </p>
              </div>
            </div>

            <div class="flex flex-row space-x-8 mt-8">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-12 w-12 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <div>
                <h4 class="text-xl font-bold text-green-200 font-space">
                  2. Linux Distributions : 2.1 The Linux Family Tree
                </h4>
                <p class="text-white font-space my-2 font-thin">
                  The customizability and freedom offered by linux has resulted
                  in a number of different distributions (or 'distros'). You can
                  checkout a timeline or a 'family-tree' of Linux distros here.
                  A simplified version of the Linux family tree is shown below.
                  The very first linux based OS is the GNU Linux. Linux is the
                  kernel, GNU Linux is the OS. Major parent Linux distros in the
                  family tree are: Debian, Slackware, Red Hat, Arch etc. All the
                  distros under the same family use the same package manager.
                </p>
              </div>
            </div>

            <div class="flex flex-row space-x-8 mt-8">
              <div >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-12 w-12 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  ></path>
                </svg>
              </div>
              <div>
                <h4 class="text-xl font-bold text-green-200 font-space">
                  3 Why do we need it?
                </h4>
                <p class="text-white font-space my-2 font-thin">
                  Linux is used worldwide, from webservers to android phones to
                  desktops to smart appliances. Almost every device needs an
                  operating system and Linux being free of cost and infinitely
                  customizable fits the bill perfectly. Windows vs Linux: Linux
                  is not a replacement or a separate 'version' of Windows, it is
                  more of an alternative to it. Both are operating system, with
                  Windows being a propietary aka closed source OS. End users
                  can't modify windows (they can but only in the way Microsoft
                  allows them to).
                </p>
              </div>
            </div>

            <div class="flex flex-row space-x-8 mt-8">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-12 w-12 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  ></path>
                </svg>
              </div>
              <div>
                <h4 class="text-xl font-bold text-green-200 font-space">
                  Installation
                </h4>
                <p class="text-white font-space my-2 font-thin">
                  Now, the installation process of every Linux distribution is
                  different. Some distros would complete the entire installation
                  process through GUI (like Ubuntu), whereas some would require
                  you to complete the installation manually through every step
                  (like Arch). Installing a distro can be done in two ways: Dual
                  Boot: Here, you partition your hard drive to make your
                  physical computer use 2 OS directly. The first is the OS you
                  are currently in, and the second one is the Linux distro you
                  are installing. This is a tougher way but it is way more
                  efficient than using a Virtual Machine. Using Linux in Dual
                  boot will give you far better control than in Virtual Machine.
                  But it can get harder to use the distro for everyday purposes
                  if you are not much acquainted with linux (You can even break
                  your software and now your computer wont open until you
                  re-install the OS). Thus, our advice for this tutorial would
                  be to go with a Linux Virtual Machine and once you are well
                  acquainted with using Linux, you can switch to this Dual Boot
                  option.
                </p>
              </div>
            </div>

            {/* <div class="flex flex-row space-x-8 mt-8">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
                    </svg>
                </div>
                <div>
                    <h4 class="text-xl font-bold text-green-200 font-space">Similique fugiat cumque?</h4>
                    <p class="text-white font-space my-2 font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!</p>
                   
                </div>
            </div>

            <div class="flex flex-row space-x-8 mt-8">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"></path>
                    </svg>
                </div>
                <div>
                    <h4 class="text-xl font-bold text-green-200 font-space">Impedit iusto vitae dolorum, nostrum fugit?</h4>
                    <p class="text-white font-space my-2 font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!</p>
                   
                </div>
            </div> */}
          </div>
        </div>
      </div>

      <div class="px-4 py-20 bg-[#16161A] text-white font-space">
        <div class="flex flex-col max-w-6xl mx-auto md:flex-row">
          <h2 class="w-full mr-8 text-3xl font-space font-extrabold leading-9 md:w-1/3">
            Some more info...
          </h2>
          <dl class="w-full md:w-2/3">
            <dt class="mb-4">
              <h3 class="text-xl font-space font-semibold text-green-200">
                We have attached a few resources, which you can refer to install
                some common Linux distros through Dual Boot:
              </h3>
            </dt>
            <div class="mb-16 flex flex-col">
              <a className="text-blue-300" href="https://itsfoss.com/install-ubuntu-1404-dual-boot-mode-windows-8-81-uefi/">
                Blog Post: Dual Boot Ubuntu on Windows
              </a>
              <br />
              <a className="text-blue-300" href="https://youtu.be/-iSAyiicyQY">
                Video tutorial: Dual Boot Ubuntu on Windows
              </a>
              <br />
              <a className="text-blue-300" href="https://www.linuxtechi.com/dual-boot-arch-linux-windows-10/">
                Blog Post: Dual Boot Arch on Windows
              </a>
              <br />
              <a className="text-blue-300" href="https://youtu.be/L1B1O0R1IHA">
                Video tutorial: Dual Boot Arch on Windows
              </a>
              <br />
              <a className="text-blue-300" href="https://www.geeksforgeeks.org/dual-boot-kali-linux-with-windows/">
                Blog Post: Dual Boot Kali Linux on Windows
              </a>
              <br />
              <a className="text-blue-300" href="https://youtu.be/BRk71KypnBg">
                Video tutorial: Dual Boot Kali linux on Windows
              </a>
              <br />
              <a className="text-blue-300" href="https://blnlabs.com/dual-boot-pop-os-and-windows-10/">
                Blog Post: Dual Boot Pop!_OS on Windows
              </a>
              <br />
              <a className="text-blue-300" href="https://youtu.be/hbzCSjlbInY">
                Video tutorial: Dual Boot Pop!_OS on Windows
              </a>
              <br />
              <a className="text-blue-300" href="https://www.linuxfordevices.com/tutorials/linux/dual-boot-windows-10-and-linux-mint">
                Blog Post: Dual Boot Linux Mint on Windows
              </a>
              <br />
              <a className="text-blue-300" href="https://youtu.be/eL1jHhLcgTU">
                Video tutorial: Dual Boot Linux Mint on Windows
              </a>
            </div>
            <dt class="mb-4">
              <h3 class="text-xl font-space font-semibold text-green-200">
              Virtual Machine
              </h3>
            </dt>
            <dd class="mb-16">
              <p>
              This is a relatively simpler method to install a linux distro in your system. Here, as the name suggests, you use the Linux distribution virtually. That is, the Linux distro runs on top of your current OS and this is achieved by the usage of a Virtual Machine Monitor (like VirtualBox or VMWare etc.). Here, you do not have to worry about breaking your software. Because, everything can be restored to its initial state easily. Thus, VMs are a great way to experiment and learn when you are using Linux for the first time. After you are well acquainted with using a distro virtually, you can switch to the Dual Boot option :D We have attached a few resources, which you can refer to install some common Linux distros through Virtual Machine in Virtual Box:
              </p>
              <br />
                        <a className="text-blue-300" href='https://www.geeksforgeeks.org/how-to-install-ubuntu-on-virtualbox/'>
                            Blog Post: Install Ubuntu VM
                        </a>
                        <br />
                        <a className="text-blue-300" href='https://youtu.be/x5MhydijWmc'>
                            Video tutorial: Install Ubuntu VM
                        </a>
                        <br />
                        <a className="text-blue-300" href='https://itsfoss.com/install-arch-linux-virtualbox/'>
                            Blog Post: Install Arch VM
                        </a>
                        <br />
                        <a className="text-blue-300" href='https://youtu.be/_3-OMUQTf_k'>
                            Video tutorial: Install Arch VM
                        </a>
                        <br />
                        <a className="text-blue-300" href='https://itsfoss.com/install-kali-linux-virtualbox/'>
                            Blog Post: Install Kali Linux VM
                        </a>
                        <br />
                        <a className="text-blue-300" href='https://youtu.be/V_Payl5FlgQ'>
                            Video tutorial: Install Kali Linux VM
                        </a>
                        <br />
                        <a className="text-blue-300" href='https://www.how2shout.com/linux/how-to-install-pop-os-in-virtualbox-virtual-machine/'>
                            Blog Post: Install Pop!_OS VM
                        </a>
                        <br />
                        <a className="text-blue-300" href='https://youtu.be/qsB0gwrwIYQ'>
                            Video tutorial: Install Pop!_OS VM
                        </a>
                        <br />
                        <a className="text-blue-300" href='https://itsfoss.com/install-linux-mint-in-virtualbox/'>
                            Blog Post: Install Linux Mint VM
                        </a>
                        <br />
                        <a className="text-blue-300" href='https://youtu.be/aisUxv2S3gk'>
                            Video tutorial: Install Linux Mint VM
                        </a>
                        <br />
            </dd>
            
            <dd class="mb-16">
              <p>
                
              </p>
            </dd>
          </dl>
        </div>
      </div>
    </>
  );
}

export default Chapter_1;
