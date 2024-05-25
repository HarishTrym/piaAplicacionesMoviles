import { Injectable } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { addDoc, collection } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { firebaseConfig } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirestoreServiceService {

  constructor(private FireStore: Firestore) { }


  async guardarDatosRegistro(nombre: any, contraseña: any, id: any){

    let obj = {
      "nombre": nombre,
      "contraseña": contraseña,
      "id": id,
    };

    const ref = collection(this.FireStore, 'Cuenta');
    await addDoc(ref, obj);
    console.log('Hola Mundo');
  }

  getDate(): Observable<any[]> {
    const ref = collection(this.FireStore, 'Cuenta');
    return collectionData(ref, { idField: 'id'}) as Observable<any>
  }
}
