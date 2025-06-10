import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearpanoramaPage } from './crearpanorama.page';

const routes: Routes = [
  {
    path: '',
    component: CrearpanoramaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearpanoramaPageRoutingModule {}
