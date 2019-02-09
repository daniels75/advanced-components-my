import {AfterContentInit, Component, ContentChildren, OnInit, QueryList} from "@angular/core";
import {TabComponent} from "./tab.component";
import {ContentTabComponent} from "../../tabs/content-tabs-demo/content-tab.component";

@Component({
  selector: 'tabset2',
  templateUrl: './tabset.component.html'
})
export class TabsetComponent implements  AfterContentInit{
  @ContentChildren(TabComponent) allTabs: QueryList<TabComponent>;


 ngAfterContentInit() {
   this.allTabs.toArray()[0].active = true;
 }

 setActive(tab: TabComponent): void {
   this.allTabs.forEach(t => t.active = false);
   tab.active = true;
 }

}
