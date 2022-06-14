import { ListagemAnuncioService } from './../listagem-anuncio/listagem-anuncio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  
  showModal:boolean = true;

  constructor(public listagemAnuncio: ListagemAnuncioService) { }

  ngOnInit(): void {
  }

  show(){
    this.showModal = !this.showModal;
    console.log(this.showModal)
  }

}
