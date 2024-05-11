import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Folder2Page } from './folder2.page';

describe('Folder2Page', () => {
  let component: Folder2Page;
  let fixture: ComponentFixture<Folder2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Folder2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
