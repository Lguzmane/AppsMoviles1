import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})
export class HomePage implements OnInit {

  panoramas = [
    {
      id: 1,
      nombre: 'Festival de Música al Aire Libre',
      imagen: 'assets/panoramas/musica.jpg',
      intereses: ['Música', 'Outdoor']
    },
    {
      id: 2,
      nombre: 'Feria Gastronómica',
      imagen: 'assets/panoramas/comida.jpg',
      intereses: ['Comida', 'Cultura']
    },
    {
      id: 3,
      nombre: 'Taller de Manualidades',
      imagen: 'assets/panoramas/manualidades.jpg',
      intereses: ['Manualidades', 'Talleres']
    }
  ];

  constructor() { }

  ngOnInit() { }
}
