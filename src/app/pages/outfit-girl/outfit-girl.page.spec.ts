import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OutfitGirlPage } from './outfit-girl.page';

describe('OutfitGirlPage', () => {
  let component: OutfitGirlPage;
  let fixture: ComponentFixture<OutfitGirlPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OutfitGirlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
