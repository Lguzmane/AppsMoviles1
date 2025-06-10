import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';

const routes: Routes = [
  {
    path: '',
    component: FolderPage,
    children: [
      { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
      { path: 'misplanes', loadChildren: () => import('./misplanes/misplanes.module').then(m => m.MisplanesPageModule) },
      { path: 'grupos', loadChildren: () => import('./grupos/grupos.module').then(m => m.GruposPageModule) },
      { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
      { path: 'panoramas', loadChildren: () => import('./panoramas/panoramas.module').then(m => m.PanoramasPageModule) },
      { path: 'formulario', loadChildren: () => import('./formulario/formulario.module').then(m => m.FormularioPageModule) },
      { path: 'pagedata', loadChildren: () => import('./pagedata/pagedata.module').then(m => m.PagedataPageModule) },
      { path: 'grupodetalle/:id', loadChildren: () => import('./grupodetalle/grupodetalle.module').then(m => m.GrupodetallePageModule) },

      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  },
  {
    path: 'intereses',
    loadChildren: () => import('./intereses/intereses.module').then( m => m.InteresesPageModule)
  },
  {
    path: 'agenda',
    loadChildren: () => import('./agenda/agenda.module').then( m => m.AgendaPageModule)
  },
  {
    path: 'creargrupo',
    loadChildren: () => import('./creargrupo/creargrupo.module').then( m => m.CreargrupoPageModule)
  },
  {
    path: 'grupodetalle',
    loadChildren: () => import('./grupodetalle/grupodetalle.module').then( m => m.GrupodetallePageModule)
  },
  {
    path: 'crearpanorama',
    loadChildren: () => import('./crearpanorama/crearpanorama.module').then( m => m.CrearpanoramaPageModule)
  },
  {
    path: 'misplanes',
    loadChildren: () => import('./misplanes/misplanes.module').then( m => m.MisplanesPageModule)
  },


];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
