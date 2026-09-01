import React from "react";
import Particle from "../../components/Particle/Particle";
import Typewriters from "typewriter-effect";
import { IconBrandInstagram } from '@tabler/icons-react';
import { IconBrandLinkedin } from '@tabler/icons-react';
import { members_2025 } from "./2025";
import { members_2024 } from "./2024";
import { members_2023 } from "./2023";
import { members_2022 } from "./2022";
import EventTerminal from "../../components/terminal/EventTerminal";
import blank from "../../images/members/blank.png";
import dharmik_vivek_shinde from "../../images/members/dharmik_vivek_shinde.jpg";
import adhya_sharma from "../../images/members/adhya_sharma.jpg";
import anumeya_sehgal from "../../images/members/anumeya_sehgal.jpg";
import atharv_shiva_hiremath from "../../images/members/atharv_shiva_hiremath.jpg";
import naveen_duhan from "../../images/members/naveen_duhan.jpg";
import omkar_rajurkar from "../../images/members/omkar_rajurkar.jpg";
import rejit_munnar from "../../images/members/rejit_munnar.jpg";
import shrreya_vishwanathan from "../../images/members/shrreya_vishwanathan.jpg";
import siddharth_karanam from "../../images/members/siddharth_karanam.jpg";
import tiya_sur from "../../images/members/tiya_sur.jpg";
import baleshwar from "../../images/members/Baleswar.jpeg";
import samridth from "../../images/members/Samridh.jpeg";
import abhishek from "../../images/members/abhishek.jpg";
import animesh from "../../images/members/animesh.png";
import rahul from "../../images/members/rahul.png";
import dhananjay from "../../images/members/dhananjay.png";
import kartikey from "../../images/members/kartikey.png";
import aditi from "../../images/members/aditi.png";
import venu from "../../images/members/venu.png";
import dhruv from "../../images/members/dhruv.png";
import meetesh from "../../images/members/meetesh.png";
import hrishikesh from "../../images/members/hrishikesh.png";
import kathir from "../../images/members/kathir.png";
import mogesh from "../../images/members/mogesh.jpeg";
import srideep from "../../images/members/srideep.png";
import revanth from "../../images/members/revanth.png";
import chitranshu from "../../images/members/chitranshu.png";
import ojass from "../../images/members/ojass.jpeg";
import shaina from "../../images/members/shaina.jpeg";
import yeyati from "../../images/members/yeyati.jpg";
import siya from "../../images/members/siya.jpeg";
import keerthana from "../../images/members/keerthana.jpeg";
import ssr from "..//..//images/members/ssr.jpeg";
import vivekc from "..//..//images/members/vivekc.jpeg";
import harshanth from "..//..//images/members/harshanth.png";
import riya from "..//..//images/members/riya.jpeg";

