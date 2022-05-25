import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TerminalPrompt from '../components/terminal/terminalPrompt';
import TerminalWindow from '../components/terminal/terminalWindow';
import LugLink from '../components/terminal/lugLink';
import { eventsDetails } from '../content/eventsDetails';
import '../components/typeWriter.css';
import {TypeAnimation} from '../components/typeWriter.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Success(props) {
	
	return (
        <TerminalWindow>
            <section id = "terminal">
                <TerminalPrompt path = "~"> cd recruitment </TerminalPrompt>
	    </section>
		    <div>
                <TerminalPrompt path = "~/recruitment"> ./recruitment.exe -v 2022 </TerminalPrompt>
		    <br/>
		    <h2 style={{color:'green',fontWeight:'bold'}}>Success...!</h2>
			<p>Thank you for onboarding with the Linux Club! We will contact you soon to get you all started with :)</p>
		    </div>
        </TerminalWindow>
    );

}
