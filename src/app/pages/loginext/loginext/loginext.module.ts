import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginextPageRoutingModule } from './loginext-routing.module';

import { LoginextPage } from './loginext.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginextPageRoutingModule
  ],
  declarations: [LoginextPage]
})
export class LoginextPageModule {}
