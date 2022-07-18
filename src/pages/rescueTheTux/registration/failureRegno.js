import TerminalWindow from '../../../components/terminal/terminalWindow';

export default function FailureRegno({formValues}) {
		
	return (
		<TerminalWindow
		title="Registration Failed!"
		prompts={[
			{ path: '~/rescue-the-tux', command: 'cd ./register' },
			{ path: '~/rescue-the-tux/register', command: 'sudo status registration.service' }
		]}
		>
		<div className='form-start'>[!] Registration Failed</div>
		<div>
		     Dear {formValues.name}, Registration process for the event failed because the VIT Registration Number: [{formValues.regno}] has already registered! :(
	        </div>
		</TerminalWindow>
	);
}
