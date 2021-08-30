import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculaEnLineaConfirmacionComponent } from './matricula-en-linea-confirmacion.component';

describe('MatriculaEnLineaConfirmacionComponent', () => {
  let component: MatriculaEnLineaConfirmacionComponent;
  let fixture: ComponentFixture<MatriculaEnLineaConfirmacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatriculaEnLineaConfirmacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatriculaEnLineaConfirmacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
