import TerminalPrompt from '../../components/terminal/terminalPrompt';
import TerminalWindow from '../../components/terminal/terminalWindow';
import '../components/typeWriter.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

export default function RecruitmentStepThree({
    nextStep,
    handleChange,
    values,
    previousStep
}) {
    const next = e => {
        e.preventDefault();
        if (!values.flagCommand) {
            alert('Please fill out all Fields');
        } else {
            if (
                values.flagCommand === 'whoami' ||
                values.flagCommand === 'Whoami' ||
                values.flagCommand === 'who' ||
                values.flagCommand === 'Who' ||
                values.flagCommand === 'users' ||
                values.flagCommand === 'Users' ||
                values.flagCommand === 'w' ||
                values.flagCommand === 'W'
            ) {
                alert("Hell yes! You're out of the herd! Welcome Linux");
                nextStep();
            } else {
                alert("You're close... Focus on who you are!!");
            }
        }
    };

    const back = e => {
        e.preventDefault();
        previousStep();
    };

    return (
        <TerminalWindow>
            <form className='lug-form'>
                <div className='form-start'>Step 3 of 3</div>
                <div>
                    <div>
                        You were playing around the computers in the Networking
                        Lab where you found the cool Linux Mint is used!
                        Interesting... Just following your first instinct, you
                        pulled open the terminal and pinged some random
                        networking commands. Interestingly, you found it has
                        access to the terminal of the administrator machine of
                        the Lab! You are very excited and want to know whether
                        you have root privileges on the administrator machine!
                        <br />
                        <br />
                        What command would you run in the remote terminal to see
                        which user is currently logged in? Try it out below!
                    </div>
                </div>
                <div>
                    <label>
                        <TerminalPrompt path='~/administrator' />
                    </label>
                    {'  '}
                    <input
                        type='text'
                        onChange={handleChange('flagCommand')}
                        value={values.flagCommand}
                    />
                    <button
                        type='submit'
                        onClick={next}
                        hidden='hidden'
                    ></button>
                </div>
                <div className='form-end'>
                    <button
                        className='form-nav-button prev'
                        type='submit'
                        onClick={back}
                    >
                        <FontAwesomeIcon icon={faAngleDoubleLeft} />
                    </button>
                    <button
                        className='form-nav-button next'
                        type='submit'
                        onClick={next}
                    >
                        <FontAwesomeIcon icon={faAngleDoubleRight} />
                    </button>
                </div>
            </form>
        </TerminalWindow>
    );
}

