import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SteadyHomePageRoutingModule } from './steady-home-routing.module';

import { SteadyHomePage } from './steady-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SteadyHomePageRoutingModule
  ],
  declarations: [SteadyHomePage]
})
export class SteadyHomePageModule {}
