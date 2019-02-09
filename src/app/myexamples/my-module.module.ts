import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MyExamplesComponent} from "./my-examples.component";
import {ComponentWithPopupComponent} from "./component-with-popup.component";
import {PopupDirective} from "./popup.directive";
import {MyContentProjectionHostComponent} from "./my-content-projection-host.component";
import {MyContentInjectorComponent} from "./my-content-injector.component";
import {MyContentTabComponent} from "./my-content-tab.component";
import {MyTabsetComponent} from "./my-tabset.component";
import {MyContentTabsDemoComponent} from "./my-content-tabs-demo.component";
import {TabsetDemoComponent} from "./tabs/tabset-demo.component";
import {TabsetComponent} from "./tabs/tabset.component";
import {TabComponent} from "./tabs/tab.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MyExamplesComponent,
    PopupDirective,
    ComponentWithPopupComponent,
    MyContentProjectionHostComponent,
    MyContentInjectorComponent,
    MyContentTabComponent,
    MyTabsetComponent,
    MyContentTabsDemoComponent,
    TabsetDemoComponent,
    TabsetComponent,
    TabComponent
  ]
})
export class MyModuleModule { }
