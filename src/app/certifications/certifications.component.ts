import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language/language.service';

import certificationsJSON from '../../assets/i18n/certifications.json';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {
	
	locale: any;
	certifications: any;

	constructor(private languageService: LanguageService) {

	}

	ngOnInit(): void {
		this.languageService.currentLanguage.subscribe(language => {
			this.locale = language;
			this.certifications = certificationsJSON.certifications;
		});
	}

	keysCertifications(): Array<string> {
		return Object.keys(this.certifications!!);
	}
}