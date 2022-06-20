import { ListagemAnuncioComponent } from './../listagem-anuncio/listagem-anuncio.component';
import { ListagemAnuncioService } from '../listagem-anuncio/listagem-anuncio.service'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  pesquisado: boolean = false;
  valorPesquisado: string = '';

  constructor(public listagemAnuncioService:ListagemAnuncioService) { }

  ngOnInit(): void {
  }

  search(event:any){
    this.listagemAnuncioService.obterListagemPorFabricante(event.target.value).subscribe(res => {
      if(res.content==''){
        alert("Não localizamos regitros para a busca informada.");
        event.target.value='';
        this.listagemAnuncioService.obterListagem().subscribe(res => {
          this.listagemAnuncioService.anuncioList = res.content;
          this.listagemAnuncioService.primeiraPagina = res.first;
          this.listagemAnuncioService.ultimaPagina = res.last;
        })
      }else{
        this.valorPesquisado = this.converte(event.target.value);
        this.pesquisado = true;
        event.target.value='';
        this.listagemAnuncioService.anuncioList = res.content;
        this.listagemAnuncioService.primeiraPagina = res.first;
        this.listagemAnuncioService.ultimaPagina = res.last;
      }
    })
  }

  converte(valor:string){
    return valor.charAt(0).toUpperCase() + valor.slice(1);
  }

  close(){
    this.valorPesquisado = '';
    this.pesquisado = false;
    this.listagemAnuncioService.obterListagem().subscribe(res => {
      this.listagemAnuncioService.anuncioList = res.content;
      this.listagemAnuncioService.primeiraPagina = res.first;
      this.listagemAnuncioService.ultimaPagina = res.last;
      this.listagemAnuncioService.paginaAtual = 0;
    })
  }

}
