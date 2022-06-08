import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import ptBr from '../jsons/translations/pt-br.json';
import enUs from '../jsons/translations/en-us.json';
import eses from '../jsons/translations/es-es.json';
import skillsUser from '../jsons/skills.json';

class Resume extends Component {
  
	render() {

		let resume = '';
		const Skills = skillsUser.skills;

		switch(this.props.country) {
			case 'pt-br':
				resume = ptBr.resumeResume;
				break;
			case 'en-us':
				resume = enUs.resumeResume;
				break;
			case 'es-es':
				resume = eses.resumeResume;
				break;
			default:
				resume = ptBr.resumeResume;
		}

		var education = resume.education.map(function(education) {
			return <div key = { education.school }>
						<h3> { education.school } </h3>
						<p className = 'info'> { education.degree } <span>&bull;</span>
							<em className = 'date'> { education.graduated } </em>
						</p>
					</div>
			})

		var work = resume.work.map(function(work) {
			return <div key = { work.company }>
						<h3> { work.company } </h3>
						<p className = 'info'> { work.title } <span>&bull;</span> 
							<em className = 'date'> { work.years } </em>
						</p>
					</div>
			})

		var skills = Skills.map(function(skills){
			var projectImage = 'images/tech/' + skills.image;
			return <div key = { skills.name } className = 'columns feature-item'>
						<img className = 'skill' alt = { skills.name } src = { projectImage } />
						<h5> { skills.name } </h5>
				</div>
		}) 

    	return (
			<section id = 'resume'>
				<div className = 'row work'>
					<div className = 'three columns header-col'>
						<h1><span> <FormattedMessage id = 'works' /> </span></h1>
					</div>
					<div className='nine columns main-col'>
						{ work }
					</div>
				</div>

				<div className = 'row education'>
					<div className = 'three columns header-col'>
						<h1><span> <FormattedMessage id = 'education' /> </span></h1>
					</div>
					<div className = 'nine columns main-col'>
						<div className = 'row item'>
							<div className = 'twelve columns'>
								{ education }
							</div>
						</div>
					</div>
				</div>	

				<div className = 'row skill'>
					<div className = 'three columns header-col'>
						<h1><span> <FormattedMessage id = 'tecnologies' /> </span></h1>
					</div>
					<div>
						<div className = 'nine columns main-col'>
							<p className = 'lead center'> <br/> <br/> </p>
						</div>
						<ul className = 'bgrid-quarters s-bgrid-thirds cf'>
							{ skills }
						</ul>
					</div>
				</div>
			</section>
    	);
  	}
}

export default Resume;