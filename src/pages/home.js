import {Colors} from '../values/colors';
import TerminalWindow from '../components/terminal/terminalWindow';
import TerminalPrompt from '../components/terminal/terminalPrompt';
import '../components/typeWriter.css';
import {TypeAnimation} from '../components/typeWriter.js';

const firstText = 'sudo lug'
const secondText = '***************'


export default function Home() { 
	const typingText = TypeAnimation(firstText)
	const typingSecondText = TypeAnimation(secondText)

    return (
        <TerminalWindow>
            <TerminalPrompt path = "~"> sudo lug </TerminalPrompt>
            [sudo] password for lugvitc: <span className = "terminal-text" style = {{color: Colors.nord11}}> **********</span><br/>

            <h1 className = "terminal-text">Linux Club VIT, Chennai</h1>
            The 'Linux Club' of VIT, Chennai was created to Spread the awareness of Free and Open Source Software (FOSS) through Linux flavours.
            It believes in developing collaborative open-source projects.<br/>
            It encourages users to understand the systems and softwares they use on a fundamental level. Which can be achieved only using non-proprietary tools.<br/>
            It aims to get members to contribute to FOSS, make them more industry ready and to promote GNU/Linux in General.<br/>

            <br/>
        </TerminalWindow>
    );
}
