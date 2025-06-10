import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panoramas',
  templateUrl: './panoramas.page.html',
  styleUrls: ['./panoramas.page.scss'],
  standalone: false,
})
export class PanoramasPage implements OnInit {
  panoramas = [
    { id: 1, nombre: 'Concierto en el Parque', descripcion: 'Música en vivo este sábado.', mostrarGrupos: false },
    { id: 2, nombre: 'Feria Gastronómica', descripcion: 'Disfruta de sabores únicos.', mostrarGrupos: false },
    { id: 3, nombre: 'Trekking Cerro', descripcion: 'Actividad al aire libre este domingo.', mostrarGrupos: false }
  ];

  grupos = ['Amigas Colegio', 'Amigos Duoc'];

  constructor() {}

  ngOnInit() {}

  toggleGrupos(panorama: any) {
    panorama.mostrarGrupos = !panorama.mostrarGrupos;
  }

  agregarAGrupo(panorama: any, grupo: string) {
    alert(`¡"${panorama.nombre}" agregado al grupo "${grupo}"!`);
    panorama.mostrarGrupos = false;
  }
}
