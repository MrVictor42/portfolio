import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import ptBr from '../jsons/translations/pt-br.json';
import enUs from '../jsons/translations/en-us.json';
import eses from '../jsons/translations/es-es.json';

class Certificate extends Component {
    
    render() {

        let resume = '';
        
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
        
        var certifications = resume.certification.map(function(certification){
			var certificationImage = 'images/certifications/' + certification.image
			return <div key = { certification.key } className = 'certifications'>
                    <h3> { certification.school } </h3>
                    <p className = 'info'> { certification.degree } <span>&bull;</span>
                        <em className = 'date'> { certification.graduated } </em>
                    </p>
                    <img 
                        className = 'skill' 
                        alt = { certification.degree } 
                        src = { certificationImage }
                    />
            </div>
        })

        return (
            <section id = 'certificate'>
                <div className = 'row certification'>
					<div className = 'three columns header-col'>
						<h1><span> <FormattedMessage id = 'certifications' /> </span></h1>
					</div>
					<div className = 'nine columns main-col'>
						<div className = 'row item'>
							<div className = 'twelve columns'>
								{ certifications }
							</div>
						</div>
					</div>
				</div>
            </section>
        )
    }
}

export default Certificate;