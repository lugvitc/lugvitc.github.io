import TerminalWindow from '../../components/terminal/terminalWindow';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import useFetch from '../../hooks/useFetch';

export default function Confirm({ nextStep, values, previousStep }) {
    const { apiPost } = useFetch();
    const next = async e => {
        e.preventDefault();
        // USE FLASK BACKEND HERE TO COLLECT ALL DATA
        let formData = values;
        delete formData['flagCommand'];
        const success = (await apiPost('/recruitment', formData)).status === 201;
        console.log(formData)
        //console.log(result)
        if(success)
            nextStep();
        else alert("Error occured. Submission failed.");
    };

    const back = e => {
        e.preventDefault();
        previousStep();
    };

    return (
        <TerminalWindow title='Confirm Submission'>
            <div className='lug-form'>
                <div className='form-start'>Confirm your Details...</div>
                <div className='form-field'>Name : {values.name}</div>
                <div className='form-field'>
                    Registration Number : {values.regno}
                </div>
                <div className='form-field'>Email : {values.email}</div>
                <div className='form-field'>
                    Contact Number : {values.contact}
                </div>
                <div className='form-field'>
                    Why do you want to join the Linux Club :{' '}
                    <p>{values.whyLinux}</p>
                </div>
                <div className='form-field'>
                    Have you ever used any Linux distro? Whats your favourite
                    distro? : <p>{values.expLinux}</p>
                </div>
                <div className='form-field'>
                    Department Preference 1 : {values.prefDept}
                </div>
	        <div className='form-field'>
                    Department Preference 2 : {values.prefDept2}
                </div>

                <div className='form-end'>
                    <button className='form-nav-button prev' onClick={back}>
                        <FontAwesomeIcon icon={faAngleDoubleLeft} />
                    </button>
                    <button className='form-nav-button prev' onClick={next}>
                        <FontAwesomeIcon icon={faAngleDoubleRight} />
                    </button>
                </div>
            </div>
        </TerminalWindow>
    );
}

