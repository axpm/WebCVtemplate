import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import language_es from "../../assets/languages/es-ES.json";
import language_en from "../../assets/languages/en-US.json";

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent implements OnInit, OnChanges {

  @Input() language?: String;

  text = language_es.contact_section;

  constructor() { }

  ngOnInit(): void {
    this.selectLanguage();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.selectLanguage();
  }

  selectLanguage() {
    if (this.language == "es-ES") {
      this.text = language_es.contact_section;
    } else if (this.language == "en-US") {
      this.text = language_en.contact_section;
    }
  }

}
