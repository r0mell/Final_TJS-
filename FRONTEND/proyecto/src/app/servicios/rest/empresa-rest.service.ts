import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Empresa} from "../../interfaces/Empresa";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";

@Injectable()

//Constructor sirve para inyectar dependencias.
export class EmpresaRest {

 nombreModelo = '/Empresa';

 constructor(private readonly _httpClient: HttpClient) {

 }

 buscarTodo(): Observable<Empresa []> {
  // http client es un observable
  const empresa$ = this._httpClient.get(environment.url + this.nombreModelo).pipe(
   map( // Esto es solo para castear a empresa.
    (respuesta) => {
     return <Empresa[]>respuesta;
    }
   )
  );

  return empresa$;
 }


 eliminarPorId(id: number): Observable<Empresa> {

  return this._httpClient.delete(environment.url + this.nombreModelo + `/${id}`)
   .pipe(
    // Esto es solo para castear a empresa.
   map(r => <Empresa> r));
 }

}
