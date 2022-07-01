import useSettings from '../../hooks/useSettings';
import TerminalWindow from '../terminal/terminalWindow';

import './settingsDialog.css';

export default function SettingsDialog({ refer, closeSettings }) {
    const {
        animationsOn,
        setAnimationsOn,
        terminalDotsOnLeft,
        setTerminalDotsOnLeft
    } = useSettings();

    return (
        <dialog className='settings' ref={refer} open={false}>
            <TerminalWindow title='Settings' onClickRed={closeSettings}>
                <h3>Settings</h3>
                <div
                    className='settings-toggle'
                    onClick={() => setAnimationsOn(!animationsOn)}
                >
                    <input readOnly type='checkbox' checked={animationsOn} />{' '}
                    Show animations
                </div>
                <div
                    className='settings-toggle'
                    onClick={() => setTerminalDotsOnLeft(!terminalDotsOnLeft)}
                >
                    <input
                        readOnly
                        type='checkbox'
                        checked={terminalDotsOnLeft}
                    />{' '}
                    Terminal dots on left
                </div>
            </TerminalWindow>
        </dialog>
    );
}
