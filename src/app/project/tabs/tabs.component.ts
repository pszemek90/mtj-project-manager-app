import {AfterContentChecked, AfterContentInit, Component, ContentChildren, OnInit, QueryList} from '@angular/core';
import {TabItemComponent} from "./tab-item/tab-item.component";
import {Observable} from "rxjs";
import {delay, map, startWith} from "rxjs/operators";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit, AfterContentInit, AfterContentChecked {

  @ContentChildren(TabItemComponent)
  tabs: QueryList<TabItemComponent>

  tabItems$: Observable<TabItemComponent[]>

  activeTab: TabItemComponent

  ngAfterContentInit() {
    this.tabItems$ = this.tabs.changes
      .pipe(startWith(""))
      .pipe(delay(0))
      .pipe(map(() => this.tabs.toArray()));
  }

  ngAfterContentChecked() {
    if(!this.activeTab){
      Promise.resolve().then(() => {
        this.activeTab = this.tabs.first;
      });
    }
  }

  selectTab(tabItem: TabItemComponent){
    if(!this.activeTab){
      return;
    }
    if(this.activeTab){
      this.activeTab.isActive = false;
    }

    this.activeTab = tabItem;
    tabItem.isActive = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
