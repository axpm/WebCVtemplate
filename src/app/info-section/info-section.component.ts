import { Component, OnInit } from '@angular/core';
import language_es from "../../assets/languages/es-ES.json";


@Component({
  selector: 'app-info-section',
  templateUrl: './info-section.component.html',
  styleUrls: ['./info-section.component.scss']
})
export class InfoSectionComponent implements OnInit {

  text = language_es.info_section;

  constructor() { }

  ngOnInit(): void {
  }

}
