import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestemonialsRoutingModule } from './testemonials-routing.module';
import { TestemonialsComponent } from './testemonials.component';


@NgModule({
	declarations: [
		TestemonialsComponent
	],
	imports: [
		CommonModule,
		TestemonialsRoutingModule
	],
	exports: [
		TestemonialsComponent
	]
})
export class TestemonialsModule { }
