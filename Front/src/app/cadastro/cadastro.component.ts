import { CadastroService } from './cadastro.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  father: FormGroup;

  constructor(private fb:FormBuilder, private cadastroService: CadastroService) {
    this.father = fb.group({
      nome: ["", Validators.required],
      email: ["", Validators.required],
      senha: ["", Validators.required]
    })
   }

  ngOnInit(): void {
  }

  cadastrar(){
    this.cadastroService.cadastrarUsuario(this.father.get(['nome'])?.value, this.father.get(['email'])?.value, this.father.get(['senha'])?.value)
    .subscribe(res => {
      alert(res.msg);
    })
  }

}
