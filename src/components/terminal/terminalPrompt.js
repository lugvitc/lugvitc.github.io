import './terminal.css';
import TR from './tr';

export default function TerminalPrompt({ path, children }) {
    return (
        <>
            <span className='terminal-text prompt-user-system'>lug@vitc:</span>
            <span className='terminal-text prompt-path'>{path}$ </span>
            <span className='terminal-text prompt-command'>
                <TR text={children} />
            </span>
            <br />
        </>
    );
}

