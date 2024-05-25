import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecetaService } from 'src/services/receta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recetario',
  templateUrl: './recetario.component.html',
  styleUrls: ['./recetario.component.scss'],
})
export class RecetarioComponent  implements OnInit {

  private activatedRoute = inject(ActivatedRoute);
  recetas: any[] = []; 

  //constructor(private recetaService: RecetaService) { } 
  constructor(private router: Router, private recetaService: RecetaService) {}

  viewRecipe(receta: any) {
    this.router.navigate(['/recipe-details', receta.id]);
  }

  ngOnInit() {
    this.recetas = this.recetaService.getRecipes();
  }

}
