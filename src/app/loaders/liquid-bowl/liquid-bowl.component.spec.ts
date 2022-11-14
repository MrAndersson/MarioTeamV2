import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidBowlComponent } from './liquid-bowl.component';

describe('LiquidBowlComponent', () => {
  let component: LiquidBowlComponent;
  let fixture: ComponentFixture<LiquidBowlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiquidBowlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquidBowlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
