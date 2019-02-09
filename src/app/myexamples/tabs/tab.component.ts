import {Component, Input, OnInit} from "@angular/core";


@Component({
  selector: 'tab2',
  templateUrl: './tab.component.html'
})
export class TabComponent implements OnInit {
  @Input() title: string;
  @Input() name: string;
  active: boolean = false;

  ngOnInit() {

  }
}

