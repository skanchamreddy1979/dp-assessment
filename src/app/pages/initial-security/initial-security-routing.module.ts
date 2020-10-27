import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InitialSecurityPage } from './initial-security.page';

const routes: Routes = [
  {
    path: '',
    component: InitialSecurityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InitialSecurityPageRoutingModule {}
