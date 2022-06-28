import LugLink from '../../components/lugLink/lugLink';
import TerminalWindow from '../../components/terminal/terminalWindow';
import { eventsDetails } from './eventsDetails';

export default function Events() {
    return (
        <TerminalWindow
            prompts={[
                { path: '~', command: 'cd events' },
                { path: '~/events', command: 'cat events.txt' }
            ]}
        >
            {eventsDetails.map(({ number, name, link, details, id }, index) => (
                <section key={index} id={id}>
                    <h1>
                        {number}: <LugLink link={link}>{name}</LugLink>
                    </h1>
                    {details}
                </section>
            ))}
        </TerminalWindow>
    );
}

