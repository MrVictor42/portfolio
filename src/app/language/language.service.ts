import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

import english from '../../assets/i18n/en-US.json';

@Injectable({
	providedIn: 'root'
})
export class LanguageService {

	language = new Subject<any>();
	private languageSource = new BehaviorSubject(english);
	currentLanguage = this.languageSource.asObservable();

	changeLanguage(language : any) {
		this.languageSource.next(language);
	}
}