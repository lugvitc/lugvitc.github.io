import TerminalPrompt from '../terminalPrompt/terminalPrompt.js';
import ShowAfterTypewriter from '../showAfterTypewriter/showAfterTypwriter.js';

import styles from './terminal.module.css';
import util from '../../styles/util.module.css';
import TerminalDots from './terminalDots.js';

export default function TerminalWindow({
    prompts,
    children,
    onClickRed,
    onClickYellow,
    onClickGreen,
    title
}) {
    return (
        <div className={styles.index}>
            <div className={`${styles.titlebar} ${util.noSelection}`}>
                <TerminalDots
                    onClickRed={onClickRed}
                    onClickYellow={onClickYellow}
                    onClickGreen={onClickGreen}
                />
                <div className={styles.title}>{title}</div>
            </div>

            <div className={`${styles.body} ${util.terminalText}`}>
                {prompts ? (
                    prompts.reduceRight(
                        (acc, curr) => (
                            <ShowAfterTypewriter
                                textContainer={text => (
                                    <TerminalPrompt path={curr.path}>
                                        {text}
                                    </TerminalPrompt>
                                )}
                                text={curr.command}
                            >
                                {acc}
                            </ShowAfterTypewriter>
                        ),
                        <div className={styles.contents}>{children}</div>
                    )
                ) : (
                    <div className={`${styles.contents} ${styles.noPrompts}`}>
                        {children}
                    </div>
                )}
            </div>
        </div>
    );
}

