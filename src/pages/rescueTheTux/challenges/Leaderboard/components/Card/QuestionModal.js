import React, { useState, useEffect } from "react";
import Hint from "./Hint";
import classes from "./QuestionModal.module.css";
import Sucess from "./Sucess";

function QuestionModal(props) {
  const [inputValue, setInputValue] = useState("");
  const [answer, setAnswer] = useState(false);
  const [hint1Display, setHint1Display] = useState(false);
  const [hint2Display, setHint2Display] = useState(false);
  const [hint3Display, setHint3Display] = useState(false);
  // const [correctAnswer, setCorrectAnswer] = useState(false);

  function checkFormSubmission(event) {
    event.preventDefault();

    if (inputValue !== props.answer) {
      console.log(props.answer);
      setAnswer(true);
    } else if (inputValue === props.answer) {
      // setAnswer(false);
      // <div onSubmit={props.questionClickedHandler} />;
      console.log(true);
      props.solvedHandler();
      props.questionClickedHandler();
    }
  }

  function inputChangeHandler(event) {
    setAnswer(false);
    setInputValue(event.target.value);
  }
  function hint1Handler() {
    setHint1Display(true);
    setHint2Display(false);
    setHint3Display(false);
  }
  function hint2Handler() {
    setHint1Display(false);
    setHint2Display(true);
    setHint3Display(false);
  }
  function hint3Handler() {
    setHint1Display(false);
    setHint2Display(false);
    setHint3Display(true);
  }
  return (
    <>
      <form className={classes.card} onSubmit={checkFormSubmission}>
        <header className={classes.header}>
          <h2>Challenge {props.q}</h2>
          <p>Points | {props.points}</p>
          <button
            className={classes.header_link}
            onClick={props.questionClickedHandler}
            type="button"
          >
            X
          </button>
        </header>
        <p>
          Tags :{" "}
          <span
            className={classes.tag}
            style={{ backgroundColor: props.color }}
          >
            {props.tag}
          </span>
        </p>
        <div className={classes.grid}>
          <p>Description : {props.description}</p>
          <div>
            <p>Hint</p>
            <div className={classes.hint}>
              <div>
                {props.hint1 && (
                  <button type="button" onClick={hint1Handler}>
                    1
                  </button>
                )}
                {props.hint2 && (
                  <button type="button" onClick={hint2Handler}>
                    2
                  </button>
                )}
                {props.hint3 && (
                  <button type="button" onClick={hint3Handler}>
                    3
                  </button>
                )}
              </div>
              <div>
                {hint1Display && <Hint hint={props.hint1} />}
                {hint2Display && <Hint hint={props.hint2} />}
                {hint3Display && <Hint hint={props.hint3} />}
              </div>
            </div>
          </div>
        </div>
        <input
          value={inputValue}
          onChange={inputChangeHandler}
          className={`${classes.valid} ${answer && classes.invalid}`}
        />
        <button type="submit">Submit</button>
      </form>
      <div
        className={classes.backdrop}
        onClick={props.questionClickedHandler}
      />
    </>
  );
}

export default QuestionModal;
