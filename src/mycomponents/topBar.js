import React from 'react';
import { NordTheme, OtherColors } from '../values/colors';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './topBar.css';

export default function TopBar({navs}) {
    /* this should be the current time, updated every second(or minute, idk)*/
    const [time, setTime] = useState("4:20pm");
    /* this date should be the current date, updated every day*/
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className = "top-bar">
            <div className = "top-bar-element-container">
                {navs.map(
                    (nav, num) =>
                        <Link
                            key = {num}
                            className = {
                                "top-bar-element " + 
                                (activeIndex === num
                                    ? "top-bar-element-active"
                                    : "top-bar-element-inactive"
                                )
                            }
                            to = {nav.link}
                            onClick = {() => setActiveIndex(num)}
                        >
                            {nav.title} ▼
                        </Link>
                )}
            </div>
            <div className = "top-bar-text"> {time} </div>
            <div className = "top-bar-text"> {date} </div>
        </div>
    );
}