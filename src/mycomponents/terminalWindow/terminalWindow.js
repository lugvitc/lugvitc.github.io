import React from 'react';
import { NordTheme, OtherColors } from '../../values/colors';
import UpperDots from './upperDots';

export default function TerminalWindow(props) {
    return (
        <div
            className = "terminalContainer"
            style = {{
            borderRadius: "10px",
            backgroundColor: OtherColors.headerFooterBlack,
            margin: "50px",
            padding: "5px 0px 0px 0px",
            width: "1000px"
        }}>
            <div>
            <UpperDots/>
                </div>
            <div style = {{
                backgroundColor: NordTheme.nord1,
                color: NordTheme.nord4,
                fontFamily: "consolas",
                borderRadius: "0px 0px 10px 10px",
                padding: "10px",
                margin: "0px",
                height: "100%",
                width: "100%"
            }}>
                {props.children}
            </div>
        </div>
    );
}