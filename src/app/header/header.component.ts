import { Component, OnInit } from '@angular/core';

import portuguese from '../../assets/i18n/pt-BR.json';
import english from '../../assets/i18n/en-US.json';
import { LanguageService } from '../language/language.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	locale : any;

	ngOnInit(): void {
		this.locale = english;
	}

	constructor(private languageService : LanguageService) {

	}

	selectedLanguage(selectedLanguage : string) {
		switch(selectedLanguage) {
			case 'pt-BR' : {
				this.locale = portuguese;
				this.languageService.changeLanguage(portuguese);
				break;
			}
			case 'en-US' : {
				this.locale = english;
				this.languageService.changeLanguage(english);
				break;
			}
			default: {
				this.locale = english;
				break;
			}
		}
	}
}