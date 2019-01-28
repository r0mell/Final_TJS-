import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MyHeadComponent} from "./rutas/my-head/my-head.component";
import {RutaLoginComponent} from "./rutas/ruta-login/ruta-login.component";
import {Ruta404Component} from "./rutas/ruta404/ruta404.component";
import {RutaMenuComponent} from "./rutas/ruta-menu/ruta-menu.component";

const routes: Routes = [
  {
    //si no se pone nada en el URL
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'principal',
    component: MyHeadComponent
  },
  {
    path: 'login',
    component: RutaLoginComponent
  },
  {
    path:'no-found',
    component: Ruta404Component
  },
  {
    path: 'menu',
    component: RutaMenuComponent


  },
  {
    path:'**',
    redirectTo:'no-found'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
