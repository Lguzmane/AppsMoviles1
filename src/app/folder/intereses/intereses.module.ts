import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InteresesPageRoutingModule } from './intereses-routing.module';

import { InteresesPage } from './intereses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InteresesPageRoutingModule
  ],
  declarations: [InteresesPage]
})
export class InteresesPageModule {}
