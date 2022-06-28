import { useEffect, useState } from 'react';
import './typeWriter.css';

export const TypeAnimation = textToType => {
    const [typingText, setTypingText] = useState('');
    useEffect(() => {
        const nextTypingText = textToType.slice(0, typingText.length + 1);
        if (nextTypingText === typingText) return;

        const timeOut = setTimeout(() => {
            setTypingText(textToType.slice(0, typingText.length + 1));
        }, 250);
        return () => clearTimeout(timeOut);
    }, [textToType, typingText]);

    return typingText;
};

