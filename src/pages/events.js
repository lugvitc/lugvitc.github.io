import React from 'react';
import TerminalPrompt from '../components/terminal/terminalPrompt';
import TerminalWindow from '../components/terminal/terminalWindow';

export default function Events() {
    return (
        <TerminalWindow>
            <TerminalPrompt path = "~">cd events</TerminalPrompt>
            <TerminalPrompt path = "~/blog">cat events.txt</TerminalPrompt>
            coming soon!!!
        </TerminalWindow>
    );
}