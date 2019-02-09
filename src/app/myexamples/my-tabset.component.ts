import {AfterContentInit, Component, ContentChildren, QueryList} from "@angular/core";
import {MyContentTabComponent} from "./my-content-tab.component";


@Component( {
  selector: 'my-tabset',
  templateUrl: './my-tabset.component.html'
})
export class MyTabsetComponent implements AfterContentInit{
  @ContentChildren(MyContentTabComponent) tabs: QueryList<MyContentTabComponent>;

  ngAfterContentInit() {
    this.tabs.toArray()[0].active = true;
  }

  setActive(tab: MyContentTabComponent): void {
    this.tabs.toArray().forEach(t => t.active = false);
    tab.active = true;

  }
}
