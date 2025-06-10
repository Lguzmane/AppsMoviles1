import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagedataPage } from './pagedata.page';

describe('PagedataPage', () => {
  let component: PagedataPage;
  let fixture: ComponentFixture<PagedataPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PagedataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
