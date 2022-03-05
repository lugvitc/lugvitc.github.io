import React from 'react';
import TerminalPrompt from '../components/terminalPrompt';
import TerminalWindow from '../components/terminalWindow';

export default function Events() {
    return (
        <TerminalWindow>
            <TerminalPrompt path = "~">cd events</TerminalPrompt>
            <TerminalPrompt path = "~/blog">cat events.txt</TerminalPrompt>
            coming soon!!!
        </TerminalWindow>
    );
}