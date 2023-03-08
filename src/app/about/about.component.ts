import { Component, OnInit} from '@angular/core';
import { LanguageService } from '../language/language.service';

import english from '../../assets/i18n/en-US.json';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
	
	locale : any;
	socialProfile : any;
	pdfPath : string = "";

	constructor(private languageService : LanguageService) {

	}

	ngOnInit(): void {
		this.languageService.currentLanguage.subscribe(language => {
			this.locale = language;
		});
	}

	showCV() {
		if(this.locale == english) {
			this.pdfPath = "/assets/pdf/CV_Victor_Mota.pdf";
		} else {
			this.pdfPath = "/assets/pdf/CV_Victor_Mota_pt_br.pdf";
		}
	}
}