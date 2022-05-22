import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Data } from '../models/data.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = 'http://localhost:3000/api'
  constructor( private http: HttpClient ) { }

  setUser(data: any){
    return this.http.post<Data>(`${ this.url }/usuario/create`,data);
    }

    login(data: any){
        return this.http.post<Data>(`${ this.url }/usuario/get/login`,data);
        }

//   getUser(){
//     return this.http.get(`${ this.url }/users?per_page=6&delay=3`)
//     .pipe(
//       map((resp: any) => resp[ 'data' ] )
//     );
//   }

//   getUserById( id:string ){
//     return this.http.get(`${ this.url }/users/${id}`)
//     .pipe(
//       map((resp: any) => resp[ 'data' ] )
//     );
//   }
}
