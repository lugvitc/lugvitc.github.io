import './App.css';
import Header from './mycomponents/header';
import image from './images/mainBody.jpg';
import Footer from './mycomponents/footer';

function App() {
	const myStyle = {
		backgroundColor: 'black',
		minHeight: '90vh',
		backgroundImage: `url(${image})`,
		width: '100%'
	}

	const myMainText = {
		top: '35%',
		position: 'absolute',
		textAlign: 'center',
		left: '450px',
		padding: '30px',
		border: '10px solid yellow',
		width: '50%',
		color: 'white',
		backgroundColor: 'black',
		borderWidth: 'thick'
	}
  return (
    <div style={myStyle}>
	  <Header />
	  <Footer />
	  <center><div style={myMainText}><h2>Welcome to LINUX CLUB</h2></div></center>
	  </div>
  );
}

export default App;
