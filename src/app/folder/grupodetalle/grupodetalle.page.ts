import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Grupo {
  id: number;
  nombre: string;
  miembros: string;
}

@Component({
  selector: 'app-grupodetalle',
  templateUrl: './grupodetalle.page.html',
  styleUrls: ['./grupodetalle.page.scss'],
  standalone: false
})
export class GrupodetallePage implements OnInit {
  grupoId!: number; 
  grupo: Grupo | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.grupoId = Number(this.route.snapshot.paramMap.get('id'));
    this.cargarGrupo();
  }

  cargarGrupo() {
    const grupos: Grupo[] = [
      { id: 1, nombre: 'Amigas Colegio', miembros: 'Claudia Moraga, Tamara Farias, Mariana Tapia +2' },
      { id: 2, nombre: 'Amigos Duoc', miembros: 'Matias Robledo, Gabriel Soto, Daniela Fernandez +1' },
    ];
    this.grupo = grupos.find(g => g.id === this.grupoId);
  }
}
