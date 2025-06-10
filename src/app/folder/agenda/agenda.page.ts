import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
  standalone: false,
})
export class AgendaPage implements OnInit {
  daysInMonth: any[] = [];
  selectedDay: any = null;
  horarios = ['Día Completo', '8 a 12', '12 a 16', '16 a 20', '20 a 00'];
  diasSemana = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
  diasLibres: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.generateMonthDays();
  }

  generateMonthDays() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days = [];

    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push({ date: new Date(year, month, i), selected: false, horario: '' });
    }

    this.daysInMonth = days;
  }

  toggleDay(day: any) {
    day.selected = !day.selected;
    if (day.selected) {
      this.selectedDay = day;
    } else {
      this.selectedDay = null;
      this.diasLibres = this.diasLibres.filter(d => d.date.getTime() !== day.date.getTime());
    }
  }

  guardarHorario() {
    if (this.selectedDay && this.selectedDay.horario) {
      const index = this.diasLibres.findIndex(d => d.date.getTime() === this.selectedDay.date.getTime());
      if (index > -1) {
        this.diasLibres[index].horario = this.selectedDay.horario;
      } else {
        this.diasLibres.push({ ...this.selectedDay });
      }
      alert(`Horario guardado para ${this.selectedDay.date.toLocaleDateString()}`);
    } else {
      alert('Por favor selecciona un día y un horario.');
    }
  }

  guardarAgenda() {
    console.log('Agenda completa:', this.diasLibres);
    alert('¡Agenda guardada con éxito!');
    this.router.navigate(['/folder/home']);
  }
}
