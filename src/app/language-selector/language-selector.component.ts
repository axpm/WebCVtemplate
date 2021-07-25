import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit{

  @Input() current_language?: String;
  @Output() change_language = new EventEmitter<string>();

  changeLanguage(language: string) {
    this.change_language.emit(language);
  }

  constructor() { }

  ngOnInit(): void {
  }
}
