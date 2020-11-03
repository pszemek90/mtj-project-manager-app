import {Component, ContentChild, Input, OnInit} from '@angular/core';
import {TabBodyComponent} from "./tab-body/tab-body.component";
import {TabLabelComponent} from "./tab-label/tab-label.component";

@Component({
  selector: 'app-tab-item',
  templateUrl: './tab-item.component.html',
  styleUrls: ['./tab-item.component.css']
})
export class TabItemComponent implements OnInit {
  @Input()
  label: string;

  @Input()
  isActive: boolean;

  @ContentChild(TabBodyComponent)
  bodyComponent: TabBodyComponent;

  @ContentChild(TabLabelComponent)
  labelComponent: TabLabelComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
