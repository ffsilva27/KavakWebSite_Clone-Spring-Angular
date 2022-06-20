import { LoginService } from './../login/login.service';
import { anuncioInfo } from './../listagem-anuncio/listagem-anuncio.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';
import {catchError, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroAnuncioService {

  path: string = "anuncio/salvar";

  constructor(private http: HttpClient, private loginService:LoginService) { }

  cadastrarAnuncio(fabricante:string, modelo: string, anomodelo:string, valor: number, km:string, foto:string){
    var nomeArquivo = foto.split("\\")[2];
    return this.http.post<any>(env.baseUrl + this.path, {
      fabricante: fabricante,
      modelo: modelo,
      anomodelo: anomodelo,
      valor: valor,
      km: km,
      foto: nomeArquivo
    },this.loginService.headers()).pipe(
      catchError((x)=>{
        return of(x) 
      }),
    );
  }
}
