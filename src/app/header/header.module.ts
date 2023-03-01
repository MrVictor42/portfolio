import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';
import { HomeModule } from '../home/home.module';

@NgModule({
	declarations: [
		HeaderComponent
	],
	imports: [
		CommonModule,
		HeaderRoutingModule,
		HomeModule
	],
	exports: [
		HeaderComponent
	]
})
export class HeaderModule { }
