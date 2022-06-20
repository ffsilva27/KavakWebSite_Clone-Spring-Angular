import { anuncioInfo, ListagemAnuncioService } from './listagem-anuncio.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listagem-anuncio',
  templateUrl: './listagem-anuncio.component.html',
  styleUrls: ['./listagem-anuncio.component.scss']
})
export class ListagemAnuncioComponent implements OnInit {
  tamanhoLista: number = 0;

  constructor(private http: HttpClient, public listagemAnuncioService:ListagemAnuncioService) { }

  ngOnInit(): void {
    this.obterAnuncios();
  }

  obterAnuncios(){
    this.listagemAnuncioService.obterListagem().subscribe(res => {
      this.listagemAnuncioService.anuncioList = res.content;
      this.tamanhoLista = res.totalPages;
      this.listagemAnuncioService.primeiraPagina = res.first;
      this.listagemAnuncioService.ultimaPagina= res.last;
    })
  }

  obterAnunciosPaginado(){
    this.listagemAnuncioService.obterListagemPaginada(this.listagemAnuncioService.paginaAtual).subscribe(res=>{
      this.listagemAnuncioService.anuncioList = res.content;
      this.tamanhoLista = res.totalPages;
      this.listagemAnuncioService.primeiraPagina = res.first;
      this.listagemAnuncioService.ultimaPagina = res.last;
    })
  }

  alterarPagina(event:any){
    if(event.target.text == "Próximo"){
      this.listagemAnuncioService.paginaAtual++;
      this.obterAnunciosPaginado();
    }
    if(event.target.text == "Anterior"){
      this.listagemAnuncioService.paginaAtual--;
      this.obterAnunciosPaginado();
    }
    
  }

}
