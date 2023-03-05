import { Component } from '@angular/core';
import { LanguageService } from '../language/language.service';

import skillsJSON from '../../assets/i18n/skills.json';

@Component({
	selector: 'app-resume',
	templateUrl: './resume.component.html',
	styleUrls: ['./resume.component.css']
})
export class ResumeComponent {

	locale: any;
	educations: Dictionary | any;
	experience: Dictionary | any;
	skills: any;

	constructor(private languageService: LanguageService) {

	}

	ngOnInit(): void {
		this.languageService.currentLanguage.subscribe(language => {
			this.locale = language;
			this.educations = this.locale.resumePage.education;
			this.experience = this.locale.resumePage.experience;
			this.skills = skillsJSON;
			console.log(this.skills)
			console.log(skillsJSON)
		});
	}

	keysEducation(): Array<string> {
		return Object.keys(this.educations!!);
	}

	keysWorks(): Array<string> {
		return Object.keys(this.experience!!);
	}

	// keysSkills(): Array<string> {
	// 	return Object.keys(this.skills!!);
	// }
}

interface Dictionary {
	[index: string]: string
}