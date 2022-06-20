import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';

export interface anuncioInfo {
  fabricante: string,
  modelo: string,
  anomodelo: string,
  valor: number,
  km: string,
  foto: string
}

@Injectable({
  providedIn: 'root'
})
export class ListagemAnuncioService {

  private readonly PATH:string = "anuncio"
  primeiraPagina: boolean = true;
  ultimaPagina: boolean = true;
  paginaAtual:number = 0;

  constructor(private http:HttpClient) { }

  anuncio: anuncioInfo = {
    fabricante: "",
    modelo: "",
    anomodelo: "",
    valor:0,
    km:"",
    foto: ""
  }

  anuncioList: anuncioInfo[] = [{
    fabricante: "",
    modelo: "",
    anomodelo: "",
    valor:0,
    km:"",
    foto: ""
  }]

  obterListagem(): Observable<any> {
    return this.http.get(env.baseUrl + this.PATH);
  }

  obterListagemPorFabricante(fabricante: string): Observable<any> {
    return this.http.get(env.baseUrl + this.PATH + '?fabricante='+fabricante);
  }

  obterListagemPaginada(pagina:number): Observable<any> {
    return this.http.get(env.baseUrl + this.PATH + '?page='+pagina);
  }

}
