// Edit this file to write your code
// which adds a registration page
// needed to add a new participant to the event.
import TerminalWindow from '../../../components/terminal/terminalWindow';
import { useState } from 'react';
import QRcode from './qrcode_chrome.png';

export default function Challenges() {
	const [formValues, setFormValues] = useState({
		name: '',
		regno: '',
		email: '',
		countryCode: '+91',
		contact: '',
		paymentID: '',
		groupName: '',
		meal: 'Non-veg'
	});

	const handleChange = input => e => {
		setFormValues({ ...formValues, [input]: e.target.value });
	};

	const submit = async e => {
		e.preventDefault();
		if (!formValues.name ||
		    !formValues.regno ||
		    !formValues.email ||
	            !formValues.countryCode ||
		    !formValues.contact ||
		    !formValues.paymentID ||
		    !formValues.groupName ||
		    !formValues.meal)
		{
			alert('Please fill out all the fields');
		}
		else
		{
			// Use flask backend here to 
			// submit all the data as a JSON object
			// to the hosted API.
			// fetch('https://backmagic.herokuapp.com/api/rescuethetux', { method: 'POST', headers: { Content-Type: 'application/json' }, body: JSON.stringify(formValues) });
			console.log(formValues);
		}
	};
	
	return (
		<TerminalWindow
		title="Join the team"
		prompts={[
			{ path: '~/rescue-the-tux', command: 'cd ./register' },
			{ path: '~/rescue-the-tux/register', command: 'sudo start register.service' }
		]}
		>
		<form className='lug-form' onSubmit={submit}>
		<div className='form-start'> Register here </div>
		
		<div className='form-field'>
		<label> Name: </label>
		<input
		    type = 'text'
		    maxLength = '128'
		    onChange = {handleChange('name')}
		    value = {formValues.name}
		    />
		</div>

		<div className='form-field'>
		<label> Registration Number (VIT): </label>
		<input
		    type = 'text'
		    maxLength = '9'
		    onChange = {handleChange('regno')}
		    value = {formValues.regno}
		    />
		</div>

		<div className='form-field'>
		<label> Email: </label>
		<input
		    type = 'email'
		    maxLength = '128'
		    onChange = {handleChange('email')}
		    value = {formValues.email}
		    />
		</div>

		<div className='form-field'>
		<label> Country Code: </label>
		<input
		    type = 'text'
		    maxLength = '128'
		    onChange = {handleChange('countryCode')}
		    value = {formValues.countryCode}
		    />
		</div>

		<div className='form-field'>
                    <label> Contact Number (WhatsApp): </label>
                    <input
                        type='tel'
                        onChange={handleChange('contact')}
                        value={formValues.contact}
                        pattern='[1-9]{1}[0-9]{9}'
                    />
                </div>


		<div className='form-field'>
		<label> Pay us here </label>
		<img src = {QRcode} height={500} width={500} style={{alignSelf: 'center'}} alt='payment_QR_code'/>
		</div>

		<div className='form-field'>
		<label> Payment ID: </label>
		<input
		    type = 'text'
		    maxLength = '128'
		    onChange = {handleChange('paymentID')}
		    value = {formValues.paymentID}
		    />
		</div>

		<div className='form-field'>
		<label> Group Name: </label>
		<input
		    type = 'text'
		    maxLength = '128'
		    onChange = {handleChange('groupName')}
		    value = {formValues.groupName}
		    />
		</div>
		
		<div className='form-field longlabel'>
		<label> Meal Preference </label>
		<select
		    id = 'meal'
		    value = {formValues.meal}
		    onChange = {handleChange('meal')}
		>
		<option value='Non-veg'>Non-veg</option>
		<option value='Veg'>Veg</option>
		</select>
		</div>
		
		<div className='form-end'>
		<button> Submit </button>
		</div>
		</form>

		<h1> Register here </h1>
		Just a registration form containing fields
		like name, reg.no., email, whatsapp no.,
		payment id, meal pref: veg/nveg.
		</TerminalWindow>
	);
}
