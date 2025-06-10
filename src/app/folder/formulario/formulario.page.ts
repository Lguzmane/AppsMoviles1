import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
  standalone: false,
})
export class FormularioPage {
  registro = {
    nombre: '',
    apellido: '',
    correo: '',
    password: '',
    confirmPassword: '',
    rut: '',
    fechaNacimiento: '',
    region: '',
    comuna: '',
    telefono: '', 
    intereses: [] as string[]
  };

  regiones: string[] = [
    'Arica y Parinacota', 'Tarapacá', 'Antofagasta', 'Atacama', 'Coquimbo',
    'Valparaíso', 'Metropolitana', 'O’Higgins', 'Maule', 'Ñuble',
    'Biobío', 'La Araucanía', 'Los Ríos', 'Los Lagos',
    'Aysén', 'Magallanes'
  ];

  comunasValpo: string[] = ['Viña del Mar', 'Valparaíso', 'Quilpué', 'La cruz', 'Quillota', 'La calera'];

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
    { nombre: 'Manualidades', color: 'tertiary', seleccionado: false }
  ];

  constructor() {}

  toggleInteres(interes: any) {
    interes.seleccionado = !interes.seleccionado;
    if (interes.seleccionado) {
      this.registro.intereses.push(interes.nombre);
    } else {
      this.registro.intereses = this.registro.intereses.filter(i => i !== interes.nombre);
    }
  }

  onRegionChange() {
    if (this.registro.region !== 'Valparaíso') {
      this.registro.comuna = '';
    }
  }

  onSubmit() {
    if (this.registro.password !== this.registro.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    console.log('Datos de registro:', this.registro);
    alert('¡Registro enviado con éxito!');
  }
}
