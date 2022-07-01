import create from 'zustand';

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

const setDefaults = () => {
    if (!window.localStorage.getItem('animations-on')) {
        animationsOnStore(state => state.setAnimationsOn)(true);
    }
    if (!window.localStorage.getItem('terminal-dots-on-left')) {
        terminalDotsOnLeftStore(state => state.setTerminalDotsOnLeft)(true);
    }
};

export default function useSettings() {
    setDefaults();
    return {
        animationsOn: animationsOnStore(state => state.animationsOn),
        setAnimationsOn: animationsOnStore(state => state.setAnimationsOn),
        terminalDotsOnLeft: terminalDotsOnLeftStore(
            state => state.terminalDotsOnLeft
        ),
        setTerminalDotsOnLeft: terminalDotsOnLeftStore(
            state => state.setTerminalDotsOnLeft
        )
    };
}

