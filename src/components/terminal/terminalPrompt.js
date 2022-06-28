import './terminal.css';

export default function TerminalPrompt({ path, children }) {
    return (
        <div className='terminal-prompt'>
            <span className='prompt-user-system'>lug@vitc:</span>
            <span className='prompt-path'>{path}$ </span>
            <span className='prompt-command'>{children}</span>
            <br />
        </div>
    );
}

