import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import defaultMessages from '../message/message';

class Header extends Component {

	render() {

		if(this.props.data){
			var name = this.props.data.name;
			var description = this.props.data.description;
			var networks = this.props.data.social.map(function(network){
				return <li key = { network.name }>
					<a href = { network.url }>
						<i className = { network.className }></i>
					</a>
				</li>
			})
			var images = this.props.data.flags.map(function(images){
				var imagesFlags = 'images/flags/' + images.image;
				return <a href = { images.abreviation }>
					<img src = { imagesFlags } alt = { images.title } />
				</a> 
			})
		}

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
							<a className = 'smoothscroll' href = '#home'>								<FormattedMessage id = "home" 
									defaultMessage = { defaultMessages.header.home } 
								/>
							</a>
						</li>
						<li>
							<a className = 'smoothscroll' href = '#about'>
								<FormattedMessage id = "about" 
									defaultMessage = { defaultMessages.header.about } 
								/>
							</a>
						</li>
						<li>
							<a className = 'smoothscroll' href = '#resume'>
								<FormattedMessage id = "resume" 
									defaultMessage = { defaultMessages.header.resume } 
								/></a>
						</li>
						<li>
							<a className = 'smoothscroll' href = '#portfolio'>
								<FormattedMessage id = "work" 
									defaultMessage = { defaultMessages.header.work } 
								/></a>
						</li>
						{ images } 
					</ul>
				</nav>

				<div className = 'row banner'>
					<div className = 'banner-text'>
						<h1 className = 'responsive-headline'>Eu sou {name}.</h1>
						<h3> { description } </h3>
						<hr />
						<ul className = "social"> { networks } </ul>
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