// Edit this file to write your code
// which adds a registration page
// needed to add a new participant to the event.
import TerminalWindow from '../../../components/terminal/terminalWindow';
import { useState } from 'react';
import QRcode from './qrcode_chrome.png';
import UserForm from './userForm';
import Success from './success';
import FailureRegno from './failureRegno';
import FailurePayment from './failurePayment';

export default function Registration( {nextStep, prevStep, createTeamPage, loginTeamPage} ) {
	const [step, setStep] = useState(2); 
        const [formValues, setFormValues] = useState({
		name: '',
		regno: '',
		email: '',
		countryCode: '+91',
		contact: '',
		paymentID: '',
		meal: 'Non-veg'
	});

	const handleChange = input => e => {
		setFormValues({ ...formValues, [input]: e.target.value });
	};
	
	// if registration is successful
	// set step = 3 and show the
	// success page
	const showSuccess = () => {
		setStep(3);
	};

	// if registration is failed
	// due to same Person Registering again
	// show the failure page with msg
	const showFailureRegno = () => {
		setStep(1);
	};

	// if registration is failed
	// due to same Payment ID being reused
	// show the failure page with msg
	const showFailurePayment = () => {
		setStep(0);
	};

	switch (step) {
		case 2:
			return (
				<UserForm 
				   showSuccess = {showSuccess}
				   showFailureRegno = {showFailureRegno}
				   showFailurePayment = {showFailurePayment}
				   handleChange = {handleChange}
				   formValues = {formValues}
				/>
			);
		case 3:
			return (
				<Success
				   formValues = {formValues}
				   nextStep = {nextStep}
				   prevStep = {prevStep}
				   createTeamPage = {createTeamPage}
				   loginTeamPage = {loginTeamPage}
				/>
			);
		case 1:
			return (
				<FailureRegno
				   formValues = {formValues}
				/>
			);
		case 0:
			return (
				<FailurePayment
				   formValues = {formValues}
				/>
			);
	}
};
