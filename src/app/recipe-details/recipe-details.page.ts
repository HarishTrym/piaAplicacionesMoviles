import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Receta } from '../model/receta';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit {
  receta : Receta = {
    id: '',
    nombre: '',
    ingredientes: '',
    instrucciones: '',
    imagen: '',
    usuario: '',
  };

  constructor(private route: ActivatedRoute) {}
  
  ngOnInit() {
    this.receta.nombre = localStorage.getItem('nombre') ;
    this.receta.ingredientes = localStorage.getItem('ingredientes') ;
    this.receta.instrucciones = localStorage.getItem('instrucciones') ;
    this.receta.imagen = localStorage.getItem('imagen') ;
  }

}
