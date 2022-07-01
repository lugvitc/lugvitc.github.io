import TerminalWindow from '../../components/terminal/terminalWindow';

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
        <TerminalWindow title='Step 2'>
            <form className='lug-form'>
                <div className='form-start'>Step 2 of 3</div>
                <div className='form-textarea'>
                    <label>
                        How would you describe Linux as shortly as possible?{' '}
                    </label>
                    <textarea
                        rows='6'
                        onChange={handleChange('whatLinux')}
                        value={values.whatLinux}
                    />
                </div>
                <div className='form-textarea'>
                    <label> Why do you want to join the Linux Club? </label>
                    <textarea
                        rows='6'
                        onChange={handleChange('whyLinux')}
                        value={values.whyLinux}
                    />
                </div>
                <div className='form-textarea'>
                    <label>
                        Have you ever used any Linux distro? Whats your
                        favourite distro?{' '}
                    </label>
                    <textarea
                        rows='6'
                        onChange={handleChange('expLinux')}
                        value={values.expLinux}
                    />
                </div>
                <div className='form-field longlabel'>
                    <label htmlFor='dept'>
                        Which department interests you the most in the Club?
                        (You can change departments anytime later){' '}
                    </label>
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
                </div>
                <div className='form-end'>
                    <button
                        type='submit'
                        onClick={back}
                        className='form-nav-button prev'
                    >
                        <FontAwesomeIcon icon={faAngleDoubleLeft} />
                    </button>
                    <button
                        type='submit'
                        className='form-nav-button next'
                        onClick={next}
                    >
                        <FontAwesomeIcon icon={faAngleDoubleRight} />
                    </button>
                </div>
            </form>
        </TerminalWindow>
    );
}

