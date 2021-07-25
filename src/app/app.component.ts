import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WebCVtemplate';
  language = "es-ES";

  selectLanguage(language: string) {
    this.language = language;
  }
}
