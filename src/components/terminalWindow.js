import React from 'react';
import { NordTheme } from '../values/colors';
import './terminalWindow.css';

export default function TerminalWindow({children}) {
    return (
        <div className = "terminal-container">
            <div className = "terminal-dots">
                <div className = "terminal-dot" style = {{backgroundColor: NordTheme.nord11}}/>
                <div className = "terminal-dot" style = {{backgroundColor: NordTheme.nord13}}/>
                <div className = "terminal-dot" style = {{backgroundColor: NordTheme.nord14}}/>
            </div>
            <div className = "terminal-contents">
                {children}
            </div>
        </div>
    );
}