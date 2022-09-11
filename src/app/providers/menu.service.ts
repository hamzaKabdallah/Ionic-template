import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ITab } from '../interfaces/ITabs.interface';
import { Tabs } from '../pages/tabs-page/tabs.config';

@Injectable({
    providedIn: 'root'
})
export class MenuService {
    constructor(
    private translateService: TranslateService) {
    }

    getTabsMenu(): ITab[] {
        return Tabs.map(tab => {
            const newTab = {
              ...tab,
              label: this.translateService.instant(tab.label)
            };
            return newTab;
          });
    }
}
