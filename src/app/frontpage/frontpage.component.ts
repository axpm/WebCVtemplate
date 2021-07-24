import { Component, OnInit } from '@angular/core';
import language_es from "../../assets/languages/es-ES.json"

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss']
})
export class FrontpageComponent implements OnInit {

  text = language_es.frontpage;

  constructor() {
    console.log(this.text.name);

  }

  ngOnInit(): void {

  }

}
