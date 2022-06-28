import LugLink from '../../components/lugLink';
import TerminalWindow from '../../components/terminal/terminalWindow';
import { eventsDetails } from './eventsDetails';

export default function Events() {
    return (
        <TerminalWindow
            prompts={[
                { path: '~', contents: 'cd events' },
                { path: '~/events', contents: 'cat events.txt' }
            ]}
        >
            {eventsDetails.map(({ number, name, link, details, id }, index) => (
                <section className='terminal-text' key={index} id={id}>
                    <h1>
                        {number}: <LugLink link={link}>{name}</LugLink>
                    </h1>
                    <span>{details}</span>
                </section>
            ))}
        </TerminalWindow>
    );
}

