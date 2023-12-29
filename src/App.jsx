import { useState } from 'react'

import './App.css'

import { HashRouter,createHashRouter, Route,RouterProvider, } from 'react-router-dom';

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

// import Particle from './components/Particle/Particle'

const router = createHashRouter([
  {
    path: "/",
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
    
 
    
    </>
  )
}

export default App
