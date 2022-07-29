import TerminalWindow from '../../../components/terminal/terminalWindow';

export default function FailureGroup( {teamValues} ) {
		
	return (
		<TerminalWindow
		title="Registration Failed"
		prompts={[
			{ path: '~/rescue-the-tux', command: 'cd ./register' },
			{ path: '~/rescue-the-tux/register', command: 'sudo status registration.service' }
		]}
		>
		<div className='form-start'>Failed!...</div>
		<div>
		     Dear {teamValues.gname}, Unfortunately, you have selected a participant who is already in another group. Choose only participants who have not joined other groups yet.
	        </div>
		</TerminalWindow>
	);
}
