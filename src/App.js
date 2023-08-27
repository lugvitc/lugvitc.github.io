import { useEffect, useRef, useState } from 'react';

import TopBar from './components/topBar/topBar';
import Dock from './components/dock/dock';

import SettingsDialog from './components/settingsDialog/settingsDialog';
import useKeyboardShortcuts from './hooks/useKeyboardShortcuts';

export default function App({ children, pages }) {
    // useKeyboardShortcuts();

    const [mainTopMargin, setMainTopMargin] = useState('0');

    const topBarRef = useRef(null);

    useEffect(() => {
        const setCorrectMargin = () =>
            setMainTopMargin(`${topBarRef.current.clientHeight}px`);

        setCorrectMargin();
        window.addEventListener('resize', setCorrectMargin);

        return () => window.removeEventListener('resize', setCorrectMargin);
    }, []);

    return (
        <>
            <TopBar refer={topBarRef} topBarLinks={pages} />
            <SettingsDialog />
            <main
                style={{
                    marginTop: mainTopMargin,
                    minHeight: `calc(100vh - ${mainTopMargin})`
                }}
                id='content'
            >
                <Dock />
                <div id='terminals'>{children}</div>
            </main>
        </>
    );
}

