import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  father: FormGroup

  constructor(private fb:FormBuilder) {
    this.father = this.fb.group({
      email:['', Validators.required],
      senha:['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  login(){
    console.log(this.father.get(['email'])?.value, this.father.get(['senha'])?.value)
  }
}
