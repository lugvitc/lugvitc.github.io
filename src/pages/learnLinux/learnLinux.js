import TerminalWindow from '../../components/terminal/terminalWindow';

export default function LearnLinux() {
    return (
        <TerminalWindow
            title='Learn Linux'
            prompts={[
                { path: '~', command: 'cd learn-linux' },
                { path: '~/learn-linux', command: 'cat learn-linux.txt' }
            ]}
        >
            Stay tuned, linux learning resources coming soon!!!
        </TerminalWindow>
    );
}
