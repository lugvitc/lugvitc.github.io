import { useEffect } from 'react';
import useSettings from '../../hooks/useSettings';
import TerminalWindow from '../terminal/terminalWindow';

import './settingsDialog.css';

export default function SettingsDialog({
    refer,
    settingsDialogOpen,
    closeSettingsDialog
}) {
    const {
        setDefaults,
        animationsOn,
        setAnimationsOn,
        terminalDotsOnLeft,
        setTerminalDotsOnLeft
    } = useSettings();

    useEffect(() => {
        const closeIfClickedOutside = e => {
            if (settingsDialogOpen && e.target === refer.current) {
                closeSettingsDialog();
            }
        };
        window.addEventListener('click', closeIfClickedOutside);
        return () => window.removeEventListener('click', closeIfClickedOutside);
    }, [refer]);

    return (
        <dialog className='settings' ref={refer} open={false}>
            <TerminalWindow title='Settings' onClickRed={closeSettingsDialog}>
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

