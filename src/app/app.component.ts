import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/folder/home', icon: 'home' },
    { title: 'Mis Grupos', url: '/folder/grupos', icon: 'people' },
    { title: 'Panoramas Cercanos', url: '/folder/panoramas', icon: 'map' },
    { title: 'Mis Planes', url: '/folder/misplanes', icon: 'calendar' },
    { title: 'Crear Panorama', url: '/folder/crearpanorama', icon: 'add-circle' },
    { title: 'Login', url: '/folder/login', icon: 'log-in' },
  ];


  constructor() {}
}
