import { CadastroAnuncioService } from './cadastro-anuncio.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-anuncio',
  templateUrl: './cadastro-anuncio.component.html',
  styleUrls: ['./cadastro-anuncio.component.scss']
})
export class CadastroAnuncioComponent implements OnInit {
  father: FormGroup;
  caminhoSalvamentoArquivo:string = "C:\Users\Filip\AppData\Local\Temp\contato-disco\fotos";

  caminhoSalvarImagem: string = "http://localhost:4200/assets/img"
  
  constructor(private fb: FormBuilder, private http: HttpClient, private cadastroAnuncioService:CadastroAnuncioService) { 
    this.father = fb.group({
      fabricante:["", Validators.required],
      modelo:["", Validators.required],
      anomodelo: ["", Validators.required],
      valor: ["", Validators.required],
      km: ["", Validators.required],
      foto: [""]
    })

  }

  ngOnInit(): void {
  }

  uploadFoto(event:any){
    if (event.target.files && event.target.files[0]) {
      const foto = event.target.files[0];

      const formData = new FormData();
      formData.append('foto', foto);

      this.http.post('http://localhost:8080/anuncio/foto', formData)
        .subscribe(resposta => console.log('Upload ok.'));
    }
  }

  criar(){
    this.cadastroAnuncioService.cadastrarAnuncio(this.father.get(['fabricante'])?.value, this.father.get(['modelo'])?.value,this.father.get(['anomodelo'])?.value,this.father.get(['valor'])?.value,this.father.get(['km'])?.value,this.father.get(['foto'])?.value)
      .subscribe(res => {
        console.log(res);
      })
  }

}
