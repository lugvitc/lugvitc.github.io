import React from 'react';
import './dock.css';
import LugLink from './terminal/lugLink';

export default function Dock({items}) {
    return (
    <div className = "dock">
        {items.map(({link, icon}, index) =>
            <LugLink key = {index} link = {link}>
                <img
                    alt = "" 
                    className = "dock-icon"
                    src = {icon}
                />
            </LugLink>
        )}
    </div>
    );
}