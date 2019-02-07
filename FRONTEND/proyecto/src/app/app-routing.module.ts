import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
//import {MyHeadComponent} from "./rutas/my-head/my-head.component";
import {RutaLoginComponent} from "./rutas/ruta-login/ruta-login.component";
import {Ruta404Component} from "./rutas/ruta404/ruta404.component";
import {RutaMenuComponent} from "./rutas/ruta-menu/ruta-menu.component";
import {RutaGestionEmpresasComponent} from "./rutas/ruta-gestion-empresas/ruta-gestion-empresas.component";
import {RutaGestionUsuariosComponent} from "./rutas/ruta-gestion-usuarios/ruta-gestion-usuarios.component";
import {RutaGestionSucursalesComponent} from "./rutas/ruta-gestion-sucursales/ruta-gestion-sucursales.component";
import {RutaSistemaVentilacionComponent} from "./rutas/ruta-sistema-ventilacion/ruta-sistema-ventilacion.component";
import {RutaVistaAdministradorComponent} from "./rutas/ruta-vista-administrador/ruta-vista-administrador.component";
import {RutaVistaUsuarioComponent} from "./rutas/ruta-vista-usuario/ruta-vista-usuario.component";
import {HomeComponent} from "./rutas/home/home.component";
import {RutaGestionAreasComponent} from "./rutas/ruta-gestion-areas/ruta-gestion-areas.component";
import {RutaCrearEmpresaComponent} from "./rutas/ruta-crear-empresa/ruta-crear-empresa.component";

const routes: Routes = [
 {
  //si no se pone nada en el URL
  path: '',
  pathMatch: 'full',
  redirectTo: 'login'
 },
 {
  path: 'home',
  component: HomeComponent,
  children: [
   {
    path: 'gestion_empresas',
    component: RutaGestionEmpresasComponent
   },
   {
    path: 'crear-empresa',
    component: RutaCrearEmpresaComponent
   },
   {
    path: 'gestion_usuarios',
    component: RutaGestionUsuariosComponent
   },

   {
    path: 'gestion_sucursales',
    component: RutaGestionSucursalesComponent
   },

   {
    path: 'sistema_ventilacion',
    component: RutaSistemaVentilacionComponent
   },

   {
    path: 'gestion_areas',
    component: RutaGestionAreasComponent
   }

  ]

 },
 {
  path: 'login',
  component: RutaLoginComponent
 },
 {
  path: 'no-found',
  component: Ruta404Component
 },
 {
  path: 'menu',
  component: RutaMenuComponent,

 },
 {
  path: 'admin',
  component: RutaVistaAdministradorComponent
 },

 {
  path: 'user',
  component: RutaVistaUsuarioComponent
 },

 {
  path: '**',
  redirectTo: 'no-found'
 }


];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule {
}
