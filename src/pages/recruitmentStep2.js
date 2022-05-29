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
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

export default function RecruitmentStepTwo({
    values,
    handleChange,
    nextStep,
    previousStep
}) {
    const next = e => {
        e.preventDefault();
        if (
            !values.whatLinux ||
            !values.whyLinux ||
            !values.expLinux ||
            !values.prefDept
        ) {
            alert('Please fill out all Fields');
        } else {
            nextStep();
        }
    };

    const back = e => {
        e.preventDefault();
        previousStep();
    };

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
                <h3 style={{ color: 'black', fontWeight: 'bold' }}>
                    Step 2 of 3
                </h3>
                <form>
                    <label>
                        {' '}
                        How would you describe Linux as shortly as possible?{' '}
                    </label>
                    <br />
                    <textarea
                        style={{ backgroundColor: '#808080', width: '80%' }}
                        rows='6'
                        onChange={handleChange('whatLinux')}
                        value={values.whatLinux}
                    />
                    <br />
                    <label> Why do you want to join the Linux Club? </label>
                    <br />
                    <textarea
                        style={{ backgroundColor: '#808080', width: '80%' }}
                        rows='6'
                        onChange={handleChange('whyLinux')}
                        value={values.whyLinux}
                    />
                    <br />
                    <label>
                        {' '}
                        Have you ever used any Linux distro? Whats your
                        favourite distro?{' '}
                    </label>
                    <br />
                    <textarea
                        style={{ backgroundColor: '#808080', width: '80%' }}
                        rows='6'
                        onChange={handleChange('expLinux')}
                        value={values.expLinux}
                    />
                    <br />
                    <label htmlFor='dept'>
                        {' '}
                        Which department interests you the most in the Club?
                        (You can change departments anytime later){' '}
                    </label>
                    <br />
                    <select
                        name='dept'
                        id='dept'
                        value={values.prefDept}
                        onChange={handleChange('prefDept')}
                    >
                        <option value='Technical Department'>
                            Technical Department
                        </option>
                        <option value='Management Department'>
                            Management Department
                        </option>
                        <option value='Operations/Media Department'>
                            Operations/Media Department
                        </option>
                    </select>

                    <br />
                    <br />
                    <button
                        type='submit'
                        style={{ backgroundColor: '#5cb85c', color: 'white' }}
                        onClick={back}
                    >
                        <FontAwesomeIcon icon={faAngleDoubleLeft} />
                    </button>

                    <button
                        type='submit'
                        style={{ backgroundColor: '#5cb85c', color: 'white' }}
                        onClick={next}
                    >
                        <FontAwesomeIcon icon={faAngleDoubleRight} />
                    </button>
                </form>
            </div>
        </TerminalWindow>
    );
}

