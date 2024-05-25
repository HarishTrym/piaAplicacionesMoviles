import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecetaService } from 'src/services/receta.service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Receta } from '../model/receta';

@Component({
  selector: 'app-recetario',
  templateUrl: './recetario.component.html',
  styleUrls: ['./recetario.component.scss'],
})
export class RecetarioComponent  implements OnInit {

  private activatedRoute = inject(ActivatedRoute);
  ListaRecetas: Receta[] = [];
  Usuario = localStorage.getItem('Usuario');

  //constructor(private recetaService: RecetaService) { } 
  constructor(private router: Router, private recetaService: RecetaService, private data: DataService) {}

  viewRecipe(receta: any) {
    this.router.navigate(['/recipe-details', receta.id]);
  }

  ngOnInit() {
    console.log('Hola');
    this.ObtenerRecetas();
   this.ListaRecetas.forEach(element => {if(element.usuario === localStorage.getItem('Usuario')){
    console.log(element);
    }})
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
  
}
