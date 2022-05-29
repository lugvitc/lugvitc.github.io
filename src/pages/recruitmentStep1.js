import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TerminalPrompt from '../components/terminal/terminalPrompt';
import TerminalWindow from '../components/terminal/terminalWindow';
import LugLink from '../components/terminal/lugLink';
import { eventsDetails } from '../content/eventsDetails';
import '../components/typeWriter.css';
import { TypeAnimation } from '../components/typeWriter.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

export default function RecruitmentStepOne(props) {
    const submit = e => {
        e.preventDefault();
        if (!values.name || !values.regno || !values.email || !values.contact) {
            alert('Please fill out all Fields');
        } else {
            props.nextStep();
        }
    };

    const values = props.values;
    const handleChange = props.handleChange;

    return (
        <TerminalWindow>
            <section id='terminal'>
                <TerminalPrompt path='~'> cd recruitment </TerminalPrompt>
            </section>
            <TerminalPrompt path='~/recruitment'>
                {' '}
                ./recruitment.exe -v 2022{' '}
            </TerminalPrompt>
            <br />
            <p>
                {' '}
                Hey there! The Linux Club Recruitments are here! Are you crazy
                about Linux? Do you get excited by the command line? Are you a
                beginner looking for exploring Linux? Open Source?
                Cybersecurity? We have it all! Join the coolest club out of the
                herd to discuss, share and lead all our ideas to Success! We
                hope you find our will equal to yours :D{' '}
            </p>
            <h3 style={{ color: 'black', fontWeight: 'bold' }}>Step 1 of 3</h3>
            <form onSubmit={submit}>
                <label> Name: </label>
                <br />
                <input
                    maxLength='128'
                    type='text'
                    style={{ backgroundColor: '#808080' }}
                    onChange={handleChange('name')}
                    value={values.name}
                />
                <br />
                <label> Registration Number (VIT): </label>
                <br />
                <input
                    type='text'
                    maxLength='9'
                    style={{ backgroundColor: '#808080' }}
                    onChange={handleChange('regno')}
                    value={values.regno}
                />
                <br />
                <label> Email : </label>
                <br />
                <input
                    maxLength='128'
                    type='email'
                    style={{ backgroundColor: '#808080' }}
                    onChange={handleChange('email')}
                    value={values.email}
                />
                <br />
                <label> Contact Number (Whatsapp): </label>
                <br />
                <input
                    type='tel'
                    style={{ backgroundColor: '#808080' }}
                    onChange={handleChange('contact')}
                    value={values.contact}
                    pattern='[1-9]{1}[0-9]{9}'
                />
                <br />
                <br />
                <button
                    type='submit'
                    style={{ backgroundColor: '#5cb85c', color: 'white' }}
                >
                    <FontAwesomeIcon icon={faAngleDoubleRight} />
                </button>
            </form>
        </TerminalWindow>
    );
}

