import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OutfitBoyPage } from './outfit-boy.page';

describe('OutfitBoyPage', () => {
  let component: OutfitBoyPage;
  let fixture: ComponentFixture<OutfitBoyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OutfitBoyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
