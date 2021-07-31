import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import language_es from "../../assets/languages/es-ES.json";
import language_en from "../../assets/languages/en-US.json";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() language?: String;

  text = language_es.footer;

  constructor() { }

  ngOnInit(): void {
    this.selectLanguage();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.selectLanguage();
  }

  selectLanguage() {
    if (this.language == "es-ES") {
      this.text = language_es.footer;
    } else if (this.language == "en-US") {
      this.text = language_en.footer;
    }
    
  }

}
