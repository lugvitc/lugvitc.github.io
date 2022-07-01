export default function useSettings() {
    const animationsOn =
        window.localStorage.getItem('animations-on') === 'true';
    const terminalDotsOnLeft =
        window.localStorage.getItem('terminal-dots-on-left') === 'true';

    return { animationsOn, terminalDotsOnLeft };
}
