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
	experience : Dictionary | any;
	skills : Dictionary | any;

	constructor(private languageService: LanguageService) {

	}

	ngOnInit(): void {
		this.languageService.currentLanguage.subscribe(language => {
			this.locale = language;
			this.educations = this.locale.resumePage.education;
			this.experience = this.locale.resumePage.experience;
			this.skills = this.locale.resumePage.skills;
		});
	}

	keysEducation(): Array<string> {
		return Object.keys(this.educations!!);
	}

	keysWorks(): Array<string> {
		return Object.keys(this.experience!!);
	}

	keysSkills(): Array<string> {
		return Object.keys(this.skills!!);
	}
}

interface Dictionary {
	[index: string]: string
}