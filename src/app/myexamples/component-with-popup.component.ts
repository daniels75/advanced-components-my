import {Component} from "@angular/core";

@Component({
  selector: 'component-with-popup',
  template: `
      <div class="ui message" popup message='Clicked message host element' #popup1="popup">
        <div class="header">Learning Directives</div>
        <p>This should use a Popup directive</p>
      </div>
    <i class="alarm icon" popup message='Clicked alarm host element' #popup2="popup"></i>

      <div style="margin-top: 20px;">
        <button (click)="popup1.displayMessage()" class="ui button">
          Display popup for message element
        </button>

        <button (click)="popup2.displayMessage()" class="ui button">
          Display popup for alarm icon
        </button>
      </div>
    
  `
})
export class ComponentWithPopupComponent {

}
