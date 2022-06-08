import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import ptBr from '../jsons/translations/pt-br.json';
import enUs from '../jsons/translations/en-us.json';
import eses from '../jsons/translations/es-es.json';

class Portfolio extends Component {

  	render() {

		let portfolio = '';

		switch(this.props.country) {
			case 'pt-br':
				portfolio = ptBr.portfolio.projects;
				break;
			case 'en-us':
				portfolio = enUs.portfolio.projects;
				break;
			case 'es-es':
				portfolio = eses.portfolio.projects;
				break;
			default:
				portfolio = ptBr.portfolio.projects;
		}

		var projects = portfolio.map(function(projects) {
			var projectImage = 'images/portfolio/' + projects.image;
			return <div key = { projects.title } className = 'projects'>
				<div className = 'container'>
					<h1> <a href = { projects.url }> { projects.title } </a> </h1> 
					<img alt = { projects.title } src = { projectImage } />
						<p className = 'info'> { projects.description } </p> <br/>
				</div>
			</div>
		})

		return (
			<section id = 'portfolio'>
				<div className = 'row portfolio'>
					<div className = 'twelve columns collapsed'>
						<h1> <span> <FormattedMessage id = 'worksParticipated' /> </span> </h1>
						<div id = 'portfolio-wrapper' className = 'bgrid-quarters s-bgrid-thirds cf'>
							{ projects }
						</div>
					</div>
				</div>
			</section>
		);
  	}
}

export default Portfolio;