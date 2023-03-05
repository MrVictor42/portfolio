import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language/language.service';

@Component({
	selector: 'app-portfolio',
	templateUrl: './portfolio.component.html',
	styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

	locale: any;
	portfolio: Dictionary | any;

	constructor(private languageService: LanguageService) {

	}

	ngOnInit(): void {
		this.languageService.currentLanguage.subscribe(language => {
			this.locale = language;
			this.portfolio = this.locale.portfolioPage.portfolio;
		});
	}

	keysPortfolio(): Array<string> {
		return Object.keys(this.portfolio!!);
	}
}

interface Dictionary {
	[index: string]: string
}