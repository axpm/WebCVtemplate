import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import language_es from "../../assets/languages/es-ES.json";
import language_en from "../../assets/languages/en-US.json";

@Component({
  selector: 'app-proyect-detail',
  templateUrl: './proyect-detail.component.html',
  styleUrls: ['./proyect-detail.component.scss']
})
export class ProyectDetailComponent implements OnInit {

  @Input() language?: String;
  @Input() btn?: String;
  @Input() text_content?: String;
  @Input() text_title?: String;
  @Input() img?: String;
  @Input() img_alt?: String;

  text = language_es.proyect_section;
  isVisible = false;

  selectedProject = "";

  constructor() { }

  ngOnInit(): void {
    this.selectLanguage();
    // setTimeout(() => { this.addListeners(); }, 500);
    this.isVisible = false;
    this.btn = this.text.button_close;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.selectLanguage();
    setTimeout(() => { 
      this.removeListeners();
      this.addListeners(); 
    }, 500);

  }
  
  selectLanguage() {
    if (this.language == "es-ES") {
      this.text = language_es.proyect_section;   
    } else if (this.language == "en-US") {
      this.text = language_en.proyect_section;
    }
    this.updateText();
  }

  updateText(){
    this.text.proyects.forEach(p => {
      if (p.identifier == this.selectedProject) {
        
        this.text_content = p.content;
        this.img = p.img_path;
        this.img_alt = p.img_alt;
        this.text_title = p.title;
      }
    });
    this.btn = this.text.button_close;
  }

  showPopUp(event:Event){
    this.isVisible = true;
    if (event){
      this.selectedProject = this.changeProject(event);
      this.updateText();
      
    }
    
          // console.log(this.selectedProject);
    
    const body = document.querySelector('body');
    if(body){
      body.classList.add('avoidScroll');
    }

    // let x = window.scrollX;
    // let y = window.scrollY;
    // window.onscroll = function () { window.scrollTo(x, y); };
  }

  changeProject(event: Event){
    const eventTarget = (event.target as Element);
    let result = " ";
    this.text.proyects.forEach(element => {
      const targetId = eventTarget.closest('.section')?.id;
      eventTarget.closest('.section')?.id;
      if (element.identifier == targetId){
        // result = element.content;
        result = element.identifier;
      }
    });
    return result;
  }
  
  closePopUp(event: Event) {
    this.isVisible = false;
    const body = document.querySelector('body');
    if (body) {
      body.classList.remove('avoidScroll');
    }
  }

  removeListeners(){
    const buttons = document.querySelectorAll(".button");

    let projectsId: string[];
    projectsId = [];
    this.text.proyects.forEach(element => {
      projectsId.push(element.identifier)
    });

    buttons.forEach((but) => {
      let c_project = but.closest('.section')?.id;
      if (c_project && projectsId.includes(c_project)) {
        but.removeEventListener("click", (event) => {
          this.showPopUp(event);
        });
      }
    })
  }

  addListeners() {
    const buttons = document.querySelectorAll(".button");

    let projectsId: string[];
    projectsId = [];
    this.text.proyects.forEach(element => {
      projectsId.push(element.identifier)
    });
    
    buttons.forEach((but) =>{
      let c_project = but.closest('.section')?.id;
      if (c_project && projectsId.includes(c_project)){
        but.addEventListener("click", (event)=>{this.showPopUp(event) });
      }
    })

  }



}


