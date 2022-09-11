import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ITab } from '../../interfaces/ITabs.interface';
import { MenuService } from '../../providers/menu.service';
import { Tabs } from './tabs.config';

@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage implements OnInit {
  public tabs: ITab[];
  /**
   *
   */
  constructor(
    private translateService: TranslateService,
    private menuService: MenuService,
  ) {

  }

  ngOnInit(): void {
    this.tabs = this.menuService.getTabsMenu();
  }
}
