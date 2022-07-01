import { useRef } from 'react';
import create from 'zustand';

const settingsDialogStore = create(set => ({
    settingsDialogOpen: false,
    setSettingsDialogOpen: settingsDialogOpen => set({ settingsDialogOpen })
}));

export default function useSettingsDialog(settingsDialogRef) {
    const { settingsDialogOpen, setSettingsDialogOpen } = settingsDialogStore();

    const openSettingsDialog = () => {
        settingsDialogRef?.current.showModal();
        setSettingsDialogOpen(true);
    };

    const closeSettingsDialog = () => {
        settingsDialogRef?.current.close();
        setSettingsDialogOpen(false);
    };

    return {
        settingsDialogOpen,
        openSettingsDialog,
        closeSettingsDialog
    };
}
