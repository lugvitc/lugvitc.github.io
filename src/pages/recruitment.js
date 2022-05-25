import React from 'react';
import TerminalPrompt from '../components/terminal/terminalPrompt';
import TerminalWindow from '../components/terminal/terminalWindow';
import LugLink from '../components/terminal/lugLink';
import { eventsDetails } from '../content/eventsDetails';
import '../components/typeWriter.css';
import {TypeAnimation} from '../components/typeWriter.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

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
		    <br/>
		    <form>
		    <label> Name: </label><br/>
		    <input type="text" style={{backgroundColor: '#808080'}}/>
		    <br/>
		    <label> Registration Number (VIT): </label><br/>
		    <input type="text" style={{backgroundColor: '#808080'}}/>
		    <br/>
		    <label> Email : </label><br/>
		    <input type="email" style={{backgroundColor: '#808080'}}/>
		    <br/>
		    <button style={{backgroundColor: "#5cb85c", color: "white"}}>
		    <FontAwesomeIcon icon={faAngleDoubleRight} />
		    </button>
		    </form>
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
