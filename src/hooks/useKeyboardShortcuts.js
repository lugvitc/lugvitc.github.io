import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useSettings from './useSettings';
import useSettingsDialog from './useSettingsDialog';

export default function useKeyboardShortcuts() {
    const {
        settingsDialogRef,
        settingsDialogOpen,
        openSettingsDialog,
        closeSettingsDialog
    } = useSettingsDialog();

    const { keyboardShortcutsOn } = useSettings();

    const navigate = useNavigate();

    useEffect(() => {
        if (keyboardShortcutsOn) {
            const keyboardShortcuts = e => {
                if ((e.key === 's' || e.key === '0') && !settingsDialogOpen)
                    openSettingsDialog();
                if (
                    (e.key === 'Escape' || e.key === '0' || e.key === 's') &&
                    settingsDialogOpen
                )
                    closeSettingsDialog();
                if (e.key === 'h' || e.key === '1') {
                    navigate('/');
                    if (settingsDialogOpen) closeSettingsDialog();
                }
                if (e.key === 'e' || e.key === '2') {
                    navigate('/events');
                    if (settingsDialogOpen) closeSettingsDialog();
                }
                if (e.key === 'l' || e.key === '3') {
                    navigate('/learn-linux');
                    if (settingsDialogOpen) closeSettingsDialog();
                }
            };

            window.addEventListener('keydown', keyboardShortcuts);
            return () =>
                window.removeEventListener('keydown', keyboardShortcuts);
        }
    }, [settingsDialogOpen, settingsDialogRef, keyboardShortcutsOn]);
}

