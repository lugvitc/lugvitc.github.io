import { useEffect, useState } from 'react';

import TerminalWindow from '../../../components/terminal/terminalWindow';
import useFetch from '../../../hooks/useFetch';
import Card from '../components/Card/Card';

import styles from './play.module.css';

export default function Play() {
    const [challenges, setChallenges] = useState(null);

    const { apiAsTeam } = useFetch();

    const fetchChallenges = async () => {
        const res = await apiAsTeam('/rt22/challenges');
        const data = await res.json();
        console.log(data);
        setChallenges(data.challenges);
    };

    useEffect(() => {
        fetchChallenges();
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
                    <>loading ...</>
                )}
            </section>
        </TerminalWindow>
    );
}

