import styles from "./terminal.module.css";
import util from "../../styles/util.module.css";
import TerminalDots from "./terminalDots.js";
import hacker from "../../images/hackers-horizon/hacker-horizon.JPG";
import "../../components/blogs_popup_page/blogs_popup.css";
import "../../styles/button.css";
import "../terminalCard/cardRow.css";

import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

export default function TerminalCard({
  title,
  onClickRed,
  onClickYellow,
  onClickGreen,
  summary,
  date,
  department,
  mdtext,
}) {
  const [likeCount, setLikeCount] = useState(100);
  useEffect(() => {
    // Generate a random number between 100 and 1000
    const randomCount = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
    setLikeCount(randomCount);
  }, []);

  const handleLikeClick = () => {
    setLikeCount((prevCount) => prevCount + 1);
  };

  const [showPopup, setShowPopup] = useState(false);
  const handleReadMoreClick = () => {
    setShowPopup(true);
  };
  const handleCloseClick = () => {
    setShowPopup(false);
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
      </div>

      <div className={`${styles.body} ${util.terminalText}`}>
        <img className={styles.thumbnail} src={hacker} alt="niubnei" />
        <br />
        <div className="info">
          <button className="like-button" onClick={handleLikeClick}>
            <span className="icon"></span>
            <span className="count">{likeCount}</span>
          </button>
          <h3>{department}</h3>
          <h5>{date}</h5>
        </div>
        <p></p>
        <p>{summary}</p>
        <button className="button" onClick={handleReadMoreClick}>
          Read More
        </button>

        {showPopup && (
          <div className="popup">
            <ReactMarkdown>{mdtext}</ReactMarkdown>
            <button className="button" onClick={handleCloseClick}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
