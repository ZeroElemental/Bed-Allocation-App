import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetWardSelector } from './target-ward-selector';

describe('TargetWardSelector', () => {
  let component: TargetWardSelector;
  let fixture: ComponentFixture<TargetWardSelector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TargetWardSelector]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TargetWardSelector);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
