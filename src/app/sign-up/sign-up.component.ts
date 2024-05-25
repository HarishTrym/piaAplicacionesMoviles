import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { FirestoreServiceService } from '../firestore-service.service';
import { Cuenta } from '../model/cuenta';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent  implements OnInit {

  ListaCuentas: Cuenta[] = [];
  CuentaObj : Cuenta = {
    id: '',
    nombre: '',
    contrasena: ''
  }

  nombreGet:any
  contraseñaGet:any
  getData:any = [];

  private activatedRoute = inject(ActivatedRoute);

  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController, public navCtrl: NavController, private FireService: FirestoreServiceService, private data: DataService) { 

    this.formularioRegistro = this.fb.group({
      "nombre": new FormControl("", Validators.required),
      "password": new FormControl("", Validators.required),
      "confirmacionPassword": new FormControl("", Validators.required)
    })
  }

  ngOnInit() {
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


  async agregarData(){
    this.CuentaObj.nombre = this.formularioRegistro.value.nombre
    this.CuentaObj.contrasena = this.formularioRegistro.value.password
  }

  
  async alertas(){
    
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

    if(this.ListaCuentas.some(e => e.nombre === f.nombre)){
      const alert = await this.alertController.create({
        header: 'Nombre ya en uso',
        message: 'El nombre está actualmente en uso',
        buttons: ['Aceptar']
      });
    
      await alert.present();
      return;
    }
  }

  createData(){
    var f = this.formularioRegistro.value;
    if(this.formularioRegistro.invalid || f.password != f.confirmacionPassword || this.ListaCuentas.some(e => e.nombre === f.nombre)){
      this.alertas();
    }
    else{
      this.agregarData();
      this.data.añadirCuenta(this.CuentaObj);
    }
  }
}