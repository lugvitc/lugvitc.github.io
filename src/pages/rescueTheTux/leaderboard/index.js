import TerminalWindow from "../../../components/terminal/terminalWindow";
import LeaderBoardDetailed from "./components/LeaderBoardDetailed";

export default function LeaderBoard( {nextStep, prevStep, challengesPage} ) {
  return (
    <>
      <TerminalWindow title="LeaderBoard" style={{ position: "relative" }}>
        <LeaderBoardDetailed 
	  challengesPage = {challengesPage}
	/>
      </TerminalWindow>
    </>
  );
}
