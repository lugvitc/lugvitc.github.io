// which adds a registration page
// needed to add a new participant to the event.
import TerminalWindow from '../../../components/terminal/terminalWindow';
import { useState } from 'react';
import Success from './success';

export default function TeamRegistration( {nextStep, prevStep, loginTeamPage}) {
	const [step, setStep] = useState(1); 
        const [teamValues, setTeamValues] = useState({
		gname: '',
		regno1: '',
		regno2: '',
		regno3: '',
		pwd: ''
	});

	const handleChange = input => e => {
		setTeamValues({ ...teamValues, [input]: e.target.value });
	};

	const submit = async e => {
		e.preventDefault();
		if (!teamValues.gname ||
		    !teamValues.regno1 ||
		    !teamValues.pwd
		)
		{
			alert('Please fill out all the fields');
		}
		else
		{
			// Use flask backend here to 
			// submit all the data as a JSON object
			// to the hosted API.
			// fetch('https://backmagic.herokuapp.com/api/rescuethetux', { method: 'POST', headers: { Content-Type: 'application/json' }, body: JSON.stringify(formValues) });
			console.log(teamValues);
			// if backend result is success,
		        <Success 
			 nextStep = {nextStep}
			 prevStep = {prevStep}
			 loginTeamPage = {loginTeamPage}
			/>
			// if backend result is failure with duplicate regno,
		        // showFailureRegno();
			// if backend result is failure with duplicate payment,
			// showFailurePayment();
		}
	};

	return (
                <TerminalWindow
		title="Form your team"
		prompts={[
			{ path: '~/rescue-the-tux', command: 'cd ./team' },
			{ path: '~/rescue-the-tux/team', command: 'crunch teams.txt' }
		]}
		>
		<form className='lug-form' onSubmit={submit}>
		<div className='form-start'> Register here </div>
		
		<div className='form-field'>
		<label> * Group Name: </label>
		<input
		    type = 'text'
		    maxLength = '128'
		    onChange = {handleChange('gname')}
		    value = {teamValues.name}
		    />
		</div> 

		<div className='form-field'>
		<label> * Group Password: </label>
		<input
		    type = 'password'
		    maxLength = '16'
		    onChange = {handleChange('pwd')}
		    value = {teamValues.pwd}
		    />
		</div> 

	
		<div className='form-field'>
		<label> * Registration Number (Member 1): </label>
		<input
		    type = 'text'
		    maxLength = '9'
		    onChange = {handleChange('regno1')}
		    value = {teamValues.regno1}
		    />
		</div>

		<div className='form-field'>
		<label> Registration Number (Member 2): </label>
		<input
		    type = 'text'
		    maxLength = '9'
		    onChange = {handleChange('regno2')}
		    value = {teamValues.regno2}
		    />
		</div>

		<div className='form-field'>
		<label> Registration Number (Member 3): </label>
		<input
		    type = 'text'
		    maxLength = '9'
		    onChange = {handleChange('regno3')}
		    value = {teamValues.regno3}
		    />
		</div>	
		
		<div className='form-end'>
		<button type='submit' className='form-nav-button next'> Create </button>
		<button className='form-nav-button' onClick={prevStep}> Back </button>
		</div>
		</form>
	
		</TerminalWindow> 
	);
	};

