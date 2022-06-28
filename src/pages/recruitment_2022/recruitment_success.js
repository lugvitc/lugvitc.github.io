import React from 'react';
import TerminalPrompt from '../components/terminal/terminalPrompt';
import TerminalWindow from '../components/terminal/terminalWindow';
import '../components/typeWriter.css';

export default function Success() {
    return (
        <TerminalWindow>
            <div className='form-start'>Success...!</div>
            <div>
                Thank you for onboarding with the Linux Club! We will contact
                you soon to get you all started with :)
            </div>
        </TerminalWindow>
    );
}

