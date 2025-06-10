import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-crearpanorama',
  templateUrl: './crearpanorama.page.html',
  styleUrls: ['./crearpanorama.page.scss'],
  standalone: false
})
export class CrearpanoramaPage implements OnInit {
  panorama: any = {
    nombre: '',
    fechaHora: '',
    descripcion: '',
    tipo: 'privado',
    invitados: '',
    imagen: null
  };

  constructor(
    private navCtrl: NavController,
    private alertController: AlertController
  ) {}

  ngOnInit() {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.panorama.imagen = file;
      console.log('Imagen seleccionada:', file.name);
    }
  }

  async guardarPanorama() {
    if (!this.panorama.nombre || !this.panorama.fechaHora) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor completa todos los campos obligatorios.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    if (this.panorama.tipo === 'privado') {
      const invitadosArray = this.panorama.invitados
        ? this.panorama.invitados.split(',').map((i: string) => i.trim())
        : [];
      if (invitadosArray.length > 30) {
        const alert = await this.alertController.create({
          header: 'Límite Excedido',
          message: 'No puedes agregar más de 30 invitados.',
          buttons: ['OK']
        });
        await alert.present();
        return;
      }
    }

    if (this.panorama.tipo === 'publico') {
      const alert = await this.alertController.create({
        header: 'Pago Necesario',
        message: 'Para publicar un panorama público debes pagar $5 USD.',
        buttons: ['OK']
      });
      await alert.present();
    
    }

    console.log('Panorama guardado:', this.panorama);
    

    const alert = await this.alertController.create({
      header: 'Éxito',
      message: '¡Panorama creado exitosamente!',
      buttons: ['OK']
    });
    await alert.present();
    this.navCtrl.back();  
  }
}
