import { useEffect } from 'react';
import { useState } from 'react';
import './topBar.css';

export default function TopBarTimeDate() {
    const [currentDate, setCurrentDate] = useState(new Date());

    const date = currentDate.toLocaleDateString('en-IN');
    const time = currentDate.toLocaleTimeString('en-IN');

    function refreshClock() {
        setCurrentDate(new Date());
    }

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);

    return <span>{`${time}, ${date}`}</span>;
}
