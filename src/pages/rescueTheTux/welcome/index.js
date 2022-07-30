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
            <div className={styles.welcomeText}>Welcome to...</div>
            <div className={styles.eventName}>Rescue Tux</div>
            <div className={styles.subtitle}>...a one day event for learning linux basics and rescuing a beloved mascot!</div>

            <br />

            <iframe
                className={styles.video}
                width="100%"
                height="576"
                src='https://www.youtube.com/embed/H5HHULuYMDo'
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
            </iframe>

            <br />

            <div>
                Rescue Tux is a fun, one-day event with two sessions:
            </div>

            <ul>
                <li>The first, about learning basic linux skills.</li>
                <li>The second allows you to put your skills into action and solve exciting challenges and uncover a mystery.</li>
            </ul>

            <div>
                There is a cash prize for the winning teams, a catered lunch and participation certificates for all!
            </div>

            <br />
            <div className='form-end'>
                <button className='form-nav-button next' onClick={nextStep}> Register! </button>
            </div>

            {/*
            <div className={styles.big}>oh no!!!</div>
            <div className={styles.big}>Tux has suddenly gone missing!!!</div>
            <div>all we have is a mysterious video found in his home folder!</div>

            <br />
            
            <br />

            <div>We do not know what happened or who is behind this but he clearly wants us to find him.</div>

            <br />

            <div>Its up to you guys to step up to the challenge, learn the skills required to navigate the linux world and save everyone's favourite penguin</div>
            */}

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
        </TerminalWindow>
    );
}
