import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagedataPage } from './pagedata.page';

const routes: Routes = [
  {
    path: '',
    component: PagedataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagedataPageRoutingModule {}
