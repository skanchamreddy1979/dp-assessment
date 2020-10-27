import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DynamicThemeSwitchersPageRoutingModule } from './dynamic-theme-switchers-routing.module';

import { DynamicThemeSwitchersPage } from './dynamic-theme-switchers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DynamicThemeSwitchersPageRoutingModule
  ],
  declarations: [DynamicThemeSwitchersPage]
})
export class DynamicThemeSwitchersPageModule {}
