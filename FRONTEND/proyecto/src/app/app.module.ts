import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { Ruta404Component } from './rutas/ruta404/ruta404.component';
import { RutaGestionUsuariosComponent } from './rutas/ruta-gestion-usuarios/ruta-gestion-usuarios.component';
import { RutaGestionEmpresasComponent } from './rutas/ruta-gestion-empresas/ruta-gestion-empresas.component';
import { RutaMenuComponent } from './rutas/ruta-menu/ruta-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyHeadComponent } from './rutas/my-head/my-head.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

@NgModule({
  declarations: [ //Componentes
    AppComponent,
    RutaLoginComponent,
    Ruta404Component,
    RutaGestionUsuariosComponent,
    RutaGestionEmpresasComponent,
    RutaMenuComponent,
    MyHeadComponent
  ],
  imports: [ //Modulos
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [], //Servicios
  bootstrap: [AppComponent] //El componente principal
})


export class AppModule { }
