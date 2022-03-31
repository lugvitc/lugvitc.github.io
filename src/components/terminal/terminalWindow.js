import React from 'react';
import { Colors } from '../../values/colors.js';
import './terminal.css';

export default function TerminalWindow({children}) {
    return (
        <main className = "terminal">
            <header className = "terminal-dots">
                <div className = "terminal-dot" style = {{backgroundColor: Colors.nord11}}/>
                <div className = "terminal-dot" style = {{backgroundColor: Colors.nord13}}/>
                <div className = "terminal-dot" style = {{backgroundColor: Colors.nord14}}/>
            </header>
            <article className = "terminal-contents terminal-text">
                {children}
            </article>
        </main>
    );
}