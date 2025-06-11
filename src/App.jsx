import { useState } from "react";

import "./App.css";

import {
  HashRouter,
  createHashRouter,
  Route,
  RouterProvider,
  NavLink,
} from "react-router-dom";

import { MainNavbar } from "./components/navbar/MainNavbar.jsx";
import Root from "./pages/home/Root";
import Learn from "./pages/learn/Learn";
import Event from "./pages/events/Event";
import Member from "./pages/members/Member";
import Leaderboard from "./pages/leaderboard/Leaderboard";
import Blogs from "./pages/blogs/Blogs";
import Contact from "./pages/contact/Contact";
import AboutUs from "./pages/about/AboutUs";
import Gallery from "./pages/gallery/Gallery";
import Footer from "./components/footer/Footer";
import Cli from "./pages/cli/Cli";
import MembersArchive from "./pages/members/MembersArchive";

// importing all events
import AdrenalineFOSSDay from "./pages/events/event/adrenaline-FOSS-Day/AdrenalineFOSSDay";
import RescueTheTux from "./pages/events/event/rescue-the-tux/RescueTheTux";
import CyberOday from "./pages/events/event/cod/Cod";
import GsocmadeEasy from "./pages/events/event/gsoc-made-easy/GsocMadeEasy";
import HackersHorizon from "./pages/events/event/hackers-horizon/HackersHorizon";
import LinuxInstallationBooth2 from "./pages/events/event/linux-installation-booth2/LinuxInstallationBooth2";
import Password2023 from "./pages/events/event/password2023/Password2023";
import CyberOday2 from "./pages/events/event/cod2/Cod2";
import Password2024 from "./pages/events/event/password2024/Password2024";
import FOSSit2024 from "./pages/events/event/fossit2024/FOSSit2024.jsx";
import StuxNet from "./pages/events/event/StuxNet/StuxNet.jsx";
import LinuxInstallation2024 from "./pages/events/event/LinuxInstallation2024/LinuxInstallation2024.jsx";
import Cyber0day3 from "./pages/events/event/cod3/cod3";

import Chapter_1 from "./pages/learn/chapters/Chapter_1";
import Chapter_2 from "./pages/learn/chapters/Chapter_2";
import Chapter_3 from "./pages/learn/chapters/Chapter_3";
import Chapter_4 from "./pages/learn/chapters/Chapter_4";
import Chapter_5 from "./pages/learn/chapters/Chapter_5";
import Chapter_6 from "./pages/learn/chapters/Chapter_6";

// import Particle from './components/Particle/Particle'

export const paths = {
  root: "/",
  learn: "/learn",
  events: "/events",
  members: "/members",
  leaderboard: "/leaderboard",
  blogs: "/blogs",
  gallery: "/gallery",
  about: "/about",
  contact: "/contact",
  adrenaline: "/adrenaline",
  rescuethetux: "/rescuethetux",
  cyberOday: "/cyberOday",
  gsocmadeeasy: "/gsocmadeeasy",
  hackershorizon: "/hackershorizon",
  linuxInstallationBooth2: "/linuxInstallationBooth2",
  password2023: "/password2023",
  cyberOday2: "/cyberOday2",
  password2024: "/password2024",
  fossit2024: "/fossit2024",
  StuxNet: "/StuxNet",
  LinuxInstallation2024: "/linuxInstallation2024",
  Cyber0day3: "/Cyber0day3",

  cli: "/cli",
  chapter_1: "/chapter_1",
  chapter_2: "/chapter_2",
  chapter_3: "/chapter_3",
  chapter_4: "/chapter_4",
  chapter_5: "/chapter_5",
  chapter_6: "/chapter_6",
};

const router = createHashRouter([
  {
    path: paths.root,
    element: <Root />,
  },
  {
    path: "/learn",
    element: <Learn />,
  },
  {
    path: "/events",
    element: <Event />,
    children: [
      // {
      //   path: "hackershorizon",
      //   element: <HackersHorizon />,
      // },
    ],
  },
  {
    path: "/members",
    element: <Member />,
  },
  {
    path: "/members-archive",
    element: <MembersArchive />,
  },
  {
    path: "/leaderboard",
    element: <Leaderboard />,
  },
  {
    path: "/blogs",
    element: <Blogs />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/adrenaline",
    element: <AdrenalineFOSSDay />,
  },
  {
    path: "/rescuethetux",
    element: <RescueTheTux />,
  },
  {
    path: "/CyberOday",
    element: <CyberOday />,
  },
  {
    path: "/gsocmadeeasy",
    element: <GsocmadeEasy />,
  },
  {
    path: "/hackershorizon",
    element: <HackersHorizon />,
  },
  {
    path: "/linuxInstallationBooth2",
    element: <LinuxInstallationBooth2 />,
  },
  {
    path: "/password2023",
    element: <Password2023 />,
  },
  {
    path: "/cyberOday2",
    element: <CyberOday2 />,
  },
  {
    path: "/password2024",
    element: <Password2024 />,
  },
  {
    path: "/fossit2024",
    element: <FOSSit2024 />,
  },
  {
    path: "/StuxNet",
    element: <StuxNet />,
  },
  {
    path: "/LinuxInstallation2024",
    element: <LinuxInstallation2024 />,
  },
  {
    path: "/Cyber0day3",
    element: <Cyber0day3 />,
  },
  {
    path: "/cli",
    element: <Cli />,
  },
  {
    path: "/chapter_1",
    element: <Chapter_1 />,
  },
  {
    path: "/chapter_2",
    element: <Chapter_2 />,
  },
  {
    path: "/chapter_3",
    element: <Chapter_3 />,
  },
  {
    path: "/chapter_4",
    element: <Chapter_4 />,
  },
  {
    path: "/chapter_5",
    element: <Chapter_5 />,
  },
  {
    path: "/chapter_6",
    element: <Chapter_6 />,
  },

  // {
  //   path:'*',
  //   element: <PageNotFound></PageNotFound> ,
  // },
]);

function App() {
  return (
    <>
      <MainNavbar />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
