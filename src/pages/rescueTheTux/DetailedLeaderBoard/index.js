import TerminalWindow from "../../../components/terminal/terminalWindow";
import LeaderBoardDetailed from "./components/LeaderBoardDetailed";

export default function LeaderBoard() {
  return (
    <>
      <TerminalWindow title="LeaderBoard" style={{ position: "relative" }}>
        <LeaderBoardDetailed />
      </TerminalWindow>
    </>
  );
}
