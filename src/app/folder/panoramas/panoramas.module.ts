import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PanoramasPageRoutingModule } from './panoramas-routing.module';

import { PanoramasPage } from './panoramas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PanoramasPageRoutingModule
  ],
  declarations: [PanoramasPage]
})
export class PanoramasPageModule {}
