import TerminalWindow from '../../../components/terminal/terminalWindow';

export default function FailurePayment({formValues}) {
		
	return (
		<TerminalWindow
		title="Registration Failed !"
		prompts={[
			{ path: '~/rescue-the-tux', command: 'cd ./register' },
			{ path: '~/rescue-the-tux/register', command: 'sudo status registration.service' }
		]}
		>
		<div className='form-start'>[!] Registration Failed...</div>
		<div>
		     Dear {formValues.name}, Registration for the event failed because the given payment id: [{formValues.paymentID}] has already been registered. :(
	        </div>
		</TerminalWindow>
	);
}
