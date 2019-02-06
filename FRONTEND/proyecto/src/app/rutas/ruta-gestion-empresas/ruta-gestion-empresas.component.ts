import { Component, OnInit } from '@angular/core';
import {EmpresasService} from "../../servicios/empresas.service";

@Component({
  selector: 'app-ruta-gestion-empresas',
  templateUrl: './ruta-gestion-empresas.component.html',
  styleUrls: ['./ruta-gestion-empresas.component.scss']
})
export class RutaGestionEmpresasComponent implements OnInit {

 //Inyeccion de dependencias
  constructor(
   private readonly _empresaService: EmpresasService
  ) { }

  ngOnInit() {
  }

}
