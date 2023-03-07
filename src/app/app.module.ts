import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutComponent } from './layout/layout.component';
import { HeaderModule } from './header/header.module';
import { AboutModule } from './about/about.module';
import { ResumeModule } from './resume/resume.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { CertificationsModule } from './certifications/certifications.module';

@NgModule({
	declarations: [
		AppComponent,
		LayoutComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		PdfViewerModule,
		NgbModule,
		HeaderModule,
		AboutModule,
		ResumeModule,
		PortfolioModule,
		CertificationsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }