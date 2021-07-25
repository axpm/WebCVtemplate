import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import language_es from "../../assets/languages/es-ES.json";
import language_en from "../../assets/languages/en-US.json";

@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.scss']
})
export class ExperienceSectionComponent implements OnInit {

  @Input() language?: String;

  text = language_es.experience_section;

  constructor() { }

  ngOnInit(): void {
    this.selectLanguage();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.selectLanguage();
  }

  selectLanguage() {
    if (this.language == "es-ES") {
      this.text = language_es.experience_section;
    } else if (this.language == "en-US") {
      this.text = language_en.experience_section;
    }
  }

}
