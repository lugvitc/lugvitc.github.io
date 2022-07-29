import TerminalWindow from "../../../components/terminal/terminalWindow";
import Leaderboard1 from "./Leaderboard/Leaderboard1";

export default function Challenges( {nextStep, prevStep, LeaderboardPage} ) {
  return (
    <>
      <TerminalWindow title="Challenges">
        <Leaderboard1 
	  LeaderboardPage = {LeaderboardPage}
	/>
      </TerminalWindow>
    </>
  );
}
