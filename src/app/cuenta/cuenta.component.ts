import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.scss'],
})
export class CuentaComponent  implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}

  nombre = localStorage.getItem('Usuario');

  cerrarSesion(){
    localStorage.clear();
    this.navCtrl.navigateRoot('inicio');
  }
}
