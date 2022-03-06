import React from 'react';
import './terminal.css';

export default function LugLink({link, name}) {
    return (
        <a
            className = "terminal-text-link"
            href = {link}
            target = "_blank"
            rel = "noopener noreferrer"
        >
            {name} <br/>
        </a>
    );
}