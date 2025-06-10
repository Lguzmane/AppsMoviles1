import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GrupodetallePage } from './grupodetalle.page';

describe('GrupodetallePage', () => {
  let component: GrupodetallePage;
  let fixture: ComponentFixture<GrupodetallePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupodetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
