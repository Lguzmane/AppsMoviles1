import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InteresesPage } from './intereses.page';

describe('InteresesPage', () => {
  let component: InteresesPage;
  let fixture: ComponentFixture<InteresesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InteresesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
