import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';
import {catchError, of} from 'rxjs';

export interface usuarioCadastradoInterface {
  email: string,
  msg: string
}

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  path: string = 'usuario'

  constructor(private http:HttpClient) { }

  usuarioCadastrado: usuarioCadastradoInterface = {
    email: '',
    msg: ''
  }

  cadastrarUsuario(nome:string, email:string, senha:string){
    return this.http.post<usuarioCadastradoInterface>(env.baseUrl + this.path, {
      nome: nome,
      email:email,
      senha:senha
    }).pipe(
      catchError((x)=>{
        console.log(x)
        return of(x) 
      }),
    )
  }
}
