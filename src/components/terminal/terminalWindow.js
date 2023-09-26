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
        <div className={"bg-[#212529] min-w-[50%] rounded-[10px]"}>
            <div className={`flex relative justify-center items-center  ml-3 mt-3 p-3 ${util.noSelection}`}>
                <TerminalDots
                    onClickRed={onClickRed}
                    onClickYellow={onClickYellow}
                    onClickGreen={onClickGreen}
                />
                <div className={`text-[#d8dee9] font-extrabold`}>{title}</div>
            </div>

            <div className={`bg-[#3b4252] overflow-y-auto p-4 rounded-[0px_0px_10px_10px] ${util.terminalText}`}>
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
                        <div className={`mt-4`}>{children}</div>
                    )
                ) : (
                    <div className={`mt-0`}>
                        {children}
                    </div>
                )}
            </div>
        </div>
    );
}

