import { Component, OnInit } from '@angular/core';
import language_es from "../../assets/languages/es-ES.json";


@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.scss']
})
export class ExperienceSectionComponent implements OnInit {

  text = language_es.experience_section;

  constructor() { }

  ngOnInit(): void {
  }

}
