import { NavLink, useSearchParams } from 'react-router-dom';
import PrevNextSessionLinks from '../../components/prevNextSessionLinks';
import TerminalWindow from '../../components/terminal/terminalWindow';

const sessions = [
    {
        title: 'Linux: What, Why, How',
        content: <>coming soon!</>
    },
    {
        title: 'Know the terminal',
        content: <>coming soon!</>
    },
    {
        title: 'Know the system',
        content: <>coming soon!</>
    }
];

export default function LearnLinux() {
    const [params, setParams] = useSearchParams();
    const sessionParam = params.get('session');
    if (sessionParam) {
        const sessionNo = Number(sessionParam);
        if (
            sessionNo !== null &&
            sessionNo >= 0 &&
            sessionNo < sessions.length
        ) {
            const session = sessions[sessionNo];
            const nextSessionNo =
                sessionNo < sessions.length - 1 ? sessionNo + 1 : null;
            const prevSessionNo = sessionNo > 0 ? sessionNo - 1 : null;
            return (
                <TerminalWindow title={`Learn Linux #${sessionNo}`}>
                    <NavLink to='/learn-linux'>Go back</NavLink>
                    <h1>{session.title}</h1>
                    <PrevNextSessionLinks
                        prevIndex={prevSessionNo}
                        prevSession={sessions[prevSessionNo]}
                        nextIndex={nextSessionNo}
                        nextSession={sessions[nextSessionNo]}
                    />
                    <div className='session-content'>{session.content}</div>
                    <PrevNextSessionLinks
                        prevIndex={prevSessionNo}
                        prevSession={sessions[prevSessionNo]}
                        nextIndex={nextSessionNo}
                        nextSession={sessions[nextSessionNo]}
                    />
                </TerminalWindow>
            );
        } else return <>wrong param</>;
    } else
        return (
            <TerminalWindow
                title='Learn Linux'
                prompts={[
                    { path: '~', command: 'cd learn-linux' },
                    { path: '~/learn-linux', command: 'ls' }
                ]}
            >
                {sessions.map((session, index) => (
                    <div key={index}>
                        <span className='ls-output'>
                            drwxrwxrwx 1 root root{' '}
                        </span>
                        #{index}:{' '}
                        <NavLink to={`/learn-linux?session=${index}`}>
                            {session.title}
                        </NavLink>
                    </div>
                ))}
            </TerminalWindow>
        );
}

