import { Component, OnInit } from '@angular/core';
import language_es from "../../assets/languages/es-ES.json";

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent implements OnInit {

  text = language_es.contact_section

  constructor() { }

  ngOnInit(): void {
  }

}
