import React from 'react';
import { RouteHandler } from 'react-router';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
class App extends React.Component{
	render (){
		return(
			<div>
				<Navbar />
				<RouteHandler />
				<Footer />
			</div>
		);
	}
}
export default App;