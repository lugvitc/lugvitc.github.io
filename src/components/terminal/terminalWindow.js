import { useCallback, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import TerminalPrompt from './terminalPrompt.js';
import ShowAfterTypewriter from '../showAfterTypewriter/showAfterTypwriter.js';

import { Colors } from '../../styles/colors.js';
import './terminal.css';
import './terminalText.css';

export default function TerminalWindow({ prompts, children }) {
    const location = useLocation();

    const ref = useCallback(node => {
        if (node) {
            console.log(location.pathname);
            window.localStorage.setItem(
                location.pathname,
                new Date().toISOString()
            );
        }
    }, []);

    return (
        <div className='terminal'>
            <div className='terminal-dots'>
                <div
                    className='terminal-dot'
                    style={{ backgroundColor: Colors.nord11 }}
                />
                <div
                    className='terminal-dot'
                    style={{ backgroundColor: Colors.nord13 }}
                />
                <div
                    className='terminal-dot'
                    style={{ backgroundColor: Colors.nord14 }}
                />
            </div>
            <div className='terminal-contents terminal-text'>
                {prompts.reduceRight(
                    (acc, curr) => (
                        <ShowAfterTypewriter
                            textContainer={text => (
                                <TerminalPrompt path={curr.path}>
                                    {text}
                                </TerminalPrompt>
                            )}
                            text={curr.contents}
                        >
                            {acc}
                        </ShowAfterTypewriter>
                    ),
                    <div ref={ref}>{children}</div>
                )}
            </div>
        </div>
    );
}

