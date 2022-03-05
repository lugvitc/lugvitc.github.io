import React from 'react';
import TerminalPrompt from '../components/terminalPrompt';
import TerminalWindow from '../components/terminalWindow';

export default function Projects() {
    return (
        <TerminalWindow>
            <TerminalPrompt path = "~">cd projects</TerminalPrompt>
            <TerminalPrompt path = "~/blog">cat projects.txt</TerminalPrompt>
            coming soon!!!
        </TerminalWindow>
    );
}