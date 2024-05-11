import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecetarioComponent } from './recetario/recetario.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NoIngresadoGuard } from './no-ingresado.guard';
import { IngresadoGuard } from './ingresado.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
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
    component: AddRecipeComponent
  },
  {
    path: '',
    redirectTo: 'recetario',
    pathMatch: 'full'
  },
  {
    path: 'recetario',
    component: RecetarioComponent
  },
  {
    path: '',
    redirectTo: 'sign-up',
    pathMatch: 'full'
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate: [IngresadoGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
