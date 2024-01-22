import React, { useEffect } from "react";

import Particle from "../../../components/Particle/Particle";
function Chapter_4() {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <>
      {/* <Particle/> */}
      <div className="flex flex-col justify-center items-center font-space  my-5 py-5">
        <p class="max-w-5xl px-5 mt-2 text-md  leading-tight text-center text-white sm:mt-10 sm:px-0 sm:text-2xl">
          Chapter - 4
        </p>
        <div className="h-4"></div>
        <p class="max-w-5xl px-5 mt-2 text-4xl  leading-tight text-center text-white sm:mt-0 sm:px-0 sm:text-5xl">
          Processes and Packages
        </p>
      </div>
      <div className="h-5"></div>
      <div className="flex justify-center items-center z-auto bg-[]">
        <iframe
          className="sm:h-[580px] sm:w-[1240px] outline-none"
          src="https://www.youtube.com/embed/H6Y0yRxu2Rs?si=AK-dMVMpNOjtN_cV"
          title="YouTube video player"
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
                  1. Processes
                </h4>
                <p class="text-white font-space my-2 font-thin">
                  A Process is a program under execution. The concept of
                  Processes is related more to the Operating System. Every OS
                  deal with processes in order to achieve a particular job. A
                  job is a complete unit of work under execution. To put it
                  simply, Jobs are a collection of Processes which work to
                  perform a specific task. Everything you do in Linux is
                  associated with a process in the background. For example,
                  clicking on a button, opening folders, opening terminal,
                  opening Apps, running code etc. all are powered by processes
                  in the background.
                  <br />
                  Every process has a Process ID (PID) and a Parent Process ID
                  (PPID) attached to it. The init process is the parent process
                  of all the processes running in the OS. And every process gets
                  forked by a parent process. For example, if you open Chromium
                  app, a new process gets forked from the parent init process in
                  the name of chromium. Then again if you open a new tab in the
                  Chromium app, a new process again gets forked from its parent
                  chromium process in the name of tab1.
                  <br />
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
                  2. Process states
                </h4>
                <p class="text-white font-space my-2 font-thin">
                  Every process goes through a sequence of states before its
                  completed (called as process life cycle).
                  <br />
                  R: Running or Runnable state. A process starts with this state
                  as it attempts to complete its execution. <br />
                  S: Sleeping state. A process goes to this state when it needs
                  resources that are currently not available (for e.g. waiting
                  for user input). It automatically comes out of sleep state
                  when the resources are made available by the CPU. <br />
                  D: Uninterruptable sleeping state. If a process reaches this
                  state, you can not kill the process or suspend it. It will
                  only be terminated after it acquires the resource it is
                  waiting for. T: Stopped or Traced state. This is a state where
                  the process is suspended temporarily due to multiple reasons
                  (maybe suspended by the user). You can resume the process
                  execution from this state by bringing it to the running state
                  again. <br />
                  Z: Zombie state. This is a state where the process is
                  orphaned. This happens when the parent process is terminated
                  before the child process. This process will only be terminated
                  when the init process gets terminated. <br />
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
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  ></path>
                </svg>
              </div>
              <div>
                <h4 class="text-xl font-bold text-green-200 font-space">
                  3 Process Monitoring
                </h4>
                <p class="text-white font-space my-2 font-thin">
                  Since every command/application is powered by processes in the
                  background, you can control the applications usage by
                  monitoring processes. The htop command or the ps -aux command
                  shows you the list of all processes running and shows what are
                  the resources grabbed by them. It is a responsive output,
                  meaning it refreshes the list of output every 3 seconds so you
                  can monitor the processes at a single place.
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
                  Background and Foreground jobs
                </h4>
                <p class="text-white font-space my-2 font-thin">
                  Foreground is the normal terminal interface where you type a
                  command, wait for its response and then type another command
                  and so on. So, on Foreground you can work with only a single
                  command at a time. But with background, you can work with
                  multiple commands at the same time. As the name suggests,
                  here, you put a job execution to run in the background, and
                  then you can run another job on the foreground at the same
                  time! You can even put multiple jobs to run in the background
                  while you are working on the foreground!
                  <br />
                  Append the & to the command to execute it in the background.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="text-gray-200 font-space mx-5 my-5 rounded-md px-5 py-5 bg-[#16161a]">
        <div className="w-[20rem]  text-blue-300 rounded-md">
          {/*<CodeBlock>*/}sleep 10000 &amp; {/*</CodeBlock>*/}
        </div>
        <p>To list all the jobs running in background use command</p>

        <div className="w-[20rem]  text-blue-300 rounded-md">
          {/*<CodeBlock>*/}jobs {/*</CodeBlock>*/}
        </div>
        <p>
          To bring a job execution from background to foreground, use command
        </p>
        <div className="w-[20rem]  text-blue-300 rounded-md">
          {/*<CodeBlock>*/}fg %[jobnumber] {/*</CodeBlock>*/}
        </div>

        <p>
          To push a job back into the background from foreground, use command
        </p>
        <div className="w-[20rem]  text-blue-300 rounded-md">
          {/*<CodeBlock>*/}Ctrl+Z {/*</CodeBlock>*/}
        </div>

        <p>
          To resume execution of a suspended job in the background, u se command
        </p>
        <div className="w-[20rem]  text-blue-300 rounded-md">
          {/*<CodeBlock>*/}bg %[jobnumber] {/*</CodeBlock>*/}
        </div>
      </section>

      <section className="text-gray-200 font-space mx-5 my-5 rounded-md px-5 py-5 bg-[#16161a]">
        <h2>Package Managers</h2>
        <p>
          Most Linux distributions include a <em>package manager</em>, which a
          software to install and manage installed software on your system.
        </p>

        <h2>The Default Package Manager</h2>
        <p>
          Debian-based systems (Ubuntu, Pop!_OS, Parrot OS, Kali Linux, etc.)
          use <code>apt</code>. Arch-based systems use <code>pacman</code>.
        </p>

        <table style={{ marginBlock: "1em" }}>
          <thead>
            <tr>
              <th>Package Manager</th>
              <th>
                <code>apt</code>
              </th>
              <th>
                <code>pacman</code>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Distributions</td>
              <td>Debian, Ubuntu, Pop!_OS, Kali Linux, Parrot OS</td>
              <td>Arch</td>
            </tr>
            <tr>
              <td>Searching for a Package</td>
              <td>
                <div className="w-[20rem]  text-blue-300 rounded-md">
                  {/*<CodeBlock>*/}
                  sudo apt search &lt;name&gt;
                  {/*</CodeBlock>*/}
                </div>
              </td>
              <td>
                <div className="w-[20rem]  text-blue-300 rounded-md">
                  {/*<CodeBlock>*/}
                  sudo pacman -Ss &lt;name&gt;
                  {/*</CodeBlock>*/}
                </div>
              </td>
            </tr>
            <tr>
              <td>Installing a Package</td>
              <td>
                <div className="w-[20rem]  text-blue-300 rounded-md">
                  {/*<CodeBlock>*/}
                  sudo apt install &lt;name&gt;
                  {/*</CodeBlock>*/}
                </div>
              </td>
              <td>
                <div className="w-[20rem]  text-blue-300 rounded-md">
                  {/*<CodeBlock>*/}
                  sudo pacman -S &lt;name&gt;
                  {/*</CodeBlock>*/}
                </div>
              </td>
            </tr>
            <tr>
              <td>Removing a Package</td>
              <td>
                <div className="w-[20rem]  text-blue-300 rounded-md">
                  {/*<CodeBlock>*/}
                  sudo apt remove &lt;name&gt;
                  {/*</CodeBlock>*/}
                </div>
              </td>
              <td>
                <div className="w-[20rem]  text-blue-300 rounded-md">
                  {/*<CodeBlock>*/}
                  sudo pacman -R &lt;name&gt;
                  {/*</CodeBlock>*/}
                </div>
              </td>
            </tr>
            <tr>
              <td>Listing all Packages</td>
              <td>
                <div className="w-[20rem]  text-blue-300 rounded-md">
                  {/*<CodeBlock>*/}sudo apt list --installed {/*</CodeBlock>*/}
                </div>
              </td>
              <td>
                <div className="w-[20rem]  text-blue-300 rounded-md">
                  {/*<CodeBlock>*/}sudo pacman -Qs {/*</CodeBlock>*/}
                </div>
              </td>
            </tr>
            <tr>
              <td>Updating/Upgrading the System</td>
              <td>
                <div className="w-[20rem]  text-blue-300 rounded-md">
                  {/*<CodeBlock>*/}
                  sudo apt update &amp;&amp; sudo apt upgrade -y
                  {/*</CodeBlock>*/}
                </div>
              </td>
              <td>
                <div className="w-[20rem]  text-blue-300 rounded-md">
                  {/*<CodeBlock>*/}sudo pacman -Syu {/*</CodeBlock>*/}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <h2>Flatpak</h2>
        <p>
          A flatpak is a simple way of installing packages without worrying
          about dependencies, linux distributions, runtimes, etc.
        </p>
        <h3>Installation</h3>
        <p>
          You can install using <code>apt</code> or <code>pacman</code>
        </p>
        <div className="w-[20rem]  text-blue-300 rounded-md">
          {/*<CodeBlock>*/}sudo apt install flatpak {/*</CodeBlock>*/}
        </div>
        <div className="w-[20rem]  text-blue-300 rounded-md">
          {/*<CodeBlock>*/}sudo pacman -S flatpak {/*</CodeBlock>*/}
        </div>

        <h3>Flathub</h3>
        <p>
          Flathub is a <em>remote</em> or remote repository of flatpak packages.
          Most flatpaks you will need will be avialable in Flathub, so it is
          worth it to install it.
        </p>
        <div className="w-[20rem]  text-blue-300 rounded-md">
          {/*<CodeBlock>*/}
          flatpak remote-add --if-not-exists flathub
          https://flathub.org/repo/flathub.flatpakrepo
          {/*</CodeBlock>*/}
        </div>
        <h3>Basics</h3>
        <h4>Listing Packages</h4>
        <div className="w-[20rem]  text-blue-300 rounded-md">
          {/*<CodeBlock>*/}flatpak list --app {/*</CodeBlock>*/}
        </div>
        <h4>Installation</h4>
        <div className="w-[20rem]  text-blue-300 rounded-md">
          {/*<CodeBlock>*/}
          flatpak install &lt;remote&gt; &lt;name&gt;
          {/*</CodeBlock>*/}
        </div>
        <h4>Uninstalling</h4>
        <div className="w-[20rem]  text-blue-300 rounded-md">
          {/*<CodeBlock>*/}
          flatpak uninstall &lt;remote&gt; &lt;name&gt;
          {/*</CodeBlock>*/}
        </div>
        <h4>Updating</h4>
        <div className="w-[20rem]  text-blue-300 rounded-md">
          {/*<CodeBlock>*/}flatpack update {/*</CodeBlock>*/}
        </div>
      </section>
    </>
  );
}

export default Chapter_4;
