import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearpanoramaPageRoutingModule } from './crearpanorama-routing.module';

import { CrearpanoramaPage } from './crearpanorama.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearpanoramaPageRoutingModule
  ],
  declarations: [CrearpanoramaPage]
})
export class CrearpanoramaPageModule {}
