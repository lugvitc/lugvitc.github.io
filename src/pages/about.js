import React from 'react';
import LugLink from '../components/terminal/lugLink';
import TerminalPrompt from '../components/terminal/terminalPrompt';
import TerminalWindow from '../components/terminal/terminalWindow';

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
        },
        {
            link: "https://discord.com/channels/949736566899744778/949736566899744781",
            name: "discord"
        }
    ];
    return (
        <TerminalWindow>
            <TerminalPrompt path = "~">cd about</TerminalPrompt>
            <TerminalPrompt path = "~/about"> cat about.txt </TerminalPrompt>
            The 'Linux Club' of VIT, Chennai was created to Spread the awareness of Free and Open Source Software (FOSS) through Linux flavours.
            It believes in developing collaborative open-source projects.<br/>
            It encourages users to understand the systems and softwares they use on a fundamental level. Which can be achieved only using non-proprietary tools.<br/>
            It aims to get members to contribute to FOSS, make them more industry ready and to promote GNU/Linux in General.<br/>

            <br/>
            <TerminalPrompt path = "~/about"> cat links.txt </TerminalPrompt>
            {links.map(({link, name}, index) =>
                <LugLink key = {index} link = {link}>{name}</LugLink>
            )}
        </TerminalWindow>
    );
}