import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RutaLoginComponent} from './rutas/ruta-login/ruta-login.component';
import {Ruta404Component} from './rutas/ruta404/ruta404.component';
import {RutaGestionUsuariosComponent} from './rutas/ruta-gestion-usuarios/ruta-gestion-usuarios.component';
import {RutaGestionEmpresasComponent} from './rutas/ruta-gestion-empresas/ruta-gestion-empresas.component';
import {RutaMenuComponent} from './rutas/ruta-menu/ruta-menu.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import {MyHeadComponent} from './rutas/my-head/my-head.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule} from '@angular/material';
import {RutaGestionSucursalesComponent} from './rutas/ruta-gestion-sucursales/ruta-gestion-sucursales.component';
import {RutaSistemaVentilacionComponent} from './rutas/ruta-sistema-ventilacion/ruta-sistema-ventilacion.component';
import {RutaVistaUsuarioComponent} from './rutas/ruta-vista-usuario/ruta-vista-usuario.component';
import {RutaVistaAdministradorComponent} from './rutas/ruta-vista-administrador/ruta-vista-administrador.component';
import {HomeComponent} from './rutas/home/home.component';
import {HttpClientModule} from "@angular/common/http";
import { RutaGestionAreasComponent } from './rutas/ruta-gestion-areas/ruta-gestion-areas.component';
import {EmpresaRest} from "./servicios/rest/empresa-rest.service";
import { RutaCrearEmpresaComponent } from './rutas/ruta-crear-empresa/ruta-crear-empresa.component';


@NgModule({
 declarations: [ //Componentes
  AppComponent,
  RutaLoginComponent,
  Ruta404Component,
  RutaGestionUsuariosComponent,
  RutaGestionEmpresasComponent,
  RutaMenuComponent,
  //MyHeadComponent,
  RutaGestionSucursalesComponent,
  RutaSistemaVentilacionComponent,
  RutaVistaUsuarioComponent,
  RutaVistaAdministradorComponent,
  HomeComponent,
  RutaGestionAreasComponent,
  RutaCrearEmpresaComponent
 ],
 imports: [ //Modulos
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  HttpClientModule

 ],
 providers: [
  EmpresaRest
 ], //Servicios
 bootstrap: [AppComponent] //El componente principal
})


export class AppModule {
}
