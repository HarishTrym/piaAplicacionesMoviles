import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {
  
  private activatedRoute = inject(ActivatedRoute);
  
  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController) { 

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
    }
    else {
      const alert = await this.alertController.create({
      header: 'Datos incompletos',
      message: 'Tienes que llenar todos los datos',
      buttons: ['Aceptar']
      })
      
      await alert.present();
      return;
    }
  }
}
