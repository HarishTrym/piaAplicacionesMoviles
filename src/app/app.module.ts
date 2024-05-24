import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { LoginComponent } from './login/login.component';
import { RecetarioComponent } from './recetario/recetario.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeApp as initializeApp_alias, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics as getAnalytics_alias, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';

@NgModule({
  declarations: [AppComponent, AddRecipeComponent, LoginComponent, RecetarioComponent, SignUpComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ReactiveFormsModule, AngularFireModule.initializeApp({"projectId":"miapp-recetas-2132904","appId":"1:1047713110321:web:2876900a8608844b42b810","storageBucket":"miapp-recetas-2132904.appspot.com","apiKey":"AIzaSyA26zvSQbgLkZrh_dXadrfNPu5xs1QPvZ0","authDomain":"miapp-recetas-2132904.firebaseapp.com","messagingSenderId":"1047713110321","measurementId":"G-Z07LZHHL9Z"})],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideFirebaseApp(() => initializeApp({"projectId":"miapp-recetas-2132904","appId":"1:1047713110321:web:2876900a8608844b42b810","storageBucket":"miapp-recetas-2132904.appspot.com","apiKey":"AIzaSyA26zvSQbgLkZrh_dXadrfNPu5xs1QPvZ0","authDomain":"miapp-recetas-2132904.firebaseapp.com","messagingSenderId":"1047713110321","measurementId":"G-Z07LZHHL9Z"})), provideAuth(() => getAuth()), provideAnalytics(() => getAnalytics()), ScreenTrackingService, UserTrackingService, provideFirestore(() => getFirestore())],
  bootstrap: [AppComponent],
})
export class AppModule {}


// https://www.youtube.com/watch?v=Vd5iMDUywp4