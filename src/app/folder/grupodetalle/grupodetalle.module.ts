import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GrupodetallePageRoutingModule } from './grupodetalle-routing.module';

import { GrupodetallePage } from './grupodetalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GrupodetallePageRoutingModule
  ],
  declarations: [GrupodetallePage]
})
export class GrupodetallePageModule {}
