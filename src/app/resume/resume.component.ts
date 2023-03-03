import { Component } from '@angular/core';
import { LanguageService } from '../language/language.service';

@Component({
	selector: 'app-resume',
	templateUrl: './resume.component.html',
	styleUrls: ['./resume.component.css']
})
export class ResumeComponent {

	locale: any;
	educations: Dictionary | any;

	constructor(private languageService: LanguageService) {

	}

	ngOnInit(): void {
		this.languageService.currentLanguage.subscribe(language => {
			this.locale = language;
			this.educations = this.locale.resumePage.education;
		});
	}

	keys(): Array<string> {
		return Object.keys(this.educations!!);
	}
}

interface Dictionary {
	[index: string]: string
}