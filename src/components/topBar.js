import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './topBar.css';
import TopBarTimeDate from './topBarDate';

export default function TopBar({navs}) {
    const [activeIndex, setActiveIndex] = useState(0);

    const topBarElementClass = (activeIndex, index) =>
        "top-bar-element-clickable " + (
            activeIndex === index
                ? "top-bar-element-active"
                : "top-bar-element-inactive"
        );

    return (
        <div className = "top-bar">
            <div className = "navlinks">
                {navs.map((nav, index) =>
                    <Link
                        key = {index}
                        className = {topBarElementClass(activeIndex, index)}
                        to = {nav.link}
                        onClick = {() => setActiveIndex(index)}
                    >
                        {nav.title} ▼
                    </Link>
                )}
            </div>
            <div className = "top-bar-element-non-clickable">
                <TopBarTimeDate/>
            </div>
        </div>
    );
}