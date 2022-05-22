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
            <TerminalPrompt path = "~"> <span className="typeWriteFirstText">{typingText}</span></TerminalPrompt>
	    { typingText=='sudo lug' ? (
            <div> [sudo] password for lugvitc: <span style = {{color: Colors.nord11}} className="typeWriteSecondText"> {typingSecondText} </span><br/>
	    { typingSecondText=='***************' ? (
	    <div>
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
		    <div> </div>
	    )
	    }
	    </div>
	    ) : (
	    <div> </div>
	    )
	    }
        </TerminalWindow>
    );
}
