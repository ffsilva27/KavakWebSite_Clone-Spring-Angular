import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';
import {catchError, of} from 'rxjs';

export interface usuarioAutenticado {
  email:string,
  token:string
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  path:string = 'usuario/auth'

  usuarioAutentica: usuarioAutenticado = {
    email: '',
    token: ''
  }

  constructor(private http:HttpClient) { }

  headers(){
    let httpHeaders: HttpHeaders = new HttpHeaders();

    if(localStorage['token']) {
      httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + localStorage['token']);
    }
    return {headers: httpHeaders};
  }

  login(email:string, senha: string){
    return this.http.post<usuarioAutenticado>(env.baseUrl + this.path, {
      email:email,
      senha:senha
    }).pipe(
      catchError((x)=>{
        return of(x) 
      }),
    )
  }

}
