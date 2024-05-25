import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Cuenta } from './model/cuenta';
import { Receta } from './model/receta';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs: AngularFirestore) { }

  añadirCuenta(cuenta: Cuenta) {
    cuenta.id = this.afs.createId();
    return this.afs.collection('/Cuenta').add(cuenta);
  }

  añadirReceta(receta: Receta) {
    receta.id = this.afs.createId();
    return this.afs.collection('/Receta').add(receta);
  }

  obtenerCuentas() {
    return this.afs.collection('/Cuenta').snapshotChanges();
  }

  obtenerRecetas() {
    return this.afs.collection('/Receta').snapshotChanges();
  }
}
