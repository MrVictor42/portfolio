import { Component, OnInit } from '@angular/core';

import { LanguageService } from '../language/language.service';
import social from '../../assets/i18n/social.json';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	locale : any;
	socialProfile : any;

	constructor(private languageService : LanguageService) {

	}

	ngOnInit(): void {
		this.languageService.currentLanguage.subscribe(language => {
			this.locale = language;
		});
		this.socialProfile = social;
	}
}