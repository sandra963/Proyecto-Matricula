import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculaEnLineaComponent } from './matricula-en-linea.component';

describe('MatriculaEnLineaComponent', () => {
  let component: MatriculaEnLineaComponent;
  let fixture: ComponentFixture<MatriculaEnLineaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatriculaEnLineaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatriculaEnLineaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
