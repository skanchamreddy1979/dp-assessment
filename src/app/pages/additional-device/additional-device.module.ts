import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdditionalDevicePageRoutingModule } from './additional-device-routing.module';

import { AdditionalDevicePage } from './additional-device.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdditionalDevicePageRoutingModule
  ],
  declarations: [AdditionalDevicePage]
})
export class AdditionalDevicePageModule {}
