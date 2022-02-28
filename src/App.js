import './App.css';
import Header from './mycomponents/header';
import image from './images/mainBody.jpg';
import Footer from './mycomponents/footer';
import {NordTheme, OtherColors} from './values/colors';

function App() {
	const myStyle = {
		backgroundColor: NordTheme.nord0,
		height: 'auto',
		// backgroundImage: `url(${image})`,
		width: 'auto',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
		backgroundPosition: 'center'
	}

	const myMainText = {
		top: '35%',
		position: 'absolute',
		textAlign: 'center',
		left: '450px',
		padding: '30px',
		border: '10px solid yellow',
		width: '50%',
		color: NordTheme.nord0,
		backgroundColor: 'black',
		borderWidth: 'thick'
	}

	const headingText = {
		// color: NordTheme.nord7
		color: OtherColors.neonGreen
	}

	const terminal = {
		backgroundColor: NordTheme.nord1,
		color: NordTheme.nord4,
		fontFamily: "consolas",
		borderRadius: "10px",
		padding: "10px",
		margin: "50px"
	}

  return (
    <div style={myStyle}>
	  <Header />
	  <div>
		<div className = "terminal" style = {terminal}>
			lugvitc@VITC:~$ sudo lug <br/>
			[sudo] password for lugvitc: enter password: <span style = {{color: NordTheme.nord11}}> **********</span><br/>
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

		</div>
	  </div>
	  <Footer />
	  </div>
  );
}

export default App;
