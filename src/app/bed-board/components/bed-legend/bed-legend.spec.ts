import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BedLegend } from './bed-legend';

describe('BedLegend', () => {
  let component: BedLegend;
  let fixture: ComponentFixture<BedLegend>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BedLegend]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BedLegend);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
