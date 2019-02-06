import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MyExamplesComponent} from "./my-examples.component";
import {ComponentWithPopupComponent} from "./component-with-popup.component";
import {PopupDirective} from "./popup.directive";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MyExamplesComponent,
    PopupDirective,
    ComponentWithPopupComponent
  ]
})
export class MyModuleModule { }
