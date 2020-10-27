import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdditionalDevicePage } from './additional-device.page';

const routes: Routes = [
  {
    path: '',
    component: AdditionalDevicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdditionalDevicePageRoutingModule {}
