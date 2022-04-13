import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeGuaranteeComponent } from './we-guarantee.component';

describe('WeGuaranteeComponent', () => {
  let component: WeGuaranteeComponent;
  let fixture: ComponentFixture<WeGuaranteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeGuaranteeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeGuaranteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
