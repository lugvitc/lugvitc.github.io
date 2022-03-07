import { HashRouter, Routes, Route, Router } from 'react-router-dom';
import Home from './pages/home';
import Layout from './pages/layout';
import About from './pages/about';
import Events from './pages/events';
import Projects from './pages/projects';
import Blog from './pages/blog';

import { dockItems } from './content/dockItems';
import { topBarLinks } from './content/topBarLinks';

export default function App() {
    return (
        <HashRouter basename = {process.env.PUBLIC_URl}>
        <Routes>
            <Route path = "/" element = {<Layout navs = {topBarLinks} dockItems={ dockItems }/>}>
                <Route index element = {<Home/>}/>
                <Route path = "events" element = {<Events/>}/>
                <Route path = "projects" element = {<Projects/>}/>
                <Route path = "blog" element = {<Blog/>}/>
                <Route path = "about" element = {<About/>}/>
            </Route>
        </Routes>
        </HashRouter>
    );
}