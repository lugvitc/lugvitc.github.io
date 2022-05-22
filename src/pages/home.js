import {Colors} from '../values/colors';
import TerminalWindow from '../components/terminalWindow';
import TerminalPrompt from '../components/terminalPrompt';
import '../components/typeWriter.css';
import {useTypeAnimation} from '../components/typeWriter.js';

const firstText = 'sudo lug'
const secondText = '**********'

export default function Home() {
	const typingText = useTypeAnimation(firstText)
	const typingSecondText = useTypeAnimation(secondText)
    return (
        <TerminalWindow>
            <TerminalPrompt path = "~"> <span className="typeWriteFirstText">{typingText}</span></TerminalPrompt>
	    { typingText=='sudo lug' ? (
            <div> [sudo] password for lugvitc: <span style = {{color: Colors.nord11}} className="typeWriteFirstText"> {typingSecondText} </span><br/>
	     
	    <span style = {{color: Colors.nord14}}>access granted...</span><br/>

            <h1>Linux Club VIT, Chennai</h1>
            Welcome to the home of all things Linux for VIT Chennai.<br/>
            Stay tuned to this page as we are going to have a whole host of exciting stuff for every enthusiast of the Linux and FOSS world!<br/>
            
            <span style = {{color: Colors.nord11}}>L</span>
            <span style = {{color: Colors.nord12}}>I</span>
            <span style = {{color: Colors.nord13}}>N</span>
            <span style = {{color: Colors.nord14}}>U</span>
            <span style = {{color: Colors.nord10}}>X</span>
            <span style = {{color: Colors.nord15}}>!</span>
	    </div>
	    ) : (
		    <div> hi </div> 
	    )}


        </TerminalWindow>
    );
}
