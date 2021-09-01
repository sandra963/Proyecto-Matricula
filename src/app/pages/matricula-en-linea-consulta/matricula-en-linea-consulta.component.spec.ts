import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculaEnLineaConsultaComponent } from './matricula-en-linea-consulta.component';

describe('MatriculaEnLineaConsultaComponent', () => {
  let component: MatriculaEnLineaConsultaComponent;
  let fixture: ComponentFixture<MatriculaEnLineaConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatriculaEnLineaConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatriculaEnLineaConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
