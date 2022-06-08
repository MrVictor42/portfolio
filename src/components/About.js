import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import CVPtbr from '../files/CV_Victor_Mota_pt_br.pdf';
import CVEnUs from '../files/CV_Victor_Mota_en_us.pdf';
import CVEsEs from '../files/CV_Victor_Mota_es_es.pdf';

class About extends Component {

	render() {

		const Profile_pic = 'images/profile_pic.jpg';
		let resumecv = '';

		switch(this.props.country) {
			case 'pt-br':
				resumecv = CVPtbr;
				break;
			case 'en-us':
				resumecv = CVEnUs;
				break;
			case 'es-es':
				resumecv = CVEsEs;
				break;
			default:
				resumecv = CVPtbr;
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
									<a href = { resumecv } className = 'button' 					target = '_blank'>
										<i className = 'fa fa-download'></i>Download CV 
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