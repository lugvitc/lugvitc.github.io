import React from 'react';
import { NordTheme, OtherColors } from '../../values/colors';
import TopBarElement from './topBarElement';

export default function TopBar(props) {
    return (
        <div
            style = {{
                backgroundColor: OtherColors.headerFooterBlack,
                color: NordTheme.nord4,
                display: "flex"
            }}
        >
            {
                props.titles.map(
                    (title, num) =>
                        <TopBarElement
                            title = {title}
                            isActive = {props.activeIndex == num}
                        />
                )
            } {/*these elements should be on the left of the TopBar*/}
            <div style = {{width: "700px"}}></div>
            <div style = {{}}>{props.time}</div> {/*this div should be in the center of the TopBar*/}
            <div style = {{width: "800px"}}></div>
            <div style = {{}}>{props.date}</div> {/*this div should at the rightmost end of the TopBar*/}
        </div>
    );
}