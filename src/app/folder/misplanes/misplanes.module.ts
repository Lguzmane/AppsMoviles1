import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MisplanesPageRoutingModule } from './misplanes-routing.module';
import { MisplanesPage } from './misplanes.page';

import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisplanesPageRoutingModule,
    MatCardModule  
  ],
  declarations: [MisplanesPage]
})
export class MisplanesPageModule {}

