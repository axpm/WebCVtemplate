import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import language_es from "../../assets/languages/es-ES.json";
import language_en from "../../assets/languages/en-US.json";

@Component({
  selector: 'app-proyect-section',
  templateUrl: './proyect-section.component.html',
  styleUrls: ['./proyect-section.component.scss']
})
export class ProyectSectionComponent implements OnInit, OnChanges {

  @Input() language?: String;

  text = language_es.proyect_section;

  constructor() { }

  ngOnInit(): void {
    this.selectLanguage();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.selectLanguage();
  }

  selectLanguage() {
    if (this.language == "es-ES") {
      this.text = language_es.proyect_section;
    } else if (this.language == "en-US") {
      this.text = language_en.proyect_section;
    }
  }
}
