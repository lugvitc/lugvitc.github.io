import speaker from "../../images/adrenaline/speaker.jpg";
import rescue from "../../images/rescue-tux/rescue-tux.jpeg";
import rescue1 from "../../images/rescue-tux/rescue-tux-1.jpg";
import rescue2 from "../../images/rescue-tux/rescue-tux-2.jpg";
// import rescue3 from "../../images/rescue-tux/rescue-tux-3.jpg";
import cyber from "../../images/cyber-o-day/cyber-o-day.JPG";
import cyber1 from "../../images/cyber-o-day/cyber-o-day1.jpg";
import cyber2 from "../../images/cyber-o-day/cyber-o-day2.png";
// import cyber3 from "../../images/cyber-o-day/cyber-o-day3.jpg";
import hacker from "../../images/hackers-horizon/hacker-horizon.JPG";
import hacker1 from "../../images/hackers-horizon/hacker-horizon1.jpeg";
import hacker2 from "../../images/hackers-horizon/hacker-horizon2.JPG";
// import hacker3 from "../../images/hackers-horizon/hacker-horizon3.JPG";
import booth from "../../images/linux-booth/linux-booth.png";
import booth1 from "../../images/linux-booth/linux-booth1.jpg";
import booth2 from "../../images/linux-booth/linux-booth2.jpg";
import gsoc from "../../images/gsoc-made-easy/gsoc.png";
import winnerOne from "../../images/adrenaline/winner-one.jpg";
import winnerTwo from "../../images/adrenaline/winner-two.jpg";
import password_poster from "../../images/password/password-poster.png";

import pswdwinnerone from "../../images/password/pswdwinnerone.jpg";
import pswdwinnertwo from "../../images/password/pswdwinnertwo.jpg";
import pswdwinnerthree from "../../images/password/pswdwinnerthree.jpg";

import cyber21 from "../../images/cyber-o-day-2/cod2-1.jpeg";
import cyber22 from "../../images/cyber-o-day-2/cod2-2.jpeg";

import Carousel from "./carousel";

