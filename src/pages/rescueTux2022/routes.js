import { Routes, Route } from 'react-router-dom';
import Challenges from '../rescueTheTux/challenges';
import HomePage from './homePage/homePage';
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
            <Route path='/play' element={<Play />} />
            <Route path='/challenges' element={<Challenges />} />
            {/* <Route path='/play/my-team' element={<div>my team</div>} />
            <Route path='/play/leaderboard' element={<div>leaderboard</div>} /> */}
        </Routes>
    );
}

