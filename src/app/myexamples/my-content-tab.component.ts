import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'my-tab',
  templateUrl: './my-content-tab.component.html'
})
export class MyContentTabComponent implements OnInit {
  @Input() title: string
  active: boolean = false;
  name: string;
  constructor() {
  }
  ngOnInit() {

  }
}
