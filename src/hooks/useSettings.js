import create from 'zustand';

const terminalDotsOnLeftStore = create(set => ({
    terminalDotsOnLeft:
        window.localStorage.getItem('terminal-dots-on-left') === 'true',
    setTerminalDotsOnLeft: val => {
        window.localStorage.setItem(
            'terminal-dots-on-left',
            val ? 'true' : 'false'
        );
        set({ terminalDotsOnLeft: val });
    }
}));

const animationsOnStore = create(set => ({
    animationsOn: window.localStorage.getItem('animations-on') === 'true',
    setAnimationsOn: val => {
        window.localStorage.setItem('animations-on', val ? 'true' : 'false');
        set({ animationsOn: val });
    }
}));

export default function useSettings() {
    const { animationsOn, setAnimationsOn } = animationsOnStore();
    const { terminalDotsOnLeft, setTerminalDotsOnLeft } =
        terminalDotsOnLeftStore();

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
        animationsOn,
        setAnimationsOn,
        terminalDotsOnLeft,
        setTerminalDotsOnLeft
    };
}

