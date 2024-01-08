import Typewriter from "typewriter-effect";

import TerminalDots from "./TerminalDots.jsx";

export default function EventTerminal({
//   prompts,
  children,
  onClickRed,
  onClickYellow,
  onClickGreen,
  title,
}) {
  return (
    <div className={"bg-[#16161A] min-w-full  rounded-[10px] "}>
      <div
        className={`flex relative justify-center items-center  ml-3 mt-3 p-3`}
      >
        <TerminalDots
          onClickRed={onClickRed}
          onClickYellow={onClickYellow}
          onClickGreen={onClickGreen}
        />
        <div className={`text-[#d8dee9] font-bold font-space ml-5`}>{title}</div>
      </div>

      <div
        className={`bg-[#1A1920] text-white font-space overflow-y-auto p-4 rounded-[0px_0px_10px_10px] h-[20rem]`}
      >       
            <div className={`mt-4`}>{children}</div>
        
      </div>
    </div>
  );
}
