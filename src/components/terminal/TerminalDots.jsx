import useSettings from './useSetting.jsx';



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
                    backgroundColor: "#88d9dd",
                    cursor: onClickRed ? 'pointer' : 'auto'
                }}
                onClick={onClickRed}
            />
            <div
                className={`h-[15px] w-[15px] rounded-[15px] hover:brightness-[50%]`}
                style={{
                    backgroundColor: "#9cd0a2",
                    cursor: onClickYellow ? 'pointer' : 'auto'
                }}
                onClick={onClickYellow}
            />
            <div
                className={`h-[15px] w-[15px] rounded-[15px] hover:brightness-[50%]`}
                style={{
                    backgroundColor: "#fff",
                    cursor: onClickGreen ? 'pointer' : 'auto'
                }}
                onClick={onClickGreen}
            />
        </div>
    );
}