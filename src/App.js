import { HashRouter, Routes, Route, Outlet } from 'react-router-dom';

import Home from './pages/home';
import Events from './pages/events/events';

import TopBar from './components/topBar/topBar';
import Dock from './components/dock/dock';
import LearnLinux from './pages/learnLinux/learnLinux';

export default function App() {
    return (
        <HashRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route
                    path='/'
                    element={
                        <>
                            <TopBar />
                            <main id='content'>
                                <Dock />
                                <div className='terminals'>
                                    <Outlet />
                                </div>
                            </main>
                        </>
                    }
                >
                    <Route index element={<Home />} />
                    <Route path='events' element={<Events />} />
                    <Route path='learn-linux' element={<LearnLinux />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}

