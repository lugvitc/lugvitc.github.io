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
		     Dear {teamValues.gname}, Unfortunately, the group name is already taken. Please create the group with another name.
	        </div>
		</TerminalWindow>
	);
}
