import {Colors} from '../values/colors';
import TerminalWindow from '../components/terminalWindow';
import TerminalPrompt from '../components/terminalPrompt';


export default function Home() {
    return (
        <TerminalWindow>
            <TerminalPrompt> sudo lug </TerminalPrompt>
            [sudo] password for lugvitc: <span style = {{color: Colors.nord11}}> **********</span><br/>
            <span style = {{color: Colors.nord14}}>access granted...</span><br/>

            <h1>Linux User Club VIT Chennai</h1>
            Welcome to the home of all things Linux for VIT Chennai.<br/>
            Stay tuned to this page as we are going to have a whole host of exciting stuff for every enthusiast of the Linux and FOSS world!<br/>
            
            <span style = {{color: Colors.nord11}}>L</span>
            <span style = {{color: Colors.nord12}}>I</span>
            <span style = {{color: Colors.nord13}}>N</span>
            <span style = {{color: Colors.nord14}}>U</span>
            <span style = {{color: Colors.nord10}}>X</span>
            <span style = {{color: Colors.nord15}}>!</span>
        </TerminalWindow>
    );
}