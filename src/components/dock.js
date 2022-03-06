import React from 'react';
import './dock.css';

export default function Dock({items}) {
    return (
    <div className = "dock">
        {items.map(({link, icon}, index) =>
            <a
                key = {index}
                className = "dock-item"
                href = {link}
                target = "_blank"
                rel = "noopener noreferrer"
            >
                <img
                    alt = "" 
                    className = "dock-icon"
                    src = {icon}
                />
            </a>
        )}
    </div>
    );
}