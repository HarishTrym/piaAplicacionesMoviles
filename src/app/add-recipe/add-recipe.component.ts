import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecetaService } from 'src/services/receta.service';
import { UtilsService } from 'src/services/utils.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss'],
})
export class AddRecipeComponent  implements OnInit {

  private activatedRoute = inject(ActivatedRoute);
  receta = {
    nombre: '',
    ingredientes: [],
    instrucciones:"",
  }

  constructor(private recetaService: RecetaService, private utilSvc: UtilsService) { }

  addRecipe() {
    this.recetaService.addRecipe(this.receta);
    this.receta ={
      nombre: '',
      ingredientes: [],
      instrucciones:""
    };
  }

  async takeImage(){
    const DataUrl = (await this.utilSvc.takePicture('Imagen de la Receta')).dataUrl;
    console.log(DataUrl);
  }

  ngOnInit(): void {
    
  }

}
