import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingWealthComponent } from './creating-wealth.component';

describe('CreatingWealthComponent', () => {
  let component: CreatingWealthComponent;
  let fixture: ComponentFixture<CreatingWealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatingWealthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatingWealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
