import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  father: FormGroup

  constructor(private fb:FormBuilder, private loginService: LoginService, private router:Router) {
    this.father = this.fb.group({
      email:['', Validators.required],
      senha:['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  login(){
    this.loginService.login(this.father.get(['email'])?.value, this.father.get(['senha'])?.value)
    .subscribe(res => {
      console.log(res)
      if(res){
        alert('Usuário não encontrado!')
      }else{
        localStorage.setItem('token', res.token);
        this.router.navigate(['/anuncio']);
      }
    });
    
  }
}
