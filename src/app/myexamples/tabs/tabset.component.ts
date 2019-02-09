import {AfterContentInit, Component, ContentChildren, OnInit, QueryList} from "@angular/core";
import {TabComponent} from "./tab.component";
import {ContentTabComponent} from "../../tabs/content-tabs-demo/content-tab.component";

@Component({
  selector: 'tabset2',
  templateUrl: './tabset.component.html'
})
export class TabsetComponent{
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;




}
