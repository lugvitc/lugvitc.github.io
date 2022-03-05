import React from 'react';
import TerminalPrompt from '../components/terminalPrompt';
import TerminalWindow from '../components/terminalWindow';

export default function Blog() {
    return (
        <TerminalWindow>
            <TerminalPrompt path = "~">cd blog</TerminalPrompt>
            <TerminalPrompt path = "~/blog">cat blog.txt</TerminalPrompt>
            coming soon!!!
        </TerminalWindow>
    );
}