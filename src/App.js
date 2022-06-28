import { HashRouter, Routes, Route, Outlet } from 'react-router-dom';

import Home from './pages/home';
import Events from './pages/events/events';

import { dockItems } from './content/dockItems';
import { topBarLinks } from './content/topBarLinks';
import TopBar from './components/topBar';
import Dock from './components/dock';

export default function App() {
    return (
        <HashRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route
                    path='/'
                    element={
                        <>
                            <TopBar navs={topBarLinks} />
                            <main id='content'>
                                <Dock items={dockItems} />
                                <div className='terminals'>
                                    <Outlet />
                                </div>
                            </main>
                        </>
                    }
                >
                    <Route index element={<Home />} />
                    <Route path='events' element={<Events />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}

