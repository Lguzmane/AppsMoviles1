import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreargrupoPage } from './creargrupo.page';

describe('CreargrupoPage', () => {
  let component: CreargrupoPage;
  let fixture: ComponentFixture<CreargrupoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreargrupoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
