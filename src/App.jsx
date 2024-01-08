import { useState } from 'react'

import './App.css'

import { HashRouter,createHashRouter, Route,RouterProvider, NavLink} from 'react-router-dom';

import {MainNavbar} from './components/navbar/MainNavbar.jsx'
import Root from './pages/home/Root';
import Learn from './pages/learn/Learn';
import Event from './pages/events/Event';
import Member from './pages/members/Member';
import Leaderboard from './pages/leaderboard/Leaderboard';
import Blogs from './pages/blogs/Blogs';
import Contact from './pages/contact/Contact';
import AboutUs from './pages/about/AboutUs';
import Gallary from './pages/gallary/Gallary';
import Footer from './components/footer/Footer';
import Cli from './pages/cli/Cli'
// importing all events
import HackersHorizon from './pages/events/event/hackers-horizon/HackersHorizon';

import Chapter_1 from './pages/learn/chapters/Chapter_1';
import Chapter_2 from './pages/learn/chapters/Chapter_2';
import Chapter_3 from './pages/learn/chapters/Chapter_3';
import Chapter_4 from './pages/learn/chapters/Chapter_4';
import Chapter_5 from './pages/learn/chapters/Chapter_5';
import Chapter_6 from './pages/learn/chapters/Chapter_6';

// import Particle from './components/Particle/Particle'

export const paths = {
  root : "/",
  learn : "/learn",
  events : "/events",
  members : "/members",
  leaderboard : "/leaderboard",
  blogs : "/blogs",
  gallary : "/gallary",
  about : "/about",
  contact : "/contact",
  hackershorizon : "/hackershorizon",
  cli  : "/cli",
  chapter_1 : "/chapter_1",
  chapter_2 : "/chapter_2",
  chapter_3 : "/chapter_3",
  chapter_4 : "/chapter_4",
  chapter_5 : "/chapter_5",
  chapter_6 : "/chapter_6",
}

const router = createHashRouter([
  {
    path: paths.root              ,
    element: <Root/>,
    children: [
    ],
  },
  {
    path: "/learn",
    element: <Learn/>,
    children: [
    ],
  },
  {
    path: "/events",
    element: <Event/>,
    children: [
      // {
      //   path: "hackershorizon",
      //   element: <HackersHorizon />,
      // },
    ],
  },
  {
    path: "/members",
    element: <Member/>,
    children: [
    ],
  },
  {
    path: "/leaderboard",
    element: <Leaderboard/>,
    children: [
    ],
  },
  {
    path: "/blogs",
    element: <Blogs/>,
    children: [
    ],
  },
  {
    path: "/gallary",
    element: <Gallary/>,
    children: [
    ],
  },
  {
    path: "/about",
    element: <AboutUs/>,
    children: [
    ],
  },
  {
    path: "/contact",
    element: <Contact/>,
    children: [
    ],
  },
  {
    path: "/hackershorizon",
    element: <HackersHorizon/>,
    children: [
    ],
  },
  {
    path: "/cli",
    element: <Cli/>,
    children: [
    ],
  },
  {
    path: "/chapter_1",
    element: <Chapter_1/>,
    children: [
    ],
  },
  {
    path: "/chapter_2",
    element: <Chapter_2/>,
    children: [
    ],
  },
  {
    path: "/chapter_3",
    element: <Chapter_3/>,
    children: [
    ],
  },
  {
    path: "/chapter_4",
    element: <Chapter_4/>,
    children: [
    ],
  },
  {
    path: "/chapter_5",
    element: <Chapter_5/>,
    children: [
    ],
  },
  {
    path: "/chapter_6",
    element: <Chapter_6/>,
    children: [
    ],
  },
  
  // {
  //   path:'*',
  //   element: <PageNotFound></PageNotFound> ,
  // },
  
])


function App() {
 

  return (
    <>
      <MainNavbar/>
      <RouterProvider router={router} />
      <Footer/>

    
    </>
  )
}

export default App
