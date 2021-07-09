import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyect-section',
  templateUrl: './proyect-section.component.html',
  styleUrls: ['./proyect-section.component.scss']
})
export class ProyectSectionComponent implements OnInit {


  titles:Array<String> = ["Título 1", "Título 2", "Título 3"]


  constructor() { }

  ngOnInit(): void {
  }

}
