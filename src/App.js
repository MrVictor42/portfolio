import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import { IntlProvider } from 'react-intl';
import LanguageProvider from './languageProvider/languageProvider';

class App extends Component {

  	constructor(props){
		super(props);
		this.state = {
			resumeData: {}
		};

		ReactGA.initialize('UA-110570651-1');
		ReactGA.pageview(window.location.pathname);
	}

	getResumeData(){
		const load = document.getElementById('siteLoading')
		$.ajax({
			url:'resumeData.json',
			dataType:'json',
			cache: false,
			success: function(data){
				this.setState({resumeData: data});
				setTimeout(()=>{
					load.outerHTML='';
				},500)
			}.bind(this),
			error: function(xhr, status, err){
				console.log(err);
				alert(err);
			}
		});
	}

	componentDidMount(){
		this.getResumeData();
	}

	render() {
		return (
			<LanguageProvider>
				<Header data = { this.state.resumeData.main } />
				<About data = { this.state.resumeData.main } />
				<Resume data = { this.state.resumeData.resume } />
				<Portfolio data = { this.state.resumeData.portfolio } />
				<Footer data = { this.state.resumeData.main } />
			</LanguageProvider>
		);
	}
}

export default App;