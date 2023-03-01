import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

import portuguese from '../../assets/i18n/pt-BR.json';

@Injectable({
	providedIn: 'root'
})
export class LanguageService {

	language = new Subject<any>();
	private languageSource = new BehaviorSubject(portuguese);
	currentLanguage = this.languageSource.asObservable();

	changeLanguage(language : any) {
		this.languageSource.next(language);
	}
}