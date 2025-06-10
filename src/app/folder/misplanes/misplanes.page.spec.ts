import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisplanesPage } from './misplanes.page';

describe('MisplanesPage', () => {
  let component: MisplanesPage;
  let fixture: ComponentFixture<MisplanesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MisplanesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
