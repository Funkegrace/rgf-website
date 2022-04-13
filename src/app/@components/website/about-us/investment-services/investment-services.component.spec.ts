import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentServicesComponent } from './investment-services.component';

describe('InvestmentServicesComponent', () => {
  let component: InvestmentServicesComponent;
  let fixture: ComponentFixture<InvestmentServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
