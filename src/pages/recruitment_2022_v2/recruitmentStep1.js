import TerminalWindow from '../../components/terminal/terminalWindow';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

export default function RecruitmentStepOne({ values, nextStep, handleChange }) {
    const submit = e => {
        e.preventDefault();
        if (!values.name || !values.regno || !values.email || !values.contact) {
            alert('Please fill out all Fields');
        } else {
            nextStep();
        }
    };

    return (
        <TerminalWindow title='Step 1'>
            <form className='lug-form' onSubmit={submit}>
                <div className='form-start'>Step 1 of 3</div>
                <div className='form-field'>
                    <label> Name: </label>
                    <input
                        maxLength='128'
                        type='text'
                        onChange={handleChange('name')}
                        value={values.name}
                    />
                </div>
                <div className='form-field'>
                    <label> Registration Number (VIT): </label>
                    <input
                        type='text'
                        maxLength='9'
                        onChange={handleChange('regno')}
                        value={values.regno}
                    />
                </div>
                <div className='form-field'>
                    <label> Email Address (VIT): </label>
                    <input
                        maxLength='128'
                        type='email'
                        onChange={handleChange('email')}
                        value={values.email}
                    />
                </div>
                <div className='form-field'>
                    <label> Contact Number (Whatsapp): </label>
                    <input
                        type='tel'
                        onChange={handleChange('contact')}
                        value={values.contact}
                        pattern='[1-9]{1}[0-9]{9}'
                    />
                </div>
                <div className='form-field'></div>
                <div className='form-end'>
                    <button type='submit' className='form-nav-button next'>
                        <FontAwesomeIcon icon={faAngleDoubleRight} />
                    </button>
                </div>
            </form>
        </TerminalWindow>
    );
}

