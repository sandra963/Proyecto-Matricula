import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculaSolicitudesComponent } from './matricula-solicitudes.component';

describe('MatriculaSolicitudesComponent', () => {
  let component: MatriculaSolicitudesComponent;
  let fixture: ComponentFixture<MatriculaSolicitudesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatriculaSolicitudesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatriculaSolicitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
