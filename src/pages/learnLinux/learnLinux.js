import TerminalWindow from '../../components/terminal/terminalWindow';

export default function LearnLinux() {
    return (
        <TerminalWindow
            prompts={[
                { path: '~', contents: 'cd learn-linux' },
                { path: '~/learn-linux', contents: 'cat learn-linux.txt' }
            ]}
        >
            Stay tuned, linux learning resources coming soon!!!
        </TerminalWindow>
    );
}
