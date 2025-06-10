import { Component } from '@angular/core';

@Component({
  selector: 'app-intereses',
  templateUrl: './intereses.page.html',
  styleUrls: ['./intereses.page.scss'],
  standalone: false,
})
export class InteresesPage {
  intereses = [
    { nombre: 'Deportes', color: 'success', seleccionado: false },
    { nombre: 'Cultura', color: 'secondary', seleccionado: false },
    { nombre: 'Música', color: 'tertiary', seleccionado: false },
    { nombre: 'Tecnología', color: 'warning', seleccionado: false },
    { nombre: 'Comida', color: 'danger', seleccionado: false },
    { nombre: 'Anime', color: 'medium', seleccionado: false },
    { nombre: 'Outdoor', color: 'primary', seleccionado: false },
    { nombre: 'Parques', color: 'success', seleccionado: false },
    { nombre: 'Talleres', color: 'secondary', seleccionado: false },
    { nombre: 'Manualidades', color: 'tertiary', seleccionado: false },
    { nombre: 'Cafeterías', color: 'warning', seleccionado: false },
    { nombre: 'Teterías', color: 'medium', seleccionado: false },
    { nombre: 'Cerveza', color: 'danger', seleccionado: false },
    { nombre: 'Vino', color: 'primary', seleccionado: false },
    { nombre: 'Congresos', color: 'secondary', seleccionado: false },
    { nombre: 'Artesanías', color: 'tertiary', seleccionado: false },
    { nombre: 'K-pop', color: 'medium', seleccionado: false },
    { nombre: 'Pop', color: 'danger', seleccionado: false },
    { nombre: 'Rock', color: 'primary', seleccionado: false },
    { nombre: 'Baile', color: 'success', seleccionado: false },
    { nombre: 'Discoteques', color: 'warning', seleccionado: false },
    { nombre: 'Transformistas', color: 'tertiary', seleccionado: false },
    { nombre: 'Arte', color: 'medium', seleccionado: false },
    { nombre: 'Exposiciones', color: 'secondary', seleccionado: false },
    { nombre: 'Tour', color: 'primary', seleccionado: false },
    { nombre: 'Spa', color: 'success', seleccionado: false }
  ];

  get interesesSeleccionados() {
    return this.intereses.filter(i => i.seleccionado);
  }

  get interesesNoSeleccionados() {
    return this.intereses.filter(i => !i.seleccionado);
  }

  toggleInteres(interes: any) {
    interes.seleccionado = !interes.seleccionado;
  }
}
