// which adds a registration page
// needed to add a new participant to the event.
import TerminalWindow from '../../../components/terminal/terminalWindow';
import { useState } from 'react';
import Success from './success';
import FailureGroup from './failureGroup';
import GroupForm from './groupForm';
import FailureDuplicate from './failureDuplicate';

export default function TeamRegistration( {nextStep, prevStep, loginTeamPage}) {
	const [step, setStep] = useState(2); 
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

	const showSuccess = () => {
		setStep(3);
	};

	const showFailureGroupName = () => {
		setStep(1);
	};

	const showFailureParticipantDuplicate = () => {
		setStep(0);
	};
	
	switch (step) {
		case 2:
			return (
				<GroupForm
				teamValues = {teamValues}
			        showSuccess = {showSuccess}
				handleChange = {handleChange}
				showFailureGroupName = {showFailureGroupName}
				showFailureParticipantDuplicate = {showFailureParticipantDuplicate}
				/>
			);
		case 3:
			return (
				<Success
				 teamValues = {teamValues}
				 loginTeamPage = {loginTeamPage}
				/>
			);
		case 1:
			return (
				<FailureGroup 
				 teamValues = {teamValues}
				/>
			);
		case 0:
			return (
				<FailureDuplicate
				 teamValues = {teamValues}
				/>
			);
	}
}
