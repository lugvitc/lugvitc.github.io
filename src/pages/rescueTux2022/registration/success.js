import TerminalWindow from '../../../components/terminal/terminalWindow';

export default function Success( {formValues, nextStep, prevStep, createTeamPage, loginTeamPage} ) {
		
	return (
		<TerminalWindow
		title="Registration Successful"
		prompts={[
			{ path: '~/rescue-the-tux', command: 'cd ./register' },
			{ path: '~/rescue-the-tux/register', command: 'sudo status registration.service' }
		]}
		>
		<div className='form-start'>Success!...</div>
		<div>
		     Dear {formValues.name}, Thank you for joining the team to rescue our Tux! See you soon on 19th August! :)
	        </div>
		<div className='form-end'>
		<button className='form-nav-button next' onClick={createTeamPage}> Create your team </button>
	        <button className='form-nav-button' onClick={loginTeamPage}>Login </button>
		</div>
		</TerminalWindow>
	);
}
