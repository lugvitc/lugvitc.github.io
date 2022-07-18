import React, { useState } from "react";
import { motion } from "framer-motion";
import User from "./components/User/User";
import classes from "./Leaderboard1.module.css";
import Card from "./components/Card/Card";

function Leaderboard() {
  const [points, setPoints] = useState(0);
  const players = [
    { score: 10, name: "Apple" },
    { score: 20, name: "Mango" },
    { score: 100, name: "Orange" },
    { score: points, name: "You" },
  ];

  const questions = [
    {
      q: 1,
      points: 5,
      title: "Bill",
      tag: "Easy",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      hint1: "Lorem Ipsum1",
      hint2: "Lorem Ipsum2",
      hint3: "Lorem Ipseum3",
      answer: "pico",
    },
    {
      q: 2,
      points: 10,
      title: "Bill",
      tag: "Medium",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      hint1: "Lorem Ipsum1",
      hint2: "Lorem Ipsum2",
      hint3: null,
      answer: "pico",
    },
    {
      q: 3,
      points: 20,
      title: "Bill",
      tag: "Hard",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      hint1: "Lorem Ipsum1",
      hint2: "Lorem Ipsum2",
      hint3: null,
      answer: "pico",
    },
  ];
  const [expand, setExpand] = useState(true);
  const [questionObj, setQuestionObj] = useState(questions);
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