function MembersArchive() {
  const img2025 = [
    blank,
    dharmik_vivek_shinde,
    anumeya_sehgal,
    adhya_sharma,
    naveen_duhan,
    siddharth_karanam,
    omkar_rajurkar,
    shrreya_vishwanathan,
    rejit_munnar,
    atharv_shiva_hiremath,
    tiya_sur,
  ];
  const img2024 = [
    blank,
    ojass,
    shaina,
    yeyati,
    ssr,
    harshanth,
    keerthana,
    siya,
    vivekc,
    mogesh,
    riya,
  ];
  const img2023 = [
    blank,
    abhishek,
    animesh,
    rahul,
    dhananjay,
    kartikey,
    aditi,
    venu,
    dhruv,
    meetesh,
    hrishikesh,
    kathir,
    mogesh,
    srideep,
    revanth,
    chitranshu,
  ];
  const img2022 = [
    blank,
    baleshwar,
    samridth,
    abhishek,
    animesh,
    aditi,
    blank
  ];

  const MemberCard = ({ members, imgArray }) => {
    return members.map(
      ({ id, name, position, github, linkedin, instagram, email }) => (
        <div
          key={id}
          className="flex flex-col justify-between w-72 h-[370px] p-6 shadow-md rounded-xl bg-[#1A1920] mx-4 my-6"
        >
          <div className="flex flex-col items-center">
            <img
              src={imgArray[id]}
              alt={name}
              className="w-32 h-32 mx-auto rounded-full aspect-square object-cover"
            />
            <div className="my-3 space-y-1 text-center">
              <h2 className="text-xl font-semibold sm:text-2xl min-h-[3.5rem] flex items-center justify-center">{name}</h2>
              <p className="px-2 text-xs sm:text-base text-gray-300">{position}</p>
            </div>
          </div>
          <div className="border-t border-gray-700/60 pt-3">
            <div className="flex justify-center items-center space-x-3">
              {github && (
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={github}
                  aria-label="GitHub"
                  className="flex items-center justify-center w-8 h-8 rounded-md text-gray-300 hover:text-white transition-colors"
                >
                  <svg
                    viewBox="0 0 496 512"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                  </svg>
                </a>
              )}
              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  aria-label="LinkedIn"
                  className="flex items-center justify-center w-8 h-8 rounded-md text-gray-300 hover:text-white transition-colors"
                  rel="noreferrer"
                >
                  <IconBrandLinkedin size={20} />
                </a>
              )}
              {instagram && (
                <a
                  href={instagram}
                  target="_blank"
                  aria-label="Instagram"
                  className="flex items-center justify-center w-8 h-8 rounded-md text-gray-300 hover:text-white transition-colors"
                  rel="noreferrer"
                >
                  <IconBrandInstagram size={20} />
                </a>
              )}
              {email && (
                <a
                  rel="noopener noreferrer"
                  href={email}
                  target="_blank"
                  aria-label="Email"
                  className="flex items-center justify-center w-8 h-8 rounded-md text-gray-300 hover:text-white transition-colors"
                >
                  <svg
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      ),
    );
  };

  return (
    <>
      <Particle />

      <div className="flex flex-col justify-center items-center font-space my-5 py-5">
        <h2 className="my-5 text-base font-medium tracking-tight text-gray-200 uppercase">
          <Typewriters
            options={{
              strings: ["Members Archive"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <p className="max-w-5xl px-5 mt-2 text-4xl font-black leading-tight text-center text-white sm:mt-0 sm:px-0 sm:text-5xl">
          Our Legacy: Past Board Members Who Shaped Our Journey
        </p>

        <p className="max-w-5xl px-5 mt-2 text-md font-black leading-tight text-center text-white sm:mt-10 sm:px-0 sm:text-lg">
          Honoring the dedicated leaders who built our community foundation and
          paved the way for future generations of Linux enthusiasts.
        </p>

        <div className="mt-8">
          <a
            href="#/members"
            className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-gray-600 bg-opacity-40 rounded-lg hover:bg-opacity-60 focus:ring-4 focus:ring-gray-300 focus:ring-opacity-50 transition-all duration-300"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Current Members
          </a>
        </div>
      </div>

      {/* 2025 */}
      <div className="flex justify-center w-full">
        <div className="mx-1 px-1 w-[40rem]">
          <EventTerminal title="lug:~$cli-v.0.0.1x" children="coiacascasuin">
            <p>
              <b className="text-blue-gray-600">lug@vitc:~/archive$ </b>
              <b className="text-light-green-300">
                sudo lug run -it archive.ion
              </b>
            </p>
            <p>
              <b className="text-blue-gray-600">[sudo] password for lugvitc:</b>
              <b className="text-light-green-300"></b>
            </p>
            <p>
              <b className="text-blue-gray-600">[root@lugvitc superuser]# </b>
              <b className="text-light-green-300">cat members_2025</b>
            </p>
            <p>
              The 2025 board members led the club through an incredible year of innovation and growth. Under the leadership of Chairperson Dharmik Shinde, General Secretary Anumeya Sehgal, and Joint Secretary Aadhya Sharma, the team organized flagship events like Linux Installation Booth 4.0, Cyber-0-Day 4.0, and Ricing Day, while also developing the Blog website and Whats4Linux project. The club further expanded its presence through its association with the FOSS United Foundation, strengthening its connection with the wider open-source community.
            </p>
            <p>
              <b className="text-blue-gray-600">[root@lugvitc superuser]# </b>
              <b className="text-light-green-300">open members_2025</b>
            </p>
            <Typewriters
              words={["Our 2025 Board Members - Innovation & Growth"]}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </EventTerminal>
        </div>
      </div>

      <div className="flex flex-row flex-wrap justify-center items-center text-white font-space">
        <MemberCard members={members_2025} imgArray={img2025} />
      </div>

      {/* 2024 */}
      <div className="flex justify-center w-full">
        <div className="mx-1 px-1 w-[40rem]">
          <EventTerminal title="lug:~$cli-v.0.0.1x" children="coiacascasuin">
            <p>
              <b className="text-blue-gray-600">lug@vitc:~/archive$ </b>
              <b className="text-light-green-300">
                sudo lug run -it archive.ion
              </b>
            </p>
            <p>
              <b className="text-blue-gray-600">[sudo] password for lugvitc:</b>
              <b className="text-light-green-300"></b>
            </p>
            <p>
              <b className="text-blue-gray-600">[root@lugvitc superuser]# </b>
              <b className="text-light-green-300">cat members_2024</b>
            </p>
            <p>
              The 2024 board members led the club through an incredible year of innovation and growth.
              Under President Ojass Pravin Bharati and Vice President Shaina's leadership, the team
              organized flagship events like Password 2.0, StuxNet treasure hunt, and numerous
              cybersecurity workshops that set new standards for technical excellence and community engagement.
            </p>
            <p>
              <b className="text-blue-gray-600">[root@lugvitc superuser]# </b>
              <b className="text-light-green-300">open members_2024</b>
            </p>
            <Typewriters
              words={["Our 2024 Board Members - Innovation & Excellence"]}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </EventTerminal>
        </div>
      </div>

      <div className="flex flex-row flex-wrap justify-center items-center text-white font-space">
        <MemberCard members={members_2024} imgArray={img2024} />
      </div>

      {/* 2023 */}
      <div className="flex justify-center w-full">
        <div className="mx-1 px-1 w-[40rem]">
          <EventTerminal title="lug:~$cli-v.0.0.1x" children="coiacascasuin">
            <p>
              <b className="text-blue-gray-600">[root@lugvitc superuser]# </b>
              <b className="text-light-green-300">cat members_2023</b>
            </p>
            <p>
              The 2023 board, led by President Abhishek Kumar and Technical Head Animesh Rai,
              established many of the club's core traditions and technical foundations. This dynamic
              team pioneered several cybersecurity initiatives, organized successful Password events,
              and built the framework that continues to guide the club's mission of promoting
              Linux and open-source technologies.
            </p>
            <p>
              <b className="text-blue-gray-600">[root@lugvitc superuser]# </b>
              <b className="text-light-green-300">open members_2023</b>
            </p>
            <Typewriters
              words={["Our 2023 Board Members - Foundation Builders"]}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </EventTerminal>
        </div>
      </div>

      <div className="flex flex-row flex-wrap justify-center items-center text-white font-space">
        <MemberCard members={members_2023} imgArray={img2023} />
      </div>

      {/* 2022 */}
      <div className="flex justify-center w-full">
        <div className="mx-1 px-1 w-[40rem]">
          <EventTerminal title="lug:~$cli-v.0.0.1x" children="coiacascasuin">
            <p>
              <b className="text-blue-gray-600">[root@lugvitc superuser]# </b>
              <b className="text-light-green-300">cat members_2022</b>
            </p>
            <p>
              The founding members of our modern era! President Beleswar Prasad Padhi and
              Vice President Samridh Anand Paatni, along with their dedicated team, laid the
              groundwork for what would become one of VIT Chennai's most active technical clubs.
              Their vision and pioneering spirit established the Linux Users Group as a hub for
              cybersecurity education, open-source advocacy, and technical innovation.
            </p>
            <p>
              <b className="text-blue-gray-600">[root@lugvitc superuser]# </b>
              <b className="text-light-green-300">open members_2022</b>
            </p>
            <Typewriters
              words={["Our 2022 Board Members - The Pioneers"]}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </EventTerminal>
        </div>
      </div>

      <div className="flex flex-row flex-wrap justify-center items-center text-white font-space">
        <MemberCard members={members_2022} imgArray={img2022} />
      </div>
    </>
  );
}

export default MembersArchive;