import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import ptBr from '../jsons/translations/pt-br.json';
import enUs from '../jsons/translations/en-us.json';
import dede from '../jsons/translations/de-de.json';
import eses from '../jsons/translations/es-es.json';
import itit from '../jsons/translations/it-it.json';
import frfr from '../jsons/translations/fr-fr.json';

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
			case 'de-de':
				portfolio = dede.portfolio.projects;
				break;
			case 'es-es':
				portfolio = eses.portfolio.projects;
				break;
			case 'it-it':
				portfolio = itit.portfolio.projects;
				break;
			case 'fr-fr':
				portfolio = frfr.portfolio.projects;
				break;
			default:
				portfolio = ptBr.portfolio.projects;
		}

		var projects = portfolio.map(function(projects) {
			var projectImage = 'images/portfolio/' + projects.image;
			return <div key = { projects.title } className = 'columns portfolio-item'>
						<div className = 'item-wrap'>
							<a href = { projects.url } title = { projects.title }>
								<img alt = { projects.title } src = { projectImage } />
								<div className = 'overlay'>
									<div className = 'portfolio-item-meta'>
										<h5> { projects.title } </h5>
										<p> { projects.category } </p>
									</div>
								</div>
								<div className = 'link-icon'><i className = 'fa fa-link'></i></div>
							</a>
						</div>
					</div>
			})

		return (
			<section id = 'portfolio'>
				<div className = 'row'>
					<div className = 'twelve columns collapsed'>
						<h1> <FormattedMessage id = 'worksParticipated' /></h1>
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