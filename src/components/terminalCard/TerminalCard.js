import styles from "./terminal.module.css";
import util from "../../styles/util.module.css";
import "../../components/blogs_popup_page/blogs_popup.css";
import "../../styles/button.css";
import "../terminalCard/cardRow.css";

import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import DOMPurify from 'isomorphic-dompurify';

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
    const [popupContent, setPopupContent] = useState({});

    const elem_blog_search = document.getElementsByClassName("blogSearch")[0];

    const handleReadMoreClick = (content,blogTitle) => {
        setPopupContent({content:content,title:blogTitle});
        setShowPopup(true);
        elem_blog_search.hidden = true;
    };

    const handleCloseClick = () => {
        setShowPopup(false);
        elem_blog_search.hidden = false;
    };

    return (
        <>
        { (blogs.length == 0) && (<h3> No Blogs Available</h3>) }
        { !showPopup && blogs.map((blog, index) => (
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
                    <div className="blog_dept">{blog.tags}</div>
                    <div className="date">{blog.date}</div>
                    </div>
                    <div className="blog_author">Author: {blog.published_by}</div>
                    <p></p>
                    <p>{blog.description}</p>
                    <button
                        className="button"
                        onClick={() => handleReadMoreClick(blog.content,blog.title)}
                    >
                    Read More
                    </button>
                </div>
            </div>
        ))}

        {showPopup && (
            <div className="popup">
                <div className="blog_body">
                    <div className="blog_title">{popupContent.title}</div>
                    <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(popupContent.content) }}></div>
                    <button className="button" onClick={handleCloseClick}>
                        Close
                    </button>
                </div>
            </div>
        )}
        </>
    );
}
