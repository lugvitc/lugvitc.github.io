import { useEffect } from 'react';
import useSettings from '../../hooks/useSettings';
import useSettingsDialog from '../../hooks/useSettingsDialog';
import TerminalWindow from '../terminal/terminalWindow';

import './settingsDialog.css';

export default function SettingsDialog() {
    const {
        setDefaults,
        animationsOn,
        setAnimationsOn,
        terminalDotsOnLeft,
        setTerminalDotsOnLeft
    } = useSettings();

    const {
        settingsDialogRef,
        setSettingsDialogRef,
        settingsDialogOpen,
        closeSettingsDialog
    } = useSettingsDialog();

    useEffect(() => {
        const closeIfClickedOutside = e => {
            if (settingsDialogOpen && e.target === settingsDialogRef.current) {
                closeSettingsDialog();
            }
        };
        window.addEventListener('click', closeIfClickedOutside);
        return () => window.removeEventListener('click', closeIfClickedOutside);
    }, [settingsDialogRef, settingsDialogOpen, closeSettingsDialog]);

    return (
        <dialog className='settings' ref={setSettingsDialogRef} open={false}>
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
                <div className='lug-form-end'>
                    <button onClick={() => closeSettingsDialog()}>
                        Save and Exit
                    </button>
                    <button onClick={() => setDefaults(true)}>
                        Reset Defaults
                    </button>
                </div>
            </TerminalWindow>
        </dialog>
    );
}

