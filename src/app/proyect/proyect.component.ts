import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  @Input() btn?: String;
  @Input() id?: String;

  // @Output() idOut = new EventEmitter<string>();

  // sendId(idProyect: string) {
  //   this.idOut.emit(idProyect);
  // }

  constructor() { }

  ngOnInit(): void {    
  }

}
