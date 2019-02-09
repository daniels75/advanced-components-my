import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'tabset-demo-component',
  templateUrl: './tabset-demo.component.html'
})
export class TabsetDemoComponent implements OnInit{
  tabs: any;

  ngOnInit() {
    this.tabs = [
      {name: 'First tab', title: 'First title', content: 'This is a content of the first tab'},
      {name: 'Second tab', title: 'Second title', content: 'This is a content of the second tab'},
      {name: 'Third tab', title: 'Third title', content: 'This is a content of the third tab'}
    ]
  }
}
