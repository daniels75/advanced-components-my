import {Directive, OnInit} from "@angular/core";

@Directive({
  selector: '[popup]'
})
export class PopupDirective implements OnInit {

  constructor() {
    console.log('Popup directive');
  }

  ngOnInit(): void {
    console.log('Popup ngOnInit');
  }
}
