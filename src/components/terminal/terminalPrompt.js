import './terminal.css';

export default function TerminalPrompt({ path, children }) {
    return (
        <div className='terminal-prompt'>
            <span className='terminal-text prompt-user-system'>lug@vitc:</span>
            <span className='terminal-text prompt-path'>{path}$ </span>
            <span className='terminal-text prompt-command'>{children}</span>
            <br />
        </div>
    );
}

