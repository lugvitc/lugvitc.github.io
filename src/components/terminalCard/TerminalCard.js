import styles from "./terminal.module.css";
import util from "../../styles/util.module.css";
import "../../components/blogs_popup_page/blogs_popup.css";
import "../../styles/button.css";
import "../terminalCard/cardRow.css";

import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

export default function TerminalCard({ blogs }) {
  const [likeCounts, setLikeCounts] = useState([]);

  useEffect(() => {
    const initialCounts = blogs.map(() => {
      return Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
    });
    setLikeCounts(initialCounts);
  }, [blogs]);

  const handleLikeClick = (index) => {
    setLikeCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[index] += 1;
      return newCounts;
    });
  };

  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState("");

  const handleReadMoreClick = (content) => {
    setPopupContent(content);
    setShowPopup(true);
  };

  const handleCloseClick = () => {
    setShowPopup(false);
  };

  return (
    <>
      {blogs.map((blog, index) => (
        <div className={styles.index} key={index}>
          <div className={`${styles.titlebar} ${util.noSelection}`}>
            <div className={styles.title}>{blog.title}</div>
          </div>

          <div className={`${styles.body} ${util.terminalText}`}>
            <img
              className={styles.thumbnail}
              src={blog.thumbnail}
              alt="niubnei"
            />
            <br />
            <div className="info">
              <button
                className="like-button"
                onClick={() => handleLikeClick(index)}
              >
                <span className="icon"></span>
                <span className="count">{likeCounts[index]}</span>
              </button>
              <div className="dept">{blog.dept}</div>
              <div className="date">{blog.date}</div>
            </div>
            <p></p>
            <p>{blog.description}</p>
            <button
              className="button"
              onClick={() => handleReadMoreClick(blog.content)}
            >
              Read More
            </button>
          </div>
        </div>
      ))}

      {showPopup && (
        <div className="popup">
          <ReactMarkdown>{popupContent}</ReactMarkdown>
          <button className="button" onClick={handleCloseClick}>
            Close
          </button>
        </div>
      )}
    </>
  );
}
