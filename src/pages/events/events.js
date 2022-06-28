import LugLink from '../../components/terminal/lugLink';
import TerminalPrompt from '../../components/terminal/terminalPrompt';
import TerminalWindow from '../../components/terminal/terminalWindow';
import { eventsDetails } from './eventsDetails';
import { TypeAnimation } from '../../components/typeWriter/typeWriter.js';
import TR from '../../components/terminal/tr';

const firstText = 'cd events';
const secondText = 'cat events.txt';

export default function Events() {
    return (
        <TerminalWindow>
            <TR
                textContainer={text => (
                    <TerminalPrompt path='~'>{text}</TerminalPrompt>
                )}
                text='cd events'
            >
                <TR
                    textContainer={text => (
                        <TerminalPrompt path='~/events'>{text}</TerminalPrompt>
                    )}
                    text='cat events.txt'
                >
                    <div>
                        {eventsDetails.map(
                            ({ number, name, link, details, id }, index) => (
                                <section
                                    className='terminal-text'
                                    key={index}
                                    id={id}
                                >
                                    <h1>
                                        {number}:{' '}
                                        <LugLink link={link}>{name}</LugLink>
                                    </h1>
                                    <span>{details}</span>
                                </section>
                            )
                        )}
                    </div>
                </TR>
            </TR>
        </TerminalWindow>
    );
}

