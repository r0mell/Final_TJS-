import { Component, OnInit } from '@angular/core';
import {EmpresasService} from "../../servicios/empresas.service";
import {EmpresaRest} from "../../servicios/rest/empresa-rest.service";

@Component({
  selector: 'app-ruta-gestion-empresas',
  templateUrl: './ruta-gestion-empresas.component.html',
  styleUrls: ['./ruta-gestion-empresas.component.scss']
})
export class RutaGestionEmpresasComponent implements OnInit {


 empresas: Empresa[]; 
 //Inyeccion de dependencias
  constructor(
   private readonly _empresaRestService: EmpresaRest
  ) {


  }

  ngOnInit() {
  }

  imprimir(emp: Empresa){
   console.log("Hola",emp)

   const indice = this.empresas
    .findIndex( (empresaBuscar) =>
    {return empresaBuscar.id = emp.id;});

   this.empresas.splice(indice,1);
  }



}

interface Empresa{
 nombre?: string;
 id?:number;
}
