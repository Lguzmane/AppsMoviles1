import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearpanoramaPage } from './crearpanorama.page';

describe('CrearpanoramaPage', () => {
  let component: CrearpanoramaPage;
  let fixture: ComponentFixture<CrearpanoramaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearpanoramaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
