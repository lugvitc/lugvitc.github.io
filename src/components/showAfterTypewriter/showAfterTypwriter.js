import { useEffect, useState } from 'react';
import useSettings from '../../hooks/useSettings';

import styles from './showAfterTypewriter.module.css';

export default function ShowAfterTypewriter({ text, textContainer, children }) {
    const [typingText, setTypingText] = useState('');
    const { animationsOn } = useSettings();

    useEffect(() => {
        if (animationsOn) {
            const nextTypingText = text.slice(0, typingText.length + 1);
            if (nextTypingText === typingText) return;

            const timeOut = setTimeout(() => {
                setTypingText(text.slice(0, typingText.length + 1));
            }, 100);
            return () => clearTimeout(timeOut);
        }
    }, [text, typingText, animationsOn]);

    if (animationsOn && typingText !== text)
        return textContainer(<span className={styles.text}>{typingText}</span>);
    else
        return (
            <>
                {textContainer(text)}
                {children}
            </>
        );
}

