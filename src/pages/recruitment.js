import React from 'react';
import TerminalPrompt from '../components/terminal/terminalPrompt';
import TerminalWindow from '../components/terminal/terminalWindow';
import LugLink from '../components/terminal/lugLink';
import { eventsDetails } from '../content/eventsDetails';
import '../components/typeWriter.css';
import {TypeAnimation} from '../components/typeWriter.js';

const firstText = 'cd recruitment'
const secondText = './recruitment.exe -v 2022' 

export default function Recruitment() {
	const typingText = TypeAnimation(firstText)
	const typingSecondText = TypeAnimation(secondText)
    return (
        <TerminalWindow>
            <section id = "terminal">
                <TerminalPrompt path = "~"> <span className="typeWriteFirstText">{typingText}</span> </TerminalPrompt>
	    </section>
	    { typingText=='cd recruitment' ? (
		    <div>
                <TerminalPrompt path = "~/recruitment"> <span className="typeWriteSecondText"> {typingSecondText} </span></TerminalPrompt>
	    { typingSecondText=='./recruitment.exe -v 2022' ? (
		    <div>
            {eventsDetails.map(({number, name, link, details, id}, index) =>
                <section    
                    className = "terminal-text"
                    key = {index}
                    id = {id}
                >
                    <h1>
                        {number}: <LugLink link = {link}>{name}</LugLink>
                    </h1>
                    <span>{details}</span>
                </section>
            )}
		    </div>
	    ) : (
		    <div> </div>
	    ) }
		    </div>
	    ) : (
		    <div> </div>
	    ) }

        </TerminalWindow>
    );
}
