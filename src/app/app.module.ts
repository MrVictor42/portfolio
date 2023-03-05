import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutComponent } from './layout/layout.component';
import { HeaderModule } from './header/header.module';
import { AboutModule } from './about/about.module';
import { ResumeModule } from './resume/resume.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { TestemonialsModule } from './testemonials/testemonials.module';
import { FooterModule } from './footer/footer.module';

@NgModule({
	declarations: [
		AppComponent,
		LayoutComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NgbModule,
		HeaderModule,
		AboutModule,
		ResumeModule,
		PortfolioModule,
		TestemonialsModule,
		FooterModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }