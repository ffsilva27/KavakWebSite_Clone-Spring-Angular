import { TestBed } from '@angular/core/testing';

import { CadastroAnuncioService } from './cadastro-anuncio.service';

describe('CadastroAnuncioService', () => {
  let service: CadastroAnuncioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroAnuncioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
