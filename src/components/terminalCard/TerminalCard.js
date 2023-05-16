import styles from "./terminal.module.css";
import util from "../../styles/util.module.css";
import TerminalDots from "./terminalDots.js";
import hacker from "../../images/hackers-horizon/hacker-horizon.JPG";
import "../../styles/button.css";
import "../../styles/like.css";
import React, { useState, useEffect } from 'react';

export default function TerminalCard({
  title,
  onClickRed,
  onClickYellow,
  onClickGreen,
  summary,
  date,
  department
}) {
  const myStyle = {
    height: "40vh",
    width: "38vw",
    borderRadius: "10px"
  };

  const [likeCount, setLikeCount] = useState(100);
  useEffect(() => {
    // Generate a random number between 100 and 1000
    const randomCount = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
    setLikeCount(randomCount);
  }, []);

  const handleLikeClick = () => {
    setLikeCount((prevCount) => prevCount + 1);
  };

  return (
    <div className={styles.index}>
      <div className={`${styles.titlebar} ${util.noSelection}`}>
        <TerminalDots
          onClickRed={onClickRed}
          onClickYellow={onClickYellow}
          onClickGreen={onClickGreen}
        />
        <div className={styles.title}>{title}</div>
        {/* <div className="boody" style={myStyle}></div> */}
      </div>

      <div className={`${styles.body} ${util.terminalText}`}>
        <img src={hacker} style={myStyle} alt="niubnei" />
        <br />
        <button className="like-button" onClick={handleLikeClick}>
          <span className="icon"></span>
          <span className="count">{likeCount}</span>
        </button>
        <h3>{date}</h3>
        <h3>{department}</h3>
        <p></p>
        <p>{summary}</p>
        <button className="button">Read More</button>
        
        
      </div>
    </div>
  );
}
