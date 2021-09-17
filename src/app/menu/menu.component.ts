import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import language_es from "../../assets/languages/es-ES.json";
import language_en from "../../assets/languages/en-US.json";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnChanges {

  @Input() language?: String;



  text = language_es.menu;
  show_list = false;

  display_menu = false;

  constructor() { }

  ngOnInit(): void {
    this.selectLanguage();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.selectLanguage();
  }

  selectLanguage() {
    if (this.language == "es-ES") {
      this.text = language_es.menu;
    } else if (this.language == "en-US") {
      this.text = language_en.menu;
    }
  }

  changeVisibility() {
    this.show_list = true;
    this.display_menu = !this.display_menu;
  }

  changeWindowLocation(location: string) {
    window.location.hash = location;
    console.log("A");

  }

}
