import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InitialSecurityPageRoutingModule } from './initial-security-routing.module';

import { InitialSecurityPage } from './initial-security.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InitialSecurityPageRoutingModule
  ],
  declarations: [InitialSecurityPage]
})
export class InitialSecurityPageModule {}
