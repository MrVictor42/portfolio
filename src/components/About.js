import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class About extends Component {

	render() {

		const Profile_pic = 'images/profile_pic.jpg';
		const CV_download_Brazil = '/files/CV_Victor_Mota_Brazil.pdf';
		const CV_download_International = '/files/CV_Victor_Mota_International.pdf';

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
										<FormattedMessage id = 'city' /> <br />
										<FormattedMessage id = 'state' />,  
										<FormattedMessage id = 'zip' />
									</span><br />
									<span> 
										<FormattedMessage id = 'city' /> <br />
										<FormattedMessage id = 'phone' /> </span><br />
									<span>
										<a href = 'mailto:victormota042@gmail.com'> 
											<FormattedMessage 	id = 'email' />
										</a>
									</span>
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