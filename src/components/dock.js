import React from 'react';
import './dock.css';
import LugLink from './terminal/lugLink';

export default function Dock({items}) {
    return (
    <aside id = "dock">
        {items.map(({link, icon}, index) =>
            <LugLink key = {index} link = {link}>
                <img
                    alt = "" 
                    className = "dock-icon"
                    src = {icon}
                />
            </LugLink>
        )}
    </aside>
    );
}