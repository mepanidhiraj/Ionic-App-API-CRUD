import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DelDataPage } from './del-data.page';

describe('DelDataPage', () => {
  let component: DelDataPage;
  let fixture: ComponentFixture<DelDataPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DelDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
