import useSettings from '../../hooks/useSettings.js';
import { Colors } from '../../styles/colors.js';

import styles from './terminal.module.css';

export default function TerminalDots({
    onClickRed,
    onClickYellow,
    onClickGreen
}) {
    const { terminalDotsOnLeft } = useSettings();

    return (
        <div
            className={`${styles.dots} ${
                terminalDotsOnLeft ? styles.left : styles.right
            }`}
        >
            <div
                className={styles.dot}
                style={{
                    backgroundColor: Colors.nord11,
                    cursor: onClickRed ? 'pointer' : 'auto'
                }}
                onClick={onClickRed}
            />
            <div
                className={styles.dot}
                style={{
                    backgroundColor: Colors.nord13,
                    cursor: onClickYellow ? 'pointer' : 'auto'
                }}
                onClick={onClickYellow}
            />
            <div
                className={styles.dot}
                style={{
                    backgroundColor: Colors.nord14,
                    cursor: onClickGreen ? 'pointer' : 'auto'
                }}
                onClick={onClickGreen}
            />
        </div>
    );
}

