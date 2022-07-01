import './lugLink.css';

export default function LugLink({ link, children }) {
    return (
        <a
            className='lug-link'
            href={link}
            target='_blank'
            rel='noopener noreferrer'
        >
            {children} <br />
        </a>
    );
}

