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

export default function Confirm(props) {

	const next = async (e) => {
		e.preventDefault();
		// USE FLASK BACKEND HERE TO COLLECT ALL DATA
		const formData = props.values
		const result = await fetch('https://backmagic.herokuapp.com/api/recruitment', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(formData)
		})
		//console.log(formData)
		//console.log(result)
		props.nextStep();
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
		    <h3 style={{color:'black',fontWeight:'bold'}}>Confirm your Details...</h3>
		    <br/>
		    <ol>
		        <li>Name : {values.name}</li>
		        <li>Registration Number : {values.regno}</li>
			<li>Email : {values.email}</li>
			<li>Contact Number : {values.contact}</li>
			<li>How would you describe Linux as shortly as possible : <p>{values.whatLinux}</p></li>
		        <li>Why do you want to join the Linux Club : <p>{values.whyLinux}</p></li>
			<li>Have you ever used any Linux distro? Whats your favourite distro? : <p>{values.expLinux}</p></li>
			<li>Which Department interests you the most? : {values.prefDept}</li>
		    </ol>
		    <br/><br/>
		    <button type="submit" style={{backgroundColor: "#5cb85c", color: "white"}} onClick={back}>
		    <FontAwesomeIcon icon={faAngleDoubleLeft} />
		    </button>
                 
		    <button type="submit" style={{backgroundColor: "#5cb85c", color: "white"}} onClick={next}>
		    <FontAwesomeIcon icon={faAngleDoubleRight} />
		    </button>
		
            	    </div>
	  
        </TerminalWindow>
    );

}