export const eventsDetails = [
  

  {
    number: "00",
    name: "Adrenaline/FOSS Day",
    link: "lugvitc.github.io/#/events#adrenaline",
    id: "adrenaline",
    details: (
      <>
        <br />
        <div className="flex flex-col justify-between md:flex-row">
          <div className="w-4/5 py-5 px-5 md:w-2/5">
            <Carousel images={[speaker, winnerOne, winnerTwo]}/>
          </div>
          <div className="w-4/5 py-5 px-5 md:w-2/5">
            <p>
              Held on the 17th March, 2022, Adreanline/FOSS Day was a one-day
              event for participants to show-off their familiarity with
              open-source technologies. Participants gathered to demonstrate
              their projects to an industry expert.
            </p>
            <p>
              <br />A total of{" "}
              <strong className="italic font-bold text-[#ebcb8b]">
                20 participants
              </strong>{" "}
              took part with 1-3 pariticipants in each team. They used FOSS
              (free and open-source software) resources from a number of fields
              including computer vision, web scraping, web automation and
              blockchain technologies.
            </p>
            The two winning teams were:
            <ol>
              <li>
                <em>
                  Inclusion of Persons with Disabilities in the Technological
                  World
                </em>{" "}
                by V Maheysh(19BCE1120), Suriyakrishnan S (19BCE1050) and Mithun
                P (19BPS1092)
                <br />
                <br />
                {/* <img
                                loading='lazy'
                                
                                src={winnerOne}
                                alt='V Maheysh, Suriyakrishnan S and Mithun P receiving their prize'
                            /> */}
                {/* <br />
                            <br /> */}
                They created an integrated system to accomodate persons with
                disabilites in the tech world by using open-source machine
                learning libraries. They targeted a wide range of disabilities
                to make the system as inclusive as possible. <br />
              </li>
              <br />
              <li>
                <em>Decentralised Cloud Storage System Using Blockchain</em> by
                Divyashree S (19BCE1689), Aravinda B (19BCE1190) and Amudhini P
                K (19BCE1492)
                <br />
                <br />
                {/* <img
                                loading='lazy'
                                
                                src={winnerTwo}
                                alt='Divyashree S, Aravinda B and Amudhini P K receiving their prize'
                            /> */}
                {/* <br />
                            <br /> */}
                They created a system of encrypted storage by utilising popular
                blockchain technologies. <br />
              </li>
            </ol>
            <p>
              The event was a success with the students learning about the
              importance of FOSS and getting to know the numerous avenues where
              open-source tools are used.
            </p>
          </div>
        </div>
      </>
    ),
  },
  
  {
    number: "01",
    name: "Rescue Tux",
    link: "lugvitc.github.io/#/events#rescue-tux",
    id: "rescue-tux",
    details: (
      <>
        <div className="flex flex-col justify-between md:flex-row">
          <div className="w-4/5 py-5 px-5 md:w-2/5">
            <p>
              The Linux Club at VIT Chennai organized the <i>Rescue Tux</i>{" "}
              event on 21st August 2022,{" "}
              <strong className="italic font-bold text-[#ebcb8b]">
                sponsored by GeeksForGeeks
              </strong>
              . The event saw the participation of about{" "}
              <strong className="italic font-bold text-[#ebcb8b]">
                180 attendees
              </strong>
              , who enjoyed a Linux workshop by the club's President Beleswar
              Prasad Padhi and Vice President Samridh Anand Paatni, followed by
              lunch. The participants also took part in a CTF event featuring
              challenges created by LUG members, with the CTF platform developed
              by the VP and President. Finally, the winners of the CTF were
              awarded prizes.
            </p>
            <p>The top three teams that emerged victorious were as follows:</p>
            <ol>
              <li>
                Team{" "}
                <strong className="italic font-bold text-[#ebcb8b]">
                  EchoHelloWorld
                </strong>
                , who received a prize of Rs.3000
              </li>
              <li>
                Team{" "}
                <strong className="italic font-bold text-[#ebcb8b]">
                  Ashwin Ponnur,Vishnu Sujith Krurp
                </strong>
                , who received a prize of 2000 rs.
              </li>
            </ol>
          </div>
          <div className="w-4/5 py-5 px-5 md:w-2/5">
            <Carousel images={[rescue, rescue1, rescue2]} />
          </div>
        </div>
      </>
    ),
  },
  {
    number: "02",
    name: "Cyber-0-Day",
    link: "lugvitc.github.io/#/events#cyber-0-day",
    id: "cyber-0-day",
    details: (
      <>
        <div className="flex flex-col justify-between md:flex-row">
          <div className="w-4/5 py-5 px-5 md:w-2/5">
            <Carousel images={[cyber, cyber1, cyber2]} />
          </div>
          <div className="w-4/5 py-5 px-5 md:w-2/5">
            <p>
              The Linux Club at VIT Chennai, in collaboration with The
              Tech-Researchers Club, organized the <i>Cyber-0-Day</i> event from
              24th to 25th September 2022. The event saw the participation of
              around{" "}
              <strong className="italic font-bold text-[#ebcb8b]">
                100 participants
              </strong>{" "}
              in teams of 1-3, and was{" "}
              <strong className="italic font-bold text-[#ebcb8b]">
                sponsored by Rapido
              </strong>
              . The event began with a Linux workshop by the President Beleswar
              Prasad Padhi and Vice President Samridh Anand Paatni, followed by
              a cybersecurity quiz and lunch.
            </p>
            <p>
              Later, participants enjoyed a CTF+Bug Bounty challenge, created by
              LUG members and featuring a CTF platform developed by the club.
              After the scores were tallied, the top 10 teams were selected to
              participate in a 12-hour hackathon that tested their technical
              cybersecurity knowledge, with problem statements on{" "}
              <i>API Testing Platforms</i> and <i>Network Monitoring Tools</i>.
              Finally, the winners of the event were awarded their prizes in the
              Nethaji Auditorium.
            </p>
            <p>The top three teams that emerged victorious were as follows:</p>
            <ol>
              <li>
                Team{" "}
                <strong className="italic font-bold text-[#ebcb8b]">
                  EchoHelloWorld
                </strong>{" "}
                (Zehran 21BPS1091, Christeo 21BCE1635 & Aditya 21BCE1431), who
                received a prize of X rs.
              </li>
              <li>
                Team{" "}
                <strong className="italic font-bold text-[#ebcb8b]">
                  HailAlan
                </strong>{" "}
                (Kushal Agrawal 22BPS1141, Ansh Sharma 22BCE1338 & Shashwat
                Mishra 22BCE1853), who received a prize of X rs.
              </li>
              <li>
                Team{" "}
                <strong className="italic font-bold text-[#ebcb8b]">
                  chill_sette
                </strong>{" "}
                (Naman 21BCE5852, Yash Singh 21BCE5760 & Sagar 21BCE5790), who
                received a prize of X rs.
              </li>
            </ol>
          </div>
        </div>
      </>
    ),
  },
  {
    number: "03",
    name: "Hackers' Horizon",
    link: "lugvitc.github.io/#/events#hackers-horizon",
    id: "hackers-horizon",
    details: (
      <>
        <div className="flex flex-col justify-between md:flex-row">
          <div className="w-4/5 py-5 px-5 md:w-2/5">
            <p>
              Linux Club, VIT Chennai successfully organised “Hackers Horizon” a
              two-day, full hands-on hacking session. Event was led by none
              other than Ankit Singh, a top 50 Bugcrowd hacker and one of the
              world's leading cybersecurity experts.
            </p>
            <p>
              Day one started with welcome ceremony of Ankit Singh. Session
              started from scratch helped students of all levels. Day 1 covered
              a wide range of topics, including Windows hacking, trojan and
              malware etc. We welcomed more than 400 participants both from VIT
              and other colleges. Day 2 Ankit covered wide variety of topics --
              Network hacking, Man in the middle, System hacking, Burpsuite, SQL
              Injection and much more. Workshop was hands-on, everyone followed
              not just listen to theory. Apart from working in competitive, we
              feel every participant received something from the event to
              advance their skills.
            </p>
            <p>
              At the end we had a CTF challenging event, many teams were formed
              and participated in event. It was an absolute success. Winning
              teams were announced. We were able to offer prizes and goodies
              signed by Mr. Ankit himself for winning teams and other active
              participants thanks to our sponsors Cyber Peace, Z Security and
              BugXs, which encouraged every team to put up their all-out effort.
            </p>
          </div>
          <Carousel images={[hacker, hacker1, hacker2]} />
        </div>
      </>
    ),
  },
  {
    number: "04",
    name: "GSOC Made Easy",
    link: "lugvitc.github.io/#/events#gsoc-made-easy",
    id: "gsoc-made-easy",
    details: (
      <>
        <div className="flex flex-col justify-between md:flex-row">
          <div className="w-4/5 py-5 px-5 md:w-2/5">
            <img
              loading="lazy"
              src={gsoc}
              alt="gsoc-made-easy"
              className="w-4/5 md:w-2/5"
            />
          </div>
          <div className="w-4/5 py-5 px-5 md:w-2/5">
            <p>
              Linux Club, VIT Chennai successfully organised “Google Summer of
              Code Made Easy” , purpose of the event was to guide students about
              GSOC. Beleswar Prasad Padhi, president of LINUX CLUB was speaker
              of the event, he participated in GSoC and contributed to the
              well-known Metasploit cybersecurity framework
            </p>
            <p>
              We welcomed more than 100 participants from VIT Chennai. It was
              our pleasure to guide students about on how to start for GSOC,
              which organizations to target, prior skills along with a live demo
              of fixing a reported bug.
            </p>
            <p>
              If anyone could not make it to the event, we provided the
              material-PPTs of the event thorough mail and our social media
              handles, so anyone can catch up on what they missed. It was not
              one day event; we are still guiding our participants for GSOC with
              necessary details. Linux Club will return with more enticing and
              instructive sessions.
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    number: "05",
    name: "LINUX Installation Booth",
    link: "lugvitc.github.io/#/events#linux-installation-booth",
    id: "linux-installation-booth",
    details: (
      <>
        <div className="flex flex-col justify-between md:flex-row">
          <div className="w-4/5 py-5 px-5 md:w-2/5">
            <p>
              Linux Club, VIT Chennai successfully organised “LINUX INSTALLATION
              BOOTH”, where we helped students both install Linux OS and dual
              boot their systems. Our aim was to make Linux accessible to
              everyone, regardless of their technical background, and we are
              proud to say that we achieved this goal. During the event, we
              provided step-by-step guidance and assistance to students
              installing Linux on their systems. We welcomed more than 200
              participants. It was amazing to see the enthusiasm and curiosity
              of the students who participated in the booth. Many of them were
              interested in learning more about Linux and its potential.
            </p>
            <p>
              We would like to thank everyone who participated in the event and
              made it a success. LINUX CLUB look forward to organizing more
              events like this in the future.
            </p>
          </div>
          <div className="w-4/5 py-5 px-5 md:w-2/5">
            <Carousel images={[booth, booth1, booth2]} />
          </div>
        </div>
      </>
    ),
  },
  {
    number: "06",
    name: "Password", // name password
    link: "lugvitc.github.io/#/events#password", // link password
    id: "password", // id password
    details: (
      <>
        <div className="flex flex-col justify-between md:flex-row">
          <div className="w-4/5 py-5 px-5 md:w-2/5">
            <Carousel images={[password_poster, pswdwinnerone, pswdwinnertwo, pswdwinnerthree]} />
          </div>
          <div className="w-4/5 py-5 px-5 md:w-2/5">
            <p>
              "Password" in this event participants will have the opportunity to
              engage in hands-on workshops, where they can learn practical
              skills related to cybersecurity. These workshops will cover areas
              like cryptography, penetration testing, and incident response
            </p>
            <p>
              The first day of the event will be a workshop taken up by the
              Technical department of the club, the workshop will ensure that
              the participants will learn about all the topics in detail with a
              hands on experience and how to use them in real time applications.
            </p>
            <p>
              "Password" is a unique all-inclusive event featuring three
              sessions. The main event takes place on the second day. The event
              aims to provide participants with a comprehensive platform to
              explore and showcase their skills and expertise. The first session
              is a captivating Capture the Flag (CTF) competition with 25
              challenges covering topics like Linux and binary exploitation. The
              second session is an exciting Escape the Room challenge where
              participants must acquire a key from a remote machine. In the
              third session, participants use the obtained key to unlock a safe
              and earn a trophy.
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    number: "07",
    name: "Cyber-0-Day 2.0", // name password
    link: "lugvitc.github.io/#/events#cyber-o-day-2", // link password
    id: "cod2", // id password
    details: (
      <>
        <div className="flex flex-col justify-between md:flex-row">
          <div className="w-4/5 py-5 px-5 md:w-2/5">
            <Carousel images={[cyber21,cyber22]} />
          </div>
          <div className="w-4/5 py-5 px-5 md:w-2/5">
            <p>
            Cyber-0-Day 2.0, the flagship event of Technovit, took our future hackers on a riveting expedition into the world of cybersecurity. Held at the grand Netaji Auditorium, this 24-hour tech marathon was an unforgettable experience.
            </p>
            <p>
            The event commenced with a knowledge-packed workshop covering five key topics: Linux fundamentals, OSINT reconnaissance, Web exploitation, cryptography, and Binary exploitation. Participants absorbed valuable insights and honed their skills during these interactive as well as hands-on sessions. Our tech team was active throughout the sessions assisting them with their doubts.
            </p>
            <p>
            After the workshop, participants faced a challenging quiz that tested their grasp of the workshop topics. The top 20 teams which emerged victorious advanced to the final Capture The Flag (CTF) round, a nerve-wracking competition that pushed their skills to the limit. The CTF challenges were masterfully devised by our expert backend team.
            </p>
            <p>
            From the CTF round, the top 10 teams proceeded to the Treasure Hunt, where they navigated a complex maze of clues and challenges. In the end, 3 teams emerged as the ultimate victor, winning a generous prize of a 5k, 3k, 2k INR Amazon gift vouchers respectively. The top 10 teams were awarded with exclusive hacking tools. 
            </p>
          </div>
        </div>
      </>
    ),
  },
];








