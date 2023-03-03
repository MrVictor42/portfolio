import { Component, OnInit} from '@angular/core';
import { LanguageService } from '../language/language.service';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
	
	locale : any;
	socialProfile : any;

	constructor(private languageService : LanguageService) {

	}

	ngOnInit(): void {
		this.languageService.currentLanguage.subscribe(language => {
			this.locale = language;
		});
	}
}