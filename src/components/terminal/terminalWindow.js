import React from 'react';
import { Colors } from '../../styles/colors.js';
import './terminal.css';
import './terminalText.css';

export default function TerminalWindow({ children }) {
    return (
        <article className='terminal'>
            <header className='terminal-dots'>
                <div
                    className='terminal-dot'
                    style={{ backgroundColor: Colors.nord11 }}
                />
                <div
                    className='terminal-dot'
                    style={{ backgroundColor: Colors.nord13 }}
                />
                <div
                    className='terminal-dot'
                    style={{ backgroundColor: Colors.nord14 }}
                />
            </header>
            <article className='terminal-contents terminal-text'>
                {children}
            </article>
        </article>
    );
}
