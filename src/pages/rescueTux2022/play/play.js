import { useEffect, useState } from 'react';

import TerminalWindow from '../../../components/terminal/terminalWindow';
import Card from '../components/Card/Card';

import styles from './play.module.css';

export default function Play() {
    const [challenges, setChallenges] = useState(null);
    const tempChallenges = [
        {
            id: 1,
            name: 'A hidden secret',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            points: 5
        },
        {
            id: 2,
            name: 'Secrets Galore',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            points: 5
        },
        {
            id: 3,
            name: 'Where is it?',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            points: 5
        }
    ];

    useEffect(() => {
        setChallenges(tempChallenges);
    }, []);

    return (
        <TerminalWindow
            title='Play'
            prompts={[{ path: '~/rescue-tux', command: './rescue-tux --play' }]}
        >
            <section id='team'>
                <h2>Your Team</h2>
            </section>
            <section id='challenges'>
                {challenges ? (
                    <>
                        <h2>Challenges</h2>
                        <div className={styles.challenges}>
                            {challenges.map(c => (
                                <Card key={c.id} challenge={c} />
                            ))}
                        </div>
                    </>
                ) : (
                    <>Connection Error :(</>
                )}
            </section>
        </TerminalWindow>
    );
}
