import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'my-app-content-tabs-demo',
  templateUrl: './my-content-tabs-demo.component.html'
})
export class MyContentTabsDemoComponent implements OnInit{
  tabs: any;

  ngOnInit() {
    this.tabs = [
      {title: 'About', content: 'This is the About tab'},
      {title: 'Blog', content: 'This is our blog'},
      {title: 'Contat us', content: 'Contact us here'}
    ]
  }

}
