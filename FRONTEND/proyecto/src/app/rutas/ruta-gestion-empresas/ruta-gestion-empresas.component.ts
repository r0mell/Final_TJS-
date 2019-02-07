import {Component, OnInit} from '@angular/core';
import {EmpresaRest} from "../../servicios/rest/empresa-rest.service";
import {Empresa} from "../../interfaces/Empresa";

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

  const empresa$ = this._empresaRestService.buscarTodo();

  empresa$
   .subscribe(
    (empresas: Empresa[]) => {
     console.log(empresas);
     this.empresas = empresas;
    }, (error) => {
     console.error('Error', error);
    }
   )
 }


 eliminar(empresa: Empresa) {

  const empresaEliminada$ = this._empresaRestService.eliminarPorId(empresa.id)

  empresaEliminada$
   .subscribe(
    (empresaEliminada: Empresa) => {
     console.log('Se Elimino', empresaEliminada)
     const indice = this.empresas.findIndex((r) => r.id === empresa.id);

     this.empresas.splice(indice,1);
    },
    (error) => {
     console.log('Error', error);
    }
   )
 }


 /*
 imprimir(emp: Empresa){
  console.log("Hola",emp)

  const indice = this.empresas
   .findIndex( (empresaBuscar) =>
   {return empresaBuscar.id = emp.id;});

  this.empresas.splice(indice,1);
 }
*/

}

