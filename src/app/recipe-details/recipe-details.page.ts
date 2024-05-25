import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecetaService } from 'src/services/receta.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit {
  receta: any;

  constructor(private route: ActivatedRoute, private recetaService: RecetaService) {}
  
  ngOnInit() {
    const recetaId = this.route.snapshot.paramMap.get('id');
   // this.receta = this.recetaService.getRecipeById(recetaId);
  }

}
