import React from "react";
import User from "../../challenges/Leaderboard/components/User/User";
import { UserDetails } from "../../challenges/Leaderboard/UserDetails";
import classes from "./LeaderBoardDetailed.module.css";

function LeaderBoardDetailed() {
  return (
    <div>
      <h1>Leader Board</h1>
      {UserDetails.map((objectVal, index) => {
        return (
          <div
            className={`${classes.box}  ${
              objectVal.name === "You" && classes.current
            }`}
          >
            <p>Rank {index + 1}</p>
            <User value={objectVal.score} name={objectVal.name} />
            <p>Points | {objectVal.score}</p>
          </div>
        );
      })}
    </div>
  );
}

export default LeaderBoardDetailed;
