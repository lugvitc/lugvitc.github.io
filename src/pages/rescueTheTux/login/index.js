// Edit this file to write your code
// which adds a login page for the 
// participant to login to the 
// competition on the event day
import { useState } from 'react';
import TerminalWindow from '../../../components/terminal/terminalWindow';

export default function Login( {nextStep, prevStep, challengesPage} ) {
        const [loginValues, setLoginValues] = useState({
		gname: '',
		pwd: ''
	});

	const handleChange = input => e => {
		setLoginValues({ ...loginValues, [input]: e.target.value });
	};

	const submit = async e => {
		e.preventDefault();
		if (!loginValues.gname ||
		    !loginValues.pwd)
		{
			alert('Please fill out all the fields');
		}
		else
		{
			// Use flask backend here to 
			// submit all the data as a JSON object
			// to the hosted API.
			// fetch('https://backmagic.herokuapp.com/api/rescuethetux', { method: 'POST', headers: { Content-Type: 'application/json' }, body: JSON.stringify(formValues) });
			console.log(loginValues);
			challengesPage();
			// if backend result is success,
			// showSuccess();
			// if backend result is failure with duplicate regno,
		        // showFailureRegno();
			// if backend result is failure with duplicate payment,
			// showFailurePayment();
		}
	};


	return (
		<TerminalWindow 
		title="Start the Competition"
		prompts={[
			{ path: '~/rescue-the-tux', command: 'cd login'},
			{ path: '~/rescue-the-tux/login', command: './start'}]}>
		<h1> Login Page </h1>
		<form className='lug-form' onSubmit={submit}>
		<div className='form-start'> Login </div>

		<div className='form-field'>
		<label> Group Name: </label>
		<input
		    type = 'text'
		    maxLength = '128'
		    onChange = {handleChange('gname')}
		    value = {loginValues.gname}
		    />
		</div>

		<div className='form-field'>
		<label> Group Password: </label>
		<input
		    type = 'password'
		    maxLength = '16'
		    onChange = {handleChange('pwd')}
		    value = {loginValues.pwd}
		    />
		</div>

		<div className='form-end'>
		<button type='submit' className='form-nav-button'> Login </button>
		</div>
		</form>
		</TerminalWindow>
	);
}
