import React from "react";
import classes from "./User.module.css";
import Label from "../Label/Label";

function User(props) {
  return (
    <div className={classes.leaderboard_inner}>
      <p>{props.name}</p>
      <Label value={props.value} className={classes.box} />
    </div>
  );
}

export default User;
