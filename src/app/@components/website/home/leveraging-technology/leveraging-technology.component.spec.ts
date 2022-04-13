import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeveragingTechnologyComponent } from './leveraging-technology.component';

describe('LeveragingTechnologyComponent', () => {
  let component: LeveragingTechnologyComponent;
  let fixture: ComponentFixture<LeveragingTechnologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeveragingTechnologyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeveragingTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
