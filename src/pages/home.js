import {Colors} from '../values/colors';
import TerminalWindow from '../components/terminal/terminalWindow';
import TerminalPrompt from '../components/terminal/terminalPrompt';


export default function Home() {
    return (
        <TerminalWindow>
            <TerminalPrompt path = "~"> sudo lug </TerminalPrompt>
            [sudo] password for lugvitc: <span className = "terminal-text" style = {{color: Colors.nord11}}> **********</span><br/>
            <span className = "terminal-text" style = {{color: Colors.nord14}}>access granted...</span><br/>

            <h1 className = "terminal-text">Linux Club VIT, Chennai</h1>
            Welcome to the home of all things Linux for VIT Chennai.<br/>
            Stay tuned to this page as we are going to have a whole host of exciting stuff for every enthusiast of the Linux and FOSS world!<br/>
            
            <span className = "terminal-text" style = {{color: Colors.nord11}}>L</span>
            <span className = "terminal-text" style = {{color: Colors.nord12}}>I</span>
            <span className = "terminal-text" style = {{color: Colors.nord13}}>N</span>
            <span className = "terminal-text" style = {{color: Colors.nord14}}>U</span>
            <span className = "terminal-text" style = {{color: Colors.nord10}}>X</span>
            <span className = "terminal-text" style = {{color: Colors.nord15}}>!</span>
        </TerminalWindow>
    );
}