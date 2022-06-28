import './terminal/terminalText.css';

export default function LugLink({ link, children }) {
    return (
        <a
            className='terminal-text-link'
            href={link}
            target='_blank'
            rel='noopener noreferrer'
        >
            {children} <br />
        </a>
    );
}

