import create from 'zustand';

const settingsDialogStore = create(set => ({
    settingsDialogOpen: false,
    setSettingsDialogOpen: settingsDialogOpen => set({ settingsDialogOpen })
}));

const terminalDotsOnLeftStore = create(set => ({
    terminalDotsOnLeft:
        window.localStorage.getItem('terminal-dots-on-left') === 'true',
    setTerminalDotsOnLeft: val => {
        window.localStorage.setItem(
            'terminal-dots-on-left',
            val ? 'true' : 'false'
        );
        set(state => ({ terminalDotsOnLeft: val }));
    }
}));

const animationsOnStore = create(set => ({
    animationsOn: window.localStorage.getItem('animations-on') === 'true',
    setAnimationsOn: val => {
        window.localStorage.setItem('animations-on', val ? 'true' : 'false');
        set(state => ({ animationsOn: val }));
    }
}));

export default function useSettings() {
    const { animationsOn, setAnimationsOn } = animationsOnStore();
    const { terminalDotsOnLeft, setTerminalDotsOnLeft } =
        terminalDotsOnLeftStore();
    const { settingsDialogOpen, setSettingsDialogOpen } = settingsDialogStore();

    const setDefaults = (force = false) => {
        if (!window.localStorage.getItem('animations-on') || force) {
            setAnimationsOn(true);
        }
        if (!window.localStorage.getItem('terminal-dots-on-left') || force) {
            setTerminalDotsOnLeft(true);
        }
    };

    setDefaults();

    return {
        setDefaults,
        settingsDialogOpen,
        setSettingsDialogOpen,
        animationsOn,
        setAnimationsOn,
        terminalDotsOnLeft,
        setTerminalDotsOnLeft
    };
}

