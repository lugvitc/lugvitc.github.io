import TerminalWindow from '../../components/terminal/terminalWindow';
import { post } from '../../csrf_changes';

export default function EscapeHunt() {
    // for testing
    let formData = {"hi":"hello"}
    post('http://127.0.0.1:5000/test', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    },formData);
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
