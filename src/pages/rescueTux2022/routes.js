import { Routes, Route, Outlet } from 'react-router-dom';
import Challenges from '../rescueTheTux/challenges';
import LoggedInRoute from './components/LoggedInRoute';
import HomePage from './homePage/homePage';
import Leaderboard from './leaderboard/leaderboard';
import Login from './login';
import Play from './play/play';
import Registration from './registration/registration';
import TeamRegistration from './teamRegistration/teamRegistration';

export default function RescueTux2022Routes() {
    return (
        <Routes>
            <Route index element={<HomePage />} />
            <Route path='/register' element={<Registration />} />
            <Route path='/create-team' element={<TeamRegistration />} />
            <Route path='/login' element={<Login />} />
            <Route
                path='/play'
                element={
                    <LoggedInRoute>
                        <Outlet />
                    </LoggedInRoute>
                }
            >
                <Route index element={<Play />} />
                <Route path='/play/leaderboard' element={<Leaderboard />} />
            </Route>
            {/* <Route path='/play/my-team' element={<div>my team</div>} />
            <Route path='/play/leaderboard' element={<div>leaderboard</div>} /> */}
        </Routes>
    );
}

