import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanoramasPage } from './panoramas.page';

const routes: Routes = [
  {
    path: '',
    component: PanoramasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanoramasPageRoutingModule {}
