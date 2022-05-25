import React, { Component } from 'react';
import RecruitmentStepOne from './recruitmentStep1';
import RecruitmentStepTwo from './recruitmentStep2';
export default class UserForm extends Component {
	state = {
		step: 1,
		name: '',
		regno: '',
		email: '',
		contact: '',
		whatLinux: '',
		whyLinux: '',
		expLinux: '',
		prefDept: 'tech'
	}

	//proceed to next step of form
	nextStep = () => {
		const { step } = this.state;
		this.setState({ step: step+1 });
	}

	//Go back to previous step of form
	previousStep = () => {
		const { step } = this.state;
		this.setState({ step: step-1 });
	}

	//Handle Fields Change
	handleChange = input => e => {
		this.setState({ [input]: e.target.value });
	}
	
	render() {
		const { step } = this.state;
		const { name, regno, email, contact, whatLinux, whyLinux, expLinux, prefDept } = this.state;
		const values = { name, regno, email, contact, whatLinux, whyLinux, expLinux, prefDept }

		switch(step) {
			case 1:
				return (
					<RecruitmentStepOne 
					nextStep = {this.nextStep}
					handleChange = {this.handleChange}
					values = {values}
					/>
				)
			case 2: 
				return (
					<RecruitmentStepTwo
					nextStep = {this.nextStep}
					handleChange = {this.handleChange}
					values = {values}
					previousStep = {this.previousStep}
					/>
				)
			case 3: 
				return (
					<h1> FormStepThree </h1>
				)
		}
	}
}


