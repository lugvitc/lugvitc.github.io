import React from 'react';
import LugLink from '../components/lugLink';
import TerminalPrompt from '../components/terminalPrompt';
import TerminalWindow from '../components/terminalWindow';

export default function About({links}) {
    return (
        <TerminalWindow>
            <TerminalPrompt> cat about.txt </TerminalPrompt>
            The 'Linux Club' of VIT, Chennai was created to Spread the awareness of Free and Open Source Software (FOSS) through Linux flavours.
            It believes in developing collaborative open-source projects.<br/>
            It encourages users to understand the systems and softwares they use on a fundamental level. Which can be achieved only using non-proprietary tools.<br/>
            It aims to get members to contribute to FOSS, make them more industry ready and to promote GNU/Linux in General.<br/>

            <br/>
            <TerminalPrompt> ls ./links/ </TerminalPrompt>
            {links.map(({link, name}, index) =>
                <LugLink key = {index} link = {link} name = {name}/>
            )}
        </TerminalWindow>
    );
}