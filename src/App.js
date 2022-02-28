import './App.css';
import Header from './mycomponents/header';
import image from './images/mainBody.jpg';
import Footer from './mycomponents/footer';

function App() {
	const myStyle = {
		backgroundColor: 'black',
		height: 'auto',
		backgroundImage: `url(${image})`,
		width: '100vw',
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
		color: 'white',
		backgroundColor: 'black',
		borderWidth: 'thick'
	}

  return (
    <div style={myStyle}>
	  <Header />
	  <div className="myHeaderText"><h2>Linux Users Club VIT Chennai</h2></div>
	  <Footer />
	  </div>
  );
}

export default App;
