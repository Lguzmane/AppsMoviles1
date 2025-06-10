import { Component } from '@angular/core';

@Component({
  selector: 'app-creargrupo',
  templateUrl: './creargrupo.page.html',
  styleUrls: ['./creargrupo.page.scss'],
  standalone: false,
})
export class CreargrupoPage {
  grupo = {
    nombre: '',
    contactos: [] as string[]
  };

  mostrarModal = false;

  contactosSimulados = [
    'Juan Pérez',
    'María Gómez',
    'Pedro Torres',
    'Laura Sánchez',
    'Carlos López',
    'Ana Fernández'
  ];

  abrirModalContactos() {
    this.mostrarModal = true;
  }

  cerrarModal() {
    this.mostrarModal = false;
  }

  agregarContacto(contacto: string) {
    if (!this.grupo.contactos.includes(contacto)) {
      this.grupo.contactos.push(contacto);
    }
  }

  eliminarContacto(contacto: string) {
    this.grupo.contactos = this.grupo.contactos.filter(c => c !== contacto);
  }

  guardarGrupo() {
    console.log('Grupo creado:', this.grupo);
    alert('¡Grupo creado exitosamente!');
    this.grupo = { nombre: '', contactos: [] };
  }
}
