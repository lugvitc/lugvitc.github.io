import React from 'react';
import { NordTheme } from '../values/colors';

export default function TerminalPrompt({children}) {
    return(
        <React.Fragment>
            <span style = {{color: NordTheme.nord8}}>
                lugvitc@VITC:~${" "}
            </span>
            <span style = {{color: NordTheme.nord13}}>
                {children}
            </span>
            <br/>
        </React.Fragment>
    );
}