import React, { useState } from "react";
import { motion } from "framer-motion";
import User from "./components/User/User";
import classes from "./Leaderboard1.module.css";
import Card from "./components/Card/Card";
import { Questions } from "./Questions";
// import UserDetailsFun from "./UserDetails";

function Leaderboard() {
  const [points, setPoints] = useState(0);
  // UserDetailsFun(points);
  const players = [
    { score: 10, name: "Apple" },
    { score: 20, name: "Mango" },
    { score: 100, name: "Orange" },
    { score: points, name: "You" },
  ];
  players.sort(function (a, b) {
    return b.score - a.score;
  });

  const [expand, setExpand] = useState(true);
  const [questionObj, setQuestionObj] = useState(Questions);
  // const [playerObj, setPlayerObj] = useState(players);

  function expandHandler() {
    setExpand(!expand);
  }
  function scoredPoints(q, p) {
    setPoints((points) => points + p);
  }

  return (
    <>
      <motion.div
        layout
        transition={{ layout: { duration: 0.5, type: "spring" } }}
      >
        <motion.h1 layout="fixed">Leader board</motion.h1>
        <motion.p layout="fixed">Points scored : {points}</motion.p>
        {expand &&
          players.map((objectVal) => {
            return <User value={objectVal.score} name={objectVal.name} />;
          })}
        {expand && <button onClick={expandHandler}>Shrink</button>}
        {!expand && <button onClick={expandHandler}>Expand</button>}
      </motion.div>
      <div className={classes.grid}>
        {questionObj.map((question) => {
          return (
            <Card
              key={question.q}
              q={question.q}
              points={question.points}
              title={question.title}
              tag={question.tag}
              description={question.description}
              hint1={question.hint1}
              hint2={question.hint2}
              hint3={question.hint3}
              answer={question.answer}
              scoredPoints={scoredPoints}
            />
          );
        })}
      </div>
    </>
  );
}

export default Leaderboard;
