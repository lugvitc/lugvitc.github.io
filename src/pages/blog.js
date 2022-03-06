import React from 'react';
import TerminalPrompt from '../components/terminal/terminalPrompt';
import TerminalWindow from '../components/terminal/terminalWindow';

export default function Blog() {
    return (
        <TerminalWindow>
            <TerminalPrompt path = "~">cd blog</TerminalPrompt>
            <TerminalPrompt path = "~/blog">cat blog.txt</TerminalPrompt>
            coming soon!!!
        </TerminalWindow>
    );
}