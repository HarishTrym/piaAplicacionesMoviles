import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss'],
})
export class AddRecipeComponent  implements OnInit {

  private activatedRoute = inject(ActivatedRoute);
  constructor() { }

  ngOnInit() {}

}
