import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TerminalPrompt from '../components/terminal/terminalPrompt';
import TerminalWindow from '../components/terminal/terminalWindow';
import LugLink from '../components/terminal/lugLink';
import { eventsDetails } from '../content/eventsDetails';
import '../components/typeWriter.css';
import {TypeAnimation} from '../components/typeWriter.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons'

export default function RecruitmentStepThree(props) {

	const next = (e) => {
		e.preventDefault();
		if(!values.flagCommand)
		{
			alert("Please fill out all Fields")
		}
		else {
			if(values.flagCommand=="whoami" || values.flagCommand=="Whoami")
			{
				alert("Hell yes! You're out of the herd! Welcome Linux");
				props.nextStep();
			}
			else {
				alert("You're close... Focus on who you are!!");
			}
		}
	}

	const back = (e) => {
		e.preventDefault();
	 	props.previousStep();
	}

	const values = props.values
	const handleChange = props.handleChange

	return (
        <TerminalWindow>
            <section id = "terminal">
                <TerminalPrompt path = "~"> cd recruitment </TerminalPrompt>
	    </section>
		    <div>
                <TerminalPrompt path = "~/recruitment"> ./recruitment.exe -v 2022 </TerminalPrompt>
		    <br/>
		    <h3 style={{color:'black',fontWeight:'bold'}}>Step 3 of 3:</h3>
		    <h1> A short Challenge for you :P </h1>
		    <br/>
		    <p>You were playing around the computers in the Networking Lab where you found the cool Linux Mint is used! Interesting... Just following your first instinct, you pulled open the terminal and pinged some random networking commands. Interestingly, you found it has access to the terminal of the administrator machine of the Lab! You are very excited and want to know whether you have root privileges on the administrator machine!<br/><br/>
		What command would you run in the remote terminal to see which user is currently logged in? Try it out below!</p>
		    <form>
		    <TerminalPrompt path = "~/administrator"> 
		    <input type="text" style={{backgroundColor: '#808080', color: '#EBCB8B'}} onChange={handleChange('flagCommand')} value={values.flagCommand} />
		    <button type="submit" style={{backgroundColor: "#5cb85c", color: "white"}} onClick={next}>
		    <FontAwesomeIcon icon={faAngleDoubleRight} />
		    </button>
		    </TerminalPrompt>

                    <br/><br/>
		    <button type="submit" style={{backgroundColor: "#5cb85c", color: "white"}} onClick={back}>
		    <FontAwesomeIcon icon={faAngleDoubleLeft} />
		    </button>
		    </form>
            	    </div>
	  
        </TerminalWindow>
    );

}
