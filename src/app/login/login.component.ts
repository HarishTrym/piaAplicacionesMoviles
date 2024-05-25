import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { FirestoreServiceService } from '../firestore-service.service';
import { AngularFirestore} from "@angular/fire/compat/firestore" 
import { Cuenta } from '../model/cuenta';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  ListaCuentas: Cuenta[] = [];
  CuentaObj : Cuenta = {
    id: '',
    nombre: '',
    contrasena: ''
  }
  id : string = '';
  nombre: string = '';
  contraseña: string = '';

  nombreGet:any
  contraseñaGet:any
  getData:any = [];


  private activatedRoute = inject(ActivatedRoute);
  
  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController, public navCtrl: NavController, private data: DataService) { 
   this.formularioLogin = this.fb.group({
      "nombre": new FormControl("", Validators.required),
      "password": new FormControl("", Validators.required)
    })
  }


  ngOnInit(): void {
    this.ObtenerCuentas();
  }

  ObtenerCuentas() {
    this.data.obtenerCuentas().subscribe(res => {
      this.ListaCuentas = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })
    }, err => {
      alert('Error while fetching the data');
    })
  }

  async ingresar(){
    var f = this.formularioLogin.value;

    this.ListaCuentas.forEach(element => {if(element.nombre === f.nombre && element.contrasena === f.password){
      console.log(element.nombre)
  }});
    
    if(this.ListaCuentas.findIndex(e => e.nombre === f.nombre) === this.ListaCuentas.findIndex(e => e.contrasena === f.password)) {
      localStorage.setItem('Ingresado', 'true');
      localStorage.setItem('Usuario', f.nombre);
      this.navCtrl.navigateRoot('cuenta');
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
