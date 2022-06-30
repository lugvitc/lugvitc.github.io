// import { useCallback, useRef } from 'react';
// import { useLocation } from 'react-router-dom';

import TerminalPrompt from './terminalPrompt.js';
import ShowAfterTypewriter from '../showAfterTypewriter/showAfterTypwriter.js';

import './terminal.css';
import TerminalDots from './terminalDots.js';

export default function TerminalWindow({
    prompts,
    children,
    onClickRed,
    onClickYellow,
    onClickGreen,
    title
}) {
    // const location = useLocation();

    // const ref = useCallback(node => {
    //     if (node) {
    //         // console.log(location.pathname);
    //         window.localStorage.setItem(
    //             location.pathname,
    //             new Date().toISOString()
    //         );
    //     }
    // }, []);

    return (
        <div className='terminal'>
            <div className='terminal-titlebar'>
                <TerminalDots
                    onClickRed={onClickRed}
                    onClickYellow={onClickYellow}
                    onClickGreen={onClickGreen}
                />
                <div className='terminal-title'>{title}</div>
            </div>

            <div className='terminal-body  terminal-text'>
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
                        <div className='terminal-contents' /* ref={ref} */>
                            {children}
                        </div>
                    )
                ) : (
                    <div className='terminal-contents' /* ref={ref} */>
                        {children}
                    </div>
                )}
            </div>
        </div>
    );
}

