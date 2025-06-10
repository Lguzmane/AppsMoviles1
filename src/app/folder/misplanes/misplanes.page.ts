import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-misplanes',
  templateUrl: './misplanes.page.html',
  styleUrls: ['./misplanes.page.scss'],
  standalone: false,
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('600ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class MisplanesPage implements OnInit {
  planes: any[] = [];

  constructor() {}

  ngOnInit() {
    this.planes = [
      { nombre: 'Cena con amigos', fechaHora: new Date('2025-06-20T20:00'), descripcion: 'Restaurante en el centro' },
      { nombre: 'Concierto', fechaHora: new Date('2025-06-15T21:00'), descripcion: 'Banda favorita en vivo' },
      { nombre: 'Paseo al parque', fechaHora: new Date('2025-06-18T11:00'), descripcion: 'Picnic con la familia' }
    ];

    this.planes.sort((a, b) => new Date(a.fechaHora).getTime() - new Date(b.fechaHora).getTime());
  }
}
