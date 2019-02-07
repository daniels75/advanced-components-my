import {Component} from "@angular/core";


@Component({
    selector: 'my-content-projection-host',
    template: `
      <div my-content-injector header="Header from host component">
          <p>Content of the host component</p>
      </div>
    `
  }
)
export class MyContentProjectionHostComponent {

}
