import React from 'react';
import { NordTheme, OtherColors } from '../../values/colors';

export default function TopBarElement({title, isActive}) {
    return (
        <div style = {{
            backgroundColor: isActive ? NordTheme.nord0: NordTheme.nord1,
            borderRadius: isActive ? "5px 5px 0px 0px": "5px",
            padding: "0px 5px",
            margin: isActive ? "5px 5px 0px 5px" :"5px 5px",
            borderColor: NordTheme.nord2,
            borderStyle: "solid",
            borderWidth: isActive ? "2px 2px 0px 2px" :"2px",
            height: isActive ? "auto" :"auto"
        }}>
            {title} ▼
        </div>
    );
}