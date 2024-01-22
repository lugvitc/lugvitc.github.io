import React, { useState, useRef } from "react";
import EventTerminal from "../terminal/EventTerminal";
import Typewriters from "typewriter-effect";
import { Typewriter } from "react-simple-typewriter";
import { NavLink } from "react-router-dom";
import { paths } from "../../App";

function EventsTimeLine() {
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");
  const [text5, setText5] = useState("");
  const [text6, setText6] = useState("");
  const [text7, setText7] = useState("");
  const [text8, setText8] = useState("");
  const valueRef = useRef(null);
  const valueRef2 = useRef(null);
  const valueRef3 = useRef(null);
  const valueRef4 = useRef(null);
  const valueRef5 = useRef(null);
  const valueRef6 = useRef(null);
  const valueRef7 = useRef(null);
  const valueRef8 = useRef(null);

  function handleChange() {
    let value = valueRef.current.value;
    console.log(value);
    setText(value);
    if (text == "man fos") {
      setText("");
      console.log(value + "  i am gere ");
      window.location.href = "/#/adrenaline";
    }
  }
  function handleChange2() {
    let value2 = valueRef2.current.value;
    console.log(value2);
    setText2(value2);
    if (text2 == "man rescu") {
      setText2("");
      console.log(value2 + "  i am gere ");
      window.location.href = "/#/rescuethetux";
    }
  }
  function handleChange3() {
    let value3 = valueRef3.current.value;
    console.log(value3);
    setText3(value3);
    if (text3 == "man co") {
      setText3("");
      console.log(value3 + "  i am gere ");
      window.location.href = "/#/cyberOday";
    }
  }
  function handleChange4() {
    let value4 = valueRef4.current.value;
    console.log(value4);
    setText4(value4);
    if (text4 == "man gso") {
      setText4("");
      console.log(value4 + "  i am gere ");
      window.location.href = "/#/gsocmadeeasy";
    }
  }
  function handleChange5() {
    let value5 = valueRef5.current.value;
    console.log(value5);
    setText5(value5);
    if (text5 == "man hacke") {
      setText5("");
      console.log(value5 + "  i am gere ");
      window.location.href = "/#/hackershorizon";
    }
  }
  function handleChange6() {
    let value6 = valueRef6.current.value;
    console.log(value6);
    setText6(value6);
    if (text6 == "man instal") {
      setText6("");
      console.log(value6 + "  i am gere ");
      window.location.href = "/#/linuxInstallationBooth2";
    }
  }
  function handleChange7() {
    let value7 = valueRef7.current.value;
    console.log(value7);
    setText7(value7);
    if (text7 == "man password2") {
      setText7("");
      console.log(value7 + "  i am gere ");
      window.location.href = "/#/password2023";
    }
  }
  function handleChange8() {
    let value8 = valueRef8.current.value;
    console.log(value8);
    setText8(value8);
    if (text8 == "man cod") {
      setText8("");
      console.log(value8 + "  i am gere ");
      window.location.href = "/#/cyberOday2";
    }
  }

  return (
    <>
      <div class="w-full md:mx-5 md:px-10 font-space">
        <div class="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-white ">
          {/* <!-- left --> */}

          <div class="flex flex-row-reverse md:contents">
            <div class="bg-transparent  text-white  col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
              {/* <div className="flex flex-row flex-wrap justify-between">
                <h3 class="font-semibold text-lg mb-1">Hacker's Horizon</h3>
                <h4 class="font-thin text-md mb-1">Dec 1'2023</h4>
              </div>

              <p class="leading-tight text-justify font-extralight">
                Lorem ipsum dolor Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Saepe, nemo reiciendis ullam perferendis rem
                quam deserunt nam, voluptate doloribus facilis nostrum earum
                tempora eligendi fugiat voluptatem distinctio accusantium,
                soluta illo? sit amet consectetur adipisicing elit. Modi,
                quaerat?
              </p> */}
              <EventTerminal
                title="lug:~$cli-v.0.0.1x"
                children="coiacascasuin"
              >
                <p>
                  <b className="text-blue-gray-600">lug@vitc:~/events$ </b>{" "}
                  <b className="text-light-green-300">
                    sudo adrenaline-foss-day
                  </b>
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
                  <b className="text-light-green-300">
                    cat adrenaline-foss-day.sh{" "}
                  </b>
                </p>
                <p>
                  On March 17, 2022, Adrenaline/FOSS Day unfolded as a vibrant
                  one-day event, offering participants the opportunity to
                  showcase their prowess in open-source technologies. The event
                  served as a forum where participants could present their
                  innovative projects to an industry expert.
                </p>
                <br />
                <NavLink
                  className="text-light-green-300 underline "
                  to={paths.adrenaline}
                >
                  Read more here...
                </NavLink>
                <br />
                or Type 'man foss' read more here|
                <pre>
                  $~:{" "}
                  <input
                    ref={valueRef}
                    type="text"
                    name=""
                    id="command"
                    className="bg-transparent outline-none"
                    onChange={handleChange}
                  />{" "}
                </pre>
              </EventTerminal>
            </div>

            <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1 bg-[#fff] pointer-events-none"></div>
              </div>
              <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#fff]   shadow"></div>
            </div>
          </div>
          {/* <div class="flex flex-row-reverse md:contents">
            <div class="bg-transparent  text-white  col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
              
              <EventTerminal
                title="lug:~$cli-v.0.0.1x"
                children="coiacascasuin"
              >
                <p>
                  <b className="text-blue-gray-600">lug@vitc:~/events$ </b>{" "}
                  <b className="text-light-green-300">sudo Hacker's Horizon</b>
                </p>
               
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
                  <b className="text-light-green-300">cat hackershorizon.sh </b>
                </p>
                <p>Linux Club, VIT Chennai successfully organised “Hackers Horizon” a two-day, full hands-on hacking session.
                  Linux Club, VIT Chennai successfully organised “Hackers Horizon” a two-day, full hands-on hacking session.  
                </p>
                <br />
                
                <NavLink  className="text-light-green-300 underline " to={paths.hackershorizon}>Read more here...</NavLink>
                <br />
                or Type 'man hacker' read more here|
                <pre>
              $~:{" "}
              <input
                ref={valueRef}
                type="text"
                name=""
                id="command"
                className="bg-transparent outline-none"
                onChange={handleChange}
              />{" "}
            </pre>
                
              </EventTerminal>

            </div>

            <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1 bg-[#fff] pointer-events-none"></div>
              </div>
              <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#fff]   shadow"></div>
            </div>
          </div> */}

          {/* <!-- right --> */}
          <div class="flex md:contents">
            <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1 bg-[#fff] pointer-events-none"></div>
              </div>
              <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#fff]   shadow"></div>
            </div>
            <div class="bg-transparent  text-white  col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
              <EventTerminal
                title="lug:~$cli-v.0.0.1x"
                children="coiacascasuin"
              >
                <p>
                  <b className="text-blue-gray-600">lug@vitc:~/events$ </b>{" "}
                  <b className="text-light-green-300">sudo RescueTheTux</b>
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
                  <b className="text-light-green-300">cat RescueTheTux.sh </b>
                </p>
                <p>
                  On the 21st of August 2022, the Linux Club organized the
                  Rescue The Tux event, generously sponsored by GeeksForGeeks.
                  This engaging gathering drew the participation of
                  approximately 180 attendees, immersing them in a day filled
                  with Linux expertise and challenges.
                </p>
                <br />
                <NavLink
                  className="text-light-green-300 underline "
                  to={paths.rescuethetux}
                >
                  Read more here...
                </NavLink>
                <br />
                or Type 'man rescue' to use our CLI|
                <pre>
                  $~:{" "}
                  <input
                    ref={valueRef2}
                    type="text"
                    name=""
                    id="command"
                    className="bg-transparent outline-none"
                    onChange={handleChange2}
                  />{" "}
                </pre>
              </EventTerminal>
            </div>
          </div>
          {/* <!-- left --> */}
          <div class="flex flex-row-reverse md:contents">
            <div class="bg-transparent  text-white  col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
              <EventTerminal
                title="lug:~$cli-v.0.0.1x"
                children="coiacascasuin"
              >
                <p>
                  <b className="text-blue-gray-600">lug@vitc:~/events$ </b>{" "}
                  <b className="text-light-green-300">sudo cyber-o-day </b>
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
                  <b className="text-light-green-300">cat cyber-o-day.sh </b>
                </p>
                <p>
                  In partnership with The Tech-Researchers Club, the Linux Club
                  at VIT Chennai orchestrated the Cyber-0-Day event spanning
                  from the 24th to the 25th of September 2022. With the generous
                  sponsorship of Rapido, the event attracted the participation
                  of approximately 100 enthusiastic individuals, forming teams
                  of 1-3 members each.
                </p>
                <br />
                <NavLink
                  className="text-light-green-300 underline "
                  to={paths.cyberOday}
                >
                  Read more here...
                </NavLink>
                <br />
                or Type 'man co' to use our CLI|
                <pre>
                  $~:{" "}
                  <input
                    ref={valueRef3}
                    type="text"
                    name=""
                    id="command"
                    className="bg-transparent outline-none"
                    onChange={handleChange3}
                  />{" "}
                </pre>
              </EventTerminal>
            </div>

            <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1 bg-[#fff] pointer-events-none"></div>
              </div>
              <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#fff]   shadow"></div>
            </div>
          </div>

          {/* <!-- right --> */}
          <div class="flex md:contents">
            <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1 bg-[#fff] pointer-events-none"></div>
              </div>
              <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#fff]   shadow"></div>
            </div>
            <div class="bg-transparent  text-white  col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
              <EventTerminal
                title="lug:~$cli-v.0.0.1x"
                children="coiacascasuin"
              >
                <p>
                  <b className="text-blue-gray-600">lug@vitc:~/events$ </b>{" "}
                  <b className="text-light-green-300">sudo gsoc-made-easy </b>
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
                  <b className="text-light-green-300">cat ./root.sh </b>
                </p>
                <p>
                  The Linux Club held a successful event titled "Demystifying
                  Google Summer of Code (GSoC)." Aimed at providing guidance to
                  students interested in participating in GSoC, the event
                  featured Beleswar Prasad Padhi, the President of the Linux
                  Club and a GSoC participant who has contributed to the
                  renowned Metasploit cybersecurity framework.
                </p>
                <br />
                <NavLink
                  className="text-light-green-300 underline "
                  to={paths.gsocmadeeasy}
                >
                  Read more here...
                </NavLink>
                <br />
                or Type 'man gsoc' to use our CLI|
                <pre>
                  $~:{" "}
                  <input
                    ref={valueRef4}
                    type="text"
                    name=""
                    id="command"
                    className="bg-transparent outline-none"
                    onChange={handleChange4}
                  />{" "}
                </pre>
              </EventTerminal>
            </div>
          </div>
          {/* <!-- left --> */}
          <div class="flex flex-row-reverse md:contents">
            <div class="bg-transparent  text-white  col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
              <EventTerminal
                title="lug:~$cli-v.0.0.1x"
                children="coiacascasuin"
              >
                <p>
                  <b className="text-blue-gray-600">lug@vitc:~/events$ </b>{" "}
                  <b className="text-light-green-300">sudo hacker </b>
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
                  <b className="text-light-green-300">cat hackershorizon.sh </b>
                </p>
                <p>
                  The Linux Club organized a highly successful two-day event,
                  "Hackers Horizon" on 11th and 12th February 2023, featuring a
                  full hands-on hacking session led by the esteemed Mr. Ankit
                  Singh, a renowned cybersecurity expert and a top 50 Bugcrowd
                  hacker globally.
                </p>
                <br />
                <NavLink
                  className="text-light-green-300 underline "
                  to={paths.hackershorizon}
                >
                  Read more here...
                </NavLink>
                <br />
                or Type 'man hacker' to use our CLI|
                <pre>
                  $~:{" "}
                  <input
                    ref={valueRef5}
                    type="text"
                    name=""
                    id="command"
                    className="bg-transparent outline-none"
                    onChange={handleChange5}
                  />{" "}
                </pre>
              </EventTerminal>
            </div>

            <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1 bg-[#fff] pointer-events-none"></div>
              </div>
              <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#fff]   shadow"></div>
            </div>
          </div>

          {/* <!-- right --> */}
          <div class="flex md:contents">
            <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1 bg-[#fff] pointer-events-none"></div>
              </div>
              <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#fff]   shadow"></div>
            </div>
            <div class="bg-transparent  text-white  col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
              <EventTerminal
                title="lug:~$cli-v.0.0.1x"
                children="coiacascasuin"
              >
                <p>
                  <b className="text-blue-gray-600">lug@vitc:~/events$ </b>{" "}
                  <b className="text-light-green-300">
                    sudo LinuxInstallationBooth{" "}
                  </b>
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
                  <b className="text-light-green-300">cat LinuxBooth.sh </b>
                </p>
                <p>
                  The Linux Club demonstrated its commitment to promoting
                  open-source technology with the successful organization of
                  "Linux Installation Booth 2.0" on 12th May 2023. This
                  initiative aimed to break down barriers for students, offering
                  assistance in installing Linux OS and setting up dual-boot
                  systems.
                </p>
                <br />
                <NavLink
                  className="text-light-green-300 underline "
                  to={paths.linuxInstallationBooth2}
                >
                  Read more here...
                </NavLink>
                <br />
                or Type 'man install' to use our CLI|
                <pre>
                  $~:{" "}
                  <input
                    ref={valueRef6}
                    type="text"
                    name=""
                    id="command"
                    className="bg-transparent outline-none"
                    onChange={handleChange6}
                  />{" "}
                </pre>
              </EventTerminal>
            </div>
          </div>

          {/* <!-- left --> */}
          <div class="flex flex-row-reverse md:contents">
            <div class="bg-transparent  text-white  col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
              <EventTerminal
                title="lug:~$cli-v.0.0.1x"
                children="coiacascasuin"
              >
                <p>
                  <b className="text-blue-gray-600">lug@vitc:~/events$ </b>{" "}
                  <b className="text-light-green-300">sudo password2023 </b>
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
                  <b className="text-light-green-300">cat password23.sh </b>
                </p>
                <p>
                  "Password", held on 8th and 9th June 2023, transcended the
                  ordinary, offering participants a cybersecurity marathon
                  across three dynamic sessions. The event's first day,
                  orchestrated by the Technical department, set the tone with
                  immersive workshops that provided a deep dive into the
                  intricacies of cybersecurity.
                </p>
                <br />
                <NavLink
                  className="text-light-green-300 underline "
                  to={paths.password2023}
                >
                  Read more here...
                </NavLink>
                <br />
                or Type 'man password23' to use our CLI|
                <pre>
                  $~:{" "}
                  <input
                    ref={valueRef7}
                    type="text"
                    name=""
                    id="command"
                    className="bg-transparent outline-none"
                    onChange={handleChange7}
                  />{" "}
                </pre>
              </EventTerminal>
            </div>

            <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1 bg-[#fff] pointer-events-none"></div>
              </div>
              <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#fff]   shadow"></div>
            </div>
          </div>

          {/* <!-- right --> */}
          <div class="flex md:contents">
            <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1 bg-[#fff] pointer-events-none"></div>
              </div>
              <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#fff]   shadow"></div>
            </div>
            <div class="bg-transparent  text-white  col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
              <EventTerminal
                title="lug:~$cli-v.0.0.1x"
                children="coiacascasuin"
              >
                <p>
                  <b className="text-blue-gray-600">lug@vitc:~/events$ </b>{" "}
                  <b className="text-light-green-300">sudo cyber-o-day2 </b>
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
                  <b className="text-light-green-300">cat cod2.sh </b>
                </p>
                <p>
                  Cyber-0-Day 2.0, the pinnacle event of Technovit, embarked our
                  future hackers on an enthralling journey deep into the realms
                  of cybersecurity. Staged at the majestic Netaji Auditorium,
                  this 24-hour tech marathon was nothing short of perfection.
                </p>
                <br />
                <NavLink
                  className="text-light-green-300 underline "
                  to={paths.cyberOday2}
                >
                  Read more here...
                </NavLink>
                <br />
                or Type 'man cod2' to use our CLI|
                <pre>
                  $~:{" "}
                  <input
                    ref={valueRef8}
                    type="text"
                    name=""
                    id="command"
                    className="bg-transparent outline-none"
                    onChange={handleChange8}
                  />{" "}
                </pre>
              </EventTerminal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventsTimeLine;
