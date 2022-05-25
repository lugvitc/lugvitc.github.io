import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/layout';
import Home from './pages/home';
import Events from './pages/events';
import Recruitment from './pages/recruitment';
import { dockItems } from './content/dockItems';
import { topBarLinks } from './content/topBarLinks';

export default function App() {
    return (
        <HashRouter basename = {process.env.PUBLIC_URL}>
        <Routes>
            <Route path = "/" element = {<Layout navs = {topBarLinks} dockItems={ dockItems }/>}>
                <Route index element = {<Home/>}/>
                <Route path = "events" element = {<Events/>}/>
	        <Route path = "recruitment" element = {<Recruitment/>}/>
            </Route>
        </Routes>
        </HashRouter>
    );
}
