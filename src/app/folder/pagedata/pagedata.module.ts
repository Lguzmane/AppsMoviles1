import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagedataPageRoutingModule } from './pagedata-routing.module';

import { PagedataPage } from './pagedata.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagedataPageRoutingModule
  ],
  declarations: [PagedataPage]
})
export class PagedataPageModule {}
