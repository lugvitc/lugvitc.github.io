import create from 'zustand';

const settingsDialogRefStore = create(set => ({
    settingsDialogRef: { current: null },
    setSettingsDialogRef: val => set({ settingsDialogRef: { current: val } })
}));

const settingsDialogStore = create(set => ({
    settingsDialogOpen: false,
    setSettingsDialogOpen: settingsDialogOpen => set({ settingsDialogOpen })
}));

export default function useSettingsDialog() {
    const { settingsDialogOpen, setSettingsDialogOpen } = settingsDialogStore();

    const { settingsDialogRef, setSettingsDialogRef } =
        settingsDialogRefStore();

    const openSettingsDialog = () => {
        settingsDialogRef?.current.showModal();
        setSettingsDialogOpen(true);
    };

    const closeSettingsDialog = () => {
        settingsDialogRef?.current.close();
        setSettingsDialogOpen(false);
    };

    return {
        settingsDialogRef,
        setSettingsDialogRef,
        settingsDialogOpen,
        openSettingsDialog,
        closeSettingsDialog
    };
}

