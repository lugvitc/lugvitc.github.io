import { useEffect, useState } from 'react';
import './showAfterTypewriter.css';

export default function ShowAfterTypewriter({ text, textContainer, children }) {
    const [typingText, setTypingText] = useState('');

    useEffect(() => {
        const nextTypingText = text.slice(0, typingText.length + 1);
        if (nextTypingText === typingText) return;

        const timeOut = setTimeout(() => {
            setTypingText(text.slice(0, typingText.length + 1));
        }, 250);
        return () => clearTimeout(timeOut);
    }, [text, typingText]);

    return typingText !== text ? (
        textContainer(<span className='typewriter-text'>{typingText}</span>)
    ) : (
        <>
            {textContainer(text)}
            {children}
        </>
    );
}
