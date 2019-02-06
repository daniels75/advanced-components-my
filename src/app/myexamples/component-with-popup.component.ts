import {Component} from "@angular/core";

@Component({
  selector: 'component-with-popup',
  template: `
      <div class="ui message" popup message='Clicked message host element'>
        <div class="header">Learning Directives</div>
        <p>This should use a Popup directive</p>
      </div>
    <i class="alarm icon" popup message='Clicked alarm host element'></i>
  `
})
export class ComponentWithPopupComponent {

}
