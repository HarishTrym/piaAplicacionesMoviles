import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent  implements OnInit {

  private activatedRoute = inject(ActivatedRoute);

  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController, public navCtrl: NavController) { 

    this.formularioRegistro = this.fb.group({
      "nombre": new FormControl("", Validators.required),
      "password": new FormControl("", Validators.required),
      "confirmacionPassword": new FormControl("", Validators.required)
    })
  }

  ngOnInit() {}

  async guardar(){
    var f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Tienes que llenar todos los datos',
        buttons: ['Aceptar']
      });
              
      await alert.present();
      return;
    }

    if(f.password != f.confirmacionPassword){
      const alert = await this.alertController.create({
        header: 'Contraseña incorrecta',
        message: 'La contraseña y su confirmación son diferentes',
        buttons: ['Aceptar']
      });
    
      await alert.present();
      return;
    }
      
    var usuario = {
      nombre: f.nombre,
      password: f.password  
    }

    localStorage.setItem('usuario',JSON.stringify(usuario));
    localStorage.setItem('Ingresado', 'true');
    this.navCtrl.navigateRoot('inicio');
  
  }
}