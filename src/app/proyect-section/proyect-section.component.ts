import { Component, OnInit } from '@angular/core';
import language_es from "../../assets/languages/es-ES.json"

@Component({
  selector: 'app-proyect-section',
  templateUrl: './proyect-section.component.html',
  styleUrls: ['./proyect-section.component.scss']
})
export class ProyectSectionComponent implements OnInit {

  text = language_es.proyect_section

  constructor() { }

  ngOnInit(): void {
  }

}
