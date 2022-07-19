import React from "react";
import styles from "./Sucess.module.css";
import classes from "./QuestionModal.module.css";

function Sucess(props) {
  return (
    <div className={classes.card}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
        <button
          className={classes.header_link}
          onClick={props.questionClickedHandler}
        >
          X
        </button>
      </header>
      <p>✓</p>

      <button type="submit" onClick={props.questionClickedHandler}>
        Okay
      </button>
    </div>
  );
}

export default Sucess;
