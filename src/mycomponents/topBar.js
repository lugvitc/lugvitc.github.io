import React from 'react';
import { NordTheme, OtherColors } from '../values/colors';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function TopBar({navs}) {
    /* this should be the current time, updated every second(or minute, idk)*/
    const [time, setTime] = useState("4:20pm");
    /* this date should be the current date, updated every day*/
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div
            style = {{
                backgroundColor: OtherColors.headerFooterBlack,
                color: NordTheme.nord4,
                display: "flex",
                fontSize: "small"
            }}
        >
            <div style = {{display: "flex"}}>
                {
                    navs.map(
                        (nav, num) =>
                        <Link
                            className = "top-bar-element"
                            to = {nav.link}
                            onClick = {() => {setActiveIndex(num)}}
                            key = {num}
                            style = {{
                                backgroundColor: activeIndex == num ? NordTheme.nord0: NordTheme.nord1,
                                borderRadius: activeIndex == num ? "5px 5px 0px 0px": "5px",
                                padding: "0px 5px",
                                margin: activeIndex == num ? "5px 5px 0px 5px" :"5px 5px",
                                borderColor: NordTheme.nord2,
                                borderStyle: "solid",
                                borderWidth: activeIndex == num ? "2px 2px 0px 2px" :"2px",
                                height: activeIndex == num ? "auto" :"auto",
                                textDecoration: "none",
                                color: NordTheme.nord4
                            }}
                        >
                            {nav.title} ▼
                        </Link>
                    )
                }
            </div>
            <div style = {{marginLeft : "auto", margin: "5px 0px"}}>{time}</div>
            <div style = {{marginLeft : "auto", margin: "5px 0px"}}>{date}</div>
        </div>
    );
}