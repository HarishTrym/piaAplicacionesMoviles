import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Recetario', url: '/recetario', icon: 'book' },
    { title: 'Añadir Receta', url: '/add-recipe', icon: 'add'},
    { title: 'Registro', url: '/sign-up', icon: 'person-add' },
    { title: 'Iniciar Sesión', url: '/login', icon: 'log-in' },
    { title: 'Cuenta', url: '/cuenta', icon: 'person' },
   /* { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },*/
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
