import React from 'react';
import LugLink from '../components/terminal/lugLink';
import TerminalPrompt from '../components/terminal/terminalPrompt';
import TerminalWindow from '../components/terminal/terminalWindow';

export default function Events() {
    return (
        <TerminalWindow>
            <TerminalPrompt path = "~">cd events</TerminalPrompt>
            <TerminalPrompt path = "~/blog">cat events.txt</TerminalPrompt>
            <h1><LugLink link = "https://adrenaline.androidclubvit.com/" name = "Adrenaline"/></h1>
            Adrenaline is a one-day event for participants to show-off their open source skills by solving problems of a given domain.
        </TerminalWindow>
    );
}