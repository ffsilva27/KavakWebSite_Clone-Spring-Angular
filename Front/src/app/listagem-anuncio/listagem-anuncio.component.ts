import { anuncioInfo, ListagemAnuncioService } from './listagem-anuncio.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listagem-anuncio',
  templateUrl: './listagem-anuncio.component.html',
  styleUrls: ['./listagem-anuncio.component.scss']
})
export class ListagemAnuncioComponent implements OnInit {

  constructor(private http: HttpClient, public listagemAnuncioService:ListagemAnuncioService) { }

  ngOnInit(): void {
    this.obterAnuncios();
  }

  obterAnuncios(){
    this.listagemAnuncioService.obterListagem().subscribe(res => {
      this.listagemAnuncioService.anuncioList = res.content;
    })
  }

}
