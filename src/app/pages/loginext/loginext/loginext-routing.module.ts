import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginextPage } from './loginext.page';

const routes: Routes = [
  {
    path: '',
    component: LoginextPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginextPageRoutingModule {}
