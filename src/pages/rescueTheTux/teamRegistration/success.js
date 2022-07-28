import TerminalWindow from '../../../components/terminal/terminalWindow';

export default function Success( {nextStep, prevStep, loginTeamPage} ) {
		
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
		     Dear, Thank you for joining the team to rescue our Tux! See you soon on 19th August! :)
	        </div>
		<div className='form-end'>
		<button className='form-nav-button next' onClick={loginTeamPage}> Login </button>
	        <button className='form-nav-button' onClick={prevStep}>Back </button>
		</div>
		</TerminalWindow>
	);
}
