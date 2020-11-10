import React, { Component } from 'react';
import ReactGA from 'react-ga';
import './App.css';

import LanguageProvider from './languageProvider/languageProvider';

class App extends Component {

  	constructor(props){
		super(props);

		ReactGA.initialize('UA-110570651-1');
		ReactGA.pageview(window.location.pathname);
	}

	render() {
		return (
			<LanguageProvider />
		);
	}
}

export default App;