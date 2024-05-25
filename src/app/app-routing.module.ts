import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecetarioComponent } from './recetario/recetario.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NoIngresadoGuard } from './no-ingresado.guard';
import { IngresadoGuard } from './ingresado.guard';
import { CuentaComponent } from './cuenta/cuenta.component';

const routes: Routes = [
 /* {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },*/
    {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NoIngresadoGuard]
  },
  {
    path: '',
    redirectTo: 'add-recipe',
    pathMatch: 'full'
  },
  {
    path: 'add-recipe',
    component: AddRecipeComponent,
    canActivate: [IngresadoGuard]
  },
  {
    path: '',
    redirectTo: 'recetario',
    pathMatch: 'full'
  },
  {
    path: 'recetario',
    component: RecetarioComponent,
    canActivate: [IngresadoGuard]
  },
  {
    path: '',
    redirectTo: 'sign-up',
    pathMatch: 'full'
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: '',
    redirectTo: 'cuenta',
    pathMatch: 'full'
  },
  {
    path: 'cuenta',
    component: CuentaComponent,
    canActivate: [IngresadoGuard]
  },
  {
    path: 'recipe-details',
    loadChildren: () => import('./recipe-details/recipe-details.module').then( m => m.RecipeDetailsPageModule)
  },
 /* {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule),
  },*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
