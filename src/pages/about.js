import React from 'react';
import TerminalPrompt from '../components/terminalPrompt';
import TerminalWindow from '../components/terminalWindow';
import { NordTheme } from '../values/colors';

export default function About() {
    const links = [
        {
            link: "https://www.linkedin.com/company/lugvitc/",
            name: "linkedIn"
        },
        {
            link: "https://www.instagram.com/lugvitc/",
            name: "instagram"
        },
        {
            link: "https://github.com/lugvitc",
            name: "github"
        }
    ];
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
                <a
                    style = {{textDecoration: "none", color: NordTheme.nord10}}
                    href = {link}
                    target = "_blank"
                    rel = "noopener noreferrer"
                >
                    {name} <br/>
                </a>
            )}
        </TerminalWindow>
    );
}