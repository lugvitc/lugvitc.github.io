import { useEffect } from 'react';
import useSettings from '../../hooks/useSettings';
import useSettingsDialog from '../../hooks/useSettingsDialog';
import TerminalWindow from '../terminal/terminalWindow';

import sds from './settingsDialog.module.css';

export default function SettingsDialog() {
    const {
        setDefaults,
        animationsOn,
        setAnimationsOn,
        terminalDotsOnLeft,
        setTerminalDotsOnLeft,
        keyboardShortcutsOn,
        setKeyboardShortcutsOn
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

        const preventCancel = e => e.preventDefault();
        if (settingsDialogRef.current)
            settingsDialogRef.current.addEventListener('cancel', preventCancel);
        return () => {
            window.removeEventListener('click', closeIfClickedOutside);
            if (settingsDialogRef.current)
                settingsDialogRef.current.removeEventListener(
                    'cancel',
                    preventCancel
                );
        };
    }, [settingsDialogRef, settingsDialogOpen, closeSettingsDialog]);

    return (
        <dialog className={sds.index} ref={setSettingsDialogRef} open={false}>
            <TerminalWindow title='Settings' onClickRed={closeSettingsDialog}>
                <div className={sds.heading}>Settings</div>
                <div
                    className={sds.toggle}
                    onClick={() => setAnimationsOn(!animationsOn)}
                >
                    <input readOnly type='checkbox' checked={animationsOn} />{' '}
                    Show animations
                </div>
                <div
                    className={sds.toggle}
                    onClick={() => setTerminalDotsOnLeft(!terminalDotsOnLeft)}
                >
                    <input
                        readOnly
                        type='checkbox'
                        checked={terminalDotsOnLeft}
                    />{' '}
                    Terminal dots on left
                </div>
                {/* <div
                    className={sds.toggle}
                    onClick={() => setKeyboardShortcutsOn(!keyboardShortcutsOn)}
                >
                    <input
                        readOnly
                        type='checkbox'
                        checked={keyboardShortcutsOn}
                    />{' '}
                    Enable keyboard shortcuts
                </div> */}
                <div className={sds.buttons}>
                    <button onClick={() => closeSettingsDialog()}>Exit</button>
                    <button onClick={() => setDefaults(true)}>Defaults</button>
                </div>
            </TerminalWindow>
        </dialog>
    );
}

