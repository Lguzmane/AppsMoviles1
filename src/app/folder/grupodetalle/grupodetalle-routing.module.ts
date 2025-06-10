import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrupodetallePage } from './grupodetalle.page';

const routes: Routes = [
  {
    path: '',
    component: GrupodetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrupodetallePageRoutingModule {}
