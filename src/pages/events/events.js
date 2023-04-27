import TerminalWindow from '../../components/terminal/terminalWindow';
import { eventsDetails } from './eventsDetails';
import eventStyles from './events.module.css';

export default function Events() {
    return (
        <TerminalWindow
            prompts={[
                { path: '~', command: 'cd events' },
                { path: '~/events', command: 'cat events.txt' }
            ]}
            title='Events'
        >
            {eventsDetails.map(({ number, name, details, id }, index) => (
                <details key={index} id={id} className={eventStyles.event}>
                    <summary className={eventStyles.name}>
                        {number}: {name}
                    </summary>
                    {details}
                </details>
            ))}
        </TerminalWindow>
    );
}

