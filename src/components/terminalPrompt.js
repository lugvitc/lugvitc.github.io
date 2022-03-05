import React from 'react';
import { Colors } from '../values/colors';

export default function TerminalPrompt({children}) {
    return(
        <React.Fragment>
            <span style = {{color: Colors.nord8}}>
                lugvitc@VITC:~${" "}
            </span>
            <span style = {{color: Colors.nord13}}>
                {children}
            </span>
            <br/>
        </React.Fragment>
    );
}