import React from 'react';
import './lugLink.css';

export default function LugLink({link, name}) {
    return (
        <a
            className = "lug-link"
            href = {link}
            target = "_blank"
            rel = "noopener noreferrer"
        >
            {name} <br/>
        </a>
    );
}