import React from 'react';
import { NordTheme, OtherColors } from '../../values/colors';

export default function TopBarElement(props) {
    return (
        <div style = {{
            backgroundColor: props.isActive ? NordTheme.nord0: NordTheme.nord1,
            borderRadius: props.isActive ? "5px 5px 0px 0px": "5px",
            padding: "0px 5px",
            margin: "0px 5px",
            borderColor: NordTheme.nord2,
            borderStyle: "solid",
            borderWidth: props.isActive ? "2px 2px 0px 2px" :"2px"
        }}>
            {props.title} ▼
        </div>
    );
}