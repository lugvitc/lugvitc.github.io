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
    return (
        <div className='terminal'>
            <div className='terminal-titlebar no-selection'>
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
                        <div className='terminal-contents'>{children}</div>
                    )
                ) : (
                    <div className='terminal-contents'>{children}</div>
                )}
            </div>
        </div>
    );
}

