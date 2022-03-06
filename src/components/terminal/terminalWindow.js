import React from 'react';
import { Colors } from '../../values/colors.js';
import './terminal.css';

export default function TerminalWindow({children}) {
    return (
        <div className = "terminal-container">
            <div className = "terminal-dots">
                <div className = "terminal-dot" style = {{backgroundColor: Colors.nord11}}/>
                <div className = "terminal-dot" style = {{backgroundColor: Colors.nord13}}/>
                <div className = "terminal-dot" style = {{backgroundColor: Colors.nord14}}/>
            </div>
            <div className = "terminal-contents terminal-text">
                {children}
            </div>
        </div>
    );
}