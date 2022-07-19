import React, { useState } from "react";
import classes from "./Card.module.css";
import QuestionModal from "./QuestionModal";

function Card(props) {
  const [questionClicked, setQuestionClicked] = useState(false);
  const [questionSolved, setQuestionSolved] = useState(false);
  const [solvedCount, setSolvedCount] = useState(10);
  const tag = props.tag;
  let color;
  if (tag === "Easy") {
    color = "green";
  } else if (tag === "Medium") {
    color = "blue";
  } else if (tag === "Hard") {
    color = "red";
  }
  function solvedHandler() {
    setQuestionSolved(true);
    props.scoredPoints(props.q, props.points);
    setSolvedCount((prevCount) => prevCount++);
  }
  function questionClickedHandler() {
    // event.preventDefault();
    setQuestionClicked(!questionClicked);
  }

  return (
    <>
      {questionClicked && (
        <QuestionModal
          q={props.q}
          points={props.points}
          title={props.title}
          tag={props.tag}
          description={props.description}
          hint1={props.hint1}
          hint2={props.hint2}
          hint3={props.hint3}
          color={color}
          answer={props.answer}
          questionClickedHandler={questionClickedHandler}
          solvedHandler={solvedHandler}
        />
      )}

      <div className={questionSolved && `${classes.backdrop}`}>
        <div className={`${classes.card} `} onClick={questionClickedHandler}>
          <header className={classes.header}>
            <h2>Challenge {props.q}</h2>
            <p>Points | {props.points}</p>
          </header>
          <p>
            Tags :{" "}
            <span className={classes.tag} style={{ backgroundColor: color }}>
              {tag}
            </span>
            {questionSolved && (
              <span
                className={classes.tag}
                style={{ backgroundColor: "green" }}
              >
                Solved
              </span>
            )}
          </p>
          <p>{solvedCount} Solves</p>
        </div>
      </div>
    </>
  );
}

export default Card;
