import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import CVBackendPtBr from '../files/backend/CV_Victor_Mota_pt_br.pdf';
import CVBackendDeDe from '../files/backend/CV_Victor_Mota_de_de.pdf';
import CVBackendEnUs from '../files/backend/CV_Victor_Mota_en_us.pdf';
import CVBackendEsEs from '../files/backend/CV_Victor_Mota_es_es.pdf';
import CVBackendFrFr from '../files/backend/CV_Victor_Mota_fr_fr.pdf';
import CVBackendItIt from '../files/backend/CV_Victor_Mota_it_it.pdf';

import CVFrontendPtBr from '../files/frontend/CV_Victor_Mota_pt_br.pdf';
import CVFrontendDeDe from '../files/frontend/CV_Victor_Mota_de_de.pdf';
import CVFrontendEnUs from '../files/frontend/CV_Victor_Mota_en_us.pdf';
import CVFrontendEsEs from '../files/frontend/CV_Victor_Mota_es_es.pdf';
import CVFrontendFrFr from '../files/frontend/CV_Victor_Mota_fr_fr.pdf';
import CVFrontendItIt from '../files/frontend/CV_Victor_Mota_it_it.pdf';

import CVFullPtPt from '../files/fullStack/CV_Victor_Mota_pt_br.pdf';
import CVFullDeDe from '../files/fullStack/CV_Victor_Mota_de_de.pdf';
import CVFullEnUs from '../files/fullStack/CV_Victor_Mota_en_us.pdf';
import CVFullEsEs from '../files/fullStack/CV_Victor_Mota_es_es.pdf';
import CVFullFrFr from '../files/fullStack/CV_Victor_Mota_fr_fr.pdf';
import CVFullItIt from '../files/fullStack/CV_Victor_Mota_it_it.pdf';

class About extends Component {

	render() {

		const Profile_pic = 'images/profile_pic.jpg';
		let resumecvbackend = '';
		let resumecvfrontend = '';
		let resumecvfull = '';

		switch(this.props.country) {
			case 'pt-br':
				resumecvbackend = CVBackendPtBr;
				resumecvfrontend = CVFrontendPtBr;
				resumecvfull = CVFullPtPt;
				break;
			case 'en-us':
				resumecvbackend = CVBackendEnUs;
				resumecvfrontend = CVFrontendEnUs;
				resumecvfull = CVFullEnUs;
				break;
			case 'de-de':
				resumecvbackend = CVBackendDeDe;
				resumecvfrontend = CVFrontendDeDe;
				resumecvfull = CVFullDeDe;
				break;
			case 'es-es':
				resumecvbackend = CVBackendEsEs;
				resumecvfrontend = CVFrontendEsEs;
				resumecvfull = CVFullEsEs;
				break;
			case 'fr-fr':
				resumecvbackend = CVBackendFrFr;
				resumecvfrontend = CVFrontendFrFr;
				resumecvfull = CVFullFrFr;
				break;
			case 'it-it':
				resumecvbackend = CVBackendItIt;
				resumecvfrontend = CVFrontendItIt;
				resumecvfull = CVFullItIt;
				break;
			default:
				resumecvbackend = CVBackendPtBr;
				resumecvfrontend = CVFrontendPtBr;
				resumecvfull = CVFullPtPt;
		}
		
		return (
			<section id = 'about'>
				<div className = 'row'>
					<div className = 'three columns'>
						<img className = 'profile-pic'  src = { Profile_pic } alt = 'profile-victor' />
					</div>
					<div className = 'nine columns main-col'>
						<h2> <FormattedMessage id = 'imAbout' /> </h2>
						<p> <FormattedMessage id = 'descriptionAbout' /> </p>
						<div className = 'row'>
							<div className = 'columns contact-details'>
								<h2> <FormattedMessage id = 'contactAbout' /> </h2>
								<p className = 'address'>
									<span> <FormattedMessage id = 'name' /> </span><br />
									<span> 
										<FormattedMessage id = 'state' />  <br />
										<FormattedMessage id = 'city' /> 
									</span><br />
									<span> 
										<FormattedMessage id = 'phone' /> </span><br />
									<span>
										<a href = 'mailto:victormota042@gmail.com'> 
											<FormattedMessage 	id = 'email' />
										</a>
									</span>
								</p>
							</div>
							<div className = 'columns download'>
								<p>
									<a href = { resumecvfrontend } className = 'button' 					target = '_blank'>
										<i className = 'fa fa-download'></i>Download CV Frontend
									</a>
								</p>
								<p>
									<a href = { resumecvbackend } className = 'button' 					target = '_blank'>
										<i className = 'fa fa-download'></i>Download CV Backend
									</a>
								</p>
								<p>
									<a href = { resumecvfull } className = 'button' 					target = '_blank'>
										<i className = 'fa fa-download'></i>Download CV FullStack
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
    	);
  	}
}

export default About;