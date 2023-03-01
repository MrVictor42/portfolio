import { Component, Input, OnInit } from '@angular/core';
import portuguese from '../../assets/i18n/pt-BR.json';
import english from '../../assets/i18n/en-US.json';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	@Input() language : string = "pt-BR";
	@Input() locale : any;

	ngOnInit(): void {
		this.locale = portuguese;
	}

	selectedLanguage(selectedLanguage : string) {
		switch(selectedLanguage) {
			case 'pt-BR' : {
				this.locale = portuguese;
				break;
			}
			case 'en-US' : {
				this.locale = english;
				break;
			}
			default: {
				this.locale = portuguese;
				break;
			}
		}
	}
}