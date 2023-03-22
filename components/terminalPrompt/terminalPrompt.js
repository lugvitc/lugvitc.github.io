import styles from './terminalPrompt.module.css';
import util from '../../styles/util.module.css';

export default function TerminalPrompt({ path, children }) {
    return (
        <div className={styles.index}>
            <span className={`${styles.userSystem} ${util.hideBelow600}`}>
                lug@vitc:
            </span>
            <span className={`${styles.path} ${util.hideBelow600}`}>
                {path}${' '}
            </span>
            <span className={styles.command}>{children}</span>
        </div>
    );
}

