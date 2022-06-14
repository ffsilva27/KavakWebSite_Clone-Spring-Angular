import { anuncioInfo } from './../listagem-anuncio/listagem-anuncio.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CadastroAnuncioService {

  path: string = "anuncio";

  constructor(private http: HttpClient) { }

  cadastrarAnuncio(fabricante:string, modelo: string, anomodelo:string, valor: number, km:string, foto:string){
    console.log(foto);
    var nomeArquivo = foto.split("\\")[2];
    console.log(nomeArquivo);
    return this.http.post<anuncioInfo>(env.baseUrl + this.path, {
      fabricante: fabricante,
      modelo: modelo,
      anomodelo: anomodelo,
      valor: valor,
      km: km,
      foto: nomeArquivo
    });
  }
}
