import {AfterContentInit, Component, ContentChildren, OnInit, QueryList} from "@angular/core";
import {TabComponent} from "./tab.component";
import {ContentTabComponent} from "../../tabs/content-tabs-demo/content-tab.component";

@Component({
  selector: 'tabset2',
  templateUrl: './tabset.component.html'
})
export class TabsetComponent implements  AfterContentInit{
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;


 ngAfterContentInit() {
   this.tabs.toArray()[0].active = true;
 }

 setActive(tab: TabComponent): void {
   this.tabs.forEach(t => t.active = false);
   tab.active = true;
 }

}
