import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccessibilityPageRoutingModule } from './accessibility-routing.module';

import { AccessibilityPage } from './accessibility.page';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccessibilityPageRoutingModule,
    MatButtonToggleModule
  ],
  declarations: [AccessibilityPage]
})
export class AccessibilityPageModule {}
