import TerminalWindow from './components/terminalWindow';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Layout from './pages/layout';
import About from './pages/about';

export default function App() {
    const navs = [ // make this a 'useState' thing if needed in the future
        {title: "home", link: "/"},
        {title: "events", link: "/events"},
        {title: "projects", link: "/projects"},
        {title: "blog", link: "/blog"},
        {title: "about", link: "/about"}
    ];
    
    const links = [
        {
            link: "https://www.linkedin.com/company/lugvitc/",
            name: "linkedIn"
        },
        {
            link: "https://www.instagram.com/lugvitc/",
            name: "instagram"
        },
        {
            link: "https://github.com/lugvitc",
            name: "github"
        }
    ];
    return (
        <BrowserRouter>
        <Routes>
            <Route path = "/" element = {<Layout navs = {navs}/>}>
                <Route index element = {<Home/>}/>
                <Route path = "events" element = {<TerminalWindow>coming soon!</TerminalWindow>}/>
                <Route path = "projects" element = {<TerminalWindow>coming soon!</TerminalWindow>}/>
                <Route path = "blog" element = {<TerminalWindow>coming soon!</TerminalWindow>}/>
                <Route path = "about" element = {<About links = {links}/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
    );
}