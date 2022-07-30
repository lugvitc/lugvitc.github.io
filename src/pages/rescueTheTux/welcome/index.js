import TerminalWindow from '../../../components/terminal/terminalWindow';
import styles from './welcome.module.css';

export default function WelcomeText({ nextStep, prevStep }) {
    // Write an innovative welcome message
    // for the event. The message should
    // describe the event and show the 
    // scenario of Tux Capture.

    return (
        <TerminalWindow
            title='Rescue Tux'
            prompts={[
                { path: '~', command: 'cd rescue-tux' },
                {
                    path: '~/rescue-tux', command: './rescue-tux --play',
                },
            ]}
        >
            <div className={styles.welcomeText}>welcome to...</div>
            <div className={styles.eventName}>Rescue Tux</div>
            <div className={styles.subtitle}>...a one day event for learning linux basics and rescuing a beloved mascot!</div>

            <br />
            <br />

            <div className={styles.big}>oh no!!!</div>
            <div className={styles.big}>Tux has suddenly gone missing!!!</div>
            <div>all we have is a mysterious video found in his home folder!</div>

            <br />
            <div className={styles.placeholderForVideo} />
            <br />

            <div>We do not know what happened or who is behind this but he clearly wants us to find him.</div>

            <br />

            <div>Its up to you guys to step up to the challenge, learn the skills required to navigate the linux world and save everyone's favourite penguin</div>

            {/* <h1> Welcome Participant </h1>
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
            </ol> */}

            <div className='form-end'>
                <button className='form-nav-button next' onClick={nextStep}> Register! </button>
            </div>
        </TerminalWindow>
    );
}
