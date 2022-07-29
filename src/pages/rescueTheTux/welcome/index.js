import TerminalWindow from '../../../components/terminal/terminalWindow';

export default function WelcomeText( {nextStep, prevStep} ) {
	// Write an innovative welcome message
	// for the event. The message should
	// describe the event and show the 
	// scenario of Tux Capture.

	return (
		<TerminalWindow
                title='Rescue the Tux'
		prompts={[
			{ path: '~', command: 'cd rescue-the-tux' },
			{ path: '~/rescue-the-tux', command: './rescue-the-tux --play',
			},
		]}
		>
		<h1> Welcome Participant </h1>
		Oh no, Bill Gates has kidnapped our lovely Tux. His mission is to bring Apocalypse 
		to the Technical World by wiping out the existence of Tux and thus, blowing away 
		all the services which run upon the Linux kernel. This means the end to Google, 
		Meta, Twitter and ... the internet?
		<br />
		We have to hurry, we have to rescue the Tux. Are you joining the team? Our lovely 
		Tux has also left some clues on his way diving into the linux kernel. Start with 
		Challenge 1.
		<br />
		<br />
		<h1> General Trivia </h1>
		<ol>
		    <li> One-day event </li>
		    <li> Linux learning </li>
		    <li> Linux-themed CTF </li>
		    <li> Free lunch and OD for participants </li>
		    <li> Cash Prize for winners </li>
		    <li> Everything done from scratch </li>
		</ol>

		<div className='form-end'>
		<button className='form-nav-button next' onClick={nextStep}> Register! </button>
		</div>
		</TerminalWindow>
	);
}
