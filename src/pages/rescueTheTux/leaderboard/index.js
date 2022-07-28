import TerminalWindow from "../../../components/terminal/terminalWindow";
import LeaderBoardDetailed from "./components/LeaderBoardDetailed";

export default function LeaderBoard() {
  return (
    <>
      <h1> Leader Board </h1>
      <TerminalWindow title="LeaderBoard" style={{ position: "relative" }}>
        <LeaderBoardDetailed />
      </TerminalWindow>
    </>
  );
}
