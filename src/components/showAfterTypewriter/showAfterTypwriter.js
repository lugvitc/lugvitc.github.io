import { useEffect, useState } from 'react';

import './showAfterTypewriter.css';

export default function ShowAfterTypewriter({ text, textContainer, children }) {
    const [typingText, setTypingText] = useState('');
    const showAnimations =
        window.localStorage.getItem('show-animations') === 'true';

    useEffect(() => {
        if (showAnimations) {
            const nextTypingText = text.slice(0, typingText.length + 1);
            if (nextTypingText === typingText) return;

            const timeOut = setTimeout(() => {
                setTypingText(text.slice(0, typingText.length + 1));
            }, 250);
            return () => clearTimeout(timeOut);
        }
    }, [text, typingText, showAnimations]);

    if (showAnimations && typingText !== text)
        return textContainer(
            <span className='typewriter-text'>{typingText}</span>
        );
    else
        return (
            <>
                {textContainer(text)}
                {children}
            </>
        );
}

