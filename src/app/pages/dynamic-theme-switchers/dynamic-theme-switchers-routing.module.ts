import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DynamicThemeSwitchersPage } from './dynamic-theme-switchers.page';

const routes: Routes = [
  {
    path: '',
    component: DynamicThemeSwitchersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DynamicThemeSwitchersPageRoutingModule {}
