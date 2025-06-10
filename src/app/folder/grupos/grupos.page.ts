import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.page.html',
  styleUrls: ['./grupos.page.scss'],
  standalone: false,
  animations: [
    trigger('slideIn', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateX(-20px)' }),
          stagger(100, [
            animate('400ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class GruposPage implements OnInit {
  grupos: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    // Grupos simulados
    this.grupos = [
      { id: 1, nombre: 'Amigas Colegio', miembros: 'Claudia Moraga, Tamara Farias, Mariana Tapia +2' },
      { id: 2, nombre: 'Amigos Duoc', miembros: 'Matias Robledo, Gabriel Soto, Daniela Fernandez +1' },
    ];
  }

  irADetalle(id: number) {
    this.router.navigate(['/folder/grupodetalle', id]);
  }
}
