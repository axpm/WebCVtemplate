import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { ExperienceSectionComponent } from './experience-section/experience-section.component';
import { InfoSectionComponent } from './info-section/info-section.component';
import { ProyectSectionComponent } from './proyect-section/proyect-section.component';
import { ProyectComponent } from './proyect/proyect.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    ExperienceSectionComponent,
    InfoSectionComponent,
    ProyectSectionComponent,
    ProyectComponent,
    ContactSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
