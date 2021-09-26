import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() text?: String;

  @Input() type = "default";
  @Input() link? : String;
  @Input() img? : String;
  @Input() color? : String;

  @Input() move = false;

  // @Input() id? : String;

  constructor() { }

  ngOnInit(): void {
  }

}
