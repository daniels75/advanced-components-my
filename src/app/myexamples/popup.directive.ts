import {Directive, ElementRef, HostListener, Input, OnInit} from "@angular/core";

@Directive({
  selector: '[popup]',
  exportAs: 'popup'
})
export class PopupDirective implements OnInit {
  @Input() message: String;
  constructor(_elementRef: ElementRef) {
    console.log(`Popup directive ${_elementRef}`);
    console.log(_elementRef);
  }

  ngOnInit(): void {
    console.log('Popup ngOnInit');
  }

  @HostListener('click')
  displayMessage(): void {
    alert(this.message)
  }
}
