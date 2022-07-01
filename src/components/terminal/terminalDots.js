import useSettings from '../../hooks/useSettings.js';
import { Colors } from '../../styles/colors.js';

export default function TerminalDots({
    onClickRed,
    onClickYellow,
    onClickGreen
}) {
    const { terminalDotsOnLeft } = useSettings();

    return (
        <div
            className={`terminal-dots ${terminalDotsOnLeft ? 'left' : 'right'}`}
        >
            <div
                className='terminal-dot'
                style={{
                    backgroundColor: Colors.nord11,
                    cursor: onClickRed ? 'pointer' : 'auto'
                }}
                onClick={onClickRed}
            />
            <div
                className='terminal-dot'
                style={{
                    backgroundColor: Colors.nord13,
                    cursor: onClickYellow ? 'pointer' : 'auto'
                }}
                onClick={onClickYellow}
            />
            <div
                className='terminal-dot'
                style={{
                    backgroundColor: Colors.nord14,
                    cursor: onClickGreen ? 'pointer' : 'auto'
                }}
                onClick={onClickGreen}
            />
        </div>
    );
}

