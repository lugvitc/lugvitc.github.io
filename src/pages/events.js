import React from 'react';
import LugLink from '../components/terminal/lugLink';
import TerminalPrompt from '../components/terminal/terminalPrompt';
import TerminalWindow from '../components/terminal/terminalWindow';
import { eventsDetails } from '../content/eventsDetails';

export default function Events() {
    return (
        <TerminalWindow>
            <TerminalPrompt path = "~">cd events</TerminalPrompt>
            <TerminalPrompt path = "~/blog">cat events.txt</TerminalPrompt>
            {eventsDetails.map(({number, name, link, details}, index) =>
                <span key = {index}>
                    <h1>
                        {number}: <LugLink link = {link}>{name}</LugLink>
                    </h1>
                    {details}
                    ---
                </span>
            )}
        </TerminalWindow>
    );
}