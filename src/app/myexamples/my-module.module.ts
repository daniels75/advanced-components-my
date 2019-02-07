import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MyExamplesComponent} from "./my-examples.component";
import {ComponentWithPopupComponent} from "./component-with-popup.component";
import {PopupDirective} from "./popup.directive";
import {MyContentProjectionHostComponent} from "./my-content-projection-host.component";
import {MyContentInjectorComponent} from "./my-content-injector.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MyExamplesComponent,
    PopupDirective,
    ComponentWithPopupComponent,
    MyContentProjectionHostComponent,
    MyContentInjectorComponent
  ]
})
export class MyModuleModule { }
