import React from 'react';
import { NavLink } from 'react-router-dom';
import './topBar.css';
import TopBarTimeDate from './topBarDate';

export default function TopBar({navs}) {
    return (
        <div className = "top-bar">
            <div className = "navlinks">
                {navs.map((nav, index) =>
                    <NavLink
                        key = {index}
                        className = {currentNavLink => "top-bar-element-clickable " + (
                            currentNavLink.isActive
                                ? "top-bar-element-active"
                                : "top-bar-element-inactive"
                        )}
                        to = {nav.link}
                    >
                        {nav.title}
                    </NavLink>
                )}
            </div>
            <div className = "top-bar-element-non-clickable">
                <TopBarTimeDate/>
            </div>
        </div>
    );
}