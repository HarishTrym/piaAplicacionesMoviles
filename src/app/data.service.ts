import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Cuenta } from './model/cuenta';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs: AngularFirestore) { }

  añadirCuenta(cuenta: Cuenta) {
    cuenta.id = this.afs.createId();
    return this.afs.collection('/Cuenta').add(cuenta);
  }

  obtenerCuentas() {
    return this.afs.collection('/Cuenta').snapshotChanges();
  }
}
