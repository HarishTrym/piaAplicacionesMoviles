import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {
  
  private activatedRoute = inject(ActivatedRoute);
  
  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController, public navCtrl: NavController) { 

    this.formularioLogin = this.fb.group({
      "nombre": new FormControl("", Validators.required),
      "password": new FormControl("", Validators.required)
    })
  }

  ngOnInit() {
  }

  async ingresar(){
    var f = this.formularioLogin.value;
  
    var usuario = JSON.parse(localStorage.getItem('usuario') || '{}');

    if(usuario.nombre == f.nombre && usuario.password == f.password) {
      console.log("Ingresado");
      localStorage.setItem('Ingresado', 'true');
      this.navCtrl.navigateRoot('inicio');
    }
    else {
      const alert = await this.alertController.create({
      header: 'Datos incorrectos',
      message: 'Tienes que llenar todos los datos correctamente',
      buttons: ['Aceptar']
      })
      
      await alert.present();
      return;
    }
  }
}
