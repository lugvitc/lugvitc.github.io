import './terminal.css';

export default function TerminalPrompt({ path, children }) {
    return (
        <div className='terminal-prompt'>
            <span className='prompt-user-system hide-600'>lug@vitc:</span>
            <span className='prompt-path hide-600'>{path}$ </span>
            <span className='prompt-command'>{children}</span>
            <br />
        </div>
    );
}

