import { useRef, useState } from 'react';
import Tooltip from '../tooltip/tooltip';
import './codeBlock.css';

export default function CodeBlock({ children, copyText }) {
    const copyToClipboard = () => {
        if (!copyText) copyText = children;
        navigator.clipboard.writeText(copyText);
    };

    const copyButtonRef = useRef(null);

    return (
        <div className='code-block'>
            <div className='code'>{children}</div>
            <Tooltip toolRef={copyButtonRef} above>
                Copy to clipboard
            </Tooltip>
            <div
                className='copy-button'
                onClick={copyToClipboard}
                ref={copyButtonRef}
            >
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    height='24px'
                    viewBox='0 0 24 24'
                    width='24px'
                    fill='#000000'
                >
                    <path d='M0 0h24v24H0V0z' fill='none' />
                    <path d='M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z' />
                </svg>
            </div>
        </div>
    );
}
