import { TestBed } from '@angular/core/testing';

import { ListagemAnuncioService } from './listagem-anuncio.service';

describe('ListagemAnuncioService', () => {
  let service: ListagemAnuncioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListagemAnuncioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
