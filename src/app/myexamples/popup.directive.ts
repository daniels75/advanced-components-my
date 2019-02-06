import {Directive, ElementRef, OnInit} from "@angular/core";

@Directive({
  selector: '[popup]'
})
export class PopupDirective implements OnInit {

  constructor(_elementRef: ElementRef) {
    console.log(`Popup directive ${_elementRef}`);
    console.log(_elementRef);
  }

  ngOnInit(): void {
    console.log('Popup ngOnInit');
  }
}
