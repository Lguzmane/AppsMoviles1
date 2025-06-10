import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private toastController: ToastController
  ) {}

  async onLogin() {
    if (!this.username || this.username.length < 3 || this.username.length > 8) {
      this.presentToast('El usuario debe tener entre 3 y 8 caracteres.');
      return;
    }

    if (!this.password || this.password.length < 4) {
      this.presentToast('La contraseña debe tener al menos 4 caracteres.');
      return;
    }

    if (this.username === 'demo' && this.password === '1234') {
      this.router.navigate(['/folder/home']);
    } else {
      this.presentToast('Credenciales incorrectas.');
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color: 'danger'
    });
    toast.present();
  }
}
