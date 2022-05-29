import React from 'react';
import TerminalPrompt from '../components/terminal/terminalPrompt';
import TerminalWindow from '../components/terminal/terminalWindow';
import '../components/typeWriter.css';

export default function Success() {
    return (
        <TerminalWindow>
            <section id='terminal'>
                <TerminalPrompt path='~'> cd recruitment </TerminalPrompt>
            </section>
            <div>
                <TerminalPrompt path='~/recruitment'>
                    {' '}
                    ./recruitment.exe -v 2022{' '}
                </TerminalPrompt>
                <br />
                <h2 style={{ color: 'green', fontWeight: 'bold' }}>
                    Success...!
                </h2>
                <p>
                    Thank you for onboarding with the Linux Club! We will
                    contact you soon to get you all started with :)
                </p>
            </div>
        </TerminalWindow>
    );
}

