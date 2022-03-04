import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './topBar.css';

export default function TopBar({navs}) {
    const [activeIndex, setActiveIndex] = useState(0);

    // if these variables are set to be regularly updated, implement them using hooks
    // until then, constants are fine
    const time = "1:35";
    const date = new Date().toISOString().slice(0, 10);
    // const [time, setTime] = useState("4:20pm");
    // const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

    return (
        <div className = "top-bar">
            <div className = "top-bar-element-container">
                {navs.map((nav, num) =>
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