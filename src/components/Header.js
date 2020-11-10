import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class Header extends Component {

	constructor(props) {
		super(props)
		
		this.changeLanguage = this.changeLanguage.bind(this);
	}
	
	changeLanguage = (lang) => {
        this.props.onChange(lang)
    }

	render() {

		const Social = this.props.consts.social;
		const Brazil = 'images/flags/brazil.png';
		const Germany = 'images/flags/germany.svg';
		const EUA = 'images/flags/eua.png';

		var networks = Social.map(function(network){
			return <li key = { network.name }>
				<a href = { network.url }>
					<i className = { network.className }></i>
				</a>
			</li>
		})

    	return (
			<header id = 'home'>
				<nav id = 'nav-wrap'>
					<a className = 'mobile-btn' href = '#nav-wrap' 
						title = 'Show navigation'>
							Mostrar Navegação
					</a>
					<a className = 'mobile-btn' href = '#home' 
						title = 'Hide navigation'>
							Hide navigation
					</a>

					<ul id = 'nav' className = 'nav'>
						<li className = 'current'>
							<a className = 'smoothscroll' href = '#home'>								<FormattedMessage id = 'home' />
							</a>
						</li>
						<li>
							<a className = 'smoothscroll' href = '#about'>
								<FormattedMessage id = 'about' />
							</a>
						</li>
						<li>
							<a className = 'smoothscroll' href = '#resume'>
								<FormattedMessage id = 'resume' />
							</a>
						</li>
						<li>
							<a className = 'smoothscroll' href = '#portfolio'>
								<FormattedMessage id = 'work' />
							</a>
						</li>
						<span id = 'brazil' onClick = {() => this.changeLanguage('pt-br')}>
							<img src = { Brazil } alt = 'Brasil/Brazil'/>
						</span>
						<span id = 'eua' onClick = {() => this.changeLanguage('en-us')}>
							<img src = { EUA } alt = 'Eua'/>
						</span>
						<span id = 'germany' onClick = {() => this.changeLanguage('de-de')}>
							<img src = { Germany } alt = 'Alemanha/Germany'/>
						</span>
					</ul>
				</nav>

				<div className = 'row banner'>
					<div className = 'banner-text'>
						<h1 className = 'responsive-headline'> 
							<FormattedMessage id = 'im' /> 
							<FormattedMessage id = 'name' /> 
						</h1>
						<h3> <FormattedMessage id = 'description' /> </h3>
						<hr />
						<ul className = 'social'> { networks } </ul>
					</div>
				</div>

				<p className = 'scrolldown'>
					<a className = 'smoothscroll' href = '#about'>
						<i className = 'icon-down-circle'></i>
					</a>
				</p>
			</header>
	    );
  	}
}

export default Header;