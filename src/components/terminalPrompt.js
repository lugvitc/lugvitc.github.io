import React from 'react';
import { Colors } from '../values/colors';

export default function TerminalPrompt({path, children}) {
    return(
        <React.Fragment>
            <span style = {{color: Colors.nord8}}>
                lug@vitc:
            </span>
            <span style = {{color: Colors.nord7}}>
                {path}${" "}
            </span>
            <span style = {{color: Colors.nord13}}>
                {children}
            </span>
            <br/>
        </React.Fragment>
    );
}