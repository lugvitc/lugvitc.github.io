import LugNavLink from '../lugLink/lugNavLink';

import styles from './prevNextSessionLinks.module.css';

export default function PrevNextSessionLinks({
    prevIndex,
    prevSession,
    nextIndex,
    nextSession
}) {
    return (
        <div className={styles.nextPrev}>
            {prevIndex !== null && (
                <div className={styles.prev}>
                    Prev:{' '}
                    <LugNavLink link={`/learn-linux?session=${prevIndex}`}>
                        {prevSession.title}
                    </LugNavLink>
                </div>
            )}
            {nextIndex !== null && (
                <div className={styles.next}>
                    Next:{' '}
                    <LugNavLink link={`/learn-linux?session=${nextIndex}`}>
                        {nextSession.title}
                    </LugNavLink>
                </div>
            )}
        </div>
    );
}
