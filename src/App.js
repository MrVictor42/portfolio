import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';

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
			<LanguageProvider 
				data = { this.state.resumeData.main } 
				resume = { this.state.resumeData.resume }
				portfolio = { this.state.resumeData.portfolio }
			>
			</LanguageProvider>
		);
	}
}

export default App;