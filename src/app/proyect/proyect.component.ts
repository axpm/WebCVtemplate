import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-proyect',
  templateUrl: './proyect.component.html',
  styleUrls: ['./proyect.component.scss']
})
export class ProyectComponent implements OnInit {

  @Input() title?: String;
  @Input() content?: String;
  @Input() img?: String;
  @Input() img_alt?: String;

  constructor() { }

  ngOnInit(): void {
  }

}
