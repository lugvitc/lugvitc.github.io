import React from 'react';
import LugLink from '../components/terminal/lugLink';
import TerminalPrompt from '../components/terminal/terminalPrompt';
import TerminalWindow from '../components/terminal/terminalWindow';
import { eventsDetails } from '../content/eventsDetails';
import '../components/typeWriter.css';
import {TypeAnimation} from '../components/typeWriter.js';

const firstText = 'cd events'
const secondText = 'cat events.txt' 

export default function Events() {
	const typingText = TypeAnimation(firstText)
	const typingSecondText = TypeAnimation(secondText)
    return (
        <TerminalWindow>
            <section id = "terminal">
                <TerminalPrompt path = "~"> <span className="typeWriteFirstText">{typingText}</span> </TerminalPrompt>
	    </section>
	    { typingText=='cd events' ? (
		    <div>
                <TerminalPrompt path = "~/events"> <span className="typeWriteSecondText"> {typingSecondText} </span></TerminalPrompt>
	    { typingSecondText=='cat events.txt' ? (
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
