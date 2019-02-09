import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'tabset-demo-component',
  templateUrl: './tabset-demo.component.html'
})
export class TabsetDemoComponent implements OnInit{
  tabs: any;

  ngOnInit() {
    this.tabs = [
      {name: '3rd tab', title: 'Third title', content: 'This is a content of the Third tab'},
      {name: '4th tab', title: 'Fifth title', content: 'This is a content of the Fifth tab'},
      {name: '%th tab', title: 'Sixth title', content: 'This is a content of the Sixth tab'}
    ]
  }
}
