import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemAnuncioComponent } from './listagem-anuncio.component';

describe('ListagemAnuncioComponent', () => {
  let component: ListagemAnuncioComponent;
  let fixture: ComponentFixture<ListagemAnuncioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemAnuncioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemAnuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
