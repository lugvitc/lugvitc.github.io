import { Routes, Route } from 'react-router-dom';
import HomePage from './homePage/homePage';
import Registration from './registration/registration';

export default function RescueTux2022Routes() {
    return (
        <Routes>
            <Route index element={<HomePage />} />
            <Route path='/register' element={<Registration />} />
            <Route path='/make-team' element={<div>make team</div>} />
            <Route path='/login' element={<div>login</div>} />
        </Routes>
    );
}
