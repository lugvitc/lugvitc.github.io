import TerminalWindow from './mycomponents/terminalWindow/terminalWindow';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Layout from './pages/layout';
import { useState } from 'react';

export default function App() {
    const [navs, setNavs] = useState([
        {title: "home", link: "/"},
        {title: "events", link: "/events"},
        {title: "projects", link: "/projects"},
        {title: "blog", link: "/blog"},
        {title: "about", link: "/about"}
    ]);
    return (
        <BrowserRouter>
        <Routes>
            <Route path = "/" element = {<Layout navs = {navs}/>}>
                <Route index element = {<Home/>}/>
                <Route path = "events" element = {<TerminalWindow>events</TerminalWindow>}/>
                <Route path = "projects" element = {<TerminalWindow>projects</TerminalWindow>}/>
                <Route path = "blog" element = {<TerminalWindow>blog</TerminalWindow>}/>
                <Route path = "about" element = {<TerminalWindow>about</TerminalWindow>}/>
            </Route>
        </Routes>
        </BrowserRouter>
    );
}