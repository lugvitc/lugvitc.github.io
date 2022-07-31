import { NavLink } from 'react-router-dom';
import TerminalWindow from '../../../components/terminal/terminalWindow';
import styles from './homePage.module.css';

export default function HomePage() {
    return (
        <TerminalWindow
            title='Rescue Tux'
            prompts={[
                { path: '~', command: 'cd rescue-tux' },
                {
                    path: '~/rescue-tux',
                    command: './rescue-tux --play'
                }
            ]}
        >
            <div className={styles.welcomeText}>Welcome to...</div>
            <div className={styles.eventName}>Rescue Tux</div>
            <div className={styles.subtitle}>
                ...a one day event for learning linux basics and rescuing a
                beloved mascot!
            </div>

            <br />

            <iframe
                className={styles.video}
                width='100%'
                height='576'
                src='https://www.youtube.com/embed/H5HHULuYMDo'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
            ></iframe>

            <br />

            <div>Rescue Tux is a fun, one-day event with two sessions:</div>

            <ul>
                <li>The first, about learning basic linux skills.</li>
                <li>
                    The second allows you to put your skills into action and
                    solve exciting challenges and uncover a mystery.
                </li>
            </ul>

            <div>
                There is a cash prize for the winning teams, a catered lunch and
                participation certificates for all!
            </div>

            <br />
            <div>
                <NavLink to='/rescue-tux/register'>Register</NavLink>
                <NavLink to='/rescue-tux/login'>Login</NavLink>
            </div>
        </TerminalWindow>
    );
}

