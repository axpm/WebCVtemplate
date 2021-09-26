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
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './button/button.component';
import { ProyectDetailComponent } from './proyect-detail/proyect-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    ExperienceSectionComponent,
    InfoSectionComponent,
    ProyectSectionComponent,
    ProyectComponent,
    ContactSectionComponent,
    LanguageSelectorComponent,
    MenuComponent,
    FooterComponent,
    ButtonComponent,
    ProyectDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
