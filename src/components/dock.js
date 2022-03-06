import React from 'react';
import './dock.css';
import LugLink from './lugLink';

/**
 * dock-items should be icons of the site/page
 * they are lugLinks right now, but that should be changed later
 * 
 */

export default function Dock({items}) {
    return (
    <div class = "dock">
        {items.map(({link, icon}, index) =>
            <LugLink
                key = {index}
                className = "dock-item"
                link = {link}
                name = {
                    <img
                        alt = "" 
                        className = "dock-icon"
                        src = {icon}
                    />
                }
            />
        )}
    </div>
    );
}