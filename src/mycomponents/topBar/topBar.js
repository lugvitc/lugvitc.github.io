import React from 'react';
import { NordTheme, OtherColors } from '../../values/colors';
import TopBarElement from './topBarElement';

export default function TopBar({titles, activeIndex, time, date}) {
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
                    titles.map(
                        (title, num) => <TopBarElement
                            title = {title}
                            isActive = {activeIndex == num}
                        />
                    )
                }
            </div>
            <div style = {{marginLeft : "auto", margin: "5px 0px"}}>{time}</div>
            <div style = {{marginLeft : "auto", margin: "5px 0px"}}>{date}</div>
        </div>
    );
}