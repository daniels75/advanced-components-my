import {Component} from "@angular/core";

@Component({
  selector: 'component-with-popup',
  template: `
      <div class="ui message" popup message='Clicked message from host element'>
        <div class="header">Learning Directives</div>
        <p>This should use a Popup directive</p>
      </div>
    <i class="alarm icon" popup></i>
  `
})
export class ComponentWithPopupComponent {

}
