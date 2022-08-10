import { Routes, Route } from 'react-router-dom';
import HomePage from './homePage/homePage';
import Login from './login';
import Registration from './registration/registration';
import TeamRegistration from './teamRegistration/teamRegistration';

export default function RescueTux2022Routes() {
    return (
        <Routes>
            <Route index element={<HomePage />} />
            <Route path='/register' element={<Registration />} />
            {/* <Route path='/make-team' element={<<TeamRegistration />>} />
            <Route path='/login' element={<Login />} />
            <Route path='/play' element={<div>play</div>} />
            <Route path='/play/my-team' element={<div>my team</div>} />
            <Route path='/play/leaderboard' element={<div>leaderboard</div>} /> */}
        </Routes>
    );
}

