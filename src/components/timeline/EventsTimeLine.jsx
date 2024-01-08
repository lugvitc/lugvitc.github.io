import React from "react";
import EventTerminal from "../terminal/EventTerminal";
import Typewriters from "typewriter-effect";
import { Typewriter } from "react-simple-typewriter";
import { NavLink } from "react-router-dom";
import { paths } from "../../App";

function EventsTimeLine() {
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
                  <b className="text-light-green-300">sudo Hacker's Horizon</b>
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
                <p>Linux Club, VIT Chennai successfully organised “Hackers Horizon” a two-day, full hands-on hacking session.
                  Linux Club, VIT Chennai successfully organised “Hackers Horizon” a two-day, full hands-on hacking session.  
                </p>
                <br />
                {/* <Link className="text-light-green-300 underline " to="/events/hackershorizon"  /> 
                 */}
                {/* <a href="/#/hackershorizon" className="text-light-green-300 underline ">Read more here...</a>
                 */}
                <NavLink  className="text-light-green-300 underline " to={paths.hackershorizon}>Read more here...</NavLink>
                <br />
                or Type 'dig hacker' read more here|
                <pre>$~: </pre>
                
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
                  <b className="text-light-green-300">sudo lug </b>
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
                <p>Linux Club, VIT Chennai successfully organised “Hackers Horizon” a two-day, full hands-on hacking session.
                  Linux Club, VIT Chennai successfully organised “Hackers Horizon” a two-day, full hands-on hacking session.  
                </p>
                <br />
                Type 'sudo lug' to use our CLI|
                <pre>$~: </pre>
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
                  <b className="text-light-green-300">sudo lug </b>
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
                <p>Linux Club, VIT Chennai successfully organised “Hackers Horizon” a two-day, full hands-on hacking session.
                  Linux Club, VIT Chennai successfully organised “Hackers Horizon” a two-day, full hands-on hacking session.  
                </p>
                <br />
                Type 'sudo lug' to use our CLI|
                <pre>$~: </pre>
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
                  <b className="text-light-green-300">sudo lug </b>
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
                <p>Linux Club, VIT Chennai successfully organised “Hackers Horizon” a two-day, full hands-on hacking session.
                  Linux Club, VIT Chennai successfully organised “Hackers Horizon” a two-day, full hands-on hacking session.  
                </p>
                <br />
                Type 'sudo lug' to use our CLI|
                <pre>$~: </pre>
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
                  <b className="text-light-green-300">sudo lug </b>
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
                <p>Linux Club, VIT Chennai successfully organised “Hackers Horizon” a two-day, full hands-on hacking session.
                  Linux Club, VIT Chennai successfully organised “Hackers Horizon” a two-day, full hands-on hacking session.  
                </p>
                <br />
                Type 'sudo lug' to use our CLI|
                <pre>$~: </pre>
              </EventTerminal>
            </div>

            <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1 bg-[#fff] pointer-events-none"></div>
              </div>
              <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#fff]   shadow"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventsTimeLine;
