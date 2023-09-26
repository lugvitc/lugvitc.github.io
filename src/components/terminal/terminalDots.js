import useSettings from '../../hooks/useSettings.js';
import { Colors } from '../../styles/colors.js';

// import styles from './terminal.module.css';

export default function TerminalDots({
    onClickRed,
    onClickYellow,
    onClickGreen
}) {
    const { terminalDotsOnLeft } = useSettings();

    return (
        <div
            className={`absolute flex gap-[5px] ${
                terminalDotsOnLeft ? "flex-row left-0" : "flex-row-reverse right-0"
            }`}
        >
            <div
                className={`h-[15px] w-[15px] rounded-[15px] hover:brightness-[50%]`}
                style={{
                    backgroundColor: Colors.nord11,
                    cursor: onClickRed ? 'pointer' : 'auto'
                }}
                onClick={onClickRed}
            />
            <div
                className={`h-[15px] w-[15px] rounded-[15px] hover:brightness-[50%]`}
                style={{
                    backgroundColor: Colors.nord13,
                    cursor: onClickYellow ? 'pointer' : 'auto'
                }}
                onClick={onClickYellow}
            />
            <div
                className={`h-[15px] w-[15px] rounded-[15px] hover:brightness-[50%]`}
                style={{
                    backgroundColor: Colors.nord14,
                    cursor: onClickGreen ? 'pointer' : 'auto'
                }}
                onClick={onClickGreen}
            />
        </div>
    );
}

