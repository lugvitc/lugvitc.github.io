import styles from './leaderboardCards.module.css';

export default function LeaderboardCards({ teams }) {
    teams = teams.sort((a, b) => b.currentPoints - a.currentPoints);

    return (
        <div className={styles.cards}>
            {teams.map((t, index) => (
                <div className={styles.card} key={t.name}>
                    <div className={styles.position}>{index + 1}</div>
                    <div className={styles.teamData}>
                        <div>
                            <div className={styles.name}>{t.name}</div>
                            <div className={styles.memberCount}>
                                {t.members} member{t.members === 1 ? '' : 's'}
                            </div>
                        </div>
                        <div>
                            <div className={styles.points}>
                                {t.currentPoints || 0}
                            </div>
                            <div>points</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
