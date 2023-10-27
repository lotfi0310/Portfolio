import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotfiPortfoliomoduleComponent } from './lotfi-portfoliomodule.component';

describe('LotfiPortfoliomoduleComponent', () => {
  let component: LotfiPortfoliomoduleComponent;
  let fixture: ComponentFixture<LotfiPortfoliomoduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LotfiPortfoliomoduleComponent]
    });
    fixture = TestBed.createComponent(LotfiPortfoliomoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
