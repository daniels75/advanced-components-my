import {Component, HostBinding, Input} from "@angular/core";

@Component({
  selector: '[my-content-injector]',
  template: `
    <h3>{{header}}</h3>
    <ng-content></ng-content>
    <p>This is a content from injector component</p>
  `
})
export class MyContentInjectorComponent {
  @Input() header: string;
  @HostBinding('attr.class') attrClass = 'ui message';
}
