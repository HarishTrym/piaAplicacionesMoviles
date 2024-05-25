import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {
  private recetas: any[] = [];

  constructor() { }

  addRecipe(receta: any){
    this.recetas.push(receta);
  }

  getRecipes(){
    return this.recetas;
  }
}