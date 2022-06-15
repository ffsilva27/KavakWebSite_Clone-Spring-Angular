import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  trocarOpcaoMenu: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.trocarOpcao();
  }

  trocarOpcao(){
    var hasToken = localStorage.getItem('token');
    if(hasToken){
      this.trocarOpcaoMenu = !this.trocarOpcaoMenu;
    }
  }

  logout(){
    localStorage.removeItem('token');
    location.reload();
  }

}
