import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RecetaService } from 'src/services/receta.service';
import { UtilsService } from 'src/services/utils.service';
import { Receta } from '../model/receta';
import { DataService } from '../data.service';
import { AlertController } from '@ionic/angular';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss'],
})
export class AddRecipeComponent  implements OnInit {

  private activatedRoute = inject(ActivatedRoute);


  ListaRecetas: Receta[] = []

  formularioAnadirReceta = new FormGroup({
    nombre : new FormControl("", Validators.required),
    ingredientes : new FormControl("", Validators.required),
    instrucciones : new FormControl("", Validators.required),
    imagen: new FormControl('', [Validators.required, Validators.min(0)])
  });

  recetaObj: Receta = {
    id: '',
    nombre: '',
    ingredientes: '',
    instrucciones: '',
    imagen: '',
    usuario: ''
  }
  ingresado = false;
  src = '';

  constructor(private recetaService: RecetaService, private utilSvc: UtilsService, public alertController: AlertController, private fb: FormBuilder, private data: DataService) {
   }

   ngOnInit(): void {
    this.ObtenerRecetas();
   }

   ObtenerRecetas() {
    this.data.obtenerRecetas().subscribe(res => {
      this.ListaRecetas = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })
    }, err => {
      alert('Error while fetching the data');
    })
  }


  async agregarData(){

    this.recetaObj.usuario = localStorage.getItem('Usuario');
    this.recetaObj.nombre = this.formularioAnadirReceta.value.nombre;
    this.recetaObj.ingredientes = this.formularioAnadirReceta.value.ingredientes;
    this.recetaObj.instrucciones = this.formularioAnadirReceta.value.instrucciones;
    this.recetaObj.imagen = this.formularioAnadirReceta.value.imagen;
  }

  async alertas(){
    
    var f = this.formularioAnadirReceta.value;
    if(this.formularioAnadirReceta.invalid){
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Tienes que llenar todos los datos',
        buttons: ['Aceptar']
      });
              
      await alert.present();
      return;
    }
  }

  addRecipe() {
    var f = this.formularioAnadirReceta.value;
    if(this.formularioAnadirReceta.invalid){
      this.alertas();
    }
    else{
      this.agregarData();
      this.data.añadirReceta(this.recetaObj)
    }

    //this.formularioAnadirReceta.value;
    //this.recetaService.addRecipe(this.receta);
    //this.receta ={
     // nombre: '',
     // ingredientes: [],
     // instrucciones:"",
     // imagen: [],
    //};
    this.ingresado = false;


  }

  async takeImage(){
    const DataUrl = (await this.utilSvc.takePicture('Imagen de la Receta')).dataUrl;
    this.formularioAnadirReceta.controls.imagen.setValue(DataUrl || null)
   // console.log(this.formularioAnadirReceta.value.imagen)
    this.ingresado = true;
  }

}
