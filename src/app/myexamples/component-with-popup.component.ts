import {Component} from "@angular/core";

@Component({
  selector: 'component-with-popup',
  template: `
      <div class="ui message" popup>
        <div class="header">Learning Directives</div>
      </div>
    <p>This should use a Popup directive</p>
  `
})
export class ComponentWithPopupComponent {

}
