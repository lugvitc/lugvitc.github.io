import TerminalWindow from '../../components/terminal/terminalWindow';

export default function EscapeHunt() {
    return (
        <TerminalWindow
            title='Escape Hunt'
            prompts={[
                { path: '~', command: 'cd escape-hunt' },
                { path: '~/escape-hunt', command: 'cat escape-hunt.txt' }
            ]}
        >
            Escape hunt!!
        </TerminalWindow>
    );
}
