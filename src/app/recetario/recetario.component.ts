import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recetario',
  templateUrl: './recetario.component.html',
  styleUrls: ['./recetario.component.scss'],
})
export class RecetarioComponent  implements OnInit {

  private activatedRoute = inject(ActivatedRoute);

  constructor() { } 

  ngOnInit() {}

}
