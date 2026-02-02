import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetBedSelector } from './target-bed-selector';

describe('TargetBedSelector', () => {
  let component: TargetBedSelector;
  let fixture: ComponentFixture<TargetBedSelector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TargetBedSelector]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TargetBedSelector);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
