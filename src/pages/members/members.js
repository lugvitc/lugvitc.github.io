import TerminalWindow from '../../components/terminal/terminalWindow';
import { membersList } from './membersList';
import layout from './layout.module.css';
export default function Members() {
    return (
        <TerminalWindow
            prompts={[
                { path: '~', command: 'cd club' },
                { path: '~/club', command: 'cat members.md' }
            ]}
            title = 'Members'
        >
            <p style={layout.twos}>
            {membersList.map(({ position, member,batch,photo}, index) => (
                <section key={index}>
                    <div className={layout.card}>
                        {photo}
                        <h1>
                            {member}
                        </h1>
                        <p className={layout.position}>
                            {position}
                        </p>
                        <p className={layout.batch}>
                            {batch}
                        </p>
                    </div>
                </section>
            ))
        }
        </p>
        </TerminalWindow>
    );
}
    