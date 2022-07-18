import TerminalWindow from "../../../components/terminal/terminalWindow";
import Leaderboard1 from "./Leaderboard/Leaderboard1";

export default function Challenges() {
  return (
    <>
      <TerminalWindow title="Rescue the Tux">
        <Leaderboard1 />
      </TerminalWindow>
    </>
  );
}
