import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OutfitWomenPage } from './outfit-women.page';

describe('OutfitWomenPage', () => {
  let component: OutfitWomenPage;
  let fixture: ComponentFixture<OutfitWomenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OutfitWomenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
