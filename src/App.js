import './App.css';
import Header from './mycomponents/header';
// import image from './images/mainBody.jpg';
import Footer from './mycomponents/footer';
import {NordTheme, OtherColors} from './values/colors';
import TerminalWindow from './mycomponents/terminalWindow/terminalWindow';

export default function App() {
    const bgStyle = {
        backgroundColor: NordTheme.nord0,
        height: 'auto',
        width: 'auto'
    };
    return (
        <div style={bgStyle}>
            <Header />
            <div style = {{display: "flex"}}>
                <TerminalWindow>
                    lugvitc@VITC:~$ sudo lug <br/>
                    [sudo] password for lugvitc: <span style = {{color: NordTheme.nord11}}> **********</span><br/>
                    <span style = {{color: NordTheme.nord14}}>access granted...</span><br/>

                    <h1>Linux User Club VIT Chennai</h1>
                    Welcome to the home of all things Linux for VIT Chennai.<br/>
                    Stay tuned to this page as we are going to have a whole host of exciting stuff for every enthusiast of the Linux and FOSS world!<br/>
                    
                    <span style = {{color: NordTheme.nord11}}>L</span>
                    <span style = {{color: NordTheme.nord12}}>I</span>
                    <span style = {{color: NordTheme.nord13}}>N</span>
                    <span style = {{color: NordTheme.nord14}}>U</span>
                    <span style = {{color: NordTheme.nord10}}>X</span>
                    <span style = {{color: NordTheme.nord15}}>!</span>
                </TerminalWindow>
                <TerminalWindow>
                    <h2>
                        Home<br/>
                        Events<br/>
                        Projects<br/>
                        Blog<br/>
                    </h2>
                </TerminalWindow>
            </div>
            <Footer />
        </div>
    );
}