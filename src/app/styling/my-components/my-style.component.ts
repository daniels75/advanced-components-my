import {Component} from "@angular/core";

@Component({
  selector: 'my-style-component',
  template: `
    <h3 class="ui horizontal divider">my - here we are using incline style</h3>
    <h3 class="borderOrange">my - here we use using component style</h3>
  `,
  styles: [`
    .borderOrange {
      border: 3px solid orange;
      padding: 2px;
      margin: 2px;
      font-size: 15px;
    }
  `]

})
export class MyStyleComponent {

}
