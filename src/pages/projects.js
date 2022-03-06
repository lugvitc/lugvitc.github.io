import React from 'react';
import TerminalPrompt from '../components/terminal/terminalPrompt';
import TerminalWindow from '../components/terminal/terminalWindow';

export default function Projects() {
    return (
        <TerminalWindow>
            <TerminalPrompt path = "~">cd projects</TerminalPrompt>
            <TerminalPrompt path = "~/blog">cat projects.txt</TerminalPrompt>
            coming soon!!!
        </TerminalWindow>
    );
}