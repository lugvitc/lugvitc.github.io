import React from 'react';
import { Colors } from '../../styles/colors.js';
import './terminal.css';
import TerminalPrompt from './terminalPrompt.js';
import './terminalText.css';
import ShowAfterTypewriter from '../showAfterTypwriter.js';

export default function TerminalWindow({ prompts, children }) {
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
                    children
                )}
            </div>
        </div>
    );
}

