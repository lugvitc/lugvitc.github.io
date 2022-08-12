import React, { useState } from 'react';
import styles from './Card.module.css';
import QuestionModal from '../challengeModal/QuestionModal';

function Card({ challenge }) {
    const [questionClicked, setQuestionClicked] = useState(false);
    const [questionSolved, setQuestionSolved] = useState(false);
    const [solvedCount, setSolvedCount] = useState(10);

    function solvedHandler() {
        setQuestionSolved(true);
        // scoredPoints(challenge.q, challenge.points);
        setSolvedCount(prevCount => prevCount++);
    }
    function questionClickedHandler() {
        // event.preventDefault();
        setQuestionClicked(!questionClicked);
    }

    return (
        <>
            {/* {questionClicked && (
                // <QuestionModal
                //     q={q}
                //     points={points}
                //     title={title}
                //     tag={tag}
                //     description={description}
                //     hint1={hint1}
                //     hint2={hint2}
                //     hint3={hint3}
                //     color={color}
                //     answer={answer}
                //     questionClickedHandler={questionClickedHandler}
                //     solvedHandler={solvedHandler}
                // />
            )} */}

            <div className={`${styles.card} `} onClick={questionClickedHandler}>
                <div className={styles.header}>
                    <h2>{challenge.name}</h2>
                    <div>Points | {challenge.points}</div>
                </div>
                <div>{challenge.description}</div>
            </div>
        </>
    );
}

export default Card;

