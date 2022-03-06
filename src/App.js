import TerminalWindow from './components/terminalWindow';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Layout from './pages/layout';
import About from './pages/about';
import Events from './pages/events';
import Projects from './pages/projects';
import Blog from './pages/blog';
import InstagramIcon from './images/Instagram.svg';
import LinkedInIcon from './images/LinkedIn.svg';
import GithubIcon from './images/Github.svg';
import DiscordIcon from './images/Discord.svg';

export default function App() {
    const navs = [ // make this a 'useState' thing if needed in the future
        {title: "home", link: "/"},
        {title: "events", link: "/events"},
        {title: "projects", link: "/projects"},
        {title: "blog", link: "/blog"},
        {title: "about", link: "/about"}
    ];

    const dockItems = [
        {
            link: "https://www.linkedin.com/company/lugvitc/",
            icon: LinkedInIcon
        },
        {
            link: "https://www.instagram.com/lugvitc/",
            icon: InstagramIcon
        },
        {
            link: "https://github.com/lugvitc",
            icon: GithubIcon
        },
        {
            link: "https://discord.com/channels/949736566899744778/949736566899744781",
            icon: DiscordIcon
        }
    ];

    // these links are being passed to both the about page and the dock in the layout as props
    // if they have separate sets of links in the future, put the links needed for the dock in it's page
    // and put the links needed for the about page in it's page
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
        },
        {
            link: "https://discord.com/channels/949736566899744778/949736566899744781",
            name: "discord"
        }
    ];
    return (
        <BrowserRouter>
        <Routes>
            <Route path = "/" element = {<Layout navs = {navs} dockItems={ dockItems }/>}>
                <Route index element = {<Home/>}/>
                <Route path = "events" element = {<Events/>}/>
                <Route path = "projects" element = {<Projects/>}/>
                <Route path = "blog" element = {<Blog/>}/>
                <Route path = "about" element = {<About links = {links}/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
    );
}