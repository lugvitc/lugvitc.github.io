import { useSearchParams } from 'react-router-dom';

import PrevNextSessionLinks from '../../components/prevNextSessionLinks/prevNextSessionLinks';
import ShowAfterTypewriter from '../../components/showAfterTypewriter/showAfterTypwriter';
import TerminalPrompt from '../../components/terminalPrompt/terminalPrompt';
import TerminalWindow from '../../components/terminal/terminalWindow';
import LugNavLink from '../../components/lugLink/lugNavLink';

import Session1 from './session1';
import Session2 from './session2';

import util from '../../styles/util.module.css';

const sessions = [
    {
        title: 'Linux: What? Why? How?',
        content: <Session1 />
    },
    {
        title: 'Know the terminal',
        content: <Session2 />
    },
    {
        title: 'Know the system',
        content: <>coming soon!</>
    },
    {
        title: 'Installing Software',
        content: <>coming soon!</>
    },
    {
        title: 'Ricing',
        content: <>coming soon!</>
    },
    {
        title: 'Advanced Features',
        content: <>coming soon!</>
    }
];

export default function LearnLinux() {
    const [params] = useSearchParams();
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
                <TerminalWindow
                    title={`Learn Linux #${sessionNo}`}
                    prompts={[
                        {
                            path: '/learn-linux',
                            command: `./'${session.title}'`
                        }
                    ]}
                >
                    <LugNavLink link='/learn-linux'>Go back</LugNavLink>
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
                    { path: '~/learn-linux', command: 'cat learn-linux.txt' }
                ]}
            >
                Linux learning resources by LUG VITC
                <div className={util.v1emSpacer} />
                <ShowAfterTypewriter
                    text={'ls -l'}
                    textContainer={text => (
                        <TerminalPrompt path={'~/learn-linux'}>
                            {text}
                        </TerminalPrompt>
                    )}
                >
                    <div className={util.v1emSpacer} />
                    <span className={util.hideBelow600}>
                        drwxrwxrwx 1 root root{' '}
                    </span>{' '}
                    learn-linux.txt
                    {sessions.map((session, index) => (
                        <div key={index}>
                            <span className={util.hideBelow600}>
                                drwxrwxrwx 1 root root{' '}
                            </span>
                            <LugNavLink link={`/learn-linux?session=${index}`}>
                                {session.title}
                            </LugNavLink>
                        </div>
                    ))}
                </ShowAfterTypewriter>
            </TerminalWindow>
        );
}

